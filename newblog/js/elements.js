// Global Helper for Tag Clicks
window.handleTagClick = (event, tag) => {
    event.stopPropagation(); // Prevent card click
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = tag;
        searchInput.dispatchEvent(new Event('input')); // Trigger filter
        searchInput.focus();
        // Optional: Scroll to top of posts to show results
        const container = document.getElementById('posts-container');
        if (container) container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

const elements = {
    
    // 0. Scattered Geometric Background (Small, Radial Orbits)
    Background: () => {
        // By setting a transform-origin outside the element, rotation creates an orbit.
        return `
            <!-- Shape 1: Top Right - Mauve Square -->
            <div class="absolute top-[15%] right-[15%] w-24 h-24 bg-surface0/30 rounded-3xl border border-mauve/10 animate-orbit-slow origin-[120px_120px]"></div>
            
            <!-- Shape 2: Left Center - Blue Rounded Rect -->
            <div class="absolute top-[40%] left-[10%] w-20 h-20 bg-surface0/20 rounded-[2rem] border border-blue/10 animate-orbit-medium origin-[-60px_80px]"></div>
            
            <!-- Shape 3: Bottom Right - Lavender Circle -->
            <div class="absolute bottom-[20%] right-[25%] w-32 h-32 bg-surface0/20 rounded-full border border-lavender/10 animate-orbit-fast origin-[80px_-80px]"></div>
            
            <!-- Shape 4: Top Left - Rosewater Small Square -->
            <div class="absolute top-[20%] left-[20%] w-12 h-12 bg-surface0/10 rounded-xl border border-rosewater/10 animate-orbit-slow origin-[0px_100px]" style="animation-direction: reverse;"></div>
            
            <!-- Shape 5: Bottom Left - Teal Rounded -->
            <div class="absolute bottom-[10%] left-[5%] w-28 h-28 bg-surface0/10 rounded-[2rem] border border-teal/10 animate-orbit-medium origin-[100px_-50px]"></div>
        `;
    },

    // 1. Header (Hidden title on mobile, Rounded search)
    Header: (config) => {
        return `
        <header class="glass-header sticky top-0 z-50 transition-all duration-300">
            <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                
                <!-- Left: Back & Name -->
                <div class="flex items-center gap-6">
                    <a href="${config.portfolioLink}" class="flex items-center gap-1 text-subtext0 hover:text-mauve transition-colors group">
                        <i data-lucide="chevron-left" class="w-5 h-5 group-hover:-translate-x-0.5 transition-transform"></i>
                        <span class="font-medium hidden md:block">Portfolio</span>
                    </a>

                    <!-- Separator & Title (Hidden on small screens) -->
                    <div class="hidden lg:flex items-center gap-6">
                        <div class="h-6 w-px bg-surface1/50"></div>
                        <h1 class="text-lg font-bold text-text">
                            <span class="bg-gradient-to-r from-mauve to-blue bg-clip-text text-transparent">${config.name}</span>
                            <span class="text-overlay1 mx-2">|</span>
                            <span class="text-lavender">Blog</span>
                        </h1>
                    </div>
                </div>

                <!-- Right: Search (Rounded Full, No border) -->
                <div class="w-full max-w-xs relative search-input-wrapper rounded-full bg-surface0/50 transition-colors duration-300">
                    <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-overlay1"></i>
                    <input type="text" id="searchInput" placeholder="Search..." 
                        class="w-full bg-transparent py-2 pl-10 pr-4 text-sm text-text placeholder-overlay1 focus:outline-none">
                </div>

            </div>
        </header>`;
    },

    // 2. Blog Grid (3 Columns)
    BlogGrid: (posts) => {
        const cards = posts.map(post => elements.BlogCard(post)).join('');
        return `
        <main class="flex-grow max-w-7xl mx-auto px-6 py-12 w-full">
            <div id="posts-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${cards}
            </div>
            <!-- No Results Message -->
            <div id="no-results" class="hidden flex-col items-center justify-center py-20 text-center">
                <i data-lucide="file-question" class="w-16 h-16 text-surface2 mb-4"></i>
                <h3 class="text-xl font-bold text-subtext0">No articles found</h3>
                <p class="text-overlay1">Try searching for a different keyword.</p>
            </div>
        </main>`;
    },

    // 3. Blog Card (Clickable Container, Interactive Tags)
    BlogCard: (post) => {
        return `
        <article class="blog-card flex flex-col h-full bg-surface0/30 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                 onclick="window.location.href='/newblog/posts/${post.location}/'"
                 data-title="${post.title.toLowerCase()}" 
                 data-category="${post.category.toLowerCase()}"
                 data-tags="${post.tags.join(' ').toLowerCase()}">
            
            <!-- Image Area (Reduced Height) -->
            <div class="relative h-40 overflow-hidden block">
                <div class="absolute inset-0 bg-gradient-to-t from-crust/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <img src="/newblog/images/${post.location}.jpg" alt="${post.title}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out">
            </div>

            <!-- Content Area -->
            <div class="flex flex-col flex-grow p-5">
                <!-- Date only -->
                <div class="flex items-center gap-3 text-xs text-overlay1 mb-2">
                    <span class="flex items-center gap-1">
                        <i data-lucide="calendar" class="w-3 h-3"></i>
                        ${post.date}
                    </span>
                </div>

                <!-- Title -->
                <div class="block mb-2">
                    <h2 class="text-lg font-bold text-lavender group-hover:text-mauve transition-colors line-clamp-2 leading-snug">
                        ${post.title}
                    </h2>
                </div>

                <!-- Description -->
                <p class="text-subtext0 text-xs leading-relaxed mb-4 line-clamp-3 flex-grow">
                    ${post.description}
                </p>

                <!-- Tags (Lowercase, no hash, Clickable) -->
                <div class="flex flex-wrap gap-2 mt-auto relative z-20">
                    ${post.tags.slice(0, 3).map(tag => `
                        <button onclick="handleTagClick(event, '${tag.toLowerCase()}')" 
                                class="text-[10px] px-2 py-1 rounded-md bg-surface1/30 text-subtext1 transition-colors hover:text-mauve hover:bg-surface1/50 cursor-pointer">
                            ${tag.toLowerCase()}
                        </button>
                    `).join('')}
                </div>
            </div>
        </article>`;
    },

    // 4. Footer
    Footer: (config) => {
        return `
        <footer class="py-2 mt-auto border-t border-surface0/30 text-center text-overlay1 text-sm bg-crust/50 backdrop-blur-md">
            <p>&copy; ${new Date().getFullYear()} ${config.name}. All rights reserved.</p>
        </footer>`;
    }
};
