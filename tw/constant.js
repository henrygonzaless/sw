/* --- PART 1: YOUR EXISTING DATA --- */
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
    { "id": 28, "name": "Reva"},
    { "id": 29, "name": "Queen Amidala"},
    { "id": 30, "name": "Great Mothers"},
    { "id": 31, "name": "Boss Nass"},
    { "id": 32, "name": "GL Ahsoka"},
];

const propertiesData = {
    // Note: Kept your data structure exactly the same
    1: { "Hard Counter": "Standard JMK", "Good Counter": "JML with Jedi Knight Cal", "Soft Counter": "None", "Dicey": "None" },
    2: { "Hard Counter": "Standard JMK", "Good Counter": "JML with Jedi Knight Cal", "Soft Counter": "None", "Dicey": "None" },
    3: { "Hard Counter": "Standard JMK", "Good Counter": "None", "Soft Counter": "None", "Dicey": "None" },
    4: { "Hard Counter": "SEE", "Good Counter": "Inquisitors", "Soft Counter": "None", "Dicey": "None" },
    5: { "Hard Counter": "SEE", "Good Counter": "Inquisitors", "Soft Counter": "None", "Dicey": "None" },
    6: { "Hard Counter": "JML with JKCK", "Good Counter": "None", "Soft Counter": "SK(Juhani omicron)", "Dicey": "None" },
    7: { "Hard Counter": "Standard JML, JMK", "Good Counter": "None", "Soft Counter": "None", "Dicey": "None" },
    8: { "Hard Counter": "Standard JMK", "Good Counter": "JML with Jedi Knight Cal, SLKR", "Soft Counter": "None", "Dicey": "None" },
    9: { "Hard Counter": "None", "Good Counter": "Standard Leia, Kelleran Beq + Mace", "Soft Counter": "None", "Dicey": "None" },
    10: { "Hard Counter": "GAS", "Good Counter": "JKL", "Soft Counter": "None", "Dicey": "None" },
    11: { "Hard Counter": "CLS (Faster Han)", "Good Counter": "EP", "Soft Counter": "None", "Dicey": "None" },
    12: { "Hard Counter": "CLS", "Good Counter": "GAS", "Soft Counter": "None", "Dicey": "None" },
    13: { "Hard Counter": "CLS, Raddus", "Good Counter": "GG with DDK Omicron, Hux FO, Nightsisters", "Soft Counter": "None", "Dicey": "None" },
    14: { "Hard Counter": "CLS", "Good Counter": "None", "Soft Counter": "None", "Dicey": "None" },
    15: { "Hard Counter": "Veers IT, EP/MJ", "Good Counter": "Cere UFU (Omicrons)", "Soft Counter": "Mauldalorians (Dark Side), Omi Boba SoJ", "Dicey": "None" },
    16: { "Hard Counter": "DR Sith Empire)", "Good Counter": "Shaak Clones, Raddus, JKR, Bo Katan Mandalore, Kelleran Beq + Mace", "Soft Counter": "Padme, GAS 501st", "Dicey": "Veers IT" },
    17: { "Hard Counter": "Traya (Fast)", "Good Counter": "CLS, Inquisitors (Heavy Jedi)", "Soft Counter": "None", "Dicey": "None" },
    18: { "Hard Counter": "Raddus", "Good Counter": "CLS, Veers IT", "Soft Counter": "None", "Dicey": "None" },
    19: { "Hard Counter": "None", "Good Counter": "GAS, Tuskens, Veers IT", "Soft Counter": "Phoenix with Rex, Iden IT, Maul, BH(Fetts)", "Dicey": "None" },
    20: { "Hard Counter": "None", "Good Counter": "CLS", "Soft Counter": "None", "Dicey": "Traya" },
    21: { "Hard Counter": "DTMG", "Good Counter": "Nightsisters, Inquisitors, UFU, Malgus SE", "Soft Counter": "None", "Dicey": "None" },
    22: { "Hard Counter": "None", "Good Counter": "Finn/Zorii", "Soft Counter": "None", "Dicey": "None" },
    23: { "Hard Counter": "GAS, Raddus", "Good Counter": "None", "Soft Counter": "None", "Dicey": "None" },
    24: { "Hard Counter": "Sith Empire, Starkiller", "Good Counter": "Padme, Cere UFU, Tuskens", "Soft Counter": "None", "Dicey": "None" },
    25: { "Hard Counter": "GAS, CLS, Traya", "Good Counter": "Veers IT", "Soft Counter": "Cere UFU, Finn/Zorii", "Dicey": "None" },
    26: { "Hard Counter": "Raddus", "Good Counter": "Grand Inquisitor, Nightsisters (Talzin)", "Soft Counter": "None", "Dicey": "Bo Katan Mandalore" },
    27: { "Hard Counter": "None", "Good Counter": "Sith Empire (Malgus L), Bane Duo", "Soft Counter": "None", "Dicey": "None" },
    28: { "Hard Counter": "None", "Good Counter": "Phoenix CRex, Rogue 1, SK + Juhani cron", "Soft Counter": "None", "Dicey": "None" },
    29: { "Hard Counter": "None", "Good Counter": "JMK", "Soft Counter": "GAS 501st", "Dicey": "None" },
    30: { "Hard Counter": "None", "Good Counter": "JMK + Plo Cron", "Soft Counter": "None", "Dicey": "None" },
    31: { "Hard Counter": "None", "Good Counter": "JML, SLKR", "Soft Counter": "None", "Dicey": "None" },
    32: { "Hard Counter": "None", "Good Counter": "GL Leia", "Soft Counter": "None", "Dicey": "None" }
};

/* --- PART 2: THE SMART LOGIC (Room to Grow) --- */

function populateDropdown() {
    const dropdown = document.getElementById('dropdown');
    // We sort it so GLs and regular teams are easy to find
    const sortedData = [...jsonData].sort((a, b) => a.name.localeCompare(b.name));
    
    sortedData.forEach(item => {
        const option = document.createElement('option');
        option.value = item.id;
        option.textContent = item.name;
        dropdown.appendChild(option);
    });
}

function displayIntelligence(id) {
    const grid = document.getElementById('intelligence-grid');
    const data = propertiesData[id];
    
    // Clear the previous search results
    grid.innerHTML = '';

    if (data) {
        // This loop automatically looks for "Hard Counter", "Good Counter", etc.
        for (const [category, value] of Object.entries(data)) {
            
            // Only create a box if the counter isn't empty
            if (value && value.trim() !== "" && value !== "None") {
                const box = document.createElement('div');
                box.className = 'intel-box';
                
                box.innerHTML = `
                    <h3>${category}</h3>
                    <p>${value}</p>
                `;
                
                grid.appendChild(box);
            }
        }
    }
}

// Listen for when the user picks a character
document.getElementById('dropdown').addEventListener('change', function() {
    displayIntelligence(this.value);
});

// Run when the page first loads
window.onload = populateDropdown;