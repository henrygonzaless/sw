const jsonData = [
    // phase 1
    { "id": 1, "name": "Coruscant (LS)" },
    { "id": 2, "name": "Corellia (NS)" },
    { "id": 3, "name": "Mustafar (DS)" },
    // phase 2
    { "id": 4, "name": "Bracca (LS)" },
    { "id": 5, "name": "Felucia (NS)" },
    { "id": 6, "name": "Geonosis (DS)" },
    // phase 3
    { "id": 7, "name": "Zeffo (LS)" },
    { "id": 8, "name": "Kashyyyk (LS)" },
    { "id": 9, "name": "Tatooine (NS)" },
    { "id": 10, "name": "Dathomir (DS)" },
    // phase 4
    { "id": 11, "name": "Lothal (LS)" },
    { "id": 12, "name": "Kessel (NS)" },
    { "id": 13, "name": "Haven-Class Medical Station (DS)" },
];

const propertiesData = {
    // phase 1
    1: { "CMs": "Standard Padme, JMK + CAT, GL Leia, MM + Luthen, GLAT", "SMs":"JML Jedi, Mace + Kit + JMK + Shaak + GMY", "Ships": "Standard Profundity/Home One" },
    2: { "CMs": "Veers (IT), Cere UFUs, LS Mandos, JMMW", "SMs":"Standard Jabba, Standard Dr. Aphra, Scoundrels + GL Rey", "Ships": "Standard Executor" },
    3: { "CMs": "SLKR (Top), Inquisitors, EP + Wat + SE, Great Mothers, Enoch Remnants", "SMs":"LV", "Ships": "Executrix with Sith Fighter/MK6" },
    // phase 2
    4: { "CMs": "JMMW, GL Leia", "SMs":"Cere & Jedi Knight Cal Kestis, JKL + JML Jedi", "Ships": "Standard Profundity" },
    5: { "CMs": "LV + Clones", "SMs":"Standard Jabba, Rey + Hondo, SEE + Young Lando", "Ships": "Standard Executor" },
    6: { "CMs": "SLKR (Nexu), Inquisitors (Acklay), Enoch Remnants (Reek)", "SMs": "Standard Geos", "Ships": "Standard Leviathan" },
    // phase 3
    7: { "CMs": "Standard JMK", "SMs": "JKCK + JML Jedi, Rex + Clones, Rey UFUs", "Ships": "Standard Negotiator" },
    8: { "CMs": "JMMW, GL Leia", "Ships": "Standard Profundity" },
    9: { "CMs": "JML Jedi, LV Clones, GL Rey", "SMs":"GI Inquisitors, SLKR + Fennec, Standard Jabba, BKM Mandos", "Ships": "Standard Executor" },
    10: { "CMs": "DR + SEE, Enoch Remnants", "SMs":"LV Clones, Aphra + DDK + Wampa + Piett + DV, GM", "Ships": "Standard Executor" },
    // phase 4
    11: { "CMs": "GLAT, JMK", "Ships": "Standard Negotiator" },
    12: { "CMs": "Padme + Ezra + GK + CAT + Snips", "SMs":"Jabba", "Ships": "Standard Executor" },
    13: { "CMs": "Enoch Remnants", "SMs":"Inquisitors Clones" },
};

function init() {
    const dropdown = document.getElementById('planet-dropdown');
    jsonData.forEach(item => {
        const opt = document.createElement('option');
        opt.value = item.id;
        opt.textContent = item.name;
        dropdown.appendChild(opt);
    });
    dropdown.addEventListener('change', (e) => {
        const grid = document.getElementById('planet-grid');
        const data = propertiesData[e.target.value];
        grid.innerHTML = '';
        
        if (data) {
            Object.entries(data).forEach(([key, val]) => {
                if (val) {
                    const box = document.createElement('div');
                    box.className = 'planet-box';

                    // THE NEW LOGIC:
                    // 1. Split by comma
                    // 2. Map each item to a <div> with some padding
                    // 3. Join them together
                    const formattedValue = val.split(',').map(item => 
                        `<div style="margin-bottom: 5px; display: block;"> ${item.trim()}</div>`
                    ).join('');

                    box.innerHTML = `
                        <h3>${key}</h3>
                        <div class="box-content">${formattedValue}</div>
                    `;
                    grid.appendChild(box);
                }
            });
        }
    });
}

window.onload = init;