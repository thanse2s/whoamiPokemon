import { pokemonList } from "./pokemonlist.js";


let variable_type = {fire:"",water:"",grass:"",bug:"",dark:"",dragon:"",electric:"",fairy:"",fighting:"",flying:"",ghost:"",ground:"",ice:"",normal:"",poison:"",psychic:"",rock:"",steel:""};
let variable_evotype = {levelup:"",trade:"",move:"",friendship:"",item:""};
let variable_evo = {pre_evo:"",post_evo:""};
let size_min,size_max,weight_min,weight_max;
let game_gen,filter_gen;
let numTyps;
let numOfCheckTyps=0;  //The Type is checked when is true;

const types = ['fire','water','grass','bug','dark','dragon','electric','fairy','fighting','flying','ghost','ground','ice','normal','poison','psychic','rock','steel'];
const evp_types = ['levelup','trade','move','friendship','item'];
const evos = ['pre_evo','post_evo'];
const num = ['min','max'];
let filteredList=[]

function createFullList(){

    let html=`<table class="table table-striped table-dark">`;
    html+=`<thead>`;
    html+=`<tr>`;
    Object.keys(pokemonList[0]).forEach((key) => {
       html+=`<th scope="col">${key}</th>`;
    });
    html+=`</tr>`;
    html+=`</thead>`;
    html+=`<tbody>`;
    pokemonList.forEach((element) => {
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


createFullList()

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
    size_min=document.getElementById("size-min").value;
    size_max=document.getElementById("size-max").value;
    /*Weight*/
    weight_min=document.getElementById("weight-min").value;
    weight_max=document.getElementById("weight-max").value;
    /*Gen*/
    game_gen=document.getElementById("select_gen").value
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

    /*Num of Types */
    if(numTyps=="-"||numTyps=="2"){
        if(type1_state=="false"||type2_state=="false")
            return false
        return true;
    }
    else{
        if(type1_state=="true" && type2=="")
            return true;
        if(type1_state=="false")
            return false
    }

    console.log(`${pokemon.Name_DE} - (${type1}:${type1_state} | ${type2}:${type2_state})`)

    return false;

}

/*This function will call when NumTyps==1 to set all neutralBoxes to false if they don't be false*/
function setTypCheckboxValue(){
    Object.keys(variable_type).forEach((key)=>{
        if(variable_type[key]!="true")
            document.getElementById(`${key}-false`).checked = true;
    });
}


function checkSelectetState(){



    if (numOfCheckTyps>0) {
        if (numTyps == "1")
            setTypCheckboxValue();
    }

}

function filterGen(){




}
function filterEvo(){}
function filterEvoType(){}
function filterSize(){}
function filterWeight(){}
function start_filter(){


    getData();
    filteredList = pokemonList.filter(filterType)
    checkSelectetState();
    createFilteredlList();



}

document.getElementById("start_filter").onclick = function(){start_filter()};

