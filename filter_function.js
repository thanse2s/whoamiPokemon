import { pokemon } from "./pokemon.js";
//console.log(pokemon)


///Filter Elemente
//Gengre
var sel_generation = document.getElementById("")
//Typ
var typ_wather= document.getElementById("");
var typ_fire=document.getElementById("");
var typ_leaf=document.getElementById("");
var typ_electro=document.getElementById("");
var typ_dark=document.getElementById("");
var fairy=document.getElementById("");
var dragon=document.getElementById("");
var ground=document.getElementById("");
var stone=document.getElementById("");
var flying=document.getElementById("");
var bug=document.getElementById("");
var ghost=document.getElementById("");
var psi=document.getElementById("");
var ice=document.getElementById("");
//Gewicht
var min_weight = document.getElementById();
var max_weight = document.getElementById();
//Höhe
var min_height = document.getElementById();
var max_height = document.getElementById();
//Form

//Evo
var pre_evo = document.getElementById();
var post_evo = document.getElementById();
//Evo-Typ
//Evo-Items



//var tableBody = document.getElementById("tableBody");
//FtableBody.innerHTML=pokemon
// https://www.geeksforgeeks.org/how-to-create-an-html-table-from-an-object-array-using-javascript/

function createStartConfig(){

    const table = document.createElement('table');
    table.classList.add('table')
    table.classList.add('table-bordered')
    

    const headerRow = document.createElement('tr');    
    Object.keys(pokemon[0]).forEach(key=>{
        const th = document.createElement('th');
        th.appendChild(document.createTextNode(key));
        headerRow.appendChild(th);
    })
    table.appendChild(headerRow);

    pokemon.forEach(item=>{
        const row = document.createElement('tr');
        Object.values(item).forEach(value=>{
            const td=document.createElement('td');
            td.appendChild(document.createTextNode(value));
            row.appendChild(td);
        });
        table.appendChild(row);
    });

    const tablebody = document.getElementById('tableBody');
    tableBody.appendChild(table);
}








function sametyp(typ){    
}

createStartConfig();
