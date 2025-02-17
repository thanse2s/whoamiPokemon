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

//Disaple FormBUttons
document.getElementById("btn-check-outlined-form_mega").visible = true;
document.getElementById("btn-check-outlined-form_aloa").visible = true;
document.getElementById("btn-check-outlined-form_galar").visible = true;



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
    //Size
    maxSize_value = document.getElementById("max-height").value;
    minSize_value = document.getElementById("min-height").value;
    //Weight
    maxWeight_value = document.getElementById("max-weight").value;
    minWeight_value = document.getElementById("min-weight").value;


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
    if(!levelUp && pokemon.Evo_Typ=="LevelUp")
        return false;

    if(!trade && pokemon.Evo_Typ=="trade")
        return false;

    if(!move && pokemon.Evo_Typ=="levelMove")
        return false;

    if(!friendship && pokemon.Evo_Typ=="levelFriendship")
        return false;

    if(!item && pokemon.Evo_Typ=="useItem")
        return false;

    return true;




}
function checkEvoItem(pokemon){}
function checkSize(pokemon){

    console.log(minSize_value)
    console.log(maxSize_value)
    if(minSize_value <= pokemon.Hight &&  pokemon.Hight <= maxSize_value)
        return true;
    return false;

}
function checkWight(pokemon){

    console.log(minWeight_value)
    console.log(maxWeight_value)
    if(minWeight_value <= pokemon.Gewicht && pokemon.Gewicht <= maxWeight_value)
        return true;
    return false;
}

function filterList(){

    console.log("Testing")
    collectData();
    let filterdList = pokemonList.filter(checkGen);
    filterdList  = filterdList.filter(checkEvo)
    filterdList  = filterdList.filter(checkTyp)
    filterdList  = filterdList.filter(checkEvoTyp)
    filterdList  = filterdList.filter(checkSize)
    filterdList  = filterdList.filter(checkWight)



    showUpList(filterdList);
}



function showUpList(showdList){

    let tableHTML = `<table class="table table-dark"><tr>`

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

function showPlayerPoke(player){
    let p1_pk_id = document.getElementById("player1_poke_id").value;
    let p2_pk_id = document.getElementById("player2_poke_id").value;
    let getPokemon;

    if(player=="player1")
        getPokemon = pokemonList.filter(poke => poke.ID == p1_pk_id)
    if(player=="player2")
        getPokemon = pokemonList.filter(poke => poke.ID == p2_pk_id)


    let tableHTML = `<table class="table table-dark"><tr>`

    Object.keys(getPokemon[0]).forEach(key=>{
        tableHTML += `<th>${key}</th>`
    });

    tableHTML += `</tr>`

    getPokemon.forEach(item=>{
        tableHTML += `<tr>`
        Object.values(item).forEach(value=>{
            tableHTML += `<td>${value}</td>`
        })
        tableHTML += `</tr>`
    })
    tableHTML += `</table>`

    if(player=="player1")
        document.getElementById("player1_poke").innerHTML=tableHTML;
    if(player=="player2")
        document.getElementById("player2_poke").innerHTML=tableHTML;

    
}

function start_game(){
    showPlayerPoke("player1")
    showPlayerPoke("player2")
}


document.getElementById("start_filter").onclick = function(){filterList()};
document.getElementById("start_game").onclick = function(){start_game()};
showUpList(pokemonList)