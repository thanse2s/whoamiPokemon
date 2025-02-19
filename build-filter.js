document.addEventListener("DOMContentLoaded", function () {
    const types = ['fire','water','leaf','bug','dark','dragon','electric','fairy','fight','flying','ghost','ground','ice','normal','poison','psycho','rock','steel'];
    const evp_types = ['levelup','trade','move','friendship','item'];
    const evos = ['pre_evo','post_evo'];
    const accordion_items = ['types','size','weight','evo','evotype','gen'];




    function createFilterSection(items, container, title) {
        let filterHTML = `<div class="container">`;
        items.forEach(item => {
            filterHTML += `<!--${item}-->`;
            filterHTML += `<div class="row">`;
            filterHTML += `<div class="col">${item}:</div>`;
            filterHTML += `<div class="col">`;
            filterHTML += `<div class="btn-group" role="group">`;
            filterHTML += `<input type="radio" class="btn-check" name="${item}-radio" id="${item}-false" autocomplete="off">`;
            filterHTML += `<label class="btn btn-outline-danger" for="${item}-false"> &#10008; </label>`;
            filterHTML += `<input type="radio" class="btn-check" name="${item}-radio" id="${item}-neutral" autocomplete="off" checked>`;
            filterHTML += `<label class="btn btn-outline-secondary" for="${item}-neutral"> &minus; </label>`;
            filterHTML += `<input type="radio" class="btn-check" name="${item}-radio" id="${item}-true" autocomplete="off">`;
            filterHTML += `<label class="btn btn-outline-success" for="${item}-true"> &#10003; </label>`;
            filterHTML += `</div>`;
            filterHTML += `</div>`;
            filterHTML += `</div>`;
        });
        filterHTML += `</div>`;
        container.innerHTML = filterHTML;
    }

    function createAccordion() {
        let accordionHTML = `<div class="accordion" id="accordionFilter">`;
        accordion_items.forEach(item => {
            accordionHTML += `<!--${item}-->`;
            accordionHTML += `<div class="accordion-item">`;
            accordionHTML += `<h4 class="accordion-header">`;
            accordionHTML += `<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#${item}-panel" aria-expanded="false" aria-controls="${item}-panel">`;
            accordionHTML += `${item}`;
            accordionHTML += `</button>`;
            accordionHTML += `</h4>`;
            accordionHTML += `<div id="${item}-panel" class="accordion-collapse collapse">`;
            accordionHTML += `<div class="accordion-body" id="${item}-panel-body"></div>`;
            accordionHTML += `</div>`;
            accordionHTML += `</div>`;
        });
        accordionHTML += `</div>`;
        accordion_body.innerHTML = accordionHTML;
    }

    async function buildFilter() {
        createAccordion();

        const types_filter_body = document.getElementById("types-panel-body");
        const evos_filter_body = document.getElementById("evo-panel-body");
        const evo_types_filter_body = document.getElementById("evotype-panel-body");

        createFilterSection(types, types_filter_body, "Types");
        createFilterSection(evos, evos_filter_body, "Evolutions");
        createFilterSection(evp_types, evo_types_filter_body, "Evolution Types");
    }

    buildFilter();
});
