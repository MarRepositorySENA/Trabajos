// Archivo JavaScript para interactuar con la entidad Rol via AJAX

function loadTable() {
    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/seguridad/rol/",
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(
        function (roles) {
            let variable = "";
            roles.forEach(function (rol, index) {
                variable += `<tr>
                                <td>${index + 1}</td>
                                <td>${rol.nombre}</td>
                                <td>${rol.descripcion}</td>
                                <td>${rol.estado ? "Activo" : "Inactivo"}</td>
                                <td>${rol.vista}</td>
                                <td>
                                    <button type="button" class="btn btn-warning" onclick="findById(${rol.id})" data-bs-toggle="modal" data-bs-target="#modalRol"><i class='bx bx-search'></i></button>
                                    <button type="button" class="btn btn-danger" onclick="deleteRol(${rol.id})"><i class='bx bx-trash'></i></button>
                                </td>
                            </tr>`;
            });

            $("#dataResult").html(variable);
        }
    );
}

function saveRol() {
    var datos = {
        nombre: $("#nombre").val(),
        descripcion: $("#descripcion").val(),
        estado: $("#estado").prop("checked"),
        vista: $("#vista").val()
    };

    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/seguridad/rol/",
        data: JSON.stringify(datos),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (rol) {
        loadTable();
        clearData();
    });
}

function findById(id) {
    $.ajax({
        url: `http://localhost:9000/api/v1/shedule/seguridad/rol/${id}`,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (rol) {
        $("#id").val(rol.id);
        $("#nombre").val(rol.nombre);
        $("#descripcion").val(rol.descripcion);
        $("#estado").prop("checked", rol.estado);
        $("#vista").val(rol.vista);
    });
}

function updateRol() {
    var id = $("#id").val();
    var datos = {
        nombre: $("#nombre").val(),
        descripcion: $("#descripcion").val(),
        estado: $("#estado").prop("checked"),
        vista: $("#vista").val()
    };

    $.ajax({
        url: `http://localhost:9000/api/v1/shedule/seguridad/rol/${id}`,
        data: JSON.stringify(datos),
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (rol) {
        loadTable();
        clearData();
        $('#modalRol').modal('hide');
    });
}

function deleteRol(id) {
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
                url: `http://localhost:9000/api/v1/shedule/seguridad/rol/${id}`,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }).done(function () {
                loadTable();
                Swal.fire(
                    "Borrado",
                    "El rol ha sido eliminado",
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
    $("#estado").prop("checked", false);
    $("#vista").val("");
}

$(document).ready(function () {
    loadTable();
});
