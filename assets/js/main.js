const utils = {
    resolveIcon: (iconString) => {
        if (!iconString) return '';
        const [type, ...rest] = iconString.split(':');
        const name = rest.join(':');

        if (type === 'fa') {
            return `<i class="${name}"></i>`;
        } else if (type === 'di') {
            const className = name.includes('-') ? `devicon-${name}` : `devicon-${name}-plain`;
            return `<i class="${className}"></i>`;
        } else if (type === 'lucide') {
            return `<i data-lucide="${name}"></i>`;
        } else if (iconString.startsWith('http')) {
            return `<img src="${iconString}" class="w-full h-full object-cover">`;
        }
        return '';
    },

    sendToDiscord: async (webhookUrl, email, message) => {
        try {
            const url = atob(webhookUrl);
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    content: `**New Contact Form Submission**\n**From:** ${email}\n\n${message}`
                })
            });
            return response.ok;
        } catch (e) {
            console.error(e);
            return false;
        }
    }
};

const app = document.getElementById('app');

function init() {
    app.innerHTML += elements.Header(definitions.config, definitions.sections);
    app.innerHTML += elements.Hero(definitions.config);
    definitions.sections.forEach(section => {
        switch(section.type) {
            case 'text': app.innerHTML += elements.TextSection(section); break;
            case 'timeline': app.innerHTML += elements.TimelineSection(section); break;
            case 'skills': app.innerHTML += elements.SkillsSection(section); break;
            case 'tiled': app.innerHTML += elements.TiledSection(section); break;
            case 'contact': app.innerHTML += elements.ContactSection(section); break;
        }
    });
    app.innerHTML += elements.Footer(definitions.config);
    initInteractions();
    lucide.createIcons();
    initObservers();
}

function initObservers() {
    // Fade in sections
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.observe(section);
    });

    // Nav Highlight
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('text-mauve');
                    link.classList.add('text-subtext0');
                    if (link.dataset.target === id) {
                        link.classList.remove('text-subtext0');
                        link.classList.add('text-mauve');
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('section[id]').forEach(section => {
        navObserver.observe(section);
    });
}

function initInteractions() {
    // Skills Tab
    document.querySelectorAll('.skill-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.skill-tab').forEach(t => {
                t.classList.remove('bg-surface0', 'text-mauve', 'font-bold', 'active-tab');
                t.classList.add('bg-surface0/50', 'text-subtext0');
            });
            tab.classList.remove('bg-surface0/50', 'text-subtext0');
            tab.classList.add('bg-surface0', 'text-mauve', 'font-bold', 'active-tab');

            const category = tab.dataset.tab;
            document.querySelectorAll('.skill-panel').forEach(p => p.classList.add('hidden'));
            document.getElementById(`skills-${category}`).classList.remove('hidden');
        });
    });

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            btn.disabled = true;
            btn.innerText = "Sending...";
            const formData = new FormData(contactForm);
            const email = formData.get('email');
            const message = formData.get('message');
            const sectionData = definitions.sections.find(s => s.type === 'contact');
            const success = await utils.sendToDiscord(sectionData.webhookUrl, email, message);
            if (success) {
                contactForm.style.display = 'none';
                document.getElementById('form-success').classList.remove('hidden');
            } else {
                btn.disabled = false;
                btn.innerText = originalText;
                alert('Error sending message. Please try again.');
            }
        });
    }
}

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Initialize on DOMContentLoaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
