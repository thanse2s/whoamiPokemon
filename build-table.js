import { pokemonList } from "./pokemonlist.js";


let variable_type = {fire:"",water:"",grass:"",bug:"",dark:"",dragon:"",electric:"",fairy:"",fighting:"",flying:"",ghost:"",ground:"",ice:"",normal:"",poison:"",psychic:"",rock:"",steel:""};
let variable_evotype = {levelup:"",trade:"",move:"",friendship:"",item:""};
let variable_evo = {pre_evo:"",post_evo:""};
let size_min,size_max,weight_min,weight_max;
let game_gen,filter_gen;
let numTyps;


const types = ['fire','water','grass','bug','dark','dragon','electric','fairy','fighting','flying','ghost','ground','ice','normal','poison','psychic','rock','steel'];
const evp_types = ['levelup','trade','move','friendship','item'];
const evos = ['pre_evo','post_evo'];
const num = ['min','max'];
let filteredList=[]
let gameList = []

function createFullList(){

    let html=`<table class="table table-striped table-dark">`;
    html+=`<thead>`;
    html+=`<tr>`;
    Object.keys(gameList[0]).forEach((key) => {
       html+=`<th scope="col">${key}</th>`;
    });
    html+=`</tr>`;
    html+=`</thead>`;
    html+=`<tbody>`;
    gameList.forEach((element) => {
        html+=`<tr>`;
        Object.values(element).forEach((value) => {
            html+=`<td>${value}</td>`;
        })
        html+=`</tr>`;
    })
    html+=`</tbody></table>`;



    document.getElementById("full_list").innerHTML=html;

}

function createFilteredlList(){

    let html=`<table class="table table-striped table-dark">`;
    html+=`<thead>`;
    html+=`<tr>`;
    Object.keys(filteredList[0]).forEach((key) => {
        html+=`<th scope="col">${key}</th>`;
    });
    html+=`</tr>`;
    html+=`</thead>`;
    html+=`<tbody>`;
    filteredList.forEach((element) => {
        html+=`<tr>`;
        Object.values(element).forEach((value) => {
            html+=`<td>${value}</td>`;
        })
        html+=`</tr>`;
    })
    html+=`</tbody></table>`;



    document.getElementById("filter_liste-panel").innerHTML=html;

}

function getData(){

    /*Num of Types*/
    numTyps = document.getElementById("numTypsFilter").value
    /*Typen*/
    variable_type["fire"] = state_return("fire")
    variable_type["water"] = state_return("water")
    variable_type["grass"] = state_return("grass")
    variable_type["bug"] = state_return("bug")
    variable_type["dark"] = state_return("dark")
    variable_type["dragon"] = state_return("dragon")
    variable_type["electric"] = state_return("electric")
    variable_type["fairy"] = state_return("fairy")
    variable_type["fighting"] = state_return("fighting")
    variable_type["flying"] = state_return("flying")
    variable_type["ghost"] = state_return("ghost")
    variable_type["ground"] = state_return("ground")
    variable_type["ice"] = state_return("ice")
    variable_type["normal"] = state_return("normal")
    variable_type["poison"] = state_return("poison")
    variable_type["psychic"] = state_return("psychic")
    variable_type["rock"] = state_return("rock")
    variable_type["steel"] = state_return("steel")
    /*EVO*/
    variable_evo["pre_evo"] = state_return("pre_evo")
    variable_evo["post_evo"] = state_return("post_evo")
    /*EVO-Typ*/
    variable_evotype["levelup"]=state_return("levelup")
    variable_evotype["trade"] = state_return("trade")
    variable_evotype["move"] = state_return("move")
    variable_evotype["friendship"] = state_return("friendship")
    variable_evotype["item"] = state_return("item")
    /*SIZE*/
    size_min=document.getElementById("size-min-value").value;
    size_max=document.getElementById("size-max-value").value;
    /*Weight*/
    weight_min=document.getElementById("weight-min-value").value;
    weight_max=document.getElementById("weight-max-value").value;
    /*Gen*/
    filter_gen=document.getElementById("genFilter").value
}

function state_return(filter_option){

    if(document.getElementById(`${filter_option}-false`).checked)
        return "false"
    else if(document.getElementById(`${filter_option}-neutral`).checked)
        return "neutral"
    else if(document.getElementById(`${filter_option}-true`).checked)
        return "true"
}

//Object.key(<varname>) to get variable name
function filterType(pokemon){

    let type1=pokemon.Type1.toLowerCase();
    let type2=pokemon.Type2.toLowerCase();

    /*Type States*/
    let type1_state=variable_type[type1];
    let type2_state=variable_type[type2];

    if(numTyps=="1"){
        if(type1_state == "false")
            return false;
        return true;
    }
    else{
        let numofChecks = countCheckTypes();
        if(numofChecks==1) {
            if (type1_state == "true" || type2_state == "true")
                return true;
            return false;
        }
        else if(numofChecks==2) {
            if (type1_state == "true" && type2_state == "true")
                return true;
            return false;
        }
        else{
            if(type1_state == "false" || type2_state == "false")
                return false
            return true;
        }
    }
}

/*This function will call when NumTyps==1 to set all neutralBoxes to false if they don't be false*/
function setTypCheckboxValue(){
    Object.keys(variable_type).forEach((key)=>{
        if(variable_type[key]!="true")
            document.getElementById(`${key}-false`).checked = true;
    });
}

function setPossibleTypes(){}
function checkSelectetState(){

    if (countCheckTypes()>0) {
        if (numTyps == "1")
            setTypCheckboxValue();
        else
            setPossibleTypes();
    }

}

function countCheckTypes(){

    let count=0;

   Object.keys(variable_type).forEach((key)=>{
        if(variable_type[key]=="true")
            count++;
   })
     return count;

}

function filterGen(pokemon){

    if(filter_gen=="-") {
       return true;
    }
    else{
        if(pokemon.Generation==filter_gen)
            return true
        return false;
    }


}
function filterEvo(pokemon){

    if(variable_evo['pre_evo']!="neutral"&&variable_evo['post_evo']!="neutral")
    {
        if(variable_evo['pre_evo']=="false" && variable_evo['post_evo']=="false"){
                if(pokemon.Pre_Evo == "" && pokemon.Post_Evo == "")
                    return true;
            return false;
        }
        if(variable_evo['pre_evo']=="true" && variable_evo['post_evo']=="true"){
            if(pokemon.Pre_Evo != "" && pokemon.Post_Evo != "")
                return true;
            return false;
        }
        if(variable_evo['pre_evo']=="false" && variable_evo['post_evo']=="true"){
            if(pokemon.Pre_Evo == "" && pokemon.Post_Evo != "")
                return true;
            return false;
        }
        if(variable_evo['pre_evo']=="true" && variable_evo['post_evo']=="false"){
            if(pokemon.Pre_Evo != "" && pokemon.Post_Evo == "")
                return true;
            return false;
        }
    }
    else
    {
        if(variable_evo['pre_evo']=="false"){
            console.log("Evo")
            if(pokemon.Pre_Evo == "")
                return true;
            return false;
        }
        if(variable_evo['pre_evo']=="true"){
            if(pokemon.Pre_Evo!="")
                return true;
            return false;
        }
        if(variable_evo['post_evo']=="false"){
            if(pokemon.Post_Evo=="")
                return true;
            return false;
        }
        if(variable_evo['post_evo']=="true"){
            if(pokemon.Post_Evo!="")
                return true;
            return false;
        }
    }

    return true;
}

function checkEvoTypeState(){
    let count=0;

    Object.keys(variable_evotype).forEach((key)=>{
        if(variable_evotype[key]=="true")
            count++;
    });

    if(count>0) {
        Object.keys(variable_evotype).forEach((key) => {
            if (variable_evotype[key] != "true")
                document.getElementById(`${key}-false`).checked = true;
        });
    }

    return count;

}
function filterEvoType(pokemon){

   checkEvoTypeState();

    let evoTyp = pokemon.Evo_Typ.toLowerCase();
    let evoTyp_state=variable_evotype[evoTyp];

    if(checkEvoTypeState()>0){
        if(evoTyp_state!=undefined) {
            if (evoTyp_state == "true")
                return true
        }
        return false;
    }
    return true;
}
function filterSize(pokemon){

    if(size_max=="")
        size_max = Math.max(...pokemonList.map(poke => poke.Hight))
    if(size_min=="")
        size_min = Math.min(...pokemonList.map(poke => poke.Hight))

    if(size_min<=pokemon.Hight && pokemon.Hight<=size_max)
        return true
    return false


}
function filterWeight(pokemon){

    if(weight_max=="")
        weight_max = Math.max(...pokemonList.map(poke => poke.Gewicht))
    if(weight_min=="")
        weight_min = Math.min(...pokemonList.map(poke => poke.Gewicht))

    if(weight_min<=pokemon.Gewicht && pokemon.Gewicht<=weight_max)
        return true
    return false



}
function filterAnzTyp(pokemon){

    if(numTyps=="-")
        return true;
    if(numTyps=="1" && pokemon.Type2=="")
        return true;
    if(numTyps=="2" && pokemon.Type2!="")
        return true;

    return false;

}

function printLeftResult(){



}

function getPlayerPokemon(player){
    let p1_pk_id = document.getElementById("player1_poke_id").value;
    let p2_pk_id = document.getElementById("player2_poke_id").value;
    let getPokemon;

    if(player=="player1")
        getPokemon = gameList.filter(poke => poke.ID == p1_pk_id)
    if(player=="player2")
        getPokemon = gameList.filter(poke => poke.ID == p2_pk_id)




    if(getPokemon.length>0){
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

            if (player == "player1")
                document.getElementById("player1_poke").innerHTML = tableHTML;
            if (player == "player2")
                document.getElementById("player2_poke").innerHTML = tableHTML;
    }else{
        if (player == "player1")
            document.getElementById("player1_poke").innerHTML = "Pokemon ist nicht in der Angegebenen Spiel Generation";
        if (player == "player2")
            document.getElementById("player2_poke").innerHTML = "Pokemon ist nicht in der Angegebenen Spiel Generation";

        alert("Ein Pokemon Entspricht nicht der Angegeben Generation")
    }

}
function start_filter(){


    getData();
    filteredList = gameList.filter(filterAnzTyp);
    filteredList = filteredList.filter(filterType);
    filteredList = filteredList.filter(filterGen);
    filteredList = filteredList.filter(filterEvo);
    filteredList = filteredList.filter(filterSize);
    filteredList = filteredList.filter(filterWeight);
    //filteredList = filteredList.filter(filterEvoType);
    checkSelectetState();
    createFilteredlList();
    printLeftResult();



}


function start_game() {

    /*Gen*/
    game_gen=document.getElementById("select_gen").value


    gameList = pokemonList.filter(pokemon=>{

        if(pokemon.Generation<= game_gen)
            return true
        return false
    }
    )
    createFullList()
    getPlayerPokemon("player1");
    getPlayerPokemon("player2");
}


document.getElementById("start_filter").onclick = function(){start_filter()};
document.getElementById("start_game").onclick = function (){start_game()};

