document.addEventListener('DOMContentLoaded', () => {
    // Skills data
    const skillsData = {
        cloud: [
            { name: 'Amazon Web Services', level: 95, icon: '<i class="fab fa-aws"></i>' },
            { name: 'Google Cloud Platform', level: 75, icon: '<i class="devicon-googlecloud-plain"></i>' },
            { name: 'Microsoft Azure', level: 75, icon: '<i class="devicon-azure-plain"></i>' },
            { name: 'Kubernetes', level: 75, icon: '<i class="devicon-kubernetes-plain"></i>' },
            { name: 'CI/CD Security', level: 80, icon: '<i class="devicon-githubactions-plain"></i>' }
        ],
        systems: [
            { name: 'GitHub Actions', level: 90, icon: '<i class="fab fa-github"></i>' },
            { name: 'Containerization', level: 90, icon: '<i class="fas fa-cubes"></i>' },
            { name: 'Architecture Design', level: 80, icon: '<i class="fas fa-server"></i>' },
            { name: 'IaC (primarily Terraform)', level: 90, icon: '<i class="devicon-terraform-plain"></i>' },
            { name: 'Server Administration', level: 80, icon: '<i class="devicon-putty-plain"></i>' },
            { name: 'Build Systems', level: 60, icon: '<i class="devicon-cmake-plain"></i>' }
        ],
        app: [
            { name: 'Web App Security', level: 85, icon: '<i class="devicon-safari-plain"></i>' },
            { name: 'OWASP Top 10', level: 85, icon: '<i class="devicon-ros-original"></i>' },
            { name: 'Mobile App Testing', level: 65, icon: '<i class="devicon-android-plain"></i>' },
            { name: '(M)ASVS', level: 70, icon: '<i class="fas fa-circle-check"></i>' },
            { name: 'AI & LLM Security', level: 70, icon: '<i class="fas fa-brain"></i>' }
        ],
        tools: [
            { name: 'Git', level: 80, icon: '<i class="fab fa-git-alt"></i>' },
            { name: 'Docker', level: 90, icon: '<i class="fab fa-docker"></i>' },
            { name: 'Linux', level: 95, icon: '<i class="fab fa-linux"></i>' },
            { name: 'Burpsuite', level: 85, icon: '<i class="fas fa-spider"></i>' },
            { name: 'Vim', level: 80, icon: '<i class="devicon-vim-plain"></i>' },
            { name: 'Nmap', level: 80, icon: '<i class="devicon-networkx-plain"></i>' },
            { name: 'Kali Linux', level: 90, icon: '<i class="fas fa-dragon"></i>' },
            // { name: 'Industry CSPM Tools', level: 70, icon: '<i class="fas fa-magnifying-glass-chart"></i>' },
            { name: 'Neo4j & Cypher', level: 70, icon: '<i class="fas fa-database"></i>' },
            { name: 'GDB', level: 55, icon: '<i class="fas fa-bug"></i>' }
        ],
        programming: [
            { name: 'Golang', level: 75, icon: '<i class="fab fa-golang"></i>' },
            { name: 'Bash', level: 85, icon: '<i class="devicon-bash-plain"></i>' },
            { name: 'Python', level: 75, icon: '<i class="fab fa-python"></i>' },
            { name: 'C/C++', level: 55, icon: '<i class="devicon-cplusplus-plain"></i>' },
            { name: 'Java', level: 55, icon: '<i class="devicon-java-plain"></i>' },
            { name: 'Assembly', level: 50, icon: '<i class="fas fa-microchip"></i>' }
        ]
    };

    // Experience data
    const experienceData = [
        {
            role: 'Lead Security Engineer',
            company: 'Praetorian Canada Inc.',
            period: 'Oct 2024 - Present',
            description: 'Lead cloud security assessments and building security tools',
            highlights: [
                '- Prepare methodologies for cloud security assessments',
                '- Develop automated security testing tools',
                '- Execute advanced cloud architecture assessments',
                '- Mentor junior engineers and conduct new hire interviews'
            ]
        },
        {
            role: 'Senior Security Engineer',
            company: 'Praetorian Security, Inc.',
            period: 'Oct 2022 - Oct 2024',
            description: 'Perform product and cloud security assessments',
            highlights: [
                '- Perform AWS security assessments',
                '- Conduct client architecture interviews and threat modeling',
                '- Develop automation scripts for security testing',
            ]
        },
        {
            role: 'Security Engineer',
            company: 'Praetorian Security, Inc.',
            period: 'Jul 2021 - Oct 2022',
            description: 'Perform product security assessments for clients',
            highlights: [
                '- Perform web application security assessments',
                '- Perform mobile application security assessments',
                '- Work in solo and teams of 2 for assessments'
            ]
        },
        {
            role: 'Graduate Teaching Assistant',
            company: 'Georgia Institute of Technology',
            period: 'Jan 2020 - May 2021',
            description: 'Teaching assistant for CS 6035/4235 (Intro to InfoSec)',
            highlights: [
                '- Supervise logistics and grading for the grad and UG course',
                '- Write & grade quizzes and assignments for 200+ students'
            ]
        },
        {
            role: 'Security Engineer Intern',
            company: 'Google LLC',
            period: 'May 2020 - Aug 2020',
            description: 'Implement improvements for open source fuzzing projects',
            highlights: [
                '- Write single source of truth for FuzzBench benchmarks',
                '- Integrate a fuzzer into FuzzBench'
            ]
        }
    ];

    // Projects data
    const projectsData = [
        {
            title: 'Containerized Security Toolkit',
            description: 'A containerized collection of security tools for security assessments',
            tags: ['Docker', 'GitHub Actions', 'Pentesting', 'Automation', 'Build Systems'],
            link: 'https://github.com/tanq16/containerized-security-toolkit',
            details: 'A multi-arch security toolkit with multi-staged Docker build pipelines for security operations & workflows.',
            icon: 'https://raw.githubusercontent.com/Tanq16/containerized-security-toolkit/main/docs/assets/CST-Logo.png'
        },
        {
            title: 'Danzo',
            description: 'Fast, advanced, multi-connection CLI downloads manager written in Go',
            tags: ['Go', 'CLI', 'Download Manager'],
            link: 'https://github.com/Tanq16/danzo',
            details: 'A multi-platform and multi-architecture Go CLI tool to download files with multiple connections, resume support, and a progress bar.',
            icon: 'https://raw.githubusercontent.com/Tanq16/danzo/main/.github/assets/logo.png'
        },
        {
            title: 'Expense Owl',
            description: 'Extremely simple expense tracker with nice UI intended for home lab use',
            tags: ['Go', 'Expense Tracker', 'Web Application'],
            link: 'https://github.com/Tanq16/ExpenseOwl',
            details: 'Expense tracking system with a modern UI and pie-chart visualization, built with Go and ChartJS and available as a container and a binary.',
            icon: 'https://raw.githubusercontent.com/Tanq16/ExpenseOwl/main/assets/logo.png'
        },
        {
            title: 'Local-Content-Share',
            description: 'Self-hosted app for sharing text snippets and files within a local network',
            tags: ['Go', 'Web Application', 'GitHub Actions'],
            link: 'https://github.com/Tanq16/local-content-share',
            details: 'A self-hosted Go application for sharing text and files in a network, with multi-platform & multi-arch builds, and a containerized version.',
            icon: 'https://raw.githubusercontent.com/Tanq16/local-content-share/refs/heads/main/assets/logo.png'
        },
        {
            title: 'AI Context',
            description: 'Generate AI-friendly context from code repos, webpages, or YouTube videos',
            tags: ['Go', 'CLI', 'AI', 'Automation'],
            link: 'https://github.com/Tanq16/ai-context',
            details: 'A CLI tool that produces context files from webpages, YouTube videos, and repositories, to make interactions with ChatGPT, Claude, etc. easy.',
            icon: 'https://raw.githubusercontent.com/Tanq16/ai-context/main/.github/assets/logo.png'
        },
        {
            title: 'BackHub',
            description: 'A simple backup tool to maintain local mirrors of GitHub repositories',
            tags: ['Go', 'Automation', 'CLI', 'Backup'],
            link: 'https://github.com/Tanq16/backhub',
            details: 'Local mirror backups of GitHub repositories with concurrency, scheduled backups (when self-hosted), multi-arch & multi-OS binaries, and a Docker image.',
            icon: 'https://raw.githubusercontent.com/Tanq16/backhub/main/.github/assets/logo.png'
        },
        {
            title: 'LinkSnapper',
            description: 'A simple self-hosted bookmark manager with nested categories',
            tags: ['Go', 'Bookmarks', 'Web Application'],
            link: 'https://github.com/Tanq16/linksnapper',
            details: 'A Go CLI and containerized bookmark management tool that supports nested categories in a beautiful UI. Also supports health checks and a fuzzy search.',
            icon: 'https://raw.githubusercontent.com/Tanq16/linksnapper/main/assets/logo.png'
        },
        {
            title: 'CLI Productivity Suite',
            description: 'CLI tools for enhancing workflow efficiency for Linux & MacOS',
            tags: ['Bash', 'CLI', 'Automation', 'Dotfiles'],
            link: 'https://github.com/Tanq16/cli-productivity-suite',
            details: 'A custom set of command-line tools and dotfiles management suite with multi-platform support to enhance workflow efficiency for CLI users.',
            icon: 'https://raw.githubusercontent.com/Tanq16/cli-productivity-suite/master/logo.png'
        },
        {
            title: 'Link Hub',
            description: 'Collection of resources and tools for security professionals',
            tags: ['Cybersecurity', 'Resources'],
            link: 'https://github.com/Tanq16/link-hub',
            details: 'A curated list of resources and tools across cloud security, application security, systems security, AI security, programming, and more.',
            icon: 'https://raw.githubusercontent.com/Tanq16/link-hub/main/.github/assets/logo.png'
        },
        {
            title: 'Nottif',
            description: 'CLI tool for sending custom notifications to Discord webhooks',
            tags: ['Go', 'CLI', 'Discord'],
            link: 'https://github.com/Tanq16/nottif',
            details: 'A Go CLI tool to send Discord markdown messages to one or more webhooks. Supports piped input and custom message formatting.',
            icon: 'https://raw.githubusercontent.com/Tanq16/nottif/main/.github/assets/logo.png'
        },
        {
            title: 'RAGaaS',
            description: 'Quick drop-in implementation of Retrieval-Augmented Generation',
            tags: ['Python', 'ML', 'RAG', 'Ollama', 'Qdrant'],
            link: 'https://github.com/Tanq16/RAGaaS',
            details: 'A dockerized implementation of RAG with Ollama and Qdrant for quick drop-in chats with your knowledgebase.',
            icon: 'https://raw.githubusercontent.com/Tanq16/RAGaaS/main/.github/assets/logo.png'
        },
        {
            title: 'SubDextract',
            description: 'Python CLI tool for automating subdomain enumeration',
            tags: ['Python', 'CLI', 'Automation'],
            link: 'https://github.com/Tanq16/Sub-Domain-Enumeration-SubDextract',
            details: 'Python CLI tool to enumerate subdomains using CT logs, VirusTotal, ThreatCrowd, search engine queries, SAN & DNS MX query, and breadth-first scraping with regex match.',
            icon: 'https://raw.githubusercontent.com/Tanq16/Sub-Domain-Enumeration-SubDextract/master/.github/assets/logo.png'
        }
    ];

    // Initialize Skills
    function initializeSkills() {
        const skillsContent = document.querySelector('.skills-content');
        const skillTabs = document.querySelectorAll('.skill-tab');

        function showSkills(category) {
            const skillsContent = document.querySelector('.skills-content');
            const skills = skillsData[category];
            
            skillsContent.innerHTML = skills.map(skill => `
                <div class="skill-item">
                    <div class="skill-header">
                        <div class="skill-name">
                            ${skill.icon}
                            <span>${skill.name}</span>
                        </div>
                        <span>${skill.level}%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" style="transform: scaleX(${skill.level / 100})"></div>
                    </div>
                </div>
            `).join('');
        }

        skillTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                skillTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                showSkills(tab.dataset.category);
            });
        });

        // Show initial category
        showSkills('cloud');
    }

    // Initialize Timeline
    function initializeTimeline() {
        const timeline = document.querySelector('.timeline');
        
        // Function to get appropriate icon for each company
        function getCompanyIcon(company) {
            const iconMap = {
                'Praetorian Security, Inc.': 'fa-solid fa-user-shield',
                'Praetorian Canada Inc.': 'fa-solid fa-user-shield',
                'Google LLC': 'fa-solid fa-baby-carriage',
                'Georgia Institute of Technology': 'fa-solid fa-user-graduate'
            };
            
            // Check if company name contains any of the keys
            for (const [key, icon] of Object.entries(iconMap)) {
                if (company.includes(key)) {
                    return icon;
                }
            }
            return 'fa-building'; // Default icon
        }
    
        timeline.innerHTML = experienceData.map(exp => `
            <div class="timeline-item">
                <div class="timeline-arrow"></div>
                <div class="timeline-content">
                    <div class="timeline-header">
                        <div class="timeline-icon">
                            <i class="${getCompanyIcon(exp.company)}" aria-hidden="true"></i>
                        </div>
                        <div class="timeline-title">
                            <h3>${exp.role}</h3>
                            <div class="timeline-period">
                                <i class="far fa-calendar-alt" aria-hidden="true"></i>
                                ${exp.period}
                            </div>
                            <h4>
                                <i class="far fa-building" aria-hidden="true"></i>
                                ${exp.company}
                            </h4>
                        </div>
                    </div>
                    <div class="timeline-description">
                        <p>${exp.description}</p>
                    </div>
                    <div class="timeline-highlights">
                        <ul>
                            ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `).join('');
    
        // Add click handlers for timeline items
        document.querySelectorAll('.timeline-item').forEach(item => {
            const arrow = item.querySelector('.timeline-arrow');
            const content = item.querySelector('.timeline-content');
    
            // Handle click on either arrow or content
            const toggleExpand = () => {
                arrow.classList.toggle('expanded');
                content.classList.toggle('expanded');
            };
    
            arrow.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleExpand();
            });
    
            content.addEventListener('click', () => {
                toggleExpand();
            });
        });
    }

    // Initialize Projects
    function initializeProjects() {
        initializeProjectsWithStars();
        return;
        const projectsGrid = document.querySelector('.projects-grid');
        projectsGrid.innerHTML = projectsData.map(project => `
            <div class="project-card" onclick="window.open('${project.link}', '_blank')">
                <div class="project-header">
                    <img src="${project.icon}" 
                         alt="${project.title} icon" 
                         class="project-icon">
                    <p class="project-title">${project.title}</p>
                </div>
                <p>${project.description}</p>
                <div class="project-details">
                    <p>${project.details}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `
                            <span class="project-tag">${tag}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Function to fetch GitHub stars for a repository
    async function fetchGitHubStars(repoUrl) {
        // Extract owner and repo from GitHub URL
        const urlParts = repoUrl.split('/');
        if (urlParts.length < 5 || !repoUrl.includes('github.com')) {
            return null; // Not a valid GitHub URL
        }
        
        const owner = urlParts[3];
        const repo = urlParts[4];
        
        try {
            const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
            if (response.ok) {
                const data = await response.json();
                return data.stargazers_count;
            } else {
                console.error(`Failed to fetch stars for ${owner}/${repo}`);
                return null;
            }
        } catch (error) {
            console.error('Error fetching GitHub stars:', error);
            return null;
        }
    }

    // Update the project card rendering to include stars (only visible on hover)
    function initializeProjectsWithStars() {
        const projectsGrid = document.querySelector('.projects-grid');
        
        // First, render the projects
        projectsGrid.innerHTML = projectsData.map(project => `
            <div class="project-card" data-repo-url="${project.link}" onclick="window.open('${project.link}', '_blank')">
                <div class="project-header">
                    <img src="${project.icon}" 
                        alt="${project.title} icon" 
                        class="project-icon">
                    <p class="project-title">${project.title}</p>
                </div>
                <p>${project.description}</p>
                <div class="project-details">
                    <div class="project-stars" id="stars-${project.title.replace(/\s+/g, '-').toLowerCase()}">
                        <i class="fas fa-star"></i> <span>...</span>
                    </div>
                    <p>${project.details}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `
                            <span class="project-tag">${tag}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `).join('');
        
        // Then fetch and update star counts
        document.querySelectorAll('.project-card').forEach(async (card) => {
            const repoUrl = card.dataset.repoUrl;
            if (!repoUrl) return;
            
            const starsCount = await fetchGitHubStars(repoUrl);
            const starsElement = card.querySelector('.project-stars span');
            
            if (starsCount !== null && starsElement) {
                starsElement.textContent = starsCount;
            } else if (starsElement) {
                // If we couldn't fetch stars, hide the stars element
                card.querySelector('.project-stars').style.display = 'none';
            }
        });
    }

    // Initialize all sections
    initializeSkills();
    initializeTimeline();
    initializeProjects();

    // Add intersection observer for animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe sections for scroll animations
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });
});
