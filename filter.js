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
let tableBody = document.getElementById("tableBody");




function genFilter(gen){
    filterList = pokemonList.filter(pokemon => pokemon.Gewicht === gen)
    showUpList();
}


document.getElementById("select_gen").addEventListener('change',(e)=>{
    const gen = parseInt(e.target.value);
    genFilter(gen);
});


function showUpList(){

    let tableHTML = `<table border="1"><tr>`

    Object.keys(filterList[0]).forEach(key=>{
        tableHTML += `<th>${key}</th>`
    });

    tableHTML += `</tr>`

    filterList.forEach(item=>{
        tableHTML += `<tr>`
        Object.values(item).forEach(value=>{
            tableHTML += `<td>${value}</td>`
        })
        tableHTML += `</tr>`
    })
    tableHTML += `</table>`

    tableBody.innerHTML=tableHTML

}
showUpList()