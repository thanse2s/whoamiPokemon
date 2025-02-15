import {pokemonData} from "./pokemon.js";

const maxSize = Math.max(pokemonData.map(poke => poke.Größe));
const maxWeight = Math.max(pokemonData.map(poke => poke.Gewicht));

Console.log(maxSize, maxWeight)