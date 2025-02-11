import { pokemon } from "./pokemon.js";
//console.log(pokemon)

//var tableBody = document.getElementById("tableBody");
//FtableBody.innerHTML=pokemon
// https://www.geeksforgeeks.org/how-to-create-an-html-table-from-an-object-array-using-javascript/

function createStartTable(){

    const table = document.createElement('table');
    table.classList.add('table')
    table.classList.add('table-striped')
    table.classList.add('table-dark')
    

    const headerRow = document.createElement('tr');
    headerRow.classList.add('thead-dark')
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

createStartTable();
