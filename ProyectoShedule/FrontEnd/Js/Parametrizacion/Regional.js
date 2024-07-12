// Function to load departments into the select box
function loadDepartments() {
    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/parametrizacion/departamento/",
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (departamentos) {
        var options = "";
        departamentos.forEach(function (departamento) {
            options += `<option value="${departamento.id}">${departamento.nombre}</option>`;
        });
        $("#departamentoId").html(options);
    });
}

// Function to load regional table
function loadRegionalTable() {
    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/parametrizacion/regional/",
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (regionales) {
        var tableRows = "";
        regionales.forEach(function (regional, index) {
            tableRows += `<tr>
                            <td>${index + 1}</td>
                            <td>${regional.nombre}</td>
                            <td>${regional.descripcion}</td>
                            <td>${regional.code}</td>
                            <td>${regional.departamento.nombre}</td>
                            <td>
                                <button type="button" class="btn btn-warning" onclick="findRegionalById(${regional.id})" data-toggle="modal" data-target="#modalRegional"><i class="fas fa-search"></i></button>
                                <button type="button" class="btn btn-danger" onclick="deleteRegional(${regional.id})"><i class="fas fa-trash"></i></button>
                            </td>
                        </tr>`;
        });
        $("#regionalTableBody").html(tableRows);
    });
}

// Function to save regional
function saveRegional() {
    var datos = {
        nombre: $("#regionalNombre").val(),
        descripcion: $("#regionalDescripcion").val(),
        code: $("#regionalCode").val(),
        departamento: {
            id: $("#departamentoId").val()
        }
    };

    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/parametrizacion/regional/",
        method: "POST",
        data: JSON.stringify(datos),
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function () {
        loadRegionalTable();
        clearRegionalData();
    });
}

// Function to find regional by id
function findRegionalById(id) {
    $.ajax({
        url: `http://localhost:9000/api/v1/shedule/parametrizacion/regional/${id}`,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (regional) {
        $("#regionalId").val(regional.id);
        $("#regionalNombre").val(regional.nombre);
        $("#regionalDescripcion").val(regional.descripcion);
        $("#regionalCode").val(regional.code);
        $("#departamentoId").val(regional.departamento.id);
    });
}

// Function to update regional
function updateRegional() {
    var id = $("#regionalId").val();
    var datos = {
        nombre: $("#regionalNombre").val(),
        descripcion: $("#regionalDescripcion").val(),
        code: $("#regionalCode").val(),
        departamento: {
            id: $("#departamentoId").val()
        }
    };

    $.ajax({
        url: `http://localhost:9000/api/v1/shedule/parametrizacion/regional/${id}`,
        method: "PUT",
        data: JSON.stringify(datos),
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function () {
        loadRegionalTable();
        clearRegionalData();
        $('#modalRegional').modal('hide');
    });
}

// Function to delete regional
function deleteRegional(id) {
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
                url: `http://localhost:9000/api/v1/shedule/parametrizacion/regional/${id}`,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }).done(function () {
                loadRegionalTable();
                Swal.fire(
                    "¡Borrado!",
                    "¡El registro ha sido borrado.",
                    "success"
                );
            }).fail(function (error) {
                Swal.fire({
                    icon: "error",
                    title: "¡Oops...",
                    text: error.responseJSON.message,
                    footer: '<a href="#">¿Por qué tengo este problema?</a>'
                });
            });
        }
    });
}

// Function to clear regional data
function clearRegionalData() {
    $("#regionalId").val("");
    $("#regionalNombre").val("");
    $("#regionalDescripcion").val("");
    $("#regionalCode").val("");
    $("#departamentoId").val("");
}

// Document ready function
$(document).ready(function () {
    loadDepartments();
    loadRegionalTable();
});