// Beispiel-Daten
const pokemonData = [
    { name: 'Pikachu', typ1: 'electric', typ2: 'fighting', form: 'Mega', pre_evo: '', post_evo: 'Raichu', evo_typ: 'LevelUp', generation: 1, size: 0.4, weight: 6 },
    { name: 'Bulbasaur', typ1: 'leaf', typ2: 'poison', form: 'Aloa', pre_evo: '', post_evo: 'Ivysaur', evo_typ: 'LevelUp', generation: 1, size: 0.7, weight: 6.9 },
    { name: 'Squirtle', typ1: 'water', typ2: '', form: 'Mega', pre_evo: '', post_evo: 'Wartortle', evo_typ: 'LevelUp', generation: 1, size: 0.5, weight: 9 },
    // Füge hier mehr Pokémon hinzu
];

let filteredData = [...pokemonData];

// Maximalwerte für Größe und Gewicht ermitteln
const maxSize = Math.max(...pokemonData.map(pokemon => pokemon.size));
const maxWeight = Math.max(...pokemonData.map(pokemon => pokemon.weight));

// Setze Maximalwerte in die Felder
document.getElementById('maxSize').value = maxSize;
document.getElementById('maxWeight').value = maxWeight;

// Filter Funktionen
function filterByType(type) {
    filteredData = pokemonData.filter(pokemon => pokemon.typ1 === type || pokemon.typ2 === type);
    renderFilteredData();
}

function filterByForm(form) {
    filteredData = pokemonData.filter(pokemon => pokemon.form === form);
    renderFilteredData();
}

function filterByPreEvo() {
    filteredData = pokemonData.filter(pokemon => pokemon.pre_evo !== '');
    renderFilteredData();
}

function filterByPostEvo() {
    filteredData = pokemonData.filter(pokemon => pokemon.post_evo !== '');
    renderFilteredData();
}

function filterByEvoType(evoType) {
    filteredData = pokemonData.filter(pokemon => pokemon.evo_typ === evoType);
    renderFilteredData();
}

function filterByGeneration(gen) {
    filteredData = pokemonData.filter(pokemon => pokemon.generation <= gen);
    renderFilteredData();
}

function filterBySize() {
    const minSize = parseFloat(document.getElementById('minSize').value) || 0;
    const maxSize = parseFloat(document.getElementById('maxSize').value) || maxSize;
    filteredData = pokemonData.filter(pokemon => pokemon.size >= minSize && pokemon.size <= maxSize);
    renderFilteredData();
}

function filterByWeight() {
    const minWeight = parseFloat(document.getElementById('minWeight').value) || 0;
    const maxWeight = parseFloat(document.getElementById('maxWeight').value) || maxWeight;
    filteredData = pokemonData.filter(pokemon => pokemon.weight >= minWeight && pokemon.weight <= maxWeight);
    renderFilteredData();
}

// Rendering der gefilterten Daten
function renderFilteredData() {
    const resultContainer = document.getElementById('filteredResults');
    resultContainer.innerHTML = ''; // Clear previous results
    filteredData.forEach(pokemon => {
        const pokemonDiv = document.createElement('div');
        pokemonDiv.textContent = `${pokemon.name} - Größe: ${pokemon.size}m, Gewicht: ${pokemon.weight}kg`;
        resultContainer.appendChild(pokemonDiv);
    });
}

// Event Listener für Button-Klicks
document.getElementById('filterFire').addEventListener('click', () => filterByType('fire'));
document.getElementById('filterWater').addEventListener('click', () => filterByType('water'));
document.getElementById('filterLeaf').addEventListener('click', () => filterByType('leaf'));
document.getElementById('filterBug').addEventListener('click', () => filterByType('bug'));
// Füge hier weitere Event Listener für andere Typen hinzu

document.getElementById('filterMega').addEventListener('click', () => filterByForm('Mega'));
document.getElementById('filterAloa').addEventListener('click', () => filterByForm('Aloa'));
document.getElementById('filterGala').addEventListener('click', () => filterByForm('Gala'));

document.getElementById('filterLevelUp').addEventListener('click', () => filterByEvoType('LevelUp'));
document.getElementById('filterTrade').addEventListener('click', () => filterByEvoType('Trade'));
document.getElementById('filterItem').addEventListener('click', () => filterByEvoType('Item'));
document.getElementById('filterFriendship').addEventListener('click', () => filterByEvoType('Friendship'));

document.getElementById('generationFilter').addEventListener('change', (e) => {
    const gen = parseInt(e.target.value);
    filterByGeneration(gen);
});

document.getElementById('minSize').addEventListener('input', filterBySize);
document.getElementById('maxSize').addEventListener('input', filterBySize);
document.getElementById('minWeight').addEventListener('input', filterByWeight);
document.getElementById('maxWeight').addEventListener('input', filterByWeight);

// Initial Rendering
renderFilteredData();
