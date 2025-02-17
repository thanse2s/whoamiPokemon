import { pokemonList } from "./pokemonlist.js";

const maxSize = Math.max(...pokemonList.map(poke => poke.Hight));
const maxWeight = Math.max(...pokemonList.map(poke => poke.Gewicht));
const minSize = Math.min(...pokemonList.map(poke => poke.Hight));
const minWeight = Math.min(...pokemonList.map(poke => poke.Gewicht));


let fire,water,leaf,bug,dark,dragon,electric,fariy,fight,flyign,ghost,ground,ice,normal,poison,psycho,rock,steel;
let preevo,postevo;
let levelUp,trade,friendship,item,move;
let maxSize_value,minSize_value;
let maxWeight_value,minWeight_value;
let gen;

//Set max an min Value Weight and Size
document.getElementById("max-weight").value = maxWeight;
document.getElementById("max-height").value = maxSize;
document.getElementById("min-weight").value = minWeight;
document.getElementById("min-height").value = minSize;




let filterdList
let tableBody = document.getElementById("tableBody");

function collectData(){

    //Gen
    gen = document.getElementById("select_gen").value;
    //Typs
    fire = document.getElementById("btn-check-outlined-fire").checked;
    water = document.getElementById("btn-check-outlined-wather").checked;
    leaf = document.getElementById("btn-check-outlined-leaf").checked;
    bug = document.getElementById("btn-check-outlined-bug").checked;
    dark = document.getElementById("btn-check-outlined-dark").checked;
    dragon = document.getElementById("btn-check-outlined-dargon").checked;
    electric = document.getElementById("btn-check-outlined-electric").checked;
    fariy = document.getElementById("btn-check-outlined-fairy").checked;
    fight = document.getElementById("btn-check-outlined-fighting").checked;
    flyign = document.getElementById("btn-check-outlined-flying").checked;
    ghost = document.getElementById("btn-check-outlined-ghost").checked;
    ground = document.getElementById("btn-check-outlined-ground").checked;
    ice = document.getElementById("btn-check-outlined-ice").checked;
    normal = document.getElementById("btn-check-outlined-normal").checked;
    poison = document.getElementById("btn-check-outlined-poison").checked;
    psycho = document.getElementById("btn-check-outlined-psychic").checked;
    rock = document.getElementById("btn-check-outlined-rock").checked;
    steel = document.getElementById("btn-check-outlined-steel").checked;
    //Evo
    preevo = document.getElementById("btn-check-outlined-pre_evo").checked;
    postevo = document.getElementById("btn-check-outlined-post_evo").checked;
    //Evo Typ
    levelUp = document.getElementById("btn-check-outlined-lvlup").checked;
    trade = document.getElementById("btn-check-outlined-trade").checked;
    move = document.getElementById("btn-check-outlined-move").checked;
    friendship = document.getElementById("btn-check-outlined-friendship").checked;
    item = document.getElementById("btn-check-outlined-item").checked;

}


function checkGen(pokemon){
    if(pokemon.Generation<=gen)
        return true;
    return false;


}
function checkTyp(pokemon){

    if(!fire && (pokemon.Type1 == "Fire" || pokemon.Type2 == "Fire"))
        return false;
    if(!water && (pokemon.Type1 == "Water" || pokemon.Type2 == "Water"))
        return false;
    if(!leaf && (pokemon.Type1 == "Grass" || pokemon.Type2 == "Grass"))
        return false;
    if(!bug && (pokemon.Type1 == "Bug" || pokemon.Type2 == "Bug"))
        return false;
    if(!dark && (pokemon.Type1 == "Dark" || pokemon.Type2 == "Dark"))
        return false;
    if(!dragon && (pokemon.Type1 == "Dragon" || pokemon.Type2 == "Dragon"))
        return false;
    if(!electric && (pokemon.Type1 == "Electric" || pokemon.Type2 == "Electric"))
        return false;
    if(!fariy && (pokemon.Type1 == "Fairy" || pokemon.Type2 == "Fairy"))
        return false;
    if(!fight && (pokemon.Type1 == "Fighting" || pokemon.Type2 == "Fighting"))
        return false;
    if(!flyign && (pokemon.Type1 == "Flying" || pokemon.Type2 == "Flying"))
        return false;
    if(!ghost && (pokemon.Type1 == "Ghost" || pokemon.Type2 == "Ghost"))
        return false;
    if(!ground && (pokemon.Type1 == "Ground" || pokemon.Type2 == "Ground"))
        return false;
    if(!ice && (pokemon.Type1 == "Ice" || pokemon.Type2 == "Ice"))
        return false;
    if(!normal && (pokemon.Type1 == "Normal" || pokemon.Type2 == "Normal"))
        return false;
    if(!poison && (pokemon.Type1 == "Poison" || pokemon.Type2 == "Poison"))
        return false;
    if(!psycho && (pokemon.Type1 == "Psychic" || pokemon.Type2 == "Psychic"))
        return false;
    if(!rock && (pokemon.Type1 == "Rock" || pokemon.Type2 == "Rock"))
        return false;
    if(!steel && (pokemon.Type1 == "Steel" || pokemon.Type2 == "Steel"))
        return false;

    return true;
}

function checkEvo(pokemon){
    if(!preevo && pokemon.Pre_Evo != "")
        return false;
    if(!postevo && pokemon.Post_Evo != "")
        return false;

    return true;


}
function checkForm(pokemon){}
function checkEvoTyp(pokemon){





}
function checkEvoItem(pokemon){}
function checkSize(pokemon){}
function checkWight(pokemon){}

function filterList(){

    console.log("Testing")
    collectData();
    let filterdList = pokemonList.filter(checkGen);
    filterdList  = filterdList.filter(checkEvo)
    filterdList  = filterdList.filter(checkTyp)
  





    showUpList(filterdList);
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