const elements = {

    Header: (config, sections) => {
        const navSections = sections.filter(s => s.showInNav !== false);
        const pageLinks = config.pageLinks || [];

        const navLinks = navSections.map(s =>
            `<a href="#${s.id}" data-target="${s.id}" class="nav-link text-subtext0 hover:text-mauve transition-colors duration-300 font-medium text-sm md:text-[16px]">${s.title}</a>`
        ).join('');

        const mobileNavLinks = navSections.map(s =>
            `<a href="#${s.id}" data-target="${s.id}" class="nav-link block px-3 py-2.5 rounded-lg text-subtext0 hover:text-mauve hover:bg-surface0/50 transition-colors duration-300 font-medium">${s.title}</a>`
        ).join('');

        const pageLinkButtons = pageLinks.map(l => `
            <a href="${l.link}" class="px-4 py-1.5 rounded-full bg-surface0/60 text-text hover:bg-surface0 hover:text-mauve transition-all duration-300 font-medium text-sm border border-surface1/20 hover:-translate-y-0.5">
                ${l.label}
            </a>
        `).join('');

        return `
        <header class="sticky top-0 z-50 bg-crust/80 backdrop-blur-md border-b border-surface0/0 py-4 transition-all duration-300">
            <div class="max-w-6xl mx-auto px-6 flex justify-between items-center gap-4">
                <a href="#" class="flex items-center hover:opacity-80 transition-opacity duration-300 shrink-0">
                    <img src="/assets/images/logosmall.svg" alt="Logo" class="h-8 w-8">
                </a>

                <div class="hidden md:flex gap-8 items-center">
                    ${navLinks}
                </div>

                <nav class="flex gap-2 md:gap-3 items-center shrink-0">
                    <div class="flex gap-2 items-center">
                        ${pageLinkButtons}
                    </div>
                    <button id="menu-btn" type="button" aria-label="Open menu" aria-expanded="false"
                            class="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-subtext0 hover:text-mauve hover:bg-surface0/50 transition-colors duration-300">
                        <i class="fas fa-bars text-lg"></i>
                    </button>
                </nav>
            </div>
            <div id="mobile-menu" class="hidden md:hidden border-t border-surface0/50 mt-4">
                <div class="max-w-6xl mx-auto px-6 py-3 flex flex-col gap-1">
                    ${mobileNavLinks}
                </div>
            </div>
        </header>`;
    },

    // sizeCls is separate because an inline SVG cannot inherit the font-size that scales a Font Awesome glyph.
    icon: (spec, cls, sizeCls, style = '') => {
        if (spec.startsWith('svg:')) {
            return `<svg viewBox="0 0 50 50" fill="currentColor" aria-hidden="true"
                     class="${sizeCls} ${cls}" style="${style}"><path d="${SVG_ICONS[spec.slice(4)]}"></path></svg>`;
        }
        return `<i class="${spec.replace(/^fa:/, '')} ${cls}" style="${style}"></i>`;
    },

    Hero: (config) => {
        // Colour cross-fades slowly (initSocialColorCycle) while the hover lift stays quick.
        const socialLinks = config.socials.map((s, index) => {
            const popDelay = (0.52 + index * 0.08).toFixed(2);
            const style = `animation: popIn .5s cubic-bezier(.34,1.56,.64,1) ${popDelay}s backwards; transition: color 2.24s ease-in-out, transform .3s ease;`;
            const cls = 'social-glow text-mauve group-hover:-translate-y-1';
            return `
            <a href="${s.link}" target="_blank" title="${s.label}"
               class="group text-2xl flex items-center justify-center w-10 h-10">
                ${elements.icon(s.icon, cls, 'w-6 h-6', style)}
            </a>
        `;
        }).join('');

        return `
        <section class="min-h-[60vh] flex flex-col md:flex-row items-center justify-between px-6 py-10 max-w-6xl mx-auto relative overflow-hidden gap-12">
            <div class="z-10 max-w-xl text-center flex-1 flex flex-col items-center">
                <!-- overflow-hidden masks the clip-up reveal; pb gives the descender room inside the mask -->
                <div class="overflow-hidden pb-2 mb-2">
                    <h1 class="text-[40px] md:text-[64px] leading-[1.05] md:whitespace-nowrap font-bold tracking-tight bg-[linear-gradient(90deg,theme(colors.mauve),theme(colors.pink),theme(colors.blue),theme(colors.mauve))] bg-[length:200%_auto] bg-clip-text text-transparent"
                        style="animation: clipUp .7s cubic-bezier(.22,1,.36,1) .1s both, shimmer 4.2s linear 1s infinite;">
                        ${config.name}
                    </h1>
                </div>
                <div class="overflow-hidden mb-4">
                    <h2 class="text-2xl md:text-3xl font-medium text-text"
                        style="animation: clipUp .7s cubic-bezier(.22,1,.36,1) .24s both;">
                        ${config.title}
                    </h2>
                </div>
                <p class="text-lg text-subtext0 mb-8 max-w-lg"
                   style="animation: fadeRise .7s cubic-bezier(.22,1,.36,1) .38s both;">${config.subtitle}</p>

                <div class="flex flex-wrap gap-4 mt-2 justify-center">
                    ${socialLinks}
                </div>
            </div>

            <div class="relative w-full md:w-1/2 h-[400px] flex items-center justify-center">
                <!-- outer wrapper = drop-in entrance, inner = idle bob (base rotate/translate = reduced-motion rest) -->
                <div class="absolute z-0" style="animation: dropIn .8s cubic-bezier(.34,1.4,.5,1) .15s both;">
                    <div class="w-64 h-64 bg-surface0/30 rounded-3xl rotate-12 backdrop-blur-sm border border-mauve/20" style="animation: sq1 9s ease-in-out infinite;"></div>
                </div>
                <div class="absolute z-0" style="animation: dropIn .8s cubic-bezier(.34,1.4,.5,1) .3s both;">
                    <div class="w-64 h-64 bg-surface0/20 rounded-3xl -rotate-6 backdrop-blur-sm border border-blue/20 translate-x-4 translate-y-4" style="animation: sq2 11s ease-in-out infinite;"></div>
                </div>
                <div class="absolute z-0" style="animation: dropIn .8s cubic-bezier(.34,1.4,.5,1) .45s both;">
                    <div class="w-48 h-48 bg-mauve/10 rounded-2xl rotate-45 backdrop-blur-md -translate-x-12 -translate-y-12" style="animation: sq3 13s ease-in-out infinite;"></div>
                </div>

                <div class="relative z-10 w-full h-full flex items-center justify-center">
                    <div class="h-full flex items-center justify-center" style="animation: zoomOvershoot .9s cubic-bezier(.34,1.56,.64,1) .35s both;">
                        <div class="h-full flex items-center justify-center" style="animation: floatBreathe 6s ease-in-out infinite;">
                            <img src="/assets/images/logobig.png" class="w-auto h-full object-contain drop-shadow-2xl" alt="Portrait">
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
    },

    TextSection: (data) => {
        const actions = data.actions ? `
            <div class="flex justify-center gap-4 mt-8">
                ${data.actions.map(action => `
                    <a href="${action.link}"
                       class="px-6 py-2 rounded-full bg-surface0 text-text hover:bg-surface1 hover:text-mauve transition-all duration-300 flex items-center gap-2 font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-surface1/20">
                        ${utils.resolveIcon(action.icon)}
                        <span>${action.label}</span>
                    </a>
                `).join('')}
            </div>
        ` : '';

        return `
        <section id="${data.id}" class="py-10 fade-in-section">
            <div class="max-w-4xl mx-auto px-6 text-center">
                <h2 class="text-3xl font-bold mb-6 text-mauve">
                    ${data.title}
                </h2>
                <div class="prose prose-lg prose-invert text-subtext0 leading-relaxed mx-auto">
                    ${data.content}
                </div>
                ${actions}
            </div>
        </section>`;
    },

    TimelineSection: (data) => {
        const items = data.items.map((item, index) => {
            const isLast = index === data.items.length - 1;
            const lineClass = isLast ? 'hidden' : '';
            
            return `
            <div class="relative pl-8 md:pl-12 group pb-8 last:pb-0">
                <div class="absolute top-0 bottom-0 left-[9px] w-0.5 bg-surface0 ${lineClass}"></div>

                <div class="absolute left-0 top-0 w-5 h-5 rounded-full bg-crust border-2 border-mauve flex items-center justify-center z-10">
                    <div class="w-2 h-2 rounded-full bg-mauve"></div>
                </div>

                <div class="w-full bg-surface0/30 rounded-xl p-6 hover:bg-surface0/50 transition-colors duration-300 group">
                    <div class="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-3">
                        <div>
                            <h3 class="text-xl font-bold text-lavender">${item.title}</h3>
                            <h4 class="text-mauve font-medium text-base">${item.subtitle}</h4>
                        </div>
                        <div class="shrink-0 text-left md:text-right mt-2 md:mt-0">
                            <span class="inline-block px-3 py-1 rounded-md bg-crust text-xs font-medium text-lavender border border-surface1/10 group-hover:text-mauve transition-colors">
                                ${item.date}
                            </span>
                        </div>
                    </div>
                    <p class="text-subtext0 text-sm leading-relaxed max-w-3xl">${item.summary}</p>
                </div>
            </div>
            `;
        }).join('');

        return `
        <section id="${data.id}" class="py-10 fade-in-section">
            <div class="max-w-4xl mx-auto px-6">
                <h2 class="text-3xl font-bold mb-12 text-mauve text-center">${data.title}</h2>
                
                <div class="relative ml-3 md:ml-6">
                    ${items}
                </div>
            </div>
        </section>`;
    },

    TiledSection: (data) => {
        const tags = (item) => item.tags.map(tag => `
            <span class="text-xs px-2 py-1 rounded-md bg-crust text-lavender border border-surface1/10 group-hover:text-mauve transition-colors">
                ${tag}
            </span>
        `).join('');

        const logoCard = (item) => `
            <a href="${item.link}" target="_blank" class="bg-surface0/30 rounded-xl p-5 hover:bg-surface0 transition-all duration-300 flex flex-col h-full no-underline block group">
                <div class="flex items-center gap-3 mb-3">
                    ${item.icon ? `<div class="w-14 h-14 shrink-0 flex items-center justify-center">
                        <img src="${item.icon}" alt="${item.title}" class="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity" onerror="this.style.display='none'">
                    </div>` : ''}
                    <h3 class="text-lg font-bold text-lavender group-hover:text-mauve transition-colors">${item.title}</h3>
                </div>
                <p class="text-subtext0 text-sm mb-4 leading-relaxed flex-grow">${item.description}</p>
                <div class="flex flex-wrap gap-2 mt-auto">${tags(item)}</div>
            </a>
        `;

        const bannerCard = (item) => `
            <a href="${item.link}" target="_blank" class="bg-surface0/30 rounded-xl p-3 hover:bg-surface0 transition-all duration-300 flex flex-col h-full no-underline block group border border-surface1/10 hover:border-mauve/30 hover:-translate-y-1">
                <div class="aspect-[1200/628] overflow-hidden rounded-lg bg-crust">
                    <img src="${item.image}" alt="${item.title}" loading="lazy" class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500">
                </div>
                <div class="px-2 pt-4 pb-1 flex flex-col flex-grow">
                    <div class="flex items-start justify-between gap-3 mb-3">
                        <h3 class="text-lg font-bold text-lavender group-hover:text-mauve transition-colors">
                            ${item.title}
                        </h3>
                        <span class="shrink-0 inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full bg-mauve/10 text-mauve border border-mauve/20 whitespace-nowrap">
                            <i data-lucide="users" class="w-3 h-3"></i> Co-authored
                        </span>
                    </div>
                    <div class="flex flex-wrap gap-2 mt-auto">${tags(item)}</div>
                </div>
            </a>
        `;

        const groups = data.groups.map(group => {
            const isBanner = group.variant === 'banner';
            const grid = isBanner ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3';
            const cards = group.items.map(isBanner ? bannerCard : logoCard).join('');
            return `
            <div class="mb-12 last:mb-0">
                <div class="flex items-center gap-4 mb-6">
                    <h3 class="text-sm font-semibold text-subtext0 uppercase tracking-[0.15em] whitespace-nowrap">${group.label}</h3>
                    <div class="flex-1 h-px bg-surface0"></div>
                </div>
                <div class="grid grid-cols-1 ${grid} gap-4">${cards}</div>
            </div>`;
        }).join('');

        return `
        <section id="${data.id}" class="py-10 fade-in-section">
            <div class="max-w-6xl mx-auto px-6">
                <h2 class="text-3xl font-bold mb-10 text-mauve text-center">${data.title}</h2>
                ${groups}
            </div>
        </section>`;
    },

    SkillsSection: (data) => {
        const categories = Object.entries(data.categories);
        
        const tabs = categories.map(([key, cat], index) => `
            <button data-tab="${key}" class="skill-tab px-6 py-2 rounded-full font-medium flex items-center gap-2 whitespace-nowrap transition-colors duration-300 hover:text-mauve hover:bg-surface0 ${index === 0 ? 'bg-surface0 text-mauve active-tab' : 'bg-surface0/50 text-subtext0'}">
                ${utils.resolveIcon(cat.icon)}
                <span>${cat.label}</span>
            </button>
        `).join('');

        const contentPanels = categories.map(([key, cat], index) => `
            <div id="skills-${key}" class="skill-panel grid grid-cols-1 md:grid-cols-2 gap-3 ${index === 0 ? '' : 'hidden'} animate-fade-in">
                ${cat.items.map(skill => `
                    <div class="bg-surface0/30 rounded-lg p-3 flex items-center gap-4 hover:bg-surface0 transition-colors">
                        <div class="text-xl text-mauve w-8 text-center">${utils.resolveIcon(skill.icon)}</div>
                        <div class="flex-1">
                            <div class="flex justify-between mb-1">
                                <span class="font-medium text-text text-sm">${skill.name}</span>
                                <span class="text-overlay1 text-xs">${skill.level}%</span>
                            </div>
                            <div class="w-full bg-base rounded-full h-1.5 overflow-hidden">
                                <div class="bg-mauve h-1.5 rounded-full" style="width: ${skill.level}%"></div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `).join('');

        return `
        <section id="${data.id}" class="py-10 fade-in-section">
            <div class="max-w-4xl mx-auto px-6">
                <h2 class="text-3xl font-bold mb-8 text-mauve text-center">${data.title}</h2>

                <div class="flex overflow-x-auto justify-start md:justify-center pb-4 gap-2 mb-8 no-scrollbar touch-pan-x">
                    ${tabs}
                </div>

                <div>
                    ${contentPanels}
                </div>
            </div>
        </section>`;
    },

    ContactSection: (data) => {
        return `
        <section id="${data.id}" class="py-10 fade-in-section">
            <div class="max-w-2xl mx-auto px-6">
                <h2 class="text-3xl font-bold mb-4 text-mauve text-center">${data.title}</h2>
                <p class="text-center text-subtext0 mb-10">${data.content}</p>
                
                <div class="bg-surface0/30 rounded-2xl p-5">
                    <form id="contact-form" class="space-y-4">
                        <input type="email" name="email" required aria-label="${data.form.emailLabel}" class="w-full bg-crust rounded-lg px-4 py-3 text-text focus:outline-none focus:ring-1 focus:ring-mauve transition-all placeholder-overlay1 border border-surface1/20" placeholder="${data.form.emailLabel}">
                        <textarea name="message" required rows="5" aria-label="${data.form.messageLabel}" class="w-full bg-crust rounded-lg px-4 py-3 text-text focus:outline-none focus:ring-1 focus:ring-mauve transition-all placeholder-overlay1 border border-surface1/20" placeholder="${data.form.messageLabel}"></textarea>
                        <div class="text-center">
                            <button type="submit" class="px-6 py-1.5 rounded-full bg-mauve text-crust font-medium text-sm hover:bg-pink transition-all duration-300 hover:-translate-y-0.5">
                                ${data.form.buttonText}
                            </button>
                        </div>
                    </form>
                    <div id="form-success" class="hidden mt-4 p-4 bg-sapphire/10 text-sapphire rounded-lg text-center border border-sapphire/20">
                        ${data.form.successMessage}
                    </div>
                </div>
            </div>
        </section>`;
    },

    AlsoAvailable: (config) => {
        const links = config.altSocials.map(s => `
            <a href="${s.link}" target="_blank" title="${s.label}" aria-label="${s.label}"
               class="flex text-text/60 hover:text-text hover:-translate-y-0.5 transition-all duration-300">
                ${elements.icon(s.icon, '', 'w-4 h-4')}
            </a>`).join('');

        return `
        <section class="pb-12 fade-in-section">
            <div class="max-w-2xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-y-3 gap-x-4">
                <span class="text-sm text-overlay1">Also available on</span>
                <div class="flex items-center gap-5 text-base">
                    ${links}
                </div>
            </div>
        </section>`;
    },

    Footer: (config) => {
        return `
        <footer class="py-2 border-t border-surface0/30 text-center text-overlay1 text-sm bg-crust">
            <p>&copy; ${new Date().getFullYear()} ${config.name}</p>
        </footer>`;
    }
};
