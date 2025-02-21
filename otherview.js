import { pokemonList } from "./pokemonlist.js";

function createCard(poke){

    let html = ``
    html += `<div class="card" style="width: 18rem;" style="margin: 15px 15px 15px 15px">`;
    html += `<img src="${poke.IMG}" class="card-img-top" alt="${poke.Name}-IMG">`;
    html += `<div class="card-body">`;
    html += `<h5 class="card-title">#${poke.ID} ${poke.Name_DE}</h5>`
    html += `<p>en_Name: ${poke.Name}</p>`
    html += `</div>`
    html += `<ul class="list-group list-group-flush">`
    html +=  `<li class = "list-group-item" >Type1: ${poke.Type1}</li>`
    html +=  `<li class = "list-group-item" >Type2: ${poke.Type2}</li>`
    html +=  `<li class = "list-group-item" >Pre-Evo: ${poke.Pre_Evo}</li>`
    html +=  `<li class = "list-group-item" >Post-Evo: ${poke.Post_Evo}</li>`
    html +=  `<li class = "list-group-item" >Evo-Type: ${poke.Evo_Typ}</li>`
    html += `</ul>`
    html += `</div>`

    return html;
}

function buildView(){


    let html=`<div class="container text-center">`;
    let count=0;
    pokemonList.forEach((poke)=>{
        if(count==0)
            html+=`<div class="row">`
            html += `<div class="col">`
            html += createCard(poke)
            html += `</div>`

        if(count==3) {
            html += `</div>`
            count=0;
        }
        else
            count++;
    })
    html+=`</div>`
    document.body.innerHTML=html;
}

buildView();