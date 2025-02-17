import { pokemonList } from "./pokemonlist.js";

const maxSize = Math.max(...pokemonList.map(poke => poke.Hight));
const maxWeight = Math.max(...pokemonList.map(poke => poke.Gewicht));
const minSize = Math.min(...pokemonList.map(poke => poke.Hight));
const minWeight = Math.min(...pokemonList.map(poke => poke.Gewicht));


let fire,wather,leaf,bug,dark,dragon,electric,fariy,fight,flyign,ghost,ground,ice,normal,poison,psycho,rock,steel;
let proevo,postevo;
let levelUp,trade,friendship,item;
let maxSize_value,minSize_value;
let maxWeight_value,minWeight_value;
let gen;

//Set max an min Value Weight and Size
document.getElementById("max-weight").value = maxWeight;
document.getElementById("max-height").value = maxSize;
document.getElementById("min-weight").value = minWeight;
document.getElementById("min-height").value = minSize;



let filterList = [...pokemonList];
let filterdList = []
let tableBody = document.getElementById("tableBody");

function collectData(){}


function filterList(){









}


document.getElementById('start_filter').addEventListener('click', filterList());




function showUpList(showdList){

    let tableHTML = `<table border="1"><tr>`

    Object.keys(showdList[0]).forEach(key=>{
        tableHTML += `<th>${key}</th>`
    });

    tableHTML += `</tr>`

    showdList.forEach(item=>{
        tableHTML += `<tr>`
        Object.values(item).forEach(value=>{
            tableHTML += `<td>${value}</td>`
        })
        tableHTML += `</tr>`
    })
    tableHTML += `</table>`

    tableBody.innerHTML=tableHTML

}
showUpList(filterList)