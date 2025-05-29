console.log("script.js loaded");

const productionChains = [
    {
        id: "logging_camp",
        name: "Logging Camp",
        inputs: [],
        output: { good: "Logs", quantity: 160 }, 
        workers: 4,
        upkeep: 50,
        efficiencyUpgrades: {
            "generic_boost": { name: "Productivity Boost", effect_multiplier: 1.25 } // 25% more output
        }
    },
    {
        id: "lumber_mill",
        name: "Lumber Mill",
        inputs: [ { good: "Logs", quantity: 160 } ],
        output: { good: "Planks", quantity: 80 },
        workers: 4,
        upkeep: 75,
        efficiencyUpgrades: {
            "generic_boost": { name: "Productivity Boost", effect_multiplier: 1.25 } // 25% more output
        }
    },
    {
        id: "sugar_plantation",
        name: "Sugar Plantation",
        inputs: [],
        output: { good: "Sugar", quantity: 320 }, // Placeholder
        workers: 8, // Placeholder
        upkeep: 100, // Placeholder
        efficiencyUpgrades: {
            "generic_boost": { name: "Productivity Boost", effect_multiplier: 1.25 }
        }
    },
    {
        id: "rum_distillery",
        name: "Rum Distillery",
        inputs: [ { good: "Sugar", quantity: 320 } ], // Consumes Sugar
        output: { good: "Rum", quantity: 160 },  // Produces Rum
        workers: 6, // Placeholder
        upkeep: 250, // Placeholder
        efficiencyUpgrades: {
            "generic_boost": { name: "Productivity Boost", effect_multiplier: 1.25 }
        }
    },
    {
        id: "tobacco_plantation",
        name: "Tobacco Plantation",
        inputs: [],
        output: { good: "Tobacco", quantity: 240 }, // Placeholder
        workers: 6, // Placeholder
        upkeep: 120, // Placeholder
        efficiencyUpgrades: {
            "generic_boost": { name: "Productivity Boost", effect_multiplier: 1.25 }
        }
    },
    {
        id: "cigar_factory",
        name: "Cigar Factory",
        inputs: [ { good: "Tobacco", quantity: 240 } ], // Consumes Tobacco
        output: { good: "Cigars", quantity: 120 }, // Produces Cigars
        workers: 8, // Placeholder
        upkeep: 300, // Placeholder
        efficiencyUpgrades: {
            "generic_boost": { name: "Productivity Boost", effect_multiplier: 1.25 }
        }
    }
    // More chains will be added here
];

function populateProductionChainSelector() {
    const selectElement = document.getElementById('production-chain-select');
    if (!selectElement) {
        console.error("Production chain select element not found!");
        return;
    }

    // Clear existing options before repopulating (optional, but good practice if this function could be called multiple times)
    // selectElement.innerHTML = ''; 

    productionChains.forEach(chain => {
        const option = document.createElement('option');
        option.value = chain.id;
        option.textContent = chain.name;
        selectElement.appendChild(option);
    });
}

function calculateProduction() {
    console.log("calculateProduction function called");

    const chainId = document.getElementById('production-chain-select').value;
    const workersInput = document.getElementById('workers-input').value;
    const desiredOutputInput = document.getElementById('desired-output-input').value;
    const efficiencyToggle = document.getElementById('efficiency-toggle').checked; // Check if toggle is on
    const resultDisplay = document.getElementById('result-display');

    if (!chainId) {
        resultDisplay.textContent = "Please select a production chain.";
        return;
    }

    const selectedChain = productionChains.find(chain => chain.id === chainId);
    if (!selectedChain) {
        resultDisplay.textContent = "Error: Selected production chain not found.";
        console.error("Selected chain ID not found in productionChains:", chainId);
        return;
    }

    const numWorkers = parseInt(workersInput);
    const numDesiredOutput = parseInt(desiredOutputInput);

    let baseOutputQuantity = selectedChain.output.quantity;
    let appliedEfficiencyText = "";

    if (efficiencyToggle && selectedChain.efficiencyUpgrades && selectedChain.efficiencyUpgrades.generic_boost) {
        baseOutputQuantity *= selectedChain.efficiencyUpgrades.generic_boost.effect_multiplier;
        appliedEfficiencyText = ` (with ${selectedChain.efficiencyUpgrades.generic_boost.name})`;
    }

    let calculationPerformed = false;
    let htmlResult = `<p>For the <strong>${selectedChain.name}</strong> chain${appliedEfficiencyText}:</p>`;

    // Calculation based on Desired Output
    if (!isNaN(numDesiredOutput) && numDesiredOutput > 0) {
        if (!selectedChain.output || baseOutputQuantity <= 0) {
            htmlResult += "<p>This chain does not produce output or output quantity is zero (even with upgrades), so cannot calculate based on desired output.</p>";
        } else {
            const buildingsNeededForOutput = Math.ceil(numDesiredOutput / baseOutputQuantity);
            const workersNeededForOutput = buildingsNeededForOutput * selectedChain.workers;
            htmlResult += `
                <p>To produce <strong>${numDesiredOutput} ${selectedChain.output.good}</strong>, you would need:</p>
                <ul>
                    <li>Approximately <strong>${buildingsNeededForOutput}</strong> building(s).</li>
                    <li>A total of <strong>${workersNeededForOutput}</strong> worker(s).</li>
                </ul>
            `;
        }
        calculationPerformed = true;
    } 
    // Calculation based on Available Workers
    else if (!isNaN(numWorkers) && numWorkers >= 0) {
        if (selectedChain.workers === 0) {
            htmlResult += `<p>The ${selectedChain.name} does not require workers directly. Cannot calculate buildings based on workers.</p>`;
        } else {
             const buildingsFromWorkers = Math.floor(numWorkers / selectedChain.workers);
             const outputFromWorkers = buildingsFromWorkers * baseOutputQuantity; // Use modified output
             htmlResult += `
                <p>With <strong>${numWorkers}</strong> worker(s), you can staff approximately <strong>${buildingsFromWorkers}</strong> building(s).</p>
                <p>This would produce approximately <strong>${outputFromWorkers.toFixed(2)} ${selectedChain.output.good}</strong>.</p>
             `;
        }
        calculationPerformed = true;
    }

    if (!calculationPerformed) {
        resultDisplay.textContent = "Please enter a valid number of workers or a desired output quantity.";
        return;
    }

    resultDisplay.innerHTML = htmlResult;
}

// Modify window.onload to also attach the event listener after the DOM is loaded
window.onload = function() {
    console.log("Window loaded. Populating production chain selector and attaching event listeners.");
    populateProductionChainSelector();

    const calculateButton = document.getElementById('calculate-button');
    if (calculateButton) {
        calculateButton.addEventListener('click', calculateProduction);
    } else {
        console.error("Calculate button not found!");
    }
};
