// Theme handling
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update logo image based on theme
    const logoImg = document.querySelector('.nav-logo img');
    if (logoImg) {
        logoImg.src = theme === 'dark' ? '/assets/images/logotdark.svg' : '/assets/images/logotlight.svg';
    }
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        themeIcon.className = theme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    updateThemeToggleIcon(newTheme);
}

function updateThemeToggleIcon(theme) {
    const moonPath = "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z";
    const sunPath = "M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42";
    
    const svgIcon = document.querySelector('.theme-toggle svg path');
    if (svgIcon) {
        svgIcon.setAttribute('d', theme === 'dark' ? sunPath : moonPath);
    }
}

// Scroll progress
function updateScrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.querySelector('.scroll-progress');
    progressBar.style.transform = `scaleX(${scrolled / 100})`;
}

// Page load animations
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    const savedTheme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);
    updateThemeToggleIcon(savedTheme);

    // Remove loading screen
    const loader = document.querySelector('.loading');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 500);
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('formSuccess');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = form.querySelector('button[type="submit"]');
            const formData = new FormData(form);
            const email = formData.get('email');
            const message = formData.get('message');
            const webhookUrl = 'https://discord.com/api/webhooks/1390401811252510782/T7A0oCQEAnFsHMky2y5mm12cp3HW_7NjxgLWk1bSb17WZ_9sdEL8T3h0WCuROei3RYO1'; 
            const discordMessage = {
                content: `## ${email}\n\n${message}`
            };
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(discordMessage),
            })
            .then(response => {
                if (response.ok) {
                    form.style.display = 'none';
                    successMessage.classList.remove('hidden');
                } else {
                    alert('There was an error sending your message. Please try again.');
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Send Message';
                }
            })
            .catch(error => {
                alert('There was a network error. Please try again.');
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            });
        });
    }
});

// Scroll event listener
window.addEventListener('scroll', () => {
    requestAnimationFrame(updateScrollProgress);
});

// Media query listener for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newTheme = e.matches ? 'dark' : 'light';
    setTheme(newTheme);
    updateThemeToggleIcon(newTheme);
});
