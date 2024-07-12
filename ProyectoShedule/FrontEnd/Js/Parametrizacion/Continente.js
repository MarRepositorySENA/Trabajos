// Función para cargar la tabla de continentes
function loadTable() {
    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/parametrizacion/continente/",
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (continentes) {
        var tableRows = "";
        continentes.forEach(function (continente, index) {
            tableRows += `<tr>
                            <td>${index + 1}</td>
                            <td>${continente.nombre}</td>
                            <td>${continente.descripcion}</td>
                            <td>${continente.code}</td>
                            <td>
                                <button type="button" class="btn btn-warning" onclick="findById(${continente.id})" data-bs-toggle="modal" data-bs-target="#modalContinente"><i class='bx bx-search'></i></button>
                                <button type="button" class="btn btn-danger" onclick="deleteContinente(${continente.id})"><i class='bx bx-trash'></i></button>
                            </td>
                        </tr>`;
        });
        $("#dataResult").html(tableRows);
    });
}

// Función para guardar un nuevo continente
function saveContinente() {
    var datos = {
        nombre: $("#nombre").val(),
        descripcion: $("#descripcion").val(),
        code: $("#code").val()
    };

    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/parametrizacion/continente/",
        method: "POST",
        data: JSON.stringify(datos),
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function () {
        loadTable();
        clearData();
    });
}

// Función para buscar un continente por su ID y llenar el formulario de edición
function findById(id) {
    $.ajax({
        url: `http://localhost:9000/api/v1/shedule/parametrizacion/continente/${id}`,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (continente) {
        $("#id").val(continente.id);
        $("#nombre").val(continente.nombre);
        $("#descripcion").val(continente.descripcion);
        $("#code").val(continente.code);
    });
}

// Función para actualizar un continente existente
function updateContinente() {
    var id = $("#id").val();
    var datos = {
        nombre: $("#nombre").val(),
        descripcion: $("#descripcion").val(),
        code: $("#code").val()
    };

    $.ajax({
        url: `http://localhost:9000/api/v1/shedule/parametrizacion/continente/${id}`,
        method: "PUT",
        data: JSON.stringify(datos),
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function () {
        loadTable();
        clearData();
        $('#modalContinente').modal('hide');
    });
}

// Función para eliminar un continente por su ID
function deleteContinente(id) {
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
                url: `http://localhost:9000/api/v1/shedule/parametrizacion/continente/${id}`,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }).done(function () {
                loadTable();
                Swal.fire(
                    "¡Borrado!",
                    "¡Tu registro ha sido eliminado.",
                    "success"
                );
            }).fail(function (error) {
                Swal.fire(
                    "¡Error!",
                    error.responseJSON.message,
                    "error"
                );
            });
        }
    });
}

// Función para limpiar los datos del formulario
function clearData() {
    $("#id").val("");
    $("#nombre").val("");
    $("#descripcion").val("");
    $("#code").val("");
}

// Llama a loadTable al cargar la página para mostrar los datos iniciales
$(document).ready(function () {
    loadTable();
});
