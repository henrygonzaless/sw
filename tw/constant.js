
// JSON object
const jsonData = [
    { "id": 1, "name": "GL Lord Vader" },
    { "id": 2, "name": "GL Jedi Master Kenobi" },
    { "id": 3, "name": "GL Jabba" },
    { "id": 4, "name": "GL JML" },
    { "id": 5, "name": "GL Bastilla JML" },
    { "id": 6, "name": "GL Rey" },
    { "id": 7, "name": "GL Kylo" },
    { "id": 8, "name": "GL SEE" },
    { "id": 9, "name": "GL Leia" },
    { "id": 10, "name": "Sith Empire" },
    { "id": 11, "name": "CLS" },
    { "id": 12, "name": "GAS 501st" },
    { "id": 13, "name": "Omi Phasma" },
    { "id": 14, "name": "Starkiller" },
    { "id": 15, "name": "Omi Geos" },
    { "id": 16, "name": "Omi GG" },
    { "id": 17, "name": "Padme" },
    { "id": 18, "name": "Veers Imperial Troopers" },
    { "id": 19, "name": "Nightsisters" },
    { "id": 20, "name": "Maul" },
    { "id": 21, "name": "Kelleran Beq" },
    { "id": 22, "name": "Bounty Hunters" },
    { "id": 23, "name": "Iden Imperial Troopers" },
    { "id": 24, "name": "Phoenix"},
    { "id": 25, "name": "Mon Mothma"},
    { "id": 26, "name": "Grand Inquisitor"},
    { "id": 27, "name": "Cere Junda UFU"},

];

const propertiesData = {
    // LV
    1: { 
        "Hard Counter": "Standard JMK", 
        "Good Counter": "JML with Jedi Knight Cal",
        "Soft Counter": "",
        "Dicey": ""
    },
    // JMK
    2: {
        "Hard Counter": "Standard JMK", 
        "Good Counter": "JML with Jedi Knight Cal",
        "Soft Counter": "",
        "Dicey": ""
    },
    // Jabba
    3: { 
        "Hard Counter": "Standard JMK", 
        "Good Counter": "",
        "Soft Counter": "",
        "Dicey": ""
    },
    // JML
    4: { 
        "Hard Counter": "Inquisitors, SEE", 
        "Good Counter": "",
        "Soft Counter": "",
        "Dicey": ""
    },
    // Bast JML
    5: {
        "Hard Counter": "SEE", 
        "Good Counter": "Inquisitors",
        "Soft Counter": "",
        "Dicey": ""
    },
    // Rey
    6: { 
        "Hard Counter": "JML with JKCK", 
        "Good Counter": "",
        "Soft Counter": "SK(Juhani omicron)",
        "Dicey": ""
    },
    // SLKR
    7: { 
        "Hard Counter": "Standard JML, JMK", 
        "Good Counter": "",
        "Soft Counter": "",
        "Dicey": ""
    },
    // SEE
    8: {
        "Hard Counter": "Standard JMK", 
        "Good Counter": "JML with Jedi Knight Cal, SLKR",
        "Soft Counter": "",
        "Dicey": ""
    },
    // Leia
    9: { 
        "Hard Counter": "GG with (Omi) DDK", 
        "Good Counter": "Standard Leia, Kelleran Beq + Mace",
        "Soft Counter": "",
        "Dicey": ""
    },
    // Sith Empire
    10: { 
        "Hard Counter": "GAS", 
        "Good Counter": "JKL",
        "Soft Counter": "",
        "Dicey": ""
    },
    // CLS
    11: {
        "Hard Counter": "CLS (Faster Han)", 
        "Good Counter": "EP",
        "Soft Counter": "",
        "Dicey": ""
    },
    // GAS
    12: { 
        "Hard Counter": "CLS", 
        "Good Counter": "GAS",
        "Soft Counter": "",
        "Dicey": ""
    },
    // Omi Phasma
    13: { 
        "Hard Counter": "CLS, Raddus", 
        "Good Counter": "GG with DDK Omicron, Hux FO",
        "Soft Counter": "",
        "Dicey": ""
    },
    // SK
    14: {
        "Hard Counter": "CLS", 
        "Good Counter": "",
        "Soft Counter": "",
        "Dicey": ""
    },
    // Geos
    15: { 
        "Hard Counter": "Veers IT, EP/MJ", 
        "Good Counter": "Cere UFU (Omicrons)",
        "Soft Counter": "Mauldalorians (Dark Side)",
        "Dicey": ""
    },
    // Omi DDK
    16: { 
        "Hard Counter": "Sith Empire", 
        "Good Counter": "Shaak Clones, Raddus, JKR",
        "Soft Counter": "Padme, GAS 501st",
        "Dicey": "Veers IT"
    },
    // Padme
    17: {
        "Hard Counter": "Traya (Fast)", 
        "Good Counter": "CLS, Inquisitors (if Heavy Jedi)",
        "Soft Counter": "",
        "Dicey": ""
    },
    // Veers IT
    18: { 
        "Hard Counter": "Raddus", 
        "Good Counter": "CLS, Veers IT",
        "Soft Counter": "",
        "Dicey": ""
    },
    // NS
    19: { 
        "Hard Counter": "", 
        "Good Counter": "GAS, Tuskens, Veers IT",
        "Soft Counter": "Phoenix with Rex, Iden IT, Maul, BH(Fetts)",
        "Dicey": ""
    },
    // Maul
    20: {
        "Hard Counter": "", 
        "Good Counter": "CLS",
        "Soft Counter": "",
        "Dicey": "Traya"
    },
    // KB
    21: { 
        "Hard Counter": "DTMG", 
        "Good Counter": "Nightsisters, Inquisitors, UFU, Malgus SE",
        "Soft Counter": "",
        "Dicey": ""
    },
    // BH
    22: { 
        "Hard Counter": "", 
        "Good Counter": "Finn/Zorii",
        "Soft Counter": "",
        "Dicey": ""
    },
    // Iden IT
    23: {
        "Hard Counter": "GAS, Raddus", 
        "Good Counter": "",
        "Soft Counter": "",
        "Dicey": ""
    },
    // Phoenix
    24: {
        "Hard Counter": "Sith Empire, Starkiller", 
        "Good Counter": "Padme, Cere UFU, Tuskens",
        "Soft Counter": "",
        "Dicey": ""
    },
    // Mon Mothma Rebel Fighters
    25: {
        "Hard Counter": "GAS, CLS, Traya", 
        "Good Counter": "Veers IT",
        "Soft Counter": "Cere UFU, Finn/Zorii",
        "Dicey": ""
    },
    // Inquisitors
    26: {
        "Hard Counter": "Raddus", 
        "Good Counter": "Grand Inquisitor, Nightsisters (Talzin)",
        "Soft Counter": "",
        "Dicey": ""
    },
    27: {
        "Hard Counter": "", 
        "Good Counter": "Sith Empire (Malgus L), Bane Duo",
        "Soft Counter": "",
        "Dicey": ""
    },
};

function populateDropdown() {
    const dropdown = document.getElementById('dropdown')

    // Sort the jsonData alphabetically by the name property
    jsonData.sort((a, b) => a.name.localeCompare(b.name))

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