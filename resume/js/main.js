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

const CONTACT_ICONS = {
    email: 'at-sign',
    phone: 'phone',
    website: 'globe',
    github: 'git-branch',
    location: 'map-pin',
};

async function renderPaginated() {
    const root = document.getElementById('app-root');
    const staging = document.getElementById('staging-area');
    root.innerHTML = '';
    staging.innerHTML = '';

    const testDiv = document.createElement('div');
    testDiv.style.height = '250mm'; // 279 (Letter) - 24 - 5 (buffer)
    document.body.appendChild(testDiv);
    const PAGE_CONTENT_HEIGHT_PX = testDiv.offsetHeight;
    document.body.removeChild(testDiv);
    
    let pages = [];
    let currentPageContent = null;
    let currentHeight = 0;

    function createNewPage() {
        const page = document.createElement('div');
        page.className = 'page-container';
        page.innerHTML = `<div class="right-sidebar-bg"></div>`;
        
        const content = document.createElement('div');
        content.style.position = 'relative';
        content.style.zIndex = '10';
        page.appendChild(content);
        root.appendChild(page);
        pages.push(page);
        currentPageContent = content;
        currentHeight = 0;
    }

    function currentPageUsed() {
        const kids = currentPageContent.children;
        if (!kids.length) return 0;
        const last = kids[kids.length - 1];
        return last.offsetTop + last.offsetHeight;
    }

    function fitsHere(node) {
        currentPageContent.appendChild(node);
        const ok = node.offsetTop + node.offsetHeight <= PAGE_CONTENT_HEIGHT_PX;
        currentPageContent.removeChild(node);
        return ok;
    }

    function appendNode(node, forceNewPage = false) {
        if (forceNewPage || pages.length === 0 || !fitsHere(node)) {
            createNewPage();
        }
        currentPageContent.appendChild(node);
        currentHeight = currentPageUsed();
    }

    function appendEntry(entry, type) {
        if (type !== 'detailed' || !entry.details || entry.details.length === 0) {
            appendNode(createEntryNode(entry, type));
            return;
        }
        if (pages.length === 0 || fitsHere(createEntryNode(entry, type))) {
            appendNode(createEntryNode(entry, type));
            return;
        }
        const details = entry.details;
        let idx = 0;
        let continued = false;
        while (idx < details.length) {
            let count = 0;
            while (idx + count + 1 <= details.length && fitsHere(createEntryNode({ ...entry, details: details.slice(idx, idx + count + 1) }, type, continued))) {
                count++;
            }
            if (count === 0) {
                createNewPage();
                count = 1;
                while (idx + count + 1 <= details.length && fitsHere(createEntryNode({ ...entry, details: details.slice(idx, idx + count + 1) }, type, continued))) {
                    count++;
                }
            }
            const chunk = createEntryNode({ ...entry, details: details.slice(idx, idx + count) }, type, continued);
            currentPageContent.appendChild(chunk);
            currentHeight = currentPageUsed();
            idx += count;
            continued = true;
        }
    }

    const header = document.createElement('header');
    header.className = 'text-center mb-8 relative z-10';
    header.innerHTML = `
        <h1 class="text-4xl font-bold uppercase tracking-wider text-gray-800 mb-4">${RESUME_DATA.basics.name}</h1>
        <div class="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-gray-600 font-medium">
            ${Object.entries(CONTACT_ICONS).map(([k, icon]) => RESUME_DATA.basics[k] ? `
                <div class="flex items-center gap-2">
                    <i data-lucide="${icon}" class="w-4 h-4 text-gray-400"></i>
                    <span>${RESUME_DATA.basics[k]}</span>
                </div>` : '').join('')}
        </div>
        ${RESUME_DATA.basics.summary ? `<p class="max-w-3xl mx-auto mt-4 text-[13px] text-gray-600 leading-snug">${RESUME_DATA.basics.summary}</p>` : ''}
    `;
    appendNode(header);

    for (let i = 0; i < RESUME_DATA.sections.length; i++) {
        const section = RESUME_DATA.sections[i];
        
        const titleNode = document.createElement('div');
        titleNode.className = 'section-container';
        if (i === 0) {
            titleNode.classList.add('first-section');
        }
        titleNode.innerHTML = `
            <div class="section-icon"><i data-lucide="${section.icon}" class="w-6 h-6"></i></div>
            <h2 class="section-title">${section.title}</h2>
        `;

        staging.appendChild(titleNode);
        const titleHeight = titleNode.offsetHeight;
        staging.removeChild(titleNode);

        let firstEntryHeight = 0;
        let firstEntryNode = null;
        if (section.entries.length > 0) {
            firstEntryNode = createEntryNode(section.entries[0], section.type);
            staging.appendChild(firstEntryNode);
            firstEntryHeight = firstEntryNode.offsetHeight;
            staging.removeChild(firstEntryNode);
        }

        // avoid an orphaned title: break to a new page if the title + first entry won't fit
        let forcePageBreak = false;
        if (pages.length > 0) {
            const remainingSpace = PAGE_CONTENT_HEIGHT_PX - currentHeight;
            if (titleHeight + firstEntryHeight > remainingSpace) {
                forcePageBreak = true;
            }
        }
        appendNode(titleNode, forcePageBreak);

        for (let j = 0; j < section.entries.length; j++) {
            appendEntry(section.entries[j], section.type);
        }
    }
    lucide.createIcons();
}

function createEntryNode(entry, type, continued = false) {
    const entryWrapper = document.createElement('ul');
    entryWrapper.className = continued ? 'level-1 continued' : 'level-1';
    entryWrapper.style.marginTop = '0';
    entryWrapper.style.marginBottom = '0.5rem';

    let innerHTML = '';
    if (type === 'detailed') {
         const headerHTML = continued ? '' : `
                <div class="flex justify-between items-baseline -mt-1 mb-1">
                    <div class="text-[15px] text-gray-800 leading-snug">
                        <span class="font-bold text-gray-900">${entry.title}</span>
                        ${entry.subtitle ? `<span class="mx-1 text-gray-400 font-light">|</span> <span class="font-medium">${entry.subtitle}</span>` : ''}
                    </div>
                    <div class="text-[13px] text-gray-600 font-semibold whitespace-nowrap pl-4">${entry.date || ''}</div>
                </div>`;
         innerHTML = `
            <li>
                ${headerHTML}
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

// document.fonts reports loaded before the new metrics apply, so pagination would measure fallback fonts
function whenFontsApplied(families, timeout = 3000) {
    return new Promise(resolve => {
        const mk = ff => {
            const s = document.createElement('span');
            s.style.cssText = 'position:absolute;left:-9999px;top:-9999px;font-size:100px;white-space:nowrap;font-family:' + ff;
            s.textContent = 'CloudSecurityAWSgqpjy0123';
            document.body.appendChild(s);
            return s;
        };
        const t0 = performance.now();
        let remaining = families.length;
        const done = () => { if (--remaining === 0) resolve(); };
        families.forEach(fam => {
            const base = mk('monospace');
            const test = mk('"' + fam + '", monospace');
            const baseWidth = base.getBoundingClientRect().width;
            (function tick() {
                if (test.getBoundingClientRect().width !== baseWidth || performance.now() - t0 > timeout) {
                    base.remove();
                    test.remove();
                    done();
                } else {
                    requestAnimationFrame(tick);
                }
            })();
        });
    });
}

window.onload = async () => {
    await whenFontsApplied(['Open Sans', 'Montserrat']);
    renderPaginated();
    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
    renderPaginated();
};
