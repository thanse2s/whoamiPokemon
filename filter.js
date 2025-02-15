import {pokemonData} from "./pokemon.js";

const maxSize = Math.max(pokemonData.map(poke => poke.Hight));
const maxWeight = Math.max(pokemonData.map(poke => poke.Gewicht));


console.log(maxWeight);
console.log(maxWeight);
console.log("HelloWorld!");
console(pokemonData);

document.getElementById("max-weight").value = maxWeight;
document.getElementById("max-height").value = maxSize;