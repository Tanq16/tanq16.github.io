// Theme toggle functionality
function toggleTheme() {
    const html = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Toggle icon
    themeIcon.className = newTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
}

// Set initial theme based on user's preference
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const themeIcon = document.getElementById('theme-icon');
    
    let theme = 'light';
    if (savedTheme) {
        theme = savedTheme;
    } else if (prefersDark) {
        theme = 'dark';
    }
    
    document.documentElement.setAttribute('data-theme', theme);
    themeIcon.className = theme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
}

// Initialize theme on page load
initializeTheme();

function calculateSplit() {
    // Get input values
    const amountList = document.getElementById('costInput').value;
    const total = parseFloat(document.getElementById('totalInput').value);
    
    // Validate inputs
    if (!amountList || !total || isNaN(total)) {
        document.getElementById('result').innerHTML = '<p style="color: var(--accent-color);">Please enter valid inputs</p>';
        return;
    }
    
    // Initialize variables
    const splitDict = {};
    const common = [];
    let totalPre = 0.0;
    
    // Parse the input string
    const peopleSplits = amountList.split(', ');
    
    // Process each split
    peopleSplits.forEach(split => {
        const [people, amount] = split.split('-');
        
        // Check if it's a shared cost
        if (people.includes('.')) {
            common.push([people, amount]);
            return;
        }
        
        // Add individual costs
        if (splitDict[people]) {
            splitDict[people] += parseFloat(amount);
        } else {
            splitDict[people] = parseFloat(amount);
        }
        totalPre += parseFloat(amount);
    });
    
    // Process shared costs
    const finalCommon = {};
    common.forEach(([people, amount]) => {
        const peopleList = people.split('.').sort();
        const perPerson = parseFloat(amount) / peopleList.length;
        
        // Add to final common list
        const key = peopleList.join('.');
        if (finalCommon[key]) {
            finalCommon[key] += perPerson;
        } else {
            finalCommon[key] = perPerson;
        }
        
        // Add to individual totals
        peopleList.forEach(person => {
            if (splitDict[person]) {
                splitDict[person] += perPerson;
            } else {
                splitDict[person] = perPerson;
            }
            totalPre += perPerson;
        });
    });
    
    // Calculate final amounts with tax/discount adjustment
    let result = '<h3>Individual Amounts</h3>';
    let computedTotal = 0;
    
    // Calculate individual amounts
    for (const person in splitDict) {
        const amount = splitDict[person];
        const finalAmount = (amount * total / totalPre).toFixed(2);
        computedTotal += parseFloat(finalAmount);
        result += `<p><strong>${person}:</strong> $${finalAmount}</p>`;
    }
    
    // Adjust for rounding errors
    const difference = (total - computedTotal).toFixed(2);
    if (difference !== '0.00') {
        const firstPerson = Object.keys(splitDict)[0];
        const adjustedAmount = (parseFloat(splitDict[firstPerson] * total / totalPre) + parseFloat(difference)).toFixed(2);
        result = result.replace(`<strong>${firstPerson}:</strong> $${(splitDict[firstPerson] * total / totalPre).toFixed(2)}`,
                              `<strong>${firstPerson}:</strong> $${adjustedAmount}`);
    }
    
    // Add shared amounts
    if (Object.keys(finalCommon).length > 0) {
        result += '<hr><h3>Shared Amounts (per person)</h3>';
        for (const group in finalCommon) {
            const amount = finalCommon[group];
            result += `<p><strong>${group}:</strong> $${(amount * total / totalPre).toFixed(2)}</p>`;
        }
    }
    
    // Display results
    document.getElementById('result').innerHTML = result;
}
