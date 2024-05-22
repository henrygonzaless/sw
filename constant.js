
// JSON object
const jsonData = [
    { "id": 1, "name": "GL Lord Vader" },
    { "id": 2, "name": "GL Jedi Master Kenobi" },
    { "id": 3, "name": "GL Jabba" },
    { "id": 4, "name": "GL JML" },
    { "id": 5, "name": "GL Bastilla JML" },
    { "id": 6, "name": "GL Rey" },
];

const propertiesData = {
    1: { 
        "Hard Counter": "Standard JMK", 
        "Good Counter": "JML with Jedi Knight Cal",
        "Soft Counter": "",
        "Dicey": ""
    },
    2: {
        "Hard Counter": "Standard JMK", 
        "Good Counter": "JML with Jedi Knight Cal",
        "Soft Counter": "",
        "Dicey": ""
    },
    3: { 
        "Hard Counter": "Standard JMK", 
        "Good Counter": "",
        "Soft Counter": "",
        "Dicey": ""
    },
    4: { 
        "Hard Counter": "Inquisitors, SEE", 
        "Good Counter": "",
        "Soft Counter": "",
        "Dicey": ""
    },
    5: {
        "Hard Counter": "SEE", 
        "Good Counter": "Inquisitors",
        "Soft Counter": "",
        "Dicey": ""
    },
    6: { 
        "Hard Counter": "JML w/JKCK", 
        "Good Counter": "SK (No Datacron)",
        "Soft Counter": "",
        "Dicey": ""
    }
};

// Function to populate dropdown
function populateDropdown() {
    const dropdown = document.getElementById('dropdown');
    jsonData.forEach(item => {
        const option = document.createElement('option');
        option.value = item.id;
        option.textContent = item.name;
        dropdown.appendChild(option);
    });
}

// Function to display properties based on selected option
function displayProperties(optionId) {
    const propertiesDiv = document.getElementById('properties');
    propertiesDiv.innerHTML = ''; // Clear previous properties

    const properties = propertiesData[optionId];
    if (properties) {
        for (const key in properties) {
            const propertyDiv = document.createElement('div');
            propertyDiv.textContent = `${key}: ${properties[key]}`;
            propertiesDiv.appendChild(propertyDiv);
        }
    }
}

// Event listener for dropdown change
document.getElementById('dropdown').addEventListener('change', function() {
    const selectedOptionId = this.value;
    displayProperties(selectedOptionId);
});

// Call the function to populate the dropdown when the page loads
window.onload = populateDropdown;