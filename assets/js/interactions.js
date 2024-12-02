document.addEventListener('DOMContentLoaded', () => {
    // Skills data
    const skillsData = {
        cloud: [
            { name: 'Amazon Web Services (AWS)', level: 95 },
            { name: 'Google Cloud Platform (GCP)', level: 75 },
            { name: 'Microsoft Azure', level: 75 },
            { name: 'Kubernetes', level: 75 },
            { name: 'CI/CD Security', level: 80 }
        ],
        systems: [
            { name: 'GitHub Actions', level: 90 },
            { name: 'Containerization', level: 90 },
            { name: 'Systems Architecture', level: 80 },
            { name: 'IaC (primarily Terraform)', level: 90 },
            { name: 'Build Systems', level: 70 }
        ],
        app: [
            { name: 'Web App Security', level: 85 },
            { name: 'OWASP Top 10', level: 85 },
            { name: 'Mobile App Testing', level: 70 },
            { name: '(M)ASVS', level: 75 },
            { name: 'AI & LLM Security', level: 70 }
        ],
        tools: [
            { name: 'Git', level: 90 },
            { name: 'Docker', level: 90 },
            { name: 'Linux', level: 95 },
            { name: 'Industry CSPM Tools', level: 80 },
            { name: 'Burpsuite', level: 85 },
            { name: 'Nmap', level: 80 },
            { name: 'Kali Linux', level: 90 },
            { name: 'Neo4j & Cypher', level: 80 },
            { name: 'GDB', level: 60 }
        ],
        programming: [
            { name: 'Golang', level: 80 },
            { name: 'Bash', level: 85 },
            { name: 'Python', level: 80 },
            { name: 'C/C++', level: 60 },
            { name: 'Assembly', level: 60 }
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
        // Add more experiences as needed
    ];

    // Projects data
    const projectsData = [
        {
            title: 'Containerized Security Toolkit',
            description: 'A containerized collection of security tools for security assessments',
            tags: ['Docker', 'GitHub Actions', 'Pentesting', 'Automation', 'Build Systems'],
            link: 'https://github.com/tanq16/containerized-security-toolkit',
            details: 'A multi-arch containerized toolkit with multi-staged Docker build pipelines. Provides an advanced workflow for data persistence.'
        },
        {
            title: 'Link Hub',
            description: 'Collection of resources and tools for security professionals',
            tags: ['Cybersecurity', 'Resources'],
            link: 'https://github.com/Tanq16/link-hub',
            details: 'A curated list of resources and tools across cloud security, application security, systems security, AI security, programming, and more.'
        },
        {
            title: 'CLI Productivity Suite',
            description: 'CLI tools for enhancing workflow efficiency for Linux & MacOS',
            tags: ['Bash', 'CLI', 'Automation', 'Dotfiles'],
            link: 'https://github.com/Tanq16/cli-productivity-suite',
            details: 'A custom set of command-line tools and dotfiles management suite with multi-platform support to enhance workflow efficiency for CLI users.'
        },
        {
            title: 'BudgetLord - Expense Tracker',
            description: 'Simple Expense Tracker with REST API and tracking-based visualization',
            tags: ['Go', 'GitHub Actions', 'Application'],
            link: 'https://github.com/Tanq16/BudgetLord',
            details: 'Simple expense tracker built in Go with custom GitHub Actions for multi-platform and multi-architecture builds, including a containerized version.'
        },
        {
            title: 'Local-Content-Share',
            description: 'Web Application for sharing text and files within a local network',
            tags: ['Go', 'Web Application', 'GitHub Actions'],
            link: 'https://github.com/Tanq16/local-content-share',
            details: 'A Go application for sharing text and files within a local network, with GHA workflows for multi-platform and multi-arch builds, including a containerized version.'
        },
        {
            title: 'SubDextract - Subdomain Enumeration',
            description: 'Python CLI tool for automating subdomain enumeration',
            tags: ['Python', 'CLI', 'Automation'],
            link: 'https://github.com/Tanq16/Sub-Domain-Enumeration-SubDextract',
            details: 'Python CLI tool to enumerate subdomains using CT logs, VirusTotal, ThreatCrowd, search engine queries, SAN & DNS MX query, and breadth-first scraping with regex match.'
        }
    ];

    // Initialize Skills
    function initializeSkills() {
        const skillsContent = document.querySelector('.skills-content');
        const skillTabs = document.querySelectorAll('.skill-tab');

        function showSkills(category) {
            const skills = skillsData[category];
            skillsContent.innerHTML = skills.map(skill => `
                <div class="skill-item">
                    <div class="skill-header">
                        <span>${skill.name}</span>
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
        timeline.innerHTML = experienceData.map(exp => `
            <div class="timeline-item">
                <div class="timeline-arrow"></div>
                <div class="timeline-content">
                    <h3>${exp.role}</h3>
                    <div class="timeline-period">${exp.period}</div>
                    <h4>${exp.company}</h4>
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
        const projectsGrid = document.querySelector('.projects-grid');
        projectsGrid.innerHTML = projectsData.map(project => `
            <div class="project-card" onclick="window.open('${project.link}', '_blank')">
                <h3>${project.title}</h3>
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
