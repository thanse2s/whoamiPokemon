import { pokemon } from "./pokemon.js";
//console.log(pokemon)

//var tableBody = document.getElementById("tableBody");
//FtableBody.innerHTML=pokemon

function createStartTable(){

    const table = document.createElement('table');
    table.setAttribute('border','1');

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

createStartTable();
