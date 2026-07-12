If you spend any amount of time in Cloud Security and analysis, you'll realize that a large part of is wrestling with massive, deeply nested JSON blobs. 

Whether you are auditing an AWS environment for privilege escalation or debugging a Kubernetes manifest, your speed is limited by your ability to parse data. For a while now, my "holy trinity" for this has been `jq`, `gron`, and `ripgrep`.

## The Discovery Workflow: gron + grep

The biggest hurdle with cloud CLI output (especially `aws-cli`) is not knowing the exact path to a field. When you're looking for an "unknown thing" in a 5,000-line JSON response, `jq` can be frustrating because it requires you to know the structure beforehand.

This is where `gron` shines. It transforms JSON into discrete, flat assignments.

> [!TIP]
> **Workflow:** Dump the JSON &rarr; Pipe to `gron` &rarr; `grep` for the keyword &rarr; Use the path provided by `gron` to write your final `jq` filter.

```bash
# Finding where a specific VPC ID is mentioned in a massive describe-ec2 dump
aws ec2 describe-instances | gron | grep "vpc-0abc123"
```

Once you find the line, e.g. - `json.Reservations[4].Instances[0].VpcId = "vpc-0abc123";` - you have the exact path to plug into a script or a `jq` filter.

## The Surgeon's Scalpel: jq

While `gron` is for discovery, `jq` is for extraction and transformation. In security contexts, `jq` is indispensable for finding Privilege Escalation (PrivEsc) vectors.

### Practical Queries

One of the most valuable data sources for IAM security analysis is the output of `aws iam get-account-authorization-details` (GAAD). This single API call dumps the complete IAM configuration of an account - policies, roles, users, groups, and their relationships - into a single JSON blob. Save it like so &rarr;

```bash
aws iam get-account-authorization-details > account-gaad.json
```

> [!TIP]
> For multi-account environments, you can combine multiple GAAD outputs into a single file for cross-account analysis. The queries below reference `account-gaad.json` for single-account work and `combined-gaad.json` for combined outputs.

**1. Get the Default Version of a Policy**

IAM policies can have multiple versions, but only one is active at any given time. To pull the active version of a specific policy &rarr;

```bash
cat account-gaad.json | jq '.Policies[] | select(.PolicyName=="AdministratorAccess") | .PolicyVersionList[] | select(.IsDefaultVersion==true)'
```

This is useful for quickly inspecting the effective permissions of a policy without clicking through the console.

**2. Find Roles Trusting a Specific Account Root**

During cross-account trust analysis, it's critical to identify which roles trust the root principal of a given account &rarr;

```bash
cat combined-gaad.json | jq '.RoleDetailList[] | select(.AssumeRolePolicyDocument.Statement[].Principal=={"AWS":"arn:aws:iam::<account_number>:root"}) | .RoleName'
```

Replace `<account_number>` with the target AWS account ID.

**3. Find Roles Trusting Entities from a Specific Account**

A broader version of the above - this catches roles trusting *any* principal from a given account, not just the root &rarr;

```bash
cat combined-gaad.json | jq '.RoleDetailList[] | select(.AssumeRolePolicyDocument.Statement[].Principal.AWS != null)' | grep "AWS\": \"arn:aws:iam::<account_number>:"
```

This combines `jq` filtering with `grep` for a quick and flexible search across trust policies.

**4. Identify Roles with Instance Profiles**

Roles attached to instance profiles are significant because they represent credentials that EC2 instances can assume. This makes them a high-value target during privilege escalation &rarr;

```bash
cat account-gaad.json | jq '.RoleDetailList[] | select(.InstanceProfileList != [] and .InstanceProfileList != null) | .RoleName'
```

Any role returned here is directly attached to an EC2 instance profile, which means it could be assumed by any workload running on the associated instance. To also see which instance profiles map to which roles, the following gives a cleaner view &rarr;

```bash
cat account-gaad.json | jq '.RoleDetailList[] | select(.InstanceProfileList != [] and .InstanceProfileList != null) | {Role: .RoleName, Profiles: [.InstanceProfileList[].InstanceProfileName]}'
```

**5. Find Roles with Conditions in Trust Policies**

Roles with conditions in their assume role policy typically indicate third-party integrations (e.g., external SaaS vendors requiring an `ExternalId`) &rarr;

```bash
cat combined-gaad.json | jq '.RoleDetailList[] | select(.AssumeRolePolicyDocument.Statement[].Condition != null) | .RoleName'
```

This is useful for auditing the blast radius of third-party access into the account.

**6. Extract All Trusted Account Numbers**

To get a unique list of every AWS account that has any level of trust in the environment &rarr;

```bash
cat account-gaad.json | jq '.RoleDetailList[].AssumeRolePolicyDocument.Statement[].Principal' | sort -u | grep "arn:aws:iam::" | grep -oE "[0-9]{12}" | sort -u
```

This pipes `jq` output through `sort` and `grep` to isolate 12-digit account IDs, giving a quick inventory of all cross-account trust relationships.

## Data Exploration vs. Scripting

A common question is: "Why not just use Python?" While complex logic eventually makes its way into Python scripts, the CLI is king for the **exploration phase**.

Writing a Python script blindly can cause errors. A better path of implementation is &rarr;

1. **CLI Recon:** Use `gron` to map the unknown structure of the GAAD output.
2. **Refinement:** Use `jq` to verify the filtering logic interactively.
3. **Implementation:** Once you know the path, write your Python dictionary comprehension with full confidence.

> [!INFO]
> These tools are also life-savers for script debugging. Dump your script's raw JSON output to a file and run it through `gron` to spot where your dictionary structure is diverging from your expectations.

## Fin

Mastering `jq` and `gron` effectively turns your terminal into a powerful analysis engine for cloud infrastructure. A handful of well-crafted `jq` queries can give you a comprehensive view of an account's IAM posture in minutes, without ever opening the AWS console.
