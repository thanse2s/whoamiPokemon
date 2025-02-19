const types = ['fire','water','leaf','bug','dark','dragon','electric','fariy','fight','flying','ghost','ground','ice','normal','poison','psycho','rock','steel']
const evp_types = ['levelup','trade','move','friendship','item']
const evo = ['pre_evo','post_evo']


function createTypeFilter(){

    let filterHTML = ``
    filterHTML +=`<div class="container">`
    types.forEach(type => {
        filterHTML += `<!--${type}-->`
        filterHTML += `<div class="row">`
            filterHTML += `<div class="col">`
                filterHTML += `${type}:`
            filterHTML += `</div>`
        filterHTML += `<div class="col">`
            filterHTML += `<div class="btn-group" role="group">`
                filterHTML += `<input type="radio" class="btn-check" name="${type}-radio" id="${type}-false" autocomplete="off">`
                filterHTML += `<label class="btn btn-outline-danger" for="${type}-false"> &#10008; </label>`
                filterHTML += `<input type="radio" class="btn-check" name="${type}-radio" id="${type}-neutral" autocomplete="off" checked>`
                filterHTML += `<label class="btn btn-outline-secondary" for="${type}-neutral"> &minus; </label>`
                filterHTML += `<input type="radio" class="btn-check" name="${type}-radio" id="${type}-true" autocomplete="off">`
                filterHTML += `<label class="btn btn-outline-success" for="${type}-true"> &#10003; </label>`
            filterHTML += `</div>`
        filterHTML += `</div>`
    });
    filterHTML += `</div>`


    document.getElementById("type-panel-body").innerHTML =filterHTML;
}

function createEvoFilter(){

    let filterHTML=``;
    filterHTML +=`<div class="container">`
    evo.forEach(type => {
        filterHTML += `<!--${type}-->`
        filterHTML += `<div class="row">`
        filterHTML += `<div class="col">`
            filterHTML += `${type}:`
        filterHTML += `</div>`
        filterHTML += `<div class="col">`
            filterHTML += `<div class="btn-group" role="group">`
                filterHTML += `<input type="radio" class="btn-check" name="${type}-radio" id="${type}-false" autocomplete="off">`
                filterHTML += `<label class="btn btn-outline-danger" for="${type}-false"> &#10008; </label>`
                filterHTML += `<input type="radio" class="btn-check" name="${type}-radio" id="${type}-neutral" autocomplete="off" checked>`
                filterHTML += `<label class="btn btn-outline-secondary" for="${type}-neutral"> &minus; </label>`
                filterHTML += `<input type="radio" class="btn-check" name="${type}-radio" id="${type}-true" autocomplete="off">`
                filterHTML += `<label class="btn btn-outline-success" for="${type}-true"> &#10003; </label>`
            filterHTML += `</div>`
        filterHTML += `</div>`
    });
    filterHTML += `</div>`

    document.getElementById("evo-panel-body").innterHTML=filterHTML;
}

createEvoFilter();
createTypeFilter();