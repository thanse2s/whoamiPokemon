import { pokemon } from "./pokemon.js";

let maxSize = Math.max(pokemon.map(poke => poke.Hight));
let maxWeight = Math.max(pokemon.map(poke => poke.Gewicht));


console.log(maxWeight);
console.log(maxWeight);
console.log("HelloWorld!");
console.log(pokemon);

document.getElementById("max-weight").value = maxWeight;
document.getElementById("max-height").value = maxSize;