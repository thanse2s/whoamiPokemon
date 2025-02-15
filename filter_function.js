import { pokemon } from "./pokemon.js";
console.log(pokemon)


///Filter Elemente
//Gengre
var sel_generation = document.getElementById("select_gen")
//Typ
var select_num_typ = document.getElementById("select_num_of_evo")
var fire= document.getElementById("btn-check-outlined-fire");
var wather=document.getElementById("btn-check-outlined-wather");
var leaf=document.getElementById("btn-check-outlined-leaf");
var bug=document.getElementById("btn-check-outlined-bug");
var dark=document.getElementById("btn-check-outlined-dark");
var dargon=document.getElementById("btn-check-outlined-dargon");
var electric=document.getElementById("btn-check-outlined-electric");
var fairy=document.getElementById("btn-check-outlined-fairy");
var fighting=document.getElementById("btn-check-outlined-fighting");
var flying=document.getElementById("btn-check-outlined-flying");
var ghost=document.getElementById("btn-check-outlined-ghost");
var ground=document.getElementById("btn-check-outlined-ground");
var ice=document.getElementById("btn-check-outlined-ice");
var normal=document.getElementById("btn-check-outlined-normal");
var poison=document.getElementById("btn-check-outlined-poison");
var psychic=document.getElementById("btn-check-outlined-psychic");
var rock=document.getElementById("btn-check-outlined-rock");
var steel=document.getElementById("btn-check-outlined-steel");
//Gewicht
var min_weight = document.getElementById("min-weight");
var max_weight = document.getElementById("max-weight");
//Höhe
var min_height = document.getElementById("min-height");
var max_height = document.getElementById("max-height");
//Form
var mega = document.getElementById("btn-check-outlined-form_mega");
var aloa = document.getElementById("btn-check-outlined-form_aloa");
var galar = document.getElementById("btn-check-outlined-form_galar");
//Evo
var pre_evo = document.getElementById("btn-check-outlined-pre_evo");
var post_evo = document.getElementById("btn-check-outlined-post_evo");
//Evo-Typ
var level_up = document.getElementById("btn-check-outlined-levelup");
var trade = document.getElementById("btn-check-outlined-trade");
var friendship = document.getElementById("btn-check-outlined-friendship");
var item = document.getElementById("btn-check-outlined-item");
//Evo-Items


let folterData = [...pokemon];
const tablebody = document.getElementById('tableBody');
const table = document.createElement('table');

//var tableBody = document.getElementById("tableBody");
//FtableBody.innerHTML=pokemon
// https://www.geeksforgeeks.org/how-to-create-an-html-table-from-an-object-array-using-javascript/







function renderFilteredData(list) {
    let tableHTML=`<table border="1"><tr>`

    Object.keys(list[0]).forEach((key) => {
        tableHTML+=`<td>${list[0][key]}</td>`
    })

    tableHTML+=`</tr>`

    list.forEach(item =>{
        tableHTML+=`<tr>`;
        Object.values(item).forEach(value=>{
            tableHTML+=`<td>${item[value]}</td>`
        });
        tableHTML+=`</tr>`
    });
    tableHTML+=`</table>`

    document.getElementById("tableBody").innerHTML=tableHTML;
}

renderFilteredData(folterData);