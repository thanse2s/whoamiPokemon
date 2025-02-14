import { pokemon } from "./pokemon.js";
//console.log(pokemon)


///Filter Elemente
//Gengre
var sel_generation = document.getElementById("select_gen")
//Typ
var typ_wather= document.getElementById("btn-check-outlined-fire");
var typ_fire=document.getElementById("btn-check-outlined-wather");
var typ_leaf=document.getElementById("btn-check-outlined-leaf");
var typ_electro=document.getElementById("btn-check-outlined-bug");
var typ_dark=document.getElementById("btn-check-outlined-dark");
var typ_fairy=document.getElementById("btn-check-outlined-dargon");
var typ_dragon=document.getElementById("btn-check-outlined-electric");
var typ_ground=document.getElementById("btn-check-outlined-fairy");
var typ_stone=document.getElementById("btn-check-outlined-fighting");
var typ_flying=document.getElementById("btn-check-outlined-flying");
var typ_bug=document.getElementById("btn-check-outlined-ghost");
var typ_ghost=document.getElementById("btn-check-outlined-ground");
var typ_psi=document.getElementById("btn-check-outlined-ice");
var typ_ice=document.getElementById("btn-check-outlined-normal");
var typ_ice=document.getElementById("btn-check-outlined-poison");
var typ_ice=document.getElementById("btn-check-outlined-psychic");
var typ_ice=document.getElementById("btn-check-outlined-rock");
var typ_ice=document.getElementById("btn-check-outlined-steel");
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
