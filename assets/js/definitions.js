const definitions = {
    config: {
        name: "Tanishq Rupaal",
        title: "Cybersecurity Practician",
        subtitle: "Staff Security Engineer at Praetorian",
        email: "dragonking47@proton.me",
        socials: [
            { icon: "fa:fas fa-inbox", link: "mailto:dragonking47@proton.me", label: "Email" },
            { icon: "fa:fab fa-telegram", link: "https://t.me/etheriosking", label: "Telegram" },
            { icon: "fa:fab fa-linkedin-in", link: "https://linkedin.com/in/tanishqrupaal", label: "LinkedIn" },
            { icon: "fa:fab fa-github-alt", link: "https://github.com/tanq16", label: "GitHub" },
            { icon: "fa:fab fa-x-twitter", link: "https://twitter.com/etheriosking", label: "X" }
        ],
        pageLinks: [
            { label: "Blog", link: "/blog" },
            { label: "Resume", link: "/resume" }
        ]
    },
    
    sections: [
        {
            id: "about",
            type: "text",
            title: "About",
            showInNav: false,
            content: `<b><i>There is always a workaround</i></b> - that's an ideology I strongly believe in. It's a reminder that problems don't just have solutions, but smart solutions. I try to find such solutions through hacks for all puzzles in my life.<br><br>
            I currently work as a <b>Staff Security Engineer</b> at <b>Praetorian</b> and graduated with an <b>MS Cybersecurity</b> degree from <b>Georgia Tech</b>. My primary interests are Cloud Security, Application Security, and tinkering with Linux and containers in my homelab.`,
            actions: [
                { label: "Blog", link: "/blog", icon: "lucide:notebook-pen" },
                { label: "Resume", link: "/resume", icon: "lucide:file-user" }
            ]
        },
        {
            id: "experience",
            type: "timeline",
            title: "Experience",
            subtitle: "", 
            items: [
                {
                    title: "Staff Security Engineer",
                    subtitle: "Praetorian Canada Inc.",
                    date: "Apr 2026 - Present",
                    icon: "fa:fas fa-user-shield",
                    location: "Remote",
                    summary: "Perform advanced security assessments and build autonomous AI security hunting methodologies and agentic workflows. Develop capabilities and tooling that feed into the <a href='https://www.praetorian.com/guard/' target='_blank'>Praetorian Guard</a> platform, and advise colleagues on cloud security and incorporating AI agents into their workflows."
                },
                {
                    title: "Lead Security Engineer",
                    subtitle: "Praetorian Canada Inc.",
                    date: "Oct 2024 - Mar 2026",
                    icon: "fa:fas fa-user-shield",
                    location: "Remote",
                    summary: "Create assessment methodologies and tooling for cloud security service lines. Execute advanced cloud architecture security assessments and mentor junior engineers across product and cloud security verticals."
                },
                {
                    title: "Senior Security Engineer",
                    subtitle: "Praetorian Security, Inc.",
                    date: "Oct 2022 - Oct 2024",
                    icon: "fa:fas fa-user-shield",
                    summary: "Lead client interviews to understand and document client systems, and improve the quality of assessment reports for the cloud security service line."
                },
                {
                    title: "Security Engineer",
                    subtitle: "Praetorian Security, Inc.",
                    date: "Jul 2021 - Oct 2022",
                    icon: "fa:fas fa-user-shield",
                    summary: "Performed solo and grouped security assessments for clients to assess the security posture of mobile & web apps, cloud & network infrastructures."
                },
                {
                    title: "Graduate Teaching Assistant",
                    subtitle: "Georgia Institute of Technology",
                    date: "Jan 2020 - May 2021",
                    icon: "fa:fas fa-user-graduate",
                    summary: "Supervised course logistics examinations, and assignments for CS 6035/4235 - Intro to InfoSec batch of 200+ students."
                },
                {
                    title: "Security Engineer Intern",
                    subtitle: "Google LLC",
                    date: "May 2020 - Aug 2020",
                    icon: "fa:fas fa-baby-carriage", 
                    summary: "Improved Fuzzbench to use single source of truth for benchmark container builds and eliminated differences between standard and OSS-Fuzz benchmark integration."
                }
            ]
        },
        {
            id: "skills",
            type: "skills",
            title: "Skills",
            categories: {
                cloud: {
                    label: "Cloud Security",
                    icon: "fa:fas fa-cloud",
                    items: [
                        { name: 'Amazon Web Services', level: 95, icon: 'fa:fab fa-aws' },
                        { name: 'Google Cloud Platform', level: 85, icon: 'di:googlecloud' },
                        { name: 'Microsoft Azure', level: 75, icon: 'di:azure' },
                        { name: 'Kubernetes', level: 75, icon: 'di:kubernetes' },
                        { name: 'CI/CD Security', level: 85, icon: 'di:githubactions' }
                    ]
                },
                systems: {
                    label: "Systems",
                    icon: "fa:fas fa-server",
                    items: [
                        { name: 'GitHub Actions', level: 90, icon: 'fa:fab fa-github' },
                        { name: 'Containerization', level: 90, icon: 'fa:fas fa-cubes' },
                        { name: 'Architecture Design', level: 80, icon: 'fa:fas fa-server' },
                        { name: 'IaC (Terraform)', level: 90, icon: 'di:terraform' },
                        { name: 'Server Admin', level: 80, icon: 'di:putty' },
                        { name: 'Build Systems', level: 65, icon: 'di:cmake' }
                    ]
                },
                app: {
                    label: "App Security",
                    icon: "fa:fas fa-shield-alt",
                    items: [
                        { name: 'Web App Security', level: 85, icon: 'di:safari' },
                        { name: 'OWASP Top 10', level: 85, icon: 'di:ros-original' }, 
                        { name: 'Mobile App Testing', level: 65, icon: 'di:android' },
                        { name: '(M)ASVS', level: 70, icon: 'fa:fas fa-circle-check' },
                        { name: 'AI & LLM Security', level: 80, icon: 'fa:fas fa-brain' }
                    ]
                },
                tools: {
                    label: "Tools",
                    icon: "fa:fas fa-tools",
                    items: [
                        { name: 'Git', level: 85, icon: 'fa:fab fa-git-alt' },
                        { name: 'Docker', level: 90, icon: 'fa:fab fa-docker' },
                        { name: 'Linux', level: 95, icon: 'fa:fab fa-linux' },
                        { name: 'Burpsuite', level: 85, icon: 'fa:fas fa-spider' },
                        { name: 'Vim', level: 80, icon: 'di:vim' },
                        { name: 'Kali Linux', level: 85, icon: 'fa:fas fa-dragon' },
                        { name: 'Neo4j & Cypher', level: 80, icon: 'fa:fas fa-database' }
                    ]
                },
                programming: {
                    label: "Programming",
                    icon: "fa:fas fa-code",
                    items: [
                        { name: 'Golang', level: 80, icon: 'fa:fab fa-golang' },
                        { name: 'Bash', level: 85, icon: 'di:bash' },
                        { name: 'Python', level: 75, icon: 'fa:fab fa-python' },
                        { name: 'C/C++', level: 55, icon: 'di:cplusplus' },
                        { name: 'Java', level: 55, icon: 'di:java' }
                    ]
                }
            }
        },
        {
            id: "projects",
            type: "tiled",
            title: "Projects",
            subtitle: "",
            groups: [
                {
                    label: "Professional Tools",
                    variant: "banner",
                    items: [
                        {
                            title: 'Aurelian',
                            description: "Multi-cloud security recon framework for AWS, Azure & GCP.",
                            tags: ['Go', 'Cloud Security', 'Multi-Cloud', 'CLI'],
                            link: 'https://github.com/praetorian-inc/aurelian',
                            image: '/assets/images/projects/aurelian.webp'
                        },
                        {
                            title: 'Trajan',
                            description: "CI/CD & software supply-chain security scanner.",
                            tags: ['Go', 'CI/CD Security', 'Supply Chain', 'Scanner'],
                            link: 'https://github.com/praetorian-inc/trajan',
                            image: '/assets/images/projects/trajan.webp'
                        }
                    ]
                },
                {
                    label: "Personal Projects",
                    variant: "logo",
                    items: [
                        {
                            title: 'ExpenseOwl',
                            description: 'Dead-simple, self-hosted expense tracker — a quick monthly view of spending, with none of the budgeting bloat.',
                            tags: ['Go', 'Self-Hosted', 'Finance', 'Web App'],
                            link: 'https://github.com/Tanq16/ExpenseOwl',
                            icon: '/assets/images/projects/logos/expenseowl.svg'
                        },
                        {
                            title: 'ClaudeX',
                            description: 'Companion CLI for running Claude Code across multiple accounts — track usage, launch the right one, move conversations.',
                            tags: ['Go', 'CLI', 'Claude Code', 'TUI'],
                            link: 'https://github.com/Tanq16/claudex',
                            icon: '/assets/images/projects/logos/claudex.svg'
                        },
                        {
                            title: 'Local-Content-Share',
                            description: 'Self-hosted LAN sharing for text snippets, files & links — with a Markdown notepad and no client setup.',
                            tags: ['Go', 'Web App', 'Self-Hosted', 'Sharing'],
                            link: 'https://github.com/Tanq16/local-content-share',
                            icon: '/assets/images/projects/logos/local-content-share.svg'
                        },
                        {
                            title: 'Anbu',
                            description: 'Swiss army knife CLI for devs & security — secrets, tunnels, secret scanning, HTTP server, bulk rename, and more.',
                            tags: ['Go', 'CLI', 'Security', 'Automation'],
                            link: 'https://github.com/Tanq16/anbu',
                            icon: '/assets/images/projects/logos/anbu.svg'
                        },
                        {
                            title: 'Rinnegan',
                            description: 'Minimal self-hosted shared web terminal — one server-owned shell PTY, many viewers, one live controller.',
                            tags: ['JavaScript', 'Web Terminal', 'Self-Hosted'],
                            link: 'https://github.com/Tanq16/rinnegan',
                            icon: '/assets/images/projects/logos/rinnegan.svg'
                        },
                        {
                            title: 'Danzo',
                            description: 'Multi-service CLI downloader — HTTP, HLS live streams, S3, GitHub releases, torrents, and yt-dlp.',
                            tags: ['Go', 'CLI', 'Downloader'],
                            link: 'https://github.com/Tanq16/danzo',
                            icon: '/assets/images/projects/logos/danzo.svg'
                        },
                        {
                            title: 'CLI Productivity Suite',
                            description: 'Single Go binary (cps) that sets up and manages a full CLI dev environment on Linux & macOS — shell, Neovim, tmux, and more.',
                            tags: ['Go', 'CLI', 'Dev Setup', 'Productivity'],
                            link: 'https://github.com/Tanq16/cli-productivity-suite',
                            icon: '/assets/images/projects/logos/cli-productivity-suite.svg'
                        },
                        {
                            title: 'Link Hub',
                            description: 'Curated index of Cybersecurity learning resources, labs & tools across cloud, web, and AI.',
                            tags: ['Cybersecurity', 'Resources', 'Reference'],
                            link: 'https://github.com/Tanq16/link-hub',
                            icon: '/assets/images/projects/logos/link-hub.svg'
                        },
                        {
                            title: 'Soifon',
                            description: 'Browser extension that auto-captures regex-matched values from request bodies, storage & cookies.',
                            tags: ['JavaScript', 'Browser Extension', 'Security'],
                            link: 'https://github.com/Tanq16/soifon',
                            icon: '/assets/images/projects/logos/soifon.svg'
                        },
                        {
                            title: 'box-cli',
                            description: 'CLI for Box.com file operations — upload, download, sync, share, and collaborate from the terminal.',
                            tags: ['Go', 'CLI', 'Cloud Storage'],
                            link: 'https://github.com/Tanq16/box-cli',
                            icon: '/assets/images/projects/logos/box-cli.svg'
                        },
                        {
                            title: 'gcli',
                            description: 'Terminal client for Google Drive, Gmail & Calendar — manage files, threads, and events from the CLI.',
                            tags: ['Go', 'CLI', 'Google Workspace', 'TUI'],
                            link: 'https://github.com/Tanq16/gcli',
                            icon: '/assets/images/projects/logos/gcli.svg'
                        },
                        {
                            title: 'Raikiri',
                            description: 'Fast, self-hosted media & music server — a lightweight, Catppuccin-themed alternative to Jellyfin/Plex.',
                            tags: ['Self-Hosted', 'Media Server', 'Music'],
                            link: 'https://github.com/Tanq16/raikiri',
                            icon: '/assets/images/projects/logos/raikiri.svg'
                        }
                    ]
                }
            ]
        },
        {
            id: "contact",
            type: "contact", 
            title: "Ping Me",
            content: "Send me an email for any questions, collabs, or an e-coffee!",
            webhookUrl: "aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTQwMjAzMzkwNDQ1MzQyMzI1NC9nbGJ1VGRXZFVqT01OUWFWN0xPQmZPOEZkd3l4ZFl1N3drSHlZalIwYmN6NFBxTF9rRWM2TldmS3lrNXpIVU13VGgxbA==",
            form: {
                emailLabel: "Your Email",
                messageLabel: "Your Message",
                buttonText: "Send Message",
                successMessage: "Message posted! I'll get back to you soon."
            }
        }
    ]
};
