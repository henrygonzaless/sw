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
    1: { "CMs": "Standard Padme, JMK + CAT, GL Leia, MM + Luthen, GLAT", "SMs":"JML + JKL + HYoda + Old Ben + GMY, Mace + Kit + JMK + Shaak + GMY", "Ships": "Standard Profundity/Home One" },
    2: { "CMs": "Veers (IT), Cere UFUs, LS Mandos, JMMW", "SMs":"Standard Jabba, Standard Dr. Aphra, Scoundrels + GL Rey", "Ships": "Standard Executor" },
    3: { "CMs": "SLKR (Top), Inquisitors, EP + Wat + SE, Great Mothers, Enoch Remnants", "SMs":"LV", "Ships": "Executrix with Sith Fighter/MK6" },
    4: { "CMs": "JKL + JML Jedi", "SMs":"Cere, Jedi Knight Cal Kestis", "Ships": "Standard Profundity" },
    5: { "CMs": "Standard JML + JKA, CLS Rebels, Rey + UfU", "SMs":"Standard Jabba", "Ships": "Standard Executor" },
    6: { "CMs": "SLKR (Nexu), Inquisitors (Acklay), SEE + Wat (Reek), Bane + Wat (Reek)", "SMs": "Standard LV" },
    7: { "CMs": "JKL + JML jedi", "Ships": "Standard Profundity" },
    8: { "CMs": "JML Jedi, GAS 501st, GL Rey, Kelleran + GR", "SMs":"GI Inquisitors, JMK + Fennec, Standard Jabba", "Ships": "Standard Executor" }
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
                        `<div style="margin-bottom: 5px; display: block;">• ${item.trim()}</div>`
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