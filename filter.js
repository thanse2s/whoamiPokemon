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




let filterdList = []
let tableBody = document.getElementById("tableBody");

function collectData(){

    fire = document.getElementById("btn-check-outlined-fire").checked;
    wather = document.getElementById("btn_checkbox-outlined-wather").checked;
    leaf = document.getElementById("btn_checkbox-outlined-leaf").checked;
    bug = document.getElementById("btn_checkbox-outlined-bug").checked;
    dark = document.getElementById("btn_checkbox-outlined-dark").checked;
    dragon = document.getElementById("btn_checkbox-outlined-dragon").checked;
    electric = document.getElementById("btn_checkbox-outlined-electric").checked;
    fariy = document.getElementById("btn_checkbox-outlined-fariy").checked;
    fight = document.getElementById("btn_checkbox-outlined-fighting").checked;
    flyign = document.getElementById("btn_checkbox-outlined-flying").checked;
    ghost = document.getElementById("btn_checkbox-outlined-ghost").checked;
    ground = document.getElementById("btn_checkbox-outlined-ground").checked;
    ice = document.getElementById("btn_checkbox-outlined-ice").checked;
    normal = document.getElementById("btn_checkbox-outlined-normal").checked;
    poison = document.getElementById("btn_checkbox-outlined-poison").checked;
    psycho = document.getElementById("btn_checkbox-outlined-psychic").checked;
    rock = document.getElementById("btn_checkbox-outlined-rock").checked;
    steel = document.getElementById("btn_checkbox-outlined-steel").checked;



   

}


function filterList(){

    console.log("Testing")
    collectData();







}



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


document.getElementById("start_filter").onclick = function(){filterList()};
showUpList(pokemonList)