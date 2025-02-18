
// JSON object
const jsonData = [
    { "id": 1, "name": "Coruscant (LS)" },
    { "id": 2, "name": "Corellia (NS)" },
    { "id": 3, "name": "Mustafar (DS)" },
    { "id": 4, "name": "Bracca (LS)" },
    { "id": 5, "name": "Felucia (NS)" },
    { "id": 6, "name": "Geonosis (DS)" },
    { "id": 7, "name": "Kashyyyk (LS)" },
    { "id": 8, "name": "Tatooine (NS)" },
    { "id": 9, "name": "Dathomir (DS)" },
    { "id": 10, "name": "Lothal (LS)" },
    { "id": 11, "name": "Kessel (NS)" },
    { "id": 12, "name": "Haven-Class Medical Station (DS)" },
];

const propertiesData = {
    // Coruscant
    1: { 
        "CMs": "Standard Padme, JMK + CAT, GL Leia, MM + Luthen",
        "SMs":"JML, JKL, HYoda, Old Ben, GMY",
        "Ships": "Standard Profundity/Home One"
    },
    // Corellia
    2: { 
        "CMs": "Veers (IT), Cere UFUs, LS Mandos",
        "SMs":"Standard Jabba, Dr. Aphra, Scoundres + GL Rey + JKCK + Malak",
        "Ships": "Standard Executor"
    },
    // Mustafar (DS)
    3: { 
        "CMs": "SLKR (top most), Inquisitors (Left), EP + Wat + SE, Great Mothers",
        "SMs":"LV",
        "Ships": "Executrix with Sith Fighter/MK6"
    },
    // Bracca (LS)
    4: { 
        "CMs": "JKL + JML Jedi",
        "SMs":"Cere, Jedi Knight Cal Kestis",
        "Ships": "Standard Profundity"
    },
    // Felucia (NS)
    5: { 
        "CMs": "Standard JML + JKA, CLS Rebels, Rey + UfU",
        "SMs":"Standard Jabba",
        "Ships": "Standard Executor"
    },
    // Geonosis (DS)
    6: { 
        "CMs": "SLKR (Nexu), Inquisitors (Acklay), SEE + Wat (Reek), Bane + Wat (Reek)",
        "SMs": "Standard LV",
        "Ships": ""
    },
    // Kashyyyk (LS)
    7: { 
        "CMs": "JKL + JML jedi",
        "SMs":"",
        "Ships": "Standard Profundity"
    },
    // Tatooine (NS)
    8: { 
        "CMs": "JML Jedi, GAS 501st, GL Rey, Kelleran + GR",
        "SMs":"GI Inquisitors, JMK + Fennec, Standard Jabba",
        "Ships": "Standard Executor"
    },
    // Dathomir (DS)
    9: { 
        "CMs": "",
        "SMs": "",
        "Ships": ""
    },
    // Lothal (LS)
    10: { 
        "CMs": "",
        "SMs":"",
        "Ships": "Standard Profundity"
    },
    // Kessel (NS)
    11: { 
        "CMs": "",
        "SMs":"",
        "Ships": ""
    },
    // Haven-Class Medical Station (DS)
    12: { 
        "CMs": "",
        "SMs": "",
        "Ships": ""
    },
};

function populateDropdown() {
    const dropdown = document.getElementById('dropdown')

    // Sort the jsonData alphabetically by the name property
    // jsonData.sort((a, b) => a.name.localeCompare(b.name))

    jsonData.forEach(item => {
        const option = document.createElement('option')
        option.value = item.id
        option.textContent = item.name
        dropdown.appendChild(option)
    });
}

// Function to initialize table headers based on propertiesData keys
function initializeTableHeaders() {
    const tableHeaders = document.getElementById('tableHeaders')
    const firstKey = Object.keys(propertiesData)[0]
    if (firstKey) {
        const properties = propertiesData[firstKey]
        for (const key in properties) {
            const th = document.createElement('th')
            th.textContent = key
            tableHeaders.appendChild(th)
        }
    }
}

// Function to display properties in table based on selected option
function displayProperties(optionId) {
    const tableValues = document.getElementById('tableValues')
    tableValues.innerHTML = ''

    const properties = propertiesData[optionId]
    if (properties) {
        for (const key in properties) {
            const td = document.createElement('td')
            td.textContent = properties[key]
            tableValues.appendChild(td)
        }
    }
}

// Event listener for dropdown change
document.getElementById('dropdown').addEventListener('change', function() {
    const selectedOptionId = this.value
    displayProperties(selectedOptionId)
});

// Call the function to populate the dropdown and initialize the table headers when the page loads
window.onload = function() {
    populateDropdown()
    initializeTableHeaders()
};