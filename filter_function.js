import { pokemon } from "./pokemon.js";
console.log(pokemon)


///Filter Elemente

//Evo-Items


var folterData = [...pokemon];
const table = document.createElement('table');

var tableBody = document.getElementById("tableBody");
tableBody.innerHTML=folterData
// https://www.geeksforgeeks.org/how-to-create-an-html-table-from-an-object-array-using-javascript/


function renderFilteredData() {
    let tableHTML=`<table border="1"><tr>`

    Object.keys(folterData[0]).forEach((key) => {
        tableHTML+=`<td>${folterData[0][key]}</td>`
    })

    tableHTML+=`</tr>`

    folterData.forEach(item =>{
        tableHTML+=`<tr>`;
        Object.values(item).forEach(value=>{
            tableHTML+=`<td>${item[value]}</td>`
        });
        tableHTML+=`</tr>`
    });
    tableHTML+=`</table>`

    document.getElementById("tableBody").innerHTML=tableHTML;
    console.log(tableHTML);
}

renderFilteredData();