// Archivo JavaScript para interactuar con la entidad Modulo via AJAX

function loadTable() {
    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/seguridad/modulo/",
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(
        function (items) {
            let variable = "";
            items.forEach(function (modulo, index) {
                variable += `<tr>
                                <td>${index + 1}</td>
                                <td>${modulo.nombre}</td>
                                <td>${modulo.descripcion}</td>
                                <td>${modulo.ruta}</td>
                                <td>${modulo.icono}</td>
                                <td>
                                    <button type="button" class="btn btn-warning" onclick="findById(${modulo.id})" data-bs-toggle="modal" data-bs-target="#modalModulo"><i class='bx bx-search'></i></button>
                                    <button type="button" class="btn btn-danger" onclick="deleteModulo(${modulo.id})"><i class='bx bx-trash'></i></button>
                                </td>
                            </tr>`;
            });

            $("#dataResult").html(variable);
        }
    );
}

function saveModulo() {
    var datos = {
        nombre: $("#nombre").val(),
        descripcion: $("#descripcion").val(),
        ruta: $("#ruta").val(),
        icono: $("#icono").val()
    };

    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/seguridad/modulo/",
        data: JSON.stringify(datos),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (modulo) {
        loadTable();
        clearData();
    });
}

function findById(id) {
    $.ajax({
        url: `http://localhost:9000/api/v1/shedule/seguridad/modulo/${id}`,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (modulo) {
        $("#id").val(modulo.id);
        $("#nombre").val(modulo.nombre);
        $("#descripcion").val(modulo.descripcion);
        $("#ruta").val(modulo.ruta);
        $("#icono").val(modulo.icono);
    });
}

function updateModulo() {
    var id = $("#id").val();
    var datos = {
        nombre: $("#nombre").val(),
        descripcion: $("#descripcion").val(),
        ruta: $("#ruta").val(),
        icono: $("#icono").val()
    };

    $.ajax({
        url: `http://localhost:9000/api/v1/shedule/seguridad/modulo/${id}`,
        data: JSON.stringify(datos),
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (modulo) {
        loadTable();
        clearData();
        $('#modalModulo').modal('hide');
    });
}

function deleteModulo(id) {
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
                url: `http://localhost:9000/api/v1/shedule/seguridad/modulo/${id}`,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }).done(function () {
                loadTable();
                Swal.fire(
                    "Borrado",
                    "El módulo ha sido eliminado",
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
    $("#nombre").val("");
    $("#descripcion").val("");
    $("#ruta").val("");
    $("#icono").val("");
}

$(document).ready(function () {
    loadTable();
});
