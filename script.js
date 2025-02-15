// Sample Pokémon data structure (could be fetched from API or database)
const pokemons = [
    { name: "Pikachu", typ1: "electric", typ2: "flying", form: "Mega", pre_evo: "Raichu", post_evo: "", evo_typ: "LeveUp", generation: 1 },
    { name: "Bulbasaur", typ1: "grass", typ2: "poison", form: "Aloa", pre_evo: "", post_evo: "Ivysaur", evo_typ: "LeveUp", generation: 1 },
    { name: "Charmander", typ1: "fire", typ2: "", form: "Mega", pre_evo: "", post_evo: "Charmeleon", evo_typ: "LeveUp", generation: 1 },
    // Add more data here
];

// Initialize all filters to be active
let filters = {
    typ1: [],
    typ2: [],
    form: [],
    pre_evo: false,
    post_evo: false,
    evo_typ: [],
    generation: 1
};

// Event listener for Generation Dropdown
$('#generation').on('change', function() {
    filters.generation = parseInt(this.value);
    filterPokemons();
});

// Event listeners for Typ1 and Typ2 Buttons
$(".btn-group button").on('click', function() {
    const buttonId = $(this).attr('id');
    const [type, filter] = buttonId.split('-');

    if (type === 'typ1' || type === 'typ2') {
        toggleFilter(type, filter);
    } else if (type === 'form') {
        toggleFilter('form', filter);
    } else if (type === 'evo-type') {
        toggleFilter('evo_typ', filter);
    }
    filterPokemons();
});

// Event listeners for Pre_evo and Post_evo checkboxes
$('#pre-evo').on('change', function() {
    filters.pre_evo = this.checked;
    filterPokemons();
});
$('#post-evo').on('change', function() {
    filters.post_evo = this.checked;
    filterPokemons();
});

// Toggle filter in array or boolean values
function toggleFilter(type, value) {
    if (filters[type].includes(value)) {
        filters[type] = filters[type].filter(item => item !== value);
        $(`#${type}-${value}`).removeClass('btn-secondary').addClass('btn-primary');
    } else {
        filters[type].push(value);
        $(`#${type}-${value}`).removeClass('btn-primary').addClass('btn-secondary');
    }
}

// Filter function
function filterPokemons() {
    let filteredPokemons = pokemons.filter(pokemon => {
        // Typ1 and Typ2 filters
        const typ1Match = filters.typ1.length === 0 || filters.typ1.includes(pokemon.typ1);
        const typ2Match = filters.typ2.length === 0 || filters.typ2.includes(pokemon.typ2);

        // Form filter
        const formMatch = filters.form.length === 0 || filters.form.includes(pokemon.form);

        // Pre_evo and Post_evo filters
        const preEvoMatch = filters.pre_evo ? pokemon.pre_evo !== "" : true;
        const postEvoMatch = filters.post_evo ? pokemon.post_evo !== "" : true;

        // Evo Typ filter
        const evoTypMatch = filters.evo_typ.length === 0 || filters.evo_typ.includes(pokemon.evo_typ);

        // Generation filter
        const generationMatch = pokemon.generation <= filters.generation;

        return typ1Match && typ2Match && formMatch && preEvoMatch && postEvoMatch && evoTypMatch && generationMatch;
    });

    displayResults(filteredPokemons);
}

// Display results
function displayResults(filteredPokemons) {
    const resultsDiv = $('#results');
    resultsDiv.empty();

    filteredPokemons.forEach(pokemon => {
        resultsDiv.append(`<div>${pokemon.name} - Typ1: ${pokemon.typ1}, Typ2: ${pokemon.typ2}, Form: ${pokemon.form}</div>`);
    });
}

// Initial filtering
filterPokemons();
