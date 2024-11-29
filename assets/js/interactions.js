document.addEventListener('DOMContentLoaded', () => {
    // Skills data
    const skillsData = {
        cloud: [
            { name: 'AWS Security', level: 90 },
            { name: 'Cloud Architecture', level: 85 },
            { name: 'IAM', level: 88 }
        ],
        web: [
            { name: 'Application Security', level: 92 },
            { name: 'Penetration Testing', level: 85 },
            { name: 'OWASP Top 10', level: 90 }
        ],
        tools: [
            { name: 'Python', level: 95 },
            { name: 'Docker', level: 88 },
            { name: 'Git', level: 90 }
        ]
    };

    // Experience data
    const experienceData = [
        {
            role: 'Lead Security Engineer',
            company: 'Praetorian',
            period: '2023 - Present',
            description: 'Leading security assessments and building security tools',
            highlights: [
                'Conducted AWS security assessments',
                'Developed automated security testing tools',
                'Led client security implementations'
            ]
        }
        // Add more experiences as needed
    ];

    // Projects data
    const projectsData = [
        {
            title: 'Containerized Security Toolkit',
            description: 'A comprehensive collection of security tools containerized for efficient deployment',
            tags: ['Docker', 'Python', 'Security'],
            link: 'https://github.com/tanq16/containerized-security-toolkit',
            details: 'Features modern analysis capabilities and integrates with CI/CD pipelines'
        },
        {
            title: 'Link Hub',
            description: 'Resource management system for organizing and accessing security-related information',
            tags: ['JavaScript', 'Organization', 'Tools'],
            link: 'https://github.com/Tanq16/link-hub',
            details: 'Streamlines access to security resources and documentation'
        },
        {
            title: 'CLI Productivity Suite',
            description: 'Command-line tools for enhancing security workflow efficiency',
            tags: ['Python', 'CLI', 'Automation'],
            link: 'https://github.com/Tanq16/cli-productivity-suite',
            details: 'Improves workflow efficiency with automated tools'
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
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <h3>${exp.role}</h3>
                    <div class="timeline-period">${exp.period}</div>
                    <h4>${exp.company}</h4>
                    <p>${exp.description}</p>
                    <div class="timeline-details" style="display: none;">
                        <ul>
                            ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `).join('');

        // Add click handlers for timeline dots
        document.querySelectorAll('.timeline-dot').forEach((dot, index) => {
            dot.addEventListener('click', () => {
                const details = document.querySelectorAll('.timeline-details')[index];
                details.style.display = details.style.display === 'none' ? 'block' : 'none';
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