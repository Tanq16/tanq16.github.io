const app = document.getElementById('app');
const bgContainer = document.getElementById('ambient-background');

function init() {
    bgContainer.innerHTML = elements.Background();
    app.innerHTML = elements.Header(blogData.config);
    app.innerHTML += elements.BlogGrid(blogData.posts);
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
        const term = e.target.value.toLowerCase();
        let visibleCount = 0;

        cards.forEach(card => {
            const title = card.dataset.title;
            const category = card.dataset.category;
            const tags = card.dataset.tags;
            
            if (title.includes(term) || category.includes(term) || tags.includes(term)) {
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
