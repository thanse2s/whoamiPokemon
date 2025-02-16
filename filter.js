import { pokemon } from "./pokemon.js";

const maxSize = Math.max(...pokemon.map(poke => parseFloat(poke.Hight)));
const maxWeight = Math.max(...pokemon.map(poke => parseFloat(poke.Gewicht)));


console.log(maxWeight);
console.log(maxWeight);
console.log("HelloWorld!");
console.log(pokemon);

document.getElementById("max-weight").value = maxWeight;
document.getElementById("max-height").value = maxSize;