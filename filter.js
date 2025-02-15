import {pokemonData} from "./pokemon.js";

const maxSize = Math.max(pokemonData.map(poke => poke.Hight));
const maxWeight = Math.max(pokemonData.map(poke => poke.Gewicht));

document.getElementById("max-weight").value=maxWeight;
document.getElementById("max-height").value=maxSize;