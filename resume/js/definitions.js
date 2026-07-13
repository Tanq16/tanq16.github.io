const RESUME_DATA = {
    basics: {
        name: "TANISHQ RUPAAL",
        email: "<a href='mailto:trupaal+resume@gmail.com' target='_blank'>trupaal@gmail.com</a>",
        website: "<a href='https://tanishq.page' target='_blank'>tanishq.page</a>",
        github: "<a href='https://github.com/Tanq16' target='_blank'>github.com/Tanq16</a>",
        summary: "Staff Security Engineer specializing in cloud security and DevSecOps, with hands-on depth in AI-driven security automation and offensive tooling. Co-authored the CI/CD and multi-cloud scanners behind Praetorian's Guard platform and built an autonomous cloud-security hunting system that compresses weeks of manual assessment into hours."
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
                        "Built an LLM-driven agentic loop for continuous, autonomous cloud security hunting that replaces roughly three weeks of manual assessment with about 16 hours of automated execution, surfacing complex attack chains",
                        "Co-authored <a href='https://github.com/praetorian-inc/trajan' target='_blank'>Trajan</a> (CI/CD supply-chain scanner) and <a href='https://github.com/praetorian-inc/aurelian' target='_blank'>Aurelian</a> (multi-cloud recon framework) for the <a href='https://www.praetorian.com/guard/' target='_blank'>Praetorian Guard</a> platform, and optimized Trajan's API and data-collection strategy to overcome rate-limit bottlenecks for a 40x performance gain",
                        "Designed a lifecycle-managed, isolated engineer-workspace system for the Praetorian Guard platform, connecting to NATed workspaces over custom WebSocket tunnels via an ECS authorizer, with automatic ECS-based scaling",
                        "Built an internal tool that automates security-assessment deliverables, including report generation, executive-debrief slides, and letters of attestation",
                        "Perform security assessments, mentor a junior engineer, and serve as the company-wide advisor for cloud security and AI-agent integration questions"
                    ]
                },
                {
                    title: "Praetorian Canada, Inc.",
                    subtitle: "Lead Security Engineer",
                    date: "Oct 2024 - Mar 2026",
                    details: [
                        "Created repeatable assessment methodologies and tooling for the cloud security service lines",
                        "Delivered cloud-architecture security assessments across AWS, GCP, and Azure",
                        "Mentored 2 junior engineers across product and cloud security verticals",
                        "Architected the Access Broker, the platform's central credential and lifecycle-management service, and implemented OIDC authentication for the <a href='https://www.praetorian.com/guard/' target='_blank'>Praetorian Guard</a> platform",
                        "Developed cloud scanner modules and a GCP IAM graph-analysis module in <a href='https://github.com/praetorian-inc/nebula' target='_blank'>Nebula</a>",
                        "Built Terraform-based CI/CD to auto-provision intentionally vulnerable cloud infrastructure for tool development"
                    ]
                },
                {
                    title: "Praetorian Security, Inc.",
                    subtitle: "Senior Security Engineer",
                    date: "Oct 2022 - Oct 2024",
                    details: [
                        "Published an AWS security-focused blog post on <a href='https://www.praetorian.com/blog/abac-in-lambda/' target='_blank'>ABAC in Lambda</a>",
                        "Led client interviews to understand and document the details of client systems",
                        "Improved the quality of assessment reports for the cloud security service line"
                    ]
                },
                {
                    title: "Praetorian Security, Inc.",
                    subtitle: "Security Engineer",
                    date: "Jul 2021 - Oct 2022",
                    details: [
                        "Performed solo and grouped (team of 2) security assessments for clients",
                        "Assessed security posture of mobile & web apps, cloud & network infrastructures"
                    ]
                },
                {
                    title: "Georgia Institute of Technology",
                    subtitle: "Graduate TA",
                    date: "Jan 2020 - May 2021",
                    details: [
                        "Supervised course logistics for the course CS 6035/4235 - Intro to InfoSec",
                        "Prepared and graded examinations, assignments and quizzes for 200+ students"
                    ]
                },
                {
                    title: "Google LLC",
                    subtitle: "Security Engineer Intern",
                    date: "May 2020 - Aug 2020",
                    details: [
                        "Improved <a href='https://github.com/google/fuzzbench' target='_blank'>Fuzzbench</a> to use single source of truth for benchmark container builds",
                        "Eliminated differences between standard and <a href='https://github.com/google/oss-fuzz' target='_blank'>OSS-Fuzz</a> benchmark integration"
                    ]
                },
                {
                    title: "Paramount Computer Systems",
                    subtitle: "Cybersecurity Intern",
                    date: "Aug 2018 - Jan 2019",
                    details: [
                        "Developed an Automated Vulnerability Assessment Bot and a Secure File Server",
                        "Delivered presentations on Ransomware awareness to healthcare practitioners"
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
                "<b>Cloud Security & DevSecOps (primary specialty):</b> <b>AWS</b>, <b>GCP</b>, <b>Azure</b>, and <b>Kubernetes</b> (EKS/GKE/AKS), with IAM/RBAC, OIDC/SSO, and least-privilege design",
                "<b>Supply Chain & CI/CD Security:</b> software composition analysis and secrets scanning across <b>GitHub Actions</b>, Azure DevOps, and CircleCI, with Infrastructure-as-Code security in <b>Terraform</b>",
                "<b>Offensive Security:</b> Penetration testing and red-team operations, attack-path and privilege-escalation analysis, and threat modeling mapped to <b>MITRE ATT&CK</b> and <b>OWASP</b>",
                "<b>AI Security & Agentic Systems:</b> LLM application security, prompt injection and the OWASP LLM Top 10, and AI red teaming, plus building advanced agentic AI workflows with multi-agent orchestration and MCP-based tool use",
                "<b>Languages & Tools:</b> <b>Go</b>, <b>Python</b>, <b>Bash</b> (plus C/C++, Java, JavaScript) with Burp Suite, Neo4j, Sliver, Nmap, Wireshark, Linux, and Docker"
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
                        "<b><a href='https://github.com/praetorian-inc/trajan' target='_blank'>Trajan</a></b> (co-author) - CI/CD security scanner with a graph-based detection pipeline for software supply-chain security",
                        "<b><a href='https://github.com/praetorian-inc/aurelian' target='_blank'>Aurelian</a></b> (co-author) - Multi-cloud security recon framework for AWS, Azure, and GCP",
                        "<b><a href='https://github.com/tanq16/containerized-security-toolkit' target='_blank'>Containerized Security Toolkit</a></b> - Docker container with collection of security tools and workflow for security operations"
                    ]
                },
                {
                    title: "Personal Projects",
                    details: [
                        "<b><a href='https://github.com/Tanq16/claudex' target='_blank'>ClaudeX</a></b> - Companion CLI for running Claude Code across multiple accounts, with usage monitoring, guided launches, and moving conversations between accounts",
                        "<b><a href='https://github.com/Tanq16/cli-productivity-suite' target='_blank'>CLI Productivity Suite</a></b> - Single Go binary (cps) that provisions and manages a complete CLI dev environment on Linux and macOS, with modular extension packs for runtimes, cloud, and security tools",
                        "<b><a href='https://github.com/Tanq16/ExpenseOwl' target='_blank'>Expense Owl</a></b> - Self-hosted expense tracking web app built with Go",
                        "<b><a href='https://github.com/Tanq16/rinnegan' target='_blank'>Rinnegan</a></b> - Minimal self-hosted shared web terminal with a server-owned PTY, many viewers, and one live controller",
                        "<b><a href='https://github.com/Tanq16/local-content-share' target='_blank'>Local-Content-Share</a></b> - Self-hosted app for sharing text & files in LAN with integrated notepad",
                        "<b><a href='https://github.com/Tanq16/anbu' target='_blank'>Anbu</a></b> - Multi-purpose developer and security CLI for secrets and encryption, network tunneling, secret scanning, an HTTP server, batch file operations, and more",
                    ]
                },
                {
                    title: "Exploratory Projects",
                    details: [
                        "<b><a href='https://github.com/Tanq16/subdextract' target='_blank'>SubDextract</a></b> - Sub-domain enumeration tool in Python with CT logs, SAN, DNS queries",
                        "<b>Analysis of Top 1 Million Domains</b> from Majestic, Alexa, Tranco lists for HTTP/2.0, IPv6, TLS adoption"
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
            id: "accomplishments",
            title: "Accomplishments",
            type: "basic",
            icon: "medal",
            entries: [
                "<b>Dubai Police CTF Competition</b> - Top 15 (Feb 2019)",
                "<b>Hack in The Box (HiTB)</b> Conference 2018, Dubai - Rank 1 in UAE under <b>PCS_RT</b> team",
                "<b>IEEE Xtreme 11.0</b> - Rank 1 in UAE, 415th globally",
                "Participated in <b>Global OSINT Search Party CTF</b> by TraceLabs"
            ]
        },
        {
            id: "hobbies",
            title: "Extra-Curricular and Hobbies",
            type: "basic",
            icon: "drum", 
            entries: [
                "President & Founder of <b>ACM The Hacker's Exclusive (HEx)</b>, at BITS Pilani Dubai",
                "Managed student placements as <b>Student Executive, Careers Division</b> at BITS Pilani Dubai",
                "Tinkering with Linux systems, containers, and security tools in my home lab",
                "Drumming, Photography, and Digital Concept Art"
            ]
        }
    ]
};
