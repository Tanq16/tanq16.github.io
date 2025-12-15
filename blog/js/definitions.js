const blogData = {
    config: {
        name: "Tanishq Rupaal",
        title: "Blog",
        portfolioLink: "/"
    },
    posts: [
        {
            id: "cloudfoxable",
            title: "Cloudfoxable",
            description: "Checkout the challenges over at GitHub.",
            date: "Jun 25, 2023",
            category: "Lab Practice Notes",
            location: "cloudfoxable",
            tags: ["aws", "lab", "cloudfoxable", "security"],
            image: "cloudfoxable-cover.jpeg"
        },
        {
            id: "pentester-academy-aws-iam",
            title: "Pentester Academy AWS IAM Attack Lab",
            description: "To get information about current caller &rarr;",
            date: "Apr 28, 2022",
            category: "Lab Practice Notes",
            location: "pentester-academy-aws-iam",
            tags: ["aws", "lab", "pentester-academy", "iam", "security"],
            image: "pentesteracademy-cover.jpeg"
        },
        {
            id: "flaws-2-attacker",
            title: "flAWS 2 - Attacker",
            description: "> The problem statement is to enter a correct pin code on a website that is 100 digits long.",
            date: "May 12, 2023",
            category: "Lab Practice Notes",
            location: "flaws-2-attacker",
            tags: ["aws", "lab", "flaws2", "security"],
            image: "flaws-cover.jpeg"
        },
        {
            id: "pentester-academy-aws-s3",
            title: "Pentester Academy AWS S3 Attack Lab",
            description: "1. List buckets and get region for bucket &rarr;",
            date: "Apr 28, 2022",
            category: "Lab Practice Notes",
            location: "pentester-academy-aws-s3",
            tags: ["aws", "lab", "pentester-academy", "s3", "security"],
            image: "pentesteracademy-cover.jpeg"
        },
        {
            id: "xss-attack-lab",
            title: "XSS Attack Lab - SeedLabs",
            description: "The tasks are based on a web application called ELGG which is open source. It is designed to be like an open source version of Facebook or myspace. Th...",
            date: "Jun 01, 2020",
            category: "Lab Practice Notes",
            location: "xss-attack-lab",
            tags: ["xss", "web-application", "lab", "seed-labs"],
            image: "seedlabs-cover.jpg"
        },
        {
            id: "github-fundamentals",
            title: "Fundamentals of GitHub",
            description: "!GitHub Fundamentals - Single Branch.png",
            date: "May 01, 2022",
            category: "Computers and Security",
            location: "github-fundamentals",
            tags: ["github", "open-source"],
            image: "github-cover.jpeg"
        },
        {
            id: "gha-docker-arch",
            title: "GitHub Actions & ARM Architecture",
            description: "> This blog post covers my troubleshooting efforts and research on how we can use GitHub workflows for various architectures. It focuses more on how t...",
            date: "Jun 06, 2024",
            category: "Computers and Security",
            location: "gha-docker-arch",
            tags: ["github-actions", "docker", "container", "cicd"],
            image: "ghaarch-cover.jpeg"
        },
        {
            id: "gha-notif",
            title: "Custom GitHub WebHook Notifications via GitHub Actions",
            description: "A class of notifications on GitHub repositories allows sending events via webhooks. A prevalent way people use this feature is by setting up a Slack o...",
            date: "Feb 16, 2025",
            category: "Computers and Security",
            location: "gha-notif",
            tags: ["github-actions", "custom-notifications", "notifications", "webhook", "cicd"],
            image: "ghanotif-cover.jpeg"
        },
        {
            id: "docker-for-security",
            title: "Streamlining Security-Related Workflows with Docker Containers",
            description: "I'm generally always looking for ways to improve my workflow and make my work as a cybersec professional more efficient. One of the tools that has had...",
            date: "Apr 29, 2023",
            category: "Computers and Security",
            location: "docker-for-security",
            tags: ["docker", "container", "productivity", "security"],
            image: "docker-cover.jpeg"
        },
        {
            id: "cst-guide",
            title: "Containerized Security Toolkit - A Guide",
            description: "> Since writing this blog, I've updated the project significantly with multiple image options. The bulk of the usage below remains relevant, but the i...",
            date: "Oct 26, 2024",
            category: "Computers and Security",
            location: "cst-guide",
            tags: ["security", "docker", "container", "toolkit", "workflow"],
            image: "cst-cover.jpg"
        },
        {
            id: "aws-saa-notes",
            title: "AWS Certified Solutions Architect - Associate Notes",
            description: "The sections here are based on the course by ACloudGuru, and the notes list the most important points I learned overall for the CSAA certification, as...",
            date: "Jul 24, 2022",
            category: "Cloud",
            location: "aws-saa-notes",
            tags: ["aws", "solutions-architect-associate", "course"],
            image: "template.jpeg"
        },
        {
            id: "howto-on-chatgpt",
            title: "Unleashing ChatGPT - A Guide for Professional Use",
            description: "OpenAI developed a state-of-the-art language model based on the GPT architecture that uses deep learning to generate human-like responses to natural l...",
            date: "May 01, 2023",
            category: "Computers and Security",
            location: "howto-on-chatgpt",
            tags: ["chatgpt", "programming", "productivity"],
            image: "gpt-cover.jpeg"
        },
        {
            id: "newbified-overhaul-cloud-storage",
            title: "Overhaul Personal Cloud Storage",
            description: "The following is a process of overhauling personal cloud storage to build an effective data hierarchy and build a collection which can be expanded upo...",
            date: "Sep 10, 2022",
            category: "Computers Newbified",
            location: "newbified-overhaul-cloud-storage",
            tags: ["productivity", "cloud-storage", "data-organization"],
            image: "cloudstorage-cover.jpeg"
        },
        {
            id: "newbified-markdown",
            title: "Markdown 101 - Master Your Note-Taking",
            description: "Are you tired of cumbersome note-taking tools that weigh you down with unnecessary features? Look no further than at the power of Markdown — a lightwe...",
            date: "May 13, 2023",
            category: "Computers Newbified",
            location: "newbified-markdown",
            tags: ["markdown", "note-taking", "productivity"],
            image: "markdown-cover.jpeg"
        },
        {
            id: "newbified-howto-reminders-todo",
            title: "How to Effectively Use Reminders and To-Dos",
            description: "I believe reminders started out as a cover term for ticks that can remind us about doing something, where the ticks could also be other humans. To-Dos...",
            date: "Nov 26, 2022",
            category: "Computers Newbified",
            location: "newbified-howto-reminders-todo",
            tags: ["reminders", "productivity", "to-dos"],
            image: "reminders-cover.jpeg"
        },
        {
            id: "newbified-digitization",
            title: "Document Digitization - The Paperless Revolution",
            description: "In today's world, physical documents have become very common, accumulating for various purposes. However, it is essential to recognize the advantages ...",
            date: "May 13, 2023",
            category: "Computers Newbified",
            location: "newbified-digitization",
            tags: ["data-digitization", "productivity"],
            image: "digitization-cover.jpeg"
        },
        {
            id: "oscp-pg-set6",
            title: "OffSec PG - Potato, PyExp, Sar, Seppukku",
            description: "Machine IP &rarr; 192.168.53.101",
            date: "Dec 19, 2021",
            category: "Lab Practice Notes",
            location: "oscp-pg-set6",
            tags: ["oscp", "lab", "offsec-proving-grounds"],
            image: "pg-cover.jpeg"
        },
        {
            id: "oscp-pg-set7",
            title: "OffSec PG - Shakabrah, Solistice, Sumo, Sunset Noontide",
            description: "Machine IP &rarr; 192.168.80.86",
            date: "Dec 19, 2021",
            category: "Lab Practice Notes",
            location: "oscp-pg-set7",
            tags: ["oscp", "lab", "offsec-proving-grounds"],
            image: "pg-cover.jpeg"
        },
        {
            id: "oscp-pg-set5",
            title: "OffSec PG - NoName, SoSimple, OnSystemShellDread, Photographer",
            description: "Machine IP &rarr; 192.168.225.15",
            date: "Dec 19, 2021",
            category: "Lab Practice Notes",
            location: "oscp-pg-set5",
            tags: ["oscp", "lab", "offsec-proving-grounds"],
            image: "pg-cover.jpeg"
        },
        {
            id: "oscp-pg-set3",
            title: "OffSec PG - Gaara, Geisha, Ha-Natraj, Inclusiveness",
            description: "Machine IP &rarr; 192.168.208.142",
            date: "Dec 19, 2021",
            category: "Lab Practice Notes",
            location: "oscp-pg-set3",
            tags: ["oscp", "lab", "offsec-proving-grounds"],
            image: "pg-cover.jpeg"
        },
        {
            id: "dbz-cell-timeline",
            title: "Dragon Ball Z - Cell Saga Timeline 101",
            description: "Time travel has always been a fascination of the entertainment industry and Anime is no exception. Complicated timelines and going back in time to cha...",
            date: "Jan 13, 2024",
            category: "Just Fun Things",
            location: "dbz-cell-timeline",
            tags: ["anime", "dragon-ball"],
            image: "cell-cover.jpeg"
        },
        {
            id: "homelab-discord-reddit",
            title: "Discord & Reddit News Feed in Home Lab",
            description: "This post details how Discord webhooks and Reddit API can be used in tandom with a cron job to post news feeds to a Discord channel. The news feeds are collected from the r/technews subreddit...",
            date: "Feb 18, 2022",
            category: "Home Server",
            location: "homelab-discord-reddit",
            tags: ["discord", "reddit", "news-feed", "home-lab"],
            image: "homelab-cover.jpeg"
        },
        {
            id: "homelab-memos",
            title: "Memos Notes in Home Lab",
            description: "Memos is a note-taking application aimed at simplified note-taking with nothing but memos! The intent is - we store ideas quickly and forget, relying ...",
            date: "May 24, 2023",
            category: "Home Server",
            location: "homelab-memos",
            tags: ["memos", "home-lab"],
            image: "homelab-cover.jpeg"
        },
        {
            id: "homelab-adguard",
            title: "AdGuard in Home Lab",
            description: "AdGuard Home is a network-wide DNS sink hole, like PiHole. Like most services, this can be deployed as a container, which is the easiest way to set it...",
            date: "May 07, 2023",
            category: "Home Server",
            location: "homelab-adguard",
            tags: ["adguard", "home-lab"],
            image: "homelab-cover.jpeg"
        },
        {
            id: "homelab-container-mgmt",
            title: "Container Management in Home Lab - Portainer, Dockge & Yacht",
            description: "Home Labs come in different shapes and sizes. We could have a multi-node setup running Kubernetes and a couple of other servers running Proxmox with s...",
            date: "May 06, 2023",
            category: "Home Server",
            location: "homelab-container-mgmt",
            tags: ["portainer", "yacht", "home-lab"],
            image: "homelab-cover.jpeg"
        },
        {
            id: "homelab-jellyfin",
            title: "Jellyfin in Home Lab",
            description: "Jellyfin Container Installation",
            date: "May 06, 2023",
            category: "Home Server",
            location: "homelab-jellyfin",
            tags: ["jellyfin", "home-lab"],
            image: "homelab-cover.jpeg"
        },
        {
            id: "homelab-homepage",
            title: "Homepage Dashboard in Home Lab",
            description: "Homepage is a slick-looking dashboard that I use in my home lab. Out of at least 10 other dashboard applications I tried, Homepage is the only one tha...",
            date: "May 07, 2023",
            category: "Home Server",
            location: "homelab-homepage",
            tags: ["homepage", "home-lab"],
            image: "homelab-cover.jpeg"
        },
        {
            id: "homelab-npm",
            title: "Reverse Proxy in Home Lab",
            description: "A forward proxy sends a legitimate request made by a user to the origin of the service that the user requested. It also forwards back the response fro...",
            date: "Jan 29, 2025",
            category: "Home Server",
            location: "homelab-npm",
            tags: ["reverse-proxy", "nginx-proxy-manager", "cloudflare-tunnel", "home-lab"],
            image: "homelab-cover.jpeg"
        },
        {
            id: "homelab-tubearchivist",
            title: "Tube Archivist in Home Lab",
            description: "TubeArchivist is a YouTube media management platform that allows indexing, searching, and storing YouTube videos. It uses YT-DLP to download videos. I...",
            date: "May 24, 2023",
            category: "Home Server",
            location: "homelab-tubearchivist",
            tags: ["tubearchivist", "home-lab"],
            image: "homelab-cover.jpeg"
        },
        {
            id: "homelab-server-battery-level",
            title: "Battery Monitor via Discord WebHooks and Siri Shortcuts",
            description: "This post details how Siri shortcuts and discord webhooks can be used in tandom with a smart plug to turn a server charger on or off based on battery ...",
            date: "Feb 18, 2022",
            category: "Home Server",
            location: "homelab-server-battery-level",
            tags: ["home-lab", "webhooks", "discord", "siri-shortcuts", "battery-monitor"],
            image: "homelab-cover.jpeg"
        },
        {
            id: "homelab-leantime",
            title: "Leantime in Home Lab",
            description: "Leantime is an open-source project management solution that can be considered an alternative to Asana, Monday.com, or ClickUp. Leantime provides proje...",
            date: "Aug 10, 2024",
            category: "Home Server",
            location: "homelab-leantime",
            tags: ["time-tracking", "project-management", "leantime", "home-lab"],
            image: "homelab-cover.jpeg"
        },
        {
            id: "homelab-filebrowser",
            title: "FileBrowser in Home Lab",
            description: "FileBrowser is a file management service that can run within the local network through a browser. It can be thought of as a \"create your own cloud storage\" solution, with the cloud being the self-hosted home lab...",
            date: "May 14, 2023",
            category: "Home Server",
            location: "homelab-filebrowser",
            tags: ["filebrowser", "home-lab"],
            image: "homelab-cover.jpeg"
        }
    ]
};
