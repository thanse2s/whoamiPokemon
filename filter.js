import { pokemonList } from "./pokemonlist.js";

const maxSize = parseFloat(Math.max(...pokemonList.map(poke => poke.Hight)));
const maxWeight = parseFloat(Math.max(...pokemonList.map(poke => poke.Gewicht)));
const minSize = parseFloat(Math.min(...pokemonList.map(poke => poke.Hight)));
const minWeight = parseFloat(Math.min(...pokemonList.map(poke => poke.Gewicht)));

console.log(minSize);
console.log(minWeight);

//Set max an min Value Weight and Size
document.getElementById("max-weight").value = maxWeight;
document.getElementById("max-height").value = maxSize;
document.getElementById("min-weight").value = minWeight;
document.getElementById("min-height").value = minSize;

