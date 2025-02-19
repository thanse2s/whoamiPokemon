const types = ['fire','water','leaf','bug','dark','dragon','electric','fariy','fight','flying','ghost','ground','ice','normal','poison','psycho','rock','steel'];
const evp_types = ['levelup','trade','move','friendship','item'];
const evos = ['pre_evo','post_evo'];
const accordion_items = ['types','size','wight','evo','evotype','gen']

const types_filter_body=document.getElementById("types-panel-body")
const evos_filter_body=document.getElementById("evo-panel-body")
const evo_types_filter_body = document.getElementById("evo_typ-panel-body")
const accordion_body = document.getElementById("accordion_body")

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
    filterHTML += `</div>`;
    types_filter_body.innerHTML = filterHTML;
}
function createEvoFilter(){

    let filterHTML=``;
    filterHTML +=`<div class="container">`
    evos.forEach(evo => {
        filterHTML += `<!--${evo}-->`
        filterHTML += `<div class="row">`
        filterHTML += `<div class="col">`
            filterHTML += `${evo}:`
        filterHTML += `</div>`
        filterHTML += `<div class="col">`
            filterHTML += `<div class="btn-group" role="group">`
                filterHTML += `<input type="radio" class="btn-check" name="${evo}-radio" id="${evo}-false" autocomplete="off">`
                filterHTML += `<label class="btn btn-outline-danger" for="${evo}-false"> &#10008; </label>`
                filterHTML += `<input type="radio" class="btn-check" name="${evo}-radio" id="${evo}-neutral" autocomplete="off" checked>`
                filterHTML += `<label class="btn btn-outline-secondary" for="${evo}-neutral"> &minus; </label>`
                filterHTML += `<input type="radio" class="btn-check" name="${evo}-radio" id="${evo}-true" autocomplete="off">`
                filterHTML += `<label class="btn btn-outline-success" for="${evo}-true"> &#10003; </label>`
            filterHTML += `</div>`
        filterHTML += `</div>`
    });
    filterHTML += `</div>`

    evos_filter_body.innterHTML=filterHTML;
}
function createEvpTypesFilter(){

    let filterHTML=``;
    filterHTML +=`<div class="container">`
    evp_types.forEach(evp_type => {
        filterHTML += `<!--${evp_type}-->`
        filterHTML += `<div class="row">`
            filterHTML += `<div class="col">`
            filterHTML += `${evp_type}:`
            filterHTML += `</div>`
            filterHTML += `<div class="col">`
                filterHTML += `<div class="btn-group" role="group">`
                filterHTML += `<input type="radio" class="btn-check" name="${evp_type}-radio" id="${evp_type}-false" autocomplete="off">`
                filterHTML += `<label class="btn btn-outline-danger" for="${evp_type}-false"> &#10008; </label>`
                filterHTML += `<input type="radio" class="btn-check" name="${evp_type}-radio" id="${evp_type}-neutral" autocomplete="off" checked>`
                filterHTML += `<label class="btn btn-outline-secondary" for="${evp_type}-neutral"> &minus; </label>`
                filterHTML += `<input type="radio" class="btn-check" name="${evp_type}-radio" id="${evp_type}-true" autocomplete="off">`
                filterHTML += `<label class="btn btn-outline-success" for="${evp_type}-true"> &#10003; </label>`
            filterHTML += `</div>`
        filterHTML += `</div>`
    });
    filterHTML += `</div>`

    evo_types_filter_body.innterHTML=filterHTML;
}
function craete_accordion(){

    let accordionHTML = ``
    accordionHTML+=`<div class="accordion" id="accordionFilter">`
    accordion_items.forEach(accordion_item=>{
        accordionHTML += `<!--${accordion_item}-->`;
        accordionHTML += `<div class="accordion-item">`;
            accordionHTML += `<h4 class="accordion-header">`;
                accordionHTML += `<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#${accordion_item}-panel" aria-expanded="false" aria-controls="${accordion_item}-panel">`;
                    accordionHTML += `${accordion_item}`;
                accordionHTML += `</button>`
            accordionHTML += `</h4>`;
            accordionHTML += `<div id="${accordion_item}-panel" class="accordion-collapse collapse">`;
                accordionHTML += `<div class="accordion-body" id="${accordion_item}-panel-body">`;
                accordionHTML += `</div>`
            accordionHTML += `</div>`;
        accordionHTML += `</div>`;
    });
    accordionHTML+=`</div>`
    accordion_body.innerHTML=accordionHTML;

}



craete_accordion()
await createTypeFilter()
await createEvoFilter()
await createEvpTypesFilter()

