const RESUME_DATA = {
    basics: {
        name: "TANISHQ RUPAAL",
        email: "<a href='mailto:info@tanishq.page' target='_blank'>info@tanishq.page</a>",
        website: "<a href='https://tanishq.page' target='_blank'>tanishq.page</a>",
        github: "<a href='https://github.com/Tanq16' target='_blank'>github.com/Tanq16</a>",
        summary: ""
        // Cloud security and CI/CD specialist with 5+ years as an offensive-security practitioner across application, infrastructure, and platform security. Equally at home running assessments & building tooling and AI-driven automation that scale them.
    },
    sections: [
        {
            id: "experience",
            title: "Experience",
            type: "detailed",
            icon: "briefcase-business",
            entries: [
                {
                    title: "Praetorian Canada, Inc.",
                    subtitle: "Staff Security Engineer",
                    date: "Apr 2026 - Present",
                    details: [
                        "Built an agentic loop for autonomous cloud security hunting that cuts 3 weeks of manual assessment to ~16 hours, surfacing full attack chains",
                        "Co-authored <b><a href='https://github.com/praetorian-inc/trajan' target='_blank'>Trajan</a></b> (CI/CD graph, scan & attack tool) and <b><a href='https://github.com/praetorian-inc/aurelian' target='_blank'>Aurelian</a></b> (cloud recon framework)",
                        "Optimized <a href='https://github.com/praetorian-inc/trajan' target='_blank'>Trajan</a>'s GitHub collection past rate-limit bottlenecks for 40x throughput",
                        "Architected <b><a href='https://www.praetorian.com/guard/' target='_blank'>Praetorian Guard</a></b>'s isolated engineer-workspace system, connecting NATed workspaces over WebSocket tunnels via an ECS authorizer",
                        "Built internal tooling to automate security-assessment deliverables: report generation, executive-debrief slides, and letters of attestation",
                        "Performed advanced cloud security assessments, mentored junior engineers as cloudsec SME"
                    ]
                },
                {
                    title: "Praetorian Canada, Inc.",
                    subtitle: "Lead Security Engineer",
                    date: "Oct 2024 - Mar 2026",
                    details: [
                        "Created repeatable assessment methodologies and tooling for cloud security services",
                        "Delivered cloud-architecture security assessments across AWS, GCP, and Azure",
                        "Mentored 2 junior engineers across product and cloud security verticals",
                        "Architected the <b>Access Broker</b>, <a href='https://www.praetorian.com/guard/' target='_blank'>Praetorian Guard</a>'s central credential and lifecycle-management service, and implemented its OIDC authentication",
                        "Developed cloud scanner and GCP IAM graph-analysis modules in <b><a href='https://github.com/praetorian-inc/nebula' target='_blank'>Nebula</a></b>",
                        "Built Terraform-based CI/CD to auto-provision vulnerable cloud infra for tool dev"
                    ]
                },
                {
                    title: "Praetorian Security, Inc.",
                    subtitle: "Senior Security Engineer",
                    date: "Oct 2022 - Oct 2024",
                    details: [
                        "Published an AWS security blog post on <b><a href='https://www.praetorian.com/blog/abac-in-lambda/' target='_blank'>ABAC in Lambda</a></b>",
                        "Led client interviews to understand and document target systems",
                        "Improved assessment report quality for the cloud security service line"
                    ]
                },
                {
                    title: "Praetorian Security, Inc.",
                    subtitle: "Security Engineer",
                    date: "Jul 2021 - Oct 2022",
                    details: [
                        "Performed solo and paired client security assessments",
                        "Assessed security posture of mobile & web apps, cloud & network infrastructures"
                    ]
                },
                {
                    title: "Georgia Institute of Technology",
                    subtitle: "Graduate TA",
                    date: "Jan 2020 - May 2021",
                    details: [
                        "Supervised course logistics for CS 6035/4235 - Intro to InfoSec",
                        "Prepared and graded exams, assignments, and quizzes for 200+ students"
                    ]
                },
                {
                    title: "Google LLC",
                    subtitle: "Security Engineer Intern",
                    date: "May 2020 - Aug 2020",
                    details: [
                        "Improved <b><a href='https://github.com/google/fuzzbench' target='_blank'>Fuzzbench</a></b> to use a single source of truth for benchmark container builds",
                        "Eliminated differences between standard and <a href='https://github.com/google/oss-fuzz' target='_blank'>OSS-Fuzz</a> benchmark integration"
                    ]
                }
            ]
        },
        {
            id: "skills",
            title: "Core Skills",
            type: "basic",
            icon: "cpu",
            entries: [
                "<b>Cloud Security</b> (primary specialty): <b>AWS</b>, <b>GCP</b>, <b>Azure</b>, and <b>Kubernetes</b>",
                "<b>Supply Chain & CI/CD Security:</b> software composition analysis and secrets scanning across <b>GitHub Actions</b>, Azure DevOps, and CircleCI, with Infrastructure-as-Code security in <b>Terraform</b>",
                "<b>Offensive Security:</b> Pentesting, attack-path and privilege-escalation analysis, and threat modeling mapped to <b>MITRE ATT&CK</b> and <b>OWASP</b>",
                "<b>AI Security & Agentic Systems:</b> LLM application security, prompt injection and OWASP LLM Top 10, and building agentic AI workflows with multi-agent orchestration and MCP tool use",
                "<b>Languages & Tools:</b> <b>Go</b>, <b>Python</b>, <b>Bash</b> (and C/C++, Java, JavaScript) with <b>Burp Suite</b>, Ghidra, Neo4j, Sliver, Nmap, Wireshark, systemd, and <b>Docker</b>"
            ]
        },
        {
            id: "projects",
            title: "Projects",
            type: "detailed",
            icon: "git-graph",
            entries: [
                {
                    title: "Security Tooling",
                    details: [
                        "<b><a href='https://github.com/praetorian-inc/trajan' target='_blank'>Trajan</a></b> (co-author) - CI/CD security scanner with graph-based supply-chain detection",
                        "<b><a href='https://github.com/praetorian-inc/aurelian' target='_blank'>Aurelian</a></b> (co-author) - Cloud security recon framework for AWS, Azure, and GCP"
                    ]
                },
                {
                    title: "Personal Projects",
                    details: [
                        "<b><a href='https://github.com/Tanq16/claudex' target='_blank'>ClaudeX</a></b> - Companion CLI to run Claude Code across multiple accounts with usage monitoring",
                        "<b><a href='https://github.com/Tanq16/cli-productivity-suite' target='_blank'>CLI Productivity Suite</a></b> - Single Go binary to manage CLI environments on Linux and macOS",
                        "<b><a href='https://github.com/Tanq16/anbu' target='_blank'>Anbu</a></b> - Developer and security CLI for encryption, tunneling, secret scanning, and more",
                        "<b><a href='https://github.com/Tanq16/ExpenseOwl' target='_blank'>Expense Owl</a></b> - Self-hosted expense tracking web app built with Go",
                        "<b><a href='https://github.com/Tanq16/rinnegan' target='_blank'>Rinnegan</a></b> - Self-hosted personal web terminal with port tunneling and host file transfer",
                        "<b><a href='https://github.com/Tanq16/local-content-share' target='_blank'>Local-Content-Share</a></b> - Self-hosted app for sharing text & files in LAN with integrated notepad"
                    ]
                }
            ]
        },
        {
            id: "education",
            title: "Education",
            type: "detailed",
            icon: "graduation-cap",
            entries: [
                {
                    title: "Georgia Institute of Technology",
                    subtitle: "MS Cybersecurity (CGPA: 3.92)",
                    date: "Aug 2019 - May 2021",
                    details: []
                },
                {
                    title: "BITS Pilani",
                    subtitle: "BE (Hons.) Computer Science (CGPA: 9.51/10.0)",
                    date: "Aug 2015 - Jun 2019",
                    details: []
                }
            ]
        },
        {
            id: "hobbies",
            title: "Extra-Curricular and Hobbies",
            type: "basic",
            icon: "drum",
            entries: [
                "<b>Hack in The Box (HiTB)</b> Conference 2018, Dubai - Rank 1 in UAE under <b>PCS_RT</b> team",
                "<b>IEEE Xtreme 11.0</b> (2017) - Rank 1 in UAE, 415th globally",
                "Run a four-node mini-PC <b>home lab</b> (Proxmox, Docker) with self-hosted services and VPN access",
                "Drumming, Photography, and Digital Concept Art"
            ]
        }
    ]
};
