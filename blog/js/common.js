// Common JS for Blog Articles

const elements = {
    Background: () => `
        <div class="absolute top-[15%] right-[15%] w-24 h-24 bg-surface0/30 rounded-3xl border border-mauve/10 animate-orbit-slow origin-[120px_120px]"></div>
        <div class="absolute top-[40%] left-[10%] w-20 h-20 bg-surface0/20 rounded-[2rem] border border-blue/10 animate-orbit-medium origin-[-60px_80px]"></div>
        <div class="absolute bottom-[20%] right-[25%] w-32 h-32 bg-surface0/20 rounded-full border border-lavender/10 animate-orbit-fast origin-[80px_-80px]"></div>
        <div class="absolute top-[20%] left-[20%] w-12 h-12 bg-surface0/10 rounded-xl border border-rosewater/10 animate-orbit-slow origin-[0px_100px]" style="animation-direction: reverse;"></div>
        <div class="absolute bottom-[10%] left-[5%] w-28 h-28 bg-surface0/10 rounded-[2rem] border border-teal/10 animate-orbit-medium origin-[100px_-50px]"></div>
    `,
    Header: (config) => `
        <header class="glass-header sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div class="flex items-center gap-6">
                    <a href="${config.portfolioLink}" class="flex items-center gap-1 text-subtext0 hover:text-mauve transition-colors group">
                        <i data-lucide="chevron-left" class="w-5 h-5 group-hover:-translate-x-0.5 transition-transform"></i>
                        <span class="font-medium hidden md:block">Blog Home</span>
                    </a>
                    <div class="hidden lg:flex items-center gap-6">
                        <div class="h-6 w-px bg-surface1/50"></div>
                        <h1 class="text-lg font-bold text-text">
                            <span class="bg-gradient-to-r from-mauve to-blue bg-clip-text text-transparent">${config.name}</span>
                            <span class="text-overlay1 mx-2">|</span>
                            <span class="text-lavender">Blog</span>
                        </h1>
                    </div>
                </div>
                <div class="w-full max-w-xs relative search-input-wrapper rounded-full bg-surface0/50">
                    <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-overlay1"></i>
                    <input type="text" id="articleSearch" placeholder="Find in article..." 
                        class="w-full bg-transparent py-2 pl-10 pr-4 text-sm text-text placeholder-overlay1 focus:outline-none">
                    <span id="matchCount" class="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-mauve hidden">0/0</span>
                </div>
            </div>
        </header>`,
    Layout: (data) => `
        <main class="flex-grow w-full max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
            <div class="lg:col-span-8 lg:col-start-1 min-w-0">
                <div class="w-full h-[320px] md:h-[400px] rounded-2xl overflow-hidden mb-8 border border-surface1/20 shadow-2xl relative">
                    <div class="absolute inset-0 bg-gradient-to-t from-crust/50 to-transparent z-10"></div>
                    <img src="${data.meta.coverImage}" alt="Cover" class="w-full h-full object-cover">
                </div>
                <div class="mb-12 border-b border-surface1/20 pb-8">
                    <div class="flex flex-wrap items-center gap-4 text-sm text-overlay1 mb-4">
                        <span class="flex items-center gap-2"><i data-lucide="calendar" class="w-4 h-4"></i> ${data.meta.date}</span>
                        <span class="flex items-center gap-2"><i data-lucide="clock" class="w-4 h-4"></i> ${data.meta.readTime}</span>
                        <span class="flex items-center gap-2"><i data-lucide="user" class="w-4 h-4"></i> ${data.meta.author}</span>
                    </div>
                    <h1 class="text-3xl md:text-5xl font-extrabold text-lavender tracking-tight mb-6 leading-tight">${data.meta.title}</h1>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${data.meta.tags.map(tag => `<span class="px-3 py-1 rounded-md bg-surface1/20 text-mauve text-xs font-medium border border-surface1/30">${tag}</span>`).join('')}
                    </div>
                    <div class="flex items-center gap-2 text-xs text-subtext0/70">
                        <i data-lucide="copyright" class="w-3 h-3"></i>
                        <p>${data.meta.license}</p>
                    </div>
                </div>
                <!-- IMPORTANT: markdown-body class triggers GitHub CSS -->
                <article id="markdown-container" class="markdown-body"></article>
            </div>
            <aside class="hidden lg:block lg:col-span-4 relative">
                <div class="sticky top-28 space-y-4">
                    <div class="rounded-xl p-4">
                        <h3 class="text-lg font-bold text-lavender mb-4 flex items-center gap-2">
                            <i data-lucide="list" class="w-4 h-4 text-mauve"></i> Table of Contents
                        </h3>
                        <nav id="toc-container" class="space-y-1 relative border-l border-surface1/20"></nav>
                    </div>
                </div>
            </aside>
        </main>`,
    Footer: (config) => `
        <footer class="py-2 mt-auto border-t border-surface0/30 text-center text-overlay1 text-sm bg-crust/50 backdrop-blur-md">
            <p>&copy; ${new Date().getFullYear()} ${config.name}. All rights reserved.</p>
        </footer>`
};

// CORE LOGIC
let tocHeaders = [];

function generateId(text) {
    return String(text).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

function initMarked() {
    const renderer = {
        code(token) {
            const text = token.text;
            const language = token.lang;
            if (language === 'mermaid') {
                return `<div class="overflow-x-auto my-6"><div class="mermaid">${text}</div></div>`;
            }
            const validLang = hljs.getLanguage(language) ? language : 'plaintext';
            let highlighted = text;
            try { highlighted = hljs.highlight(text, { language: validLang }).value; } catch (e) {}
            return `<pre><code class="hljs language-${validLang}">${highlighted}</code></pre>`;
        },
        heading(token) {
            const { tokens, depth } = token;
            const text = this.parser.parseInline(tokens);
            const slug = generateId(text.replace(/<[^>]*>/g, ''));
            if (depth > 1) tocHeaders.push({ text: text.replace(/<[^>]*>/g, ''), level: depth, slug });
            return `<h${depth} id="${slug}">${text}</h${depth}>`;
        },
        blockquote(token) {
            const body = this.parser.parse(token.tokens);
            const rawText = token.text;
            const match = rawText.match(/^\[!(TIP|NOTE|INFO|WARNING|DANGER)\]/i);
            if (match) {
                const type = match[1].toLowerCase();
                const iconMap = { tip: 'lightbulb', info: 'circle-info', danger: 'triangle-exclamation', warning: 'circle-exclamation', note: 'note-sticky' };
                const cleanBody = body.replace(/<p>\s*\[!(TIP|NOTE|INFO|WARNING|DANGER)\]\s*/i, '<p>');
                return `<div class="callout ${type}"><div class="callout-icon"><i class="fa-solid fa-${iconMap[type] || 'circle-info'}"></i></div><div class="callout-content">${cleanBody}</div></div>`;
            }
            return `<blockquote>${body}</blockquote>`;
        }
    };
    marked.use({ renderer });
}

function renderTOC() {
    const container = document.getElementById('toc-container');
    if(!container) return;
    container.innerHTML = tocHeaders.map(h => {
        const padding = h.level === 3 ? 'pl-6' : 'pl-3';
        return `<a href="#${h.slug}" class="toc-link block py-1 ${padding} text-sm text-subtext1 hover:text-mauve hover:bg-surface0/50 border-l-2 border-transparent transition-all" data-target="${h.slug}">${h.text}</a>`
    }).join('');
}

function addCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre:has(code):not(:has(.mermaid))');
    
    codeBlocks.forEach(block => {
        if (block.querySelector('.copy-code-btn')) return;
        block.style.position = 'relative';
        const button = document.createElement('button');
        button.className = 'copy-code-btn';
        button.type = 'button';
        button.innerHTML = '<i data-lucide="copy" class="w-4 h-4"></i>';
        button.setAttribute('aria-label', 'Copy code');
        button.setAttribute('title', 'Copy code');
        
        button.addEventListener('click', async (e) => {
            e.preventDefault();
            e.stopPropagation();
            const code = block.querySelector('code').textContent;
            try {
                await navigator.clipboard.writeText(code);
                button.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i>';
                button.classList.add('copied');
                button.setAttribute('title', 'Copied!');
                lucide.createIcons();
                setTimeout(() => {
                    button.innerHTML = '<i data-lucide="copy" class="w-4 h-4"></i>';
                    button.classList.remove('copied');
                    button.setAttribute('title', 'Copy code');
                    lucide.createIcons();
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
                const textArea = document.createElement('textarea');
                textArea.value = code;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                textArea.style.top = '-999999px';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                
                try {
                    // Note: execCommand is deprecated but kept for legacy browser support
                    const successful = document.execCommand('copy');
                    if (successful) {
                        button.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i>';
                        button.classList.add('copied');
                        lucide.createIcons();
                        setTimeout(() => {
                            button.innerHTML = '<i data-lucide="copy" class="w-4 h-4"></i>';
                            button.classList.remove('copied');
                            lucide.createIcons();
                        }, 2000);
                    }
                } catch (err2) {
                    console.error('All copy methods failed:', err2);
                    button.innerHTML = '<i data-lucide="x" class="w-4 h-4"></i>';
                    button.style.color = '#f38ba8'; // red
                    setTimeout(() => {
                        button.innerHTML = '<i data-lucide="copy" class="w-4 h-4"></i>';
                        button.style.color = '';
                        lucide.createIcons();
                    }, 2000);
                }
                document.body.removeChild(textArea);
            }
        });
        block.appendChild(button);
    });
    lucide.createIcons();
}

async function loadContent() {
    // Check if content should be loaded from external file
    if (articleData.contentFile) {
        try {
            const response = await fetch(articleData.contentFile);
            if (!response.ok) throw new Error(`Failed to load ${articleData.contentFile}`);
            return await response.text();
        } catch (error) {
            console.error('Error loading content file:', error);
            return '**Error loading content.** Please check console for details.';
        }
    }
    // Otherwise use inline content
    return articleData.content || '';
}

async function initApp() {
    const app = document.getElementById('app');
    const bg = document.getElementById('ambient-background');
    bg.innerHTML = elements.Background();
    app.innerHTML = elements.Header(articleData.config) + elements.Layout(articleData) + elements.Footer(articleData.config);

    initMarked();
    const mdContainer = document.getElementById('markdown-container');
    
    // Load content (either from file or inline)
    const content = await loadContent();
    mdContainer.innerHTML = marked.parse(content);
    addCopyButtons();

    mermaid.initialize({ 
        startOnLoad: false, 
        theme: 'base',
        themeVariables: {
            darkMode: true,
            background: '#181825', // mantle
            fontFamily: 'Inter',
            fontSize: '14px',
            primaryColor: '#313244', // surface0
            primaryTextColor: '#cdd6f4', // text
            primaryBorderColor: '#cba6f7', // mauve
            lineColor: '#b4befe', // lavender
            secondaryColor: '#313244', // surface0
            secondaryTextColor: '#cdd6f4', // text
            secondaryBorderColor: '#89b4fa', // blue
            tertiaryColor: '#1e1e2e', // base
            tertiaryTextColor: '#cdd6f4', // text
            tertiaryBorderColor: '#f5c2e7', // pink
            nodeBorder: '#cba6f7', // mauve
            clusterBkg: '#1e1e2e', // base
            clusterBorder: '#45475a', // surface1
            defaultLinkColor: '#b4befe', // lavender
            titleColor: '#cba6f7', // mauve
            edgeLabelBackground: '#11111b', // crust
            actorBorder: '#cba6f7', // mauve
            actorBkg: '#1e1e2e', // base
            signalColor: '#b4befe', // lavender
            signalTextColor: '#cdd6f4', // text
            labelBoxBkgColor: '#1e1e2e', // base
            labelBoxBorderColor: '#cba6f7', // mauve
            labelTextColor: '#cdd6f4', // text
            loopTextColor: '#cdd6f4', // text
            noteBkgColor: '#181825', // mantle
            noteTextColor: '#cdd6f4', // text
            noteBorderColor: '#f2cdcd', // flamingo
        } 
    });
    document.fonts.ready.then(() => {
        mermaid.run({ nodes: document.querySelectorAll('.mermaid') });
    });

    renderTOC();
    lucide.createIcons();
    initSearch();
    initObserver();
}

function initSearch() {
    const input = document.getElementById('articleSearch');
    const container = document.getElementById('markdown-container');
    const matchLabel = document.getElementById('matchCount');
    let originalContent = null;

    input.addEventListener('focus', () => { if(!originalContent) originalContent = container.innerHTML; });
    input.addEventListener('input', (e) => {
        const term = e.target.value.trim();
        if (!term) {
            container.innerHTML = originalContent;
            matchLabel.classList.add('hidden');
            document.fonts.ready.then(() => mermaid.run({ nodes: document.querySelectorAll('.mermaid') }));
            return;
        }
        container.innerHTML = originalContent;
        const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null, false);
        const nodes = [];
        while(walker.nextNode()) nodes.push(walker.currentNode);
        let count = 0;
        const regex = new RegExp(`(${term})`, 'gi');
        nodes.forEach(node => {
            if (node.parentNode.closest('.mermaid')) return;
            if (node.nodeValue.match(regex)) {
                const span = document.createElement('span');
                span.innerHTML = node.nodeValue.replace(regex, (m) => { count++; return `<mark class="search-match">${m}</mark>`; });
                node.parentNode.replaceChild(span, node);
            }
        });
        matchLabel.textContent = `${count} matches`;
        matchLabel.classList.remove('hidden');
    });
}

function initObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                document.querySelectorAll('.toc-link').forEach(l => {
                    l.classList.remove('active');
                    if(l.dataset.target === e.target.id) l.classList.add('active');
                });
            }
        });
    }, { rootMargin: '-20% 0px -60% 0px' });
    document.querySelectorAll('h2[id], h3[id]').forEach(h => observer.observe(h));
}

document.addEventListener('DOMContentLoaded', initApp);
