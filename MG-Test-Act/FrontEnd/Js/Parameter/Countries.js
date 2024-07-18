function loadTable() {
    $.ajax({
        url: "http://localhost:9000/session3/api/v1/session3/Parameter/Countries/",
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
                            <td> <button type="button" class="btn btn-success" onclick="findById(${Elementos.id})"><i class='bx bx-search'></i></button>
                                <button type="button" class="btn btn-danger" onclick="Delete(${Elementos.id})"><i class='bx bx-trash'></i></button>
                            </td> 
                            </tr> `

            });

            $("#tablaPais").html(variable)
        }
    )
}
//Guardar cabina
function saveCountries() {
    var nombrePais = $("#nombrePais").val(); // Obtiene el valor del campo
    if (!nombrePais) {
        
        // Si el campo está vacío, muestra una alerta usando SweetAlert2
        Swal.fire({
            icon: 'warning',
            title: 'Campo vacío',
            text: 'Por favor, ingresa el nombre del país.',
            confirmButtonText: 'OK'
        });
        return; // Sale de la función si el campo está vacío
    }

    var datos = {
        name: $("#nombrePais").val(),//val sirve para captura o  envie datos dentro de los parentesis al frontend
    }
    $.ajax({
        url: "http://localhost:9000/session3/api/v1/session3/Parameter/Countries/",
        data: JSON.stringify(datos),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(
        function (item) {
            loadTable();
            clearData()
    }).fail(function (jqXHR, textStatus, errorThrown) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo guardar el país. Inténtalo de nuevo más tarde.',
                confirmButtonText: 'OK'
            });

        });
}

//Busqueda por id
function findById(id) {
    $.ajax({
        url: "http://localhost:9000/session3/api/v1/session3/Parameter/Countries/" + id,
        method: "GET",
        headers: {
            "Content-Type": "application/json" //El tipo de contenido es tipo json, referencia la misma estrucutra de CrossOrigin del backend
        }
    }).done(
        function (item) {
            $("#id").val(item.id),
                $("#nombrePais").val(item.name)
        }
    )
}


function updateCountries() {
    


    id = $("#id").val()

    var datos = {
        name: $("#nombrePais").val(),//val sirve para captura o  envie datos dentro de los parentesis al frontend
    }
    $.ajax({
        url: "http://localhost:9000/session3/api/v1/session3/Parameter/Countries/" + id,
        data: JSON.stringify(datos),
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(
        function (item) {
            loadTable();
            clearData()
        })
}
//Eliminar
function Delete(id) {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "http://localhost:9000/session3/api/v1/session3/Parameter/Countries/" + id,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }).done(
                function (item) {
                    loadTable()

                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            ).fail(
                function (item) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: item.responseJSON.message,
                        footer: '<a href="#">Why do I have this issue?</a>'
                    });
                }
            )
        }
    });
}

function loadCountries() {
    $.ajax({
        url: "http://localhost:9000/session3/api/v1/session3/Parameter/Countries/",
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (countries) {
        let options = "";
        countries.forEach(function (country) {
            options += `<option value="${country.id}">${country.name}</option>`;
        });
        $("#countryId").html(options);
    });
}




function clearData() {
    $("#id").val(""),
        $("#nombrePais").val("")

}

