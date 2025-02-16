import { pokemon } from "./pokemon.js";

const maxSize = Math.max(...pokemon.map(poke => parseFloat(poke.Hight)));
const maxWeight = Math.max(...pokemon.map(poke => parseFloat(poke.Gewicht)));
const minSize = Math.min(...pokemon.map(poke => parseFloat(poke.Hight)));
const minWeight = Math.min(...pokemon.map(poke => parseFloat(poke.Gewicht)));

console.log(minSize);
console.log(minWeight);

//Set max an min Value Weight and Size
document.getElementById("max-weight").value = maxWeight;
document.getElementById("max-height").value = maxSize;
document.getElementById("min-weight").value = minWeight;
document.getElementById("min-height").value = minSize;

