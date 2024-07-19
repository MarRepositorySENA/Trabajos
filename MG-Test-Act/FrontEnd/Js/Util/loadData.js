let countryMap = {};

function selectCountries() {
    $.ajax({
        url: "http://localhost:9000/session3/api/v1/session3/Parameter/Countries/",
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (item) {
        let variable = "<option selected disabled hidden>--- SELECCIONE ---</option>";
        item.forEach(function (Elementos) {
            variable += `<option value="${Elementos.id}">${Elementos.name}</option>`;
            countryMap[Elementos.id] = Elementos.name; // Mapear ID al nombre del país
        });

        $("#countryId").html(variable);
    });
}

selectCountries();







//tabla Avion
function loadAircrafs() {
    $.ajax({
        url: "http://localhost:9000/session3/api/v1/session3/Logistics/Aircrafts/",
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(
        function (item) {
            variable = ""
            item.forEach(function (Elementos, posicion, array) {
                variable += `<tr>
                <td>` + parseInt(posicion + 1) + `</td>
                <td>`+ Elementos.name + `</td>
                <td>`+ Elementos.makeModel + `</td>
                <td>`+ Elementos.totalSeats + `</td>
                <td>`+ Elementos.economySeats + `</td>
                <td>`+ Elementos.businessSeats + `</td>
                <td>
                    <button type="button" class="btn btn-warning" onclick="findById(${Elementos.id})"><i class='bx bx-search'></i></button>
                    <button type="button" class="btn btn-danger" onclick="deleteAircrafts(${Elementos.id})"><i class='bx bx-trash'></i></button>
                </td>
                </tr>`

            });

            $("#dataResult").html(variable)
        }
    )
}