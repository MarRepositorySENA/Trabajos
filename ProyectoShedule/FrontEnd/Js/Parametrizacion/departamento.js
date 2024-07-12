// Función para cargar la tabla de departamentos
function loadTable() {
    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/parametrizacion/departamento/",
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (departamentos) {
        var tableRows = "";
        departamentos.forEach(function (departamento, index) {
            tableRows += `<tr>
                            <td>${index + 1}</td>
                            <td>${departamento.nombre}</td>
                            <td>${departamento.descripcion}</td>
                            <td>${departamento.code}</td>
                            <td>
                                <button type="button" class="btn btn-warning" onclick="findById(${departamento.id})" data-bs-toggle="modal" data-bs-target="#modalDepartamento"><i class='bx bx-search'></i></button>
                                <button type="button" class="btn btn-danger" onclick="deleteDepartamento(${departamento.id})"><i class='bx bx-trash'></i></button>
                            </td>
                        </tr>`;
        });
        $("#dataResult").html(tableRows);
    });
}

// Función para guardar un nuevo departamento
function saveDepartamento() {
    var datos = {
        nombre: $("#nombre").val(),
        descripcion: $("#descripcion").val(),
        code: $("#code").val()
    };

    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/parametrizacion/departamento/",
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

// Función para buscar un departamento por su ID y llenar el formulario de edición
function findById(id) {
    $.ajax({
        url: `http://localhost:9000/api/v1/shedule/parametrizacion/departamento/${id}`,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (departamento) {
        $("#id").val(departamento.id);
        $("#nombre").val(departamento.nombre);
        $("#descripcion").val(departamento.descripcion);
        $("#code").val(departamento.code);
    });
}

// Función para actualizar un departamento existente
function updateDepartamento() {
    var id = $("#id").val();
    var datos = {
        nombre: $("#nombre").val(),
        descripcion: $("#descripcion").val(),
        code: $("#code").val()
    };

    $.ajax({
        url: `http://localhost:9000/api/v1/shedule/parametrizacion/departamento/${id}`,
        method: "PUT",
        data: JSON.stringify(datos),
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function () {
        loadTable();
        clearData();
        $('#modalDepartamento').modal('hide');
    });
}

// Función para eliminar un departamento por su ID
function deleteDepartamento(id) {
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
                url: `http://localhost:9000/api/v1/shedule/parametrizacion/departamento/${id}`,
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
