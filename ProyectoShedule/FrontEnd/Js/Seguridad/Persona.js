// Archivo JavaScript para interactuar con la entidad Persona via AJAX

function loadTable() {
    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/seguridad/persona/",
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(
        function (personas) {
            let variable = "";
            personas.forEach(function (persona, index) {
                variable += `<tr>
                                <td>${index + 1}</td>
                                <td>${persona.primerNombre} ${persona.segundoNombre}</td>
                                <td>${persona.primerApellido} ${persona.segundoApellido}</td>
                                <td>${persona.tipoDocumento}</td>
                                <td>${persona.numeroDocumento}</td>
                                <td>${persona.telefono}</td>
                                <td>${persona.email}</td>
                                <td>${persona.genero}</td>
                                <td>${persona.direccion}</td>
                                <td>
                                    <button type="button" class="btn btn-warning" onclick="findById(${persona.id})" data-bs-toggle="modal" data-bs-target="#modalPersona"><i class='bx bx-search'></i></button>
                                    <button type="button" class="btn btn-danger" onclick="deletePersona(${persona.id})"><i class='bx bx-trash'></i></button>
                                </td>
                            </tr>`;
            });

            $("#dataResult").html(variable);
        }
    );
}

function savePersona() {
    var datos = {
        primerNombre: $("#primerNombre").val(),
        segundoNombre: $("#segundoNombre").val(),
        primerApellido: $("#primerApellido").val(),
        segundoApellido: $("#segundoApellido").val(),
        tipoDocumento: $("#tipoDocumento").val(),
        numeroDocumento: $("#numeroDocumento").val(),
        telefono: $("#telefono").val(),
        email: $("#email").val(),
        genero: $("#genero").val(),
        direccion: $("#direccion").val()
    };

    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/seguridad/persona/",
        data: JSON.stringify(datos),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (persona) {
        loadTable();
        clearData();
    });
}

function findById(id) {
    $.ajax({
        url: `http://localhost:9000/api/v1/shedule/seguridad/persona/${id}`,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (persona) {
        $("#id").val(persona.id);
        $("#primerNombre").val(persona.primerNombre);
        $("#segundoNombre").val(persona.segundoNombre);
        $("#primerApellido").val(persona.primerApellido);
        $("#segundoApellido").val(persona.segundoApellido);
        $("#tipoDocumento").val(persona.tipoDocumento);
        $("#numeroDocumento").val(persona.numeroDocumento);
        $("#telefono").val(persona.telefono);
        $("#email").val(persona.email);
        $("#genero").val(persona.genero);
        $("#direccion").val(persona.direccion);
    });
}

function updatePersona() {
    var id = $("#id").val();
    var datos = {
        primerNombre: $("#primerNombre").val(),
        segundoNombre: $("#segundoNombre").val(),
        primerApellido: $("#primerApellido").val(),
        segundoApellido: $("#segundoApellido").val(),
        tipoDocumento: $("#tipoDocumento").val(),
        numeroDocumento: $("#numeroDocumento").val(),
        telefono: $("#telefono").val(),
        email: $("#email").val(),
        genero: $("#genero").val(),
        direccion: $("#direccion").val()
    };

    $.ajax({
        url: `http://localhost:9000/api/v1/shedule/seguridad/persona/${id}`,
        data: JSON.stringify(datos),
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (persona) {
        loadTable();
        clearData();
        $('#modalPersona').modal('hide');
    });
}

function deletePersona(id) {
    Swal.fire({
        title: "¿Estás seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, bórralo"
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: `http://localhost:9000/api/v1/shedule/seguridad/persona/${id}`,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }).done(function () {
                loadTable();
                Swal.fire(
                    "Borrado",
                    "La persona ha sido eliminada",
                    "success"
                );
            }).fail(function (error) {
                Swal.fire(
                    "Error",
                    error.responseJSON.message,
                    "error"
                );
            });
        }
    });
}

function clearData() {
    $("#id").val("");
    $("#primerNombre").val("");
    $("#segundoNombre").val("");
    $("#primerApellido").val("");
    $("#segundoApellido").val("");
    $("#tipoDocumento").val("");
    $("#numeroDocumento").val("");
    $("#telefono").val("");
    $("#email").val("");
    $("#genero").val("");
    $("#direccion").val("");
}

$(document).ready(function () {
    loadTable();
});
