//Tabla Cabinas
function loadCabinTypes() {
    $.ajax({
        url: "http://localhost:9000/session3/api/v1/session3/Sales/CabinTypes/",
        method: "GET",
        headers: {
            "Content-Type": "application/json" //El tipo de contenido es tipo json, referencia la misma estrucutra de CrossOrigin del backend
        }
    }).done(
        function (item) {
            variable = ""
            item.forEach(function (Elementos, posicion, array) {
                variable += `<tr>
                            <td>` + parseInt(posicion + 1) + `</td> 
                            <td>` + Elementos.name + `</td> 
                            <td> <button type="button" class="btn btn-success" onclick="findCabinTypesById(${Elementos.id})"><i class='bx bx-search'></i></button>
                                <button type="button" class="btn btn-danger" onclick="DeleteCabinTypes(${Elementos.id})"><i class='bx bx-trash'></i></button>
                            </td> 
                            </tr> `

            });

            $("#tablaCabinas").html(variable)
        }
    )
}

function loadCountries() {
    $.ajax({
        url: "http://localhost:9000/session3/api/v1/session3/Parameter/Countries/",
        method: "GET",
        headers: {
            "Content-Type": "application/json" // El tipo de contenido es tipo JSON, referencia la misma estructura de CrossOrigin del backend
        }
    }).done(function (item) {
        let variable = "";
        let options = `<option value="" selected disabled hidden>SELECCIONE</option>`;

        item.forEach(function (Elementos, posicion) {
            variable += `<tr>
                            <td>${parseInt(posicion + 1)}</td>
                            <td>${Elementos.name}</td>
                            <td>
                                <button type="button" class="btn btn-success" onclick="findCountryById(${Elementos.id})"><i class='bx bx-search'></i></button>
                                <button type="button" class="btn btn-danger" onclick="deleteCountry(${Elementos.id})"><i class='bx bx-trash'></i></button>
                            </td>
                        </tr>`;

            options += `<option value="${Elementos.id}">${Elementos.name}</option>`;
        });

        if ($("#tablaPais").length) {
            $("#tablaPais").html(variable);
        }

        if ($("#countryId").length) {
            $("#countryId").html(options);
        }
    });
}




//tabla oficinas
function loadOffices() {
    $.ajax({
        url: "http://localhost:9000/session3/api/v1/session3/Parameter/Offices/",
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (item) {
        let variable = "";
        item.forEach(function (Elementos, posicion) {
            variable += `<tr>
                            <td>${parseInt(posicion + 1)}</td> 
                            <td>${Elementos.title}</td> 
                            <td>${Elementos.phone}</td> 
                            <td>${Elementos.contact}</td> 
                            <td>${Elementos.countryId.name}</td> 
                            <td>
                                <button type="button" class="btn btn-success" onclick="findById(${Elementos.id})"><i class='bx bx-search'></i></button>
                                <button type="button" class="btn btn-danger" onclick="Delete(${Elementos.id})"><i class='bx bx-trash'></i></button>
                            </td> 
                        </tr>`;
        });
        $("#tablaOficina").html(variable);
    });
}