function calculateSplit() {
    const amountList = document.getElementById('costInput').value;
    const total = parseFloat(document.getElementById('totalInput').value);
    
    if (!amountList || !total || isNaN(total)) {
        document.getElementById('result').innerHTML = `
            <div class="text-center py-10">
                <i class="fas fa-exclamation-circle text-4xl text-red mb-3"></i>
                <p class="text-sm text-red font-medium">Please enter valid inputs</p>
            </div>
        `;
        return;
    }
    
    const splitDict = {};
    const common = [];
    let totalPre = 0.0;
    
    const peopleSplits = amountList.split(', ');
    
    peopleSplits.forEach(split => {
        const [people, amount] = split.split('-');
        
        if (people.includes('.')) {
            common.push([people, amount]);
            return;
        }
        
        if (splitDict[people]) {
            splitDict[people] += parseFloat(amount);
        } else {
            splitDict[people] = parseFloat(amount);
        }
        totalPre += parseFloat(amount);
    });
    
    const finalCommon = {};
    common.forEach(([people, amount]) => {
        const peopleList = people.split('.').sort();
        const perPerson = parseFloat(amount) / peopleList.length;
        
        const key = peopleList.join('.');
        if (finalCommon[key]) {
            finalCommon[key] += perPerson;
        } else {
            finalCommon[key] = perPerson;
        }
        
        peopleList.forEach(person => {
            if (splitDict[person]) {
                splitDict[person] += perPerson;
            } else {
                splitDict[person] = perPerson;
            }
            totalPre += perPerson;
        });
    });
    
    let result = `
        <div class="space-y-6">
            <div>
                <h3 class="text-lg font-bold text-mauve mb-3 flex items-center">
                    <i class="fas fa-user-circle mr-2 text-sm"></i>Individual Amounts
                </h3>
                <div class="space-y-2">
    `;
    let computedTotal = 0;
    
    for (const person in splitDict) {
        const amount = splitDict[person];
        const finalAmount = (amount * total / totalPre).toFixed(2);
        computedTotal += parseFloat(finalAmount);
        result += `
            <div class="bg-surface0/30 rounded-lg p-3 hover:bg-surface0/50 transition-colors duration-200 flex justify-between items-center">
                <span class="font-medium text-text flex items-center">
                    <i class="fas fa-circle text-green text-xs mr-2"></i>${person}
                </span>
                <span class="text-xl font-bold text-green">$${finalAmount}</span>
            </div>
        `;
    }
    
    result += '</div></div>';
    
    const difference = (total - computedTotal).toFixed(2);
    if (difference !== '0.00') {
        const firstPerson = Object.keys(splitDict)[0];
        const adjustedAmount = (parseFloat(splitDict[firstPerson] * total / totalPre) + parseFloat(difference)).toFixed(2);
        const originalAmount = (splitDict[firstPerson] * total / totalPre).toFixed(2);
        result = result.replace(
            `<span class="text-2xl font-bold text-green">$${originalAmount}</span>`,
            `<span class="text-2xl font-bold text-green">$${adjustedAmount}</span>`
        );
    }
    
    if (Object.keys(finalCommon).length > 0) {
        result += `
            <div>
                <h3 class="text-lg font-bold text-blue mb-3 flex items-center">
                    <i class="fas fa-users mr-2 text-sm"></i>Shared Amounts (per person)
                </h3>
                <div class="space-y-2">
        `;
        for (const group in finalCommon) {
            const amount = finalCommon[group];
            const people = group.split('.');
            result += `
                <div class="bg-surface0/30 rounded-lg p-3 hover:bg-surface0/50 transition-colors duration-200">
                    <div class="flex justify-between items-center mb-2">
                        <span class="font-medium text-text">${group}</span>
                        <span class="text-lg font-bold text-yellow">$${(amount * total / totalPre).toFixed(2)}</span>
                    </div>
                    <div class="flex flex-wrap gap-1.5 text-xs text-subtext0">
                        ${people.map(p => `<span class="bg-surface0/50 px-2 py-0.5 rounded"><i class="fas fa-user text-blue mr-1"></i>${p}</span>`).join('')}
                    </div>
                </div>
            `;
        }
        result += '</div></div>';
    }
    
    result += `
            <div class="bg-gradient-to-r from-mauve/20 to-blue/20 rounded-lg p-4">
                <div class="flex justify-between items-center">
                    <span class="font-semibold text-text flex items-center">
                        <i class="fas fa-receipt mr-2 text-mauve text-sm"></i>Total Bill
                    </span>
                    <span class="text-2xl font-bold text-mauve">$${total.toFixed(2)}</span>
                </div>
            </div>
        </div>
    `;
    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = result;
    resultDiv.classList.add('fade-in');
}
