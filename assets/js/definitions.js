/* * --------------------------------------------------------------------------
 * DEFINITIONS.JS
 * All content and configuration goes here.
 * --------------------------------------------------------------------------
 */
const definitions = {
    config: {
        name: "Tanishq Rupaal",
        title: "Cybersecurity Practician",
        subtitle: "Lead Security Engineer at Praetorian",
        email: "dragonking47@proton.me",
        socials: [
            { icon: "fa:fas fa-envelope", link: "mailto:dragonking47@proton.me", label: "Email" },
            { icon: "fa:fab fa-telegram", link: "https://t.me/etheriosking", label: "Telegram" },
            { icon: "fa:fab fa-linkedin", link: "https://linkedin.com/in/tanishqrupaal", label: "LinkedIn" },
            { icon: "fa:fab fa-github", link: "https://github.com/tanq16", label: "GitHub" },
            { icon: "fa:fab fa-x-twitter", link: "https://twitter.com/etheriosking", label: "X" },
            { icon: "fa:fas fa-pen-nib", link: "https://tanishq.page/blog", label: "Blog" }
        ]
    },
    
    // Section Definitions
    sections: [
        {
            id: "about",
            type: "text", 
            title: "About",
            content: `<b><i>There is always a workaround</i></b> - that's an ideology I strongly believe in. It's a reminder that problems don't just have solutions, but smart solutions. I try to find such solutions through hacks for all puzzles in my life.<br><br>
            I currently work as a <b>Lead Security Engineer</b> at <b>Praetorian</b> and graduated with an <b>MS Cybersecurity</b> degree from <b>Georgia Tech</b>. My primary interests are Cloud Security, Application Security, and tinkering with Linux and containers in my homelab.`,
            actions: [
                { label: "Blog", link: "/blog", icon: "lucide:book-open" },
                { label: "Resume", link: "/assets/resume.pdf", icon: "lucide:file-text" }
            ]
        },
        {
            id: "experience",
            type: "timeline",
            title: "Experience",
            subtitle: "", 
            items: [
                {
                    title: "Lead Security Engineer",
                    subtitle: "Praetorian Canada Inc.",
                    date: "Oct 2024 - Present",
                    icon: "fa:fas fa-user-shield",
                    location: "Remote",
                    summary: "Lead cloud security assessments and building security tools"
                },
                {
                    title: "Senior Security Engineer",
                    subtitle: "Praetorian Security, Inc.",
                    date: "Oct 2022 - Oct 2024",
                    icon: "fa:fas fa-user-shield",
                    summary: "Perform product and cloud security assessments"
                },
                {
                    title: "Security Engineer",
                    subtitle: "Praetorian Security, Inc.",
                    date: "Jul 2021 - Oct 2022",
                    icon: "fa:fas fa-user-shield",
                    summary: "Perform product security assessments for clients"
                },
                {
                    title: "Graduate Teaching Assistant",
                    subtitle: "Georgia Institute of Technology",
                    date: "Jan 2020 - May 2021",
                    icon: "fa:fas fa-user-graduate",
                    summary: "Teaching assistant for CS 6035/4235 (Intro to InfoSec)"
                },
                {
                    title: "Security Engineer Intern",
                    subtitle: "Google LLC",
                    date: "May 2020 - Aug 2020",
                    icon: "fa:fas fa-baby-carriage", 
                    summary: "Implement improvements for open source fuzzing projects"
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
                        { name: 'Google Cloud Platform', level: 75, icon: 'di:googlecloud' },
                        { name: 'Microsoft Azure', level: 75, icon: 'di:azure' },
                        { name: 'Kubernetes', level: 75, icon: 'di:kubernetes' },
                        { name: 'CI/CD Security', level: 80, icon: 'di:githubactions' }
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
                        { name: 'Build Systems', level: 60, icon: 'di:cmake' }
                    ]
                },
                app: {
                    label: "App Security",
                    icon: "fa:fas fa-shield-alt",
                    items: [
                        { name: 'Web App Security', level: 85, icon: 'di:safari' },
                        { name: 'OWASP Top 10', level: 85, icon: 'di:ros' }, 
                        { name: 'Mobile App Testing', level: 65, icon: 'di:android' },
                        { name: '(M)ASVS', level: 70, icon: 'fa:fas fa-circle-check' },
                        { name: 'AI & LLM Security', level: 70, icon: 'fa:fas fa-brain' }
                    ]
                },
                tools: {
                    label: "Tools",
                    icon: "fa:fas fa-tools",
                    items: [
                        { name: 'Git', level: 80, icon: 'fa:fab fa-git-alt' },
                        { name: 'Docker', level: 90, icon: 'fa:fab fa-docker' },
                        { name: 'Linux', level: 95, icon: 'fa:fab fa-linux' },
                        { name: 'Burpsuite', level: 85, icon: 'fa:fas fa-spider' },
                        { name: 'Vim', level: 80, icon: 'di:vim' },
                        { name: 'Kali Linux', level: 90, icon: 'fa:fas fa-dragon' },
                        { name: 'Neo4j & Cypher', level: 70, icon: 'fa:fas fa-database' }
                    ]
                },
                programming: {
                    label: "Programming",
                    icon: "fa:fas fa-code",
                    items: [
                        { name: 'Golang', level: 75, icon: 'fa:fab fa-golang' },
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
            items: [
                {
                    title: 'Expense Owl',
                    description: 'Simple and beautiful, self-hosted expense tracking software.',
                    tags: ['Go', 'Expense Tracker', 'Web App'],
                    link: 'https://github.com/Tanq16/ExpenseOwl',
                    icon: 'https://raw.githubusercontent.com/Tanq16/ExpenseOwl/main/assets/logo.png'
                },
                {
                    title: 'Local-Content-Share',
                    description: 'Self-hosted app for sharing text & files in LAN, along with a notepad.',
                    tags: ['Go', 'Web App', 'Sharing'],
                    link: 'https://github.com/Tanq16/local-content-share',
                    icon: 'https://raw.githubusercontent.com/Tanq16/local-content-share/refs/heads/main/assets/logo.png'
                },
                {
                    title: 'Danzo',
                    description: 'Fast, advanced, multi-threaded CLI download manager written in Go.',
                    tags: ['Go', 'CLI', 'Downloader'],
                    link: 'https://github.com/Tanq16/danzo',
                    icon: 'https://raw.githubusercontent.com/Tanq16/danzo/main/.github/assets/logo.png'
                },
                {
                    title: 'Anbu',
                    description: 'A swiss army knife CLI tool for performing everyday tasks with ease.',
                    tags: ['Go', 'CLI', 'Automation'],
                    link: 'https://github.com/tanq16/anbu',
                    icon: 'https://raw.githubusercontent.com/Tanq16/anbu/main/.github/assets/logo.png'
                },
                {
                    title: 'AI Context',
                    description: 'Generate AI-friendly context from code repos, webpages, or YouTube videos',
                    tags: ['Go', 'CLI', 'AI'],
                    link: 'https://github.com/Tanq16/ai-context',
                    icon: 'https://raw.githubusercontent.com/Tanq16/ai-context/main/.github/assets/logo.png'
                },
                {
                    title: 'CST',
                    description: 'A containerized collection of security tools for security assessments',
                    tags: ['Docker', 'Pentesting', 'SecOps'],
                    link: 'https://github.com/tanq16/containerized-security-toolkit',
                    icon: 'https://raw.githubusercontent.com/Tanq16/containerized-security-toolkit/main/docs/assets/CST-Logo.png'
                },
                {
                    title: 'BackHub',
                    description: 'A simple backup tool to maintain local mirrors of GitHub repositories.',
                    tags: ['Go', 'Automation', 'Backup'],
                    link: 'https://github.com/Tanq16/backhub',
                    icon: 'https://raw.githubusercontent.com/Tanq16/backhub/main/.github/assets/logo.png'
                },
                {
                    title: 'LinkSnapper',
                    description: 'A simple self-hosted bookmark manager with nested categories.',
                    tags: ['Go', 'Bookmarks', 'Web App'],
                    link: 'https://github.com/Tanq16/linksnapper',
                    icon: 'https://raw.githubusercontent.com/Tanq16/linksnapper/main/assets/logo.png'
                },
                {
                    title: 'Kaname',
                    description: 'Elegant self-hosted web application for on-demand task execution.',
                    tags: ['Python', 'RAG', 'Ollama'],
                    link: 'https://github.com/Tanq16/kaname',
                    icon: 'https://raw.githubusercontent.com/Tanq16/kaname/main/.github/assets/logo.png'
                }
            ]
        },
        {
            id: "contact",
            type: "contact", 
            title: "Ping Me",
            content: "Send me an email for any questions, collabs, or an e-coffee!",
            // Encoded Discord webhook
            webhookUrl: "aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTQwMjAzMzkwNDQ1MzQyMzI1NC9nbGJ1VGRXZFVqT01OUWFWN0xPQmZPOEZkd3l4ZFl1N3drSHlZalIwYmN6NFBxTF9rRWM2TldmS3lrNXpIVU13VGgxbA==",
            form: {
                emailLabel: "Your Email",
                messageLabel: "Your Message",
                buttonText: "Send Message",
                successMessage: "Message sent! I'll get back to you soon."
            }
        }
    ]
};

