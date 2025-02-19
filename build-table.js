import { pokemonList } from "./pokemonlist.js";

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

createFullList()