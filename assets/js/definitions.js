const SVG_ICONS = {
    protonSplit: "M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z",
    protonEnclosed: "M 5.1308594 8.0273438 C 4.0740398 7.9629954 3 8.773714 3 9.9414062 L 3 15.544922 L 3 35.275391 C 3 37.899239 5.1735938 40.033203 7.8105469 40.033203 L 40.189453 40.033203 C 42.826723 40.033203 45 37.898503 45 35.275391 L 45 9.9941406 C 45 8.4210183 43.051515 7.504901 41.826172 8.4824219 L 36 13.125 L 36 13.121094 L 25.732422 21.306641 L 25.71875 21.314453 C 24.682773 22.130982 23.210569 22.125791 22.181641 21.298828 L 6.1523438 8.4101562 L 6.140625 8.4023438 C 5.8323754 8.1674634 5.4831326 8.0487931 5.1308594 8.0273438 z M 5 10.050781 L 20.927734 22.857422 C 21.456264 23.282215 22.057937 23.564 22.683594 23.734375 L 21.015625 25.064453 C 19.987625 25.884453 18.49675 25.881594 17.46875 25.058594 L 5 15.064453 L 5 10.050781 z M 43 10.103516 L 43 35.275391 C 43 36.802278 41.760183 38.033203 40.189453 38.033203 L 36 38.033203 L 36 15.681641 L 43 10.103516 z"
};

const definitions = {
    config: {
        name: "Tanishq Rupaal",
        title: "Cybersecurity Practician",
        subtitle: "Staff Security Engineer at Praetorian",
        email: "info@tanishq.page",
        socials: [
            { icon: "svg:protonSplit", link: "mailto:info@tanishq.page", label: "Email" },
            { icon: "fa:fab fa-signal-messenger", link: "https://signal.me/#eu/J3IdvSunjBngoJVxlrguhMITLLCytkg7YpgVcWyKqriyI-pYjnhAB4oqrLCRLrN6", label: "Signal" },
            { icon: "fa:fab fa-telegram", link: "https://t.me/etheriosking", label: "Telegram" },
            { icon: "fa:fab fa-linkedin-in", link: "https://linkedin.com/in/tanishqrupaal", label: "LinkedIn" },
            { icon: "fa:fab fa-github-alt", link: "https://github.com/tanq16", label: "GitHub" }
        ],
        altSocials: [
            { icon: "svg:protonEnclosed", link: "mailto:dragonking47@proton.me", label: "Proton Mail" },
            { icon: "fa:fab fa-discord", link: "https://discord.com/users/548472313503285248", label: "Discord" },
            { icon: "fa:fab fa-whatsapp", link: "https://wa.me/etheriosking", label: "WhatsApp" },
            { icon: "fa:fab fa-x-twitter", link: "https://twitter.com/etheriosking", label: "X" },
            { icon: "fa:fab fa-instagram", link: "https://instagram.com/etheriosking", label: "Instagram" }
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
                            title: 'Trajan',
                            description: "CI/CD & software supply-chain security scanner.",
                            tags: ['Go', 'CI/CD Security', 'Supply Chain', 'Scanner'],
                            link: 'https://github.com/praetorian-inc/trajan',
                            image: '/assets/images/projects/trajan.webp'
                        },
                        {
                            title: 'Aurelian',
                            description: "Multi-cloud security recon framework for AWS, Azure & GCP.",
                            tags: ['Go', 'Cloud Security', 'Multi-Cloud', 'CLI'],
                            link: 'https://github.com/praetorian-inc/aurelian',
                            image: '/assets/images/projects/aurelian.webp'
                        }
                    ]
                },
                {
                    label: "Personal Projects",
                    variant: "logo",
                    items: [
                        {
                            title: 'ExpenseOwl',
                            description: 'Dead-simple, self-hosted expense tracker: a quick monthly view of spending, with none of the budgeting bloat.',
                            tags: ['Go', 'Self-Hosted', 'Finance', 'Web App'],
                            link: 'https://github.com/Tanq16/ExpenseOwl',
                            icon: '/assets/images/projects/logos/expenseowl.svg'
                        },
                        {
                            title: 'ClaudeX',
                            description: 'Companion CLI for running Claude Code across multiple accounts: track usage, launch the right one, move conversations.',
                            tags: ['Go', 'CLI', 'Claude Code', 'TUI'],
                            link: 'https://github.com/Tanq16/claudex',
                            icon: '/assets/images/projects/logos/claudex.svg'
                        },
                        {
                            title: 'Local-Content-Share',
                            description: 'Self-hosted LAN sharing for text snippets, files & links, with a Markdown notepad and no client setup.',
                            tags: ['Go', 'Web App', 'Self-Hosted', 'Sharing'],
                            link: 'https://github.com/Tanq16/local-content-share',
                            icon: '/assets/images/projects/logos/local-content-share.svg'
                        },
                        {
                            title: 'Anbu',
                            description: 'Swiss army knife CLI for devs & security: secrets, tunnels, secret scanning, HTTP server, bulk rename, and more.',
                            tags: ['Go', 'CLI', 'Security', 'Automation'],
                            link: 'https://github.com/Tanq16/anbu',
                            icon: '/assets/images/projects/logos/anbu.svg'
                        },
                        {
                            title: 'Rinnegan',
                            description: 'Minimal self-hosted personal web terminal: one password for a real browser shell, with port tunneling and host file transfer.',
                            tags: ['JavaScript', 'Web Terminal', 'Self-Hosted'],
                            link: 'https://github.com/Tanq16/rinnegan',
                            icon: '/assets/images/projects/logos/rinnegan.svg'
                        },
                        {
                            title: 'Danzo',
                            description: 'Multi-service CLI downloader: HTTP, HLS live streams, S3, GitHub releases, torrents, and yt-dlp.',
                            tags: ['Go', 'CLI', 'Downloader'],
                            link: 'https://github.com/Tanq16/danzo',
                            icon: '/assets/images/projects/logos/danzo.svg'
                        },
                        {
                            title: 'CLI Productivity Suite',
                            description: 'Single Go binary (cps) that sets up and manages a full CLI dev environment on Linux & macOS: shell, Neovim, tmux, and more.',
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
                            description: 'CLI for Box.com file operations: upload, download, sync, share, and collaborate from the terminal.',
                            tags: ['Go', 'CLI', 'Cloud Storage'],
                            link: 'https://github.com/Tanq16/box-cli',
                            icon: '/assets/images/projects/logos/box-cli.svg'
                        },
                        {
                            title: 'gcli',
                            description: 'Terminal client for Google Drive, Gmail & Calendar: manage files, threads, and events from the CLI.',
                            tags: ['Go', 'CLI', 'Google Workspace', 'TUI'],
                            link: 'https://github.com/Tanq16/gcli',
                            icon: '/assets/images/projects/logos/gcli.svg'
                        },
                        {
                            title: 'Raikiri',
                            description: 'Fast, self-hosted media & music server: a lightweight, Catppuccin-themed alternative to Jellyfin/Plex.',
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
