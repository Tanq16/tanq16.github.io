const app = document.getElementById('app');
const bgContainer = document.getElementById('ambient-background');

function parseDate(dateStr) {
    return new Date(dateStr);
}

function init() {
    bgContainer.innerHTML = elements.Background();
    app.innerHTML = elements.Header(blogData.config);
    const sortedPosts = [...blogData.posts].sort((a, b) => parseDate(b.date) - parseDate(a.date));
    app.innerHTML += elements.BlogGrid(sortedPosts);
    app.innerHTML += elements.Footer(blogData.config);
    lucide.createIcons();
    initSearch();
}

// Search Logic
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.blog-card');
    const noResults = document.getElementById('no-results');
    const container = document.getElementById('posts-container');

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase().trim();
        let visibleCount = 0;

        cards.forEach(card => {
            const title = card.dataset.title || '';
            const description = card.dataset.description || '';
            const category = card.dataset.category || '';
            const date = card.dataset.date || '';
            const tags = card.dataset.tags || '';
            
            const searchableText = `${title} ${description} ${category} ${date} ${tags}`;
            
            if (searchableText.includes(term)) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        if (visibleCount === 0) {
            noResults.classList.remove('hidden');
            noResults.classList.add('flex');
            container.classList.add('hidden');
        } else {
            noResults.classList.add('hidden');
            noResults.classList.remove('flex');
            container.classList.remove('hidden');
            container.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"; 
        }
    });
}

document.addEventListener('DOMContentLoaded', init);
