const RESUME_DATA = {
    basics: {
        name: "TANISHQ RUPAAL",
        email: "<a href='mailto:trupaal+resume@gmail.com' target='_blank'>trupaal@gmail.com</a>",
        website: "<a href='https://tanishq.page' target='_blank'>tanishq.page</a>",
        // location: "Earth, Solar System, Milky Way Galaxy",
        // phone: "+1 (555) 555-5555",
        github: "<a href='https://github.com/Tanq16' target='_blank'>github.com/Tanq16</a>"
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
                    subtitle: "Lead Security Engineer",
                    date: "Oct 2024 - Present",
                    details: [
                        "Create assessment methodologies and tooling for cloud security service lines",
                        "Execute advanced cloud architecture security assessments",
                        "Mentor 2 junior engineers across product and cloud security verticals",
                        "Implement OIDC authentication and Access Broker for <a href='https://www.praetorian.com/chariot/' target='_blank'>Chariot</a>",
                        "Create cloud scanner modules and GCP IAM graph analysis module in <a href='https://github.com/praetorian-inc/nebula' target='_blank'>Nebula</a>",
                        "Build CI/CD for automated vulnerable cloud infrastructure deployment for tool development"
                    ]
                },
                {
                    title: "Praetorian Security, Inc.",
                    subtitle: "Senior Security Engineer",
                    date: "Oct 2022 - Oct 2024",
                    details: [
                        "Published a AWS security-focussed blog post on <a href='https://www.praetorian.com/blog/abac-in-lambda/' target='_blank'>ABAC in Lambda</a>",
                        "Lead client interviews to understand and document details of client systems",
                        "Improved quality of assessment reports for the cloud security service line"
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
                        "Eliminate differences between standard and <a href='https://github.com/google/oss-fuzz' target='_blank'>OSS-Fuzz</a> benchmark integration"
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
                "Specialist in cloud security and identity management for <b>AWS</b>, <b>GCP</b>, <b>Azure</b>, and <b>Kubernetes</b>",
                "Proficient in supply chain (CI/CD) security across GitHub, Azure DevOps, CircleCI",
                "Proficient in <b>Go</b>, <b>Bash</b>, and <b>Python</b>, with fundamentals of C, C++, java, and html/css/js/php",
                "Experienced with <b>BurpSuite</b>, <b>Neo4j</b>, <b>Sliver</b>, <b>Nmap</b>, <b>Wireshark</b>, and many security technologies",
                "Knowledgeable in Linux, Computer Networking, Docker and build systems like Make"
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
            id: "projects",
            title: "Projects",
            type: "detailed",
            icon: "git-graph",
            entries: [
                {
                    title: "Security Tooling",
                    details: [
                        "<b><a href='https://github.com/praetorian-inc/nebula' target='_blank'>Nebula</a></b> (contributor) - Multi-cloud security testing tool for AWS, GCP, Azure, and K8s with IAM graph analysis",
                        "<b><a href='https://github.com/tanq16/containerized-security-toolkit' target='_blank'>Containerized Security Toolkit</a></b> - Docker container with collection of security tools and workflow for security operations"
                    ]
                },
                {
                    title: "Personal Projects",
                    details: [
                        "<b><a href='https://github.com/Tanq16/ExpenseOwl' target='_blank'>Expense Owl</a></b> - Self-hosted expense tracking web app built with Go",
                        "<b><a href='https://github.com/Tanq16/local-content-share' target='_blank'>Local-Content-Share</a></b> - Self-hosted app for sharing text & files in LAN with integrated notepad",
                        "<b><a href='https://github.com/Tanq16/ai-context' target='_blank'>AI Context</a></b> - CLI tool to generate AI-friendly context from code repos and directories, webpages, or YouTube videos",
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
