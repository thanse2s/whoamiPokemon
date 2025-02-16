import { pokemonList } from "./pokemonlist.js";

const maxSize = Math.max(...pokemonList.map(poke => poke.Hight));
const maxWeight = Math.max(...pokemonList.map(poke => poke.Gewicht));
const minSize = Math.min(...pokemonList.map(poke => poke.Hight));
const minWeight = Math.min(...pokemonList.map(poke => poke.Gewicht));

//Set max an min Value Weight and Size
document.getElementById("max-weight").value = maxWeight;
document.getElementById("max-height").value = maxSize;
document.getElementById("min-weight").value = minWeight;
document.getElementById("min-height").value = minSize;


let filterList = [...pokemonList];

function showUpList(){

    let tableHTML = `<table border="1"><tr>`

    Object.keys(filterList[0]).forEach(key=>{
        tableHTML += `<th>${key}</th>`
    });

    tableHTML += `</tr>`




}
showUpList()