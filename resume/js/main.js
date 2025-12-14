function toggleModal(modalID){
    const modal = document.getElementById(modalID);
    modal.classList.toggle("hidden");
    modal.classList.toggle("pointer-events-none");
    modal.classList.toggle("opacity-0");
    document.body.classList.toggle("modal-active");
}

function downloadFile(content, fileName, mimeType) {
    const a = document.createElement("a");
    const file = new Blob([content], {type: mimeType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(a.href);
    toggleModal('modal-id');
}

function downloadJSON() {
    downloadFile(JSON.stringify(RESUME_DATA, null, 4), 'resume.json', 'text/json');
}

function downloadYAML() {
    if (typeof jsyaml !== 'undefined') {
        downloadFile(jsyaml.dump(RESUME_DATA), 'resume.yaml', 'text/yaml');
    } else {
        alert("YAML library not loaded.");
    }
}

async function renderPaginated() {
    const root = document.getElementById('app-root');
    const staging = document.getElementById('staging-area');
    root.innerHTML = '';
    staging.innerHTML = '';

    // 1. Determine Pixel Height of Page Content Area
    const testDiv = document.createElement('div');
    testDiv.style.height = '250mm'; // 279 (Letter) - 24 - 5 (buffer)
    document.body.appendChild(testDiv);
    const PAGE_CONTENT_HEIGHT_PX = testDiv.offsetHeight;
    document.body.removeChild(testDiv);
    
    // 2. Helper to create a new page
    let pages = [];
    let currentPageContent = null;
    let currentHeight = 0;

    function createNewPage() {
        const page = document.createElement('div');
        page.className = 'page-container';
        page.innerHTML = `<div class="right-sidebar-bg"></div>`;
        
        // Content Wrapper
        const content = document.createElement('div');
        content.style.position = 'relative';
        content.style.zIndex = '10';
        page.appendChild(content);
        root.appendChild(page);
        pages.push(page);
        currentPageContent = content;
        currentHeight = 0;
    }

    // 3. Helper to append Node
    function appendNode(node, forceNewPage = false) {
        const clone = node.cloneNode(true);
        staging.appendChild(clone);
        const h = clone.offsetHeight;
        staging.removeChild(clone);
        if (forceNewPage || pages.length === 0 || (currentHeight + h > PAGE_CONTENT_HEIGHT_PX)) {
            createNewPage();
        }
        currentPageContent.appendChild(node);
        currentHeight += h;
    }

    const header = document.createElement('header');
    header.className = 'text-center mb-8 relative z-10';
    header.innerHTML = `
        <h1 class="text-4xl font-bold uppercase tracking-wider text-gray-800 mb-4">${RESUME_DATA.basics.name}</h1>
        <div class="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-gray-600 font-medium">
            ${['email','phone','website','github','location'].map(k => RESUME_DATA.basics[k] ? `
                <div class="flex items-center gap-2">
                    <i data-lucide="${k === 'location' ? 'map-pin' : k === 'email' ? 'at-sign' : k === 'website' ? 'globe' : k}" class="w-4 h-4 text-gray-400"></i>
                    <span>${RESUME_DATA.basics[k]}</span>
                </div>` : '').join('')}
        </div>
    `;
    appendNode(header);

    for (let i = 0; i < RESUME_DATA.sections.length; i++) {
        const section = RESUME_DATA.sections[i];
        
        // 1. Create Title Node
        const titleNode = document.createElement('div');
        titleNode.className = 'section-container'; 
        // Apply 'first-section' class if it's the very first section
        if (i === 0) {
            titleNode.classList.add('first-section');
        }
        titleNode.innerHTML = `
            <div class="section-icon"><i data-lucide="${section.icon}" class="w-6 h-6"></i></div>
            <h2 class="section-title">${section.title}</h2>
        `;

        // 2. Measure Title Height
        staging.appendChild(titleNode);
        const titleHeight = titleNode.offsetHeight;
        staging.removeChild(titleNode);

        // 3. Measure First Entry Height
        let firstEntryHeight = 0;
        let firstEntryNode = null;
        if (section.entries.length > 0) {
            firstEntryNode = createEntryNode(section.entries[0], section.type);
            staging.appendChild(firstEntryNode);
            firstEntryHeight = firstEntryNode.offsetHeight;
            staging.removeChild(firstEntryNode);
        }

        // 4. If Title + First Entry > Remaining Page Space, force new page for Title
        let forcePageBreak = false;
        if (pages.length > 0) {
            const remainingSpace = PAGE_CONTENT_HEIGHT_PX - currentHeight;
            if (titleHeight + firstEntryHeight > remainingSpace) {
                forcePageBreak = true;
            }
        }
        appendNode(titleNode, forcePageBreak);

        // 5. Append Entries
        for (let j = 0; j < section.entries.length; j++) {
            const entryNode = createEntryNode(section.entries[j], section.type);
            appendNode(entryNode);
        }
    }
    lucide.createIcons();
}

function createEntryNode(entry, type) {
    const entryWrapper = document.createElement('ul');
    entryWrapper.className = 'level-1'; 
    entryWrapper.style.marginTop = '0';
    entryWrapper.style.marginBottom = '0.5rem';

    let innerHTML = '';
    if (type === 'detailed') {
         innerHTML = `
            <li>
                <div class="flex justify-between items-baseline -mt-1 mb-1">
                    <div class="text-[15px] text-gray-800 leading-snug">
                        <span class="font-bold text-gray-900">${entry.title}</span> 
                        ${entry.subtitle ? `<span class="mx-1 text-gray-400 font-light">|</span> <span class="font-medium">${entry.subtitle}</span>` : ''}
                    </div>
                    <div class="text-[13px] text-gray-600 font-semibold whitespace-nowrap pl-4">${entry.date || ''}</div>
                </div>
                ${entry.details && entry.details.length ? 
                    `<ul class="level-2">${entry.details.map(d => `<li>${d}</li>`).join('')}</ul>` : ''}
            </li>
        `;
    } else {
        innerHTML = `<li><span class="text-[14px] leading-snug block -mt-1 text-gray-700">${entry}</span></li>`;
    }

    entryWrapper.innerHTML = innerHTML;
    return entryWrapper;
}

// Init
window.onload = renderPaginated;
