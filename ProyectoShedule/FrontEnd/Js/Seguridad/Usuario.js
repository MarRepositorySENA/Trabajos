// Archivo JavaScript para interactuar con la entidad Usuario via AJAX

function loadTable() {
    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/seguridad/usuario/",
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(
        function (usuarios) {
            let variable = "";
            usuarios.forEach(function (usuario, index) {
                variable += `<tr>
                                <td>${index + 1}</td>
                                <td>${usuario.nombre}</td>
                                <td>${usuario.rol.nombre}</td>
                                <td>${usuario.persona.primerNombre} ${usuario.persona.primerApellido}</td>
                                <td>
                                    <button type="button" class="btn btn-warning" onclick="findById(${usuario.id})" data-bs-toggle="modal" data-bs-target="#modalUsuario"><i class='bx bx-search'></i></button>
                                    <button type="button" class="btn btn-danger" onclick="deleteUsuario(${usuario.id})"><i class='bx bx-trash'></i></button>
                                </td>
                            </tr>`;
            });

            $("#dataResult").html(variable);
        }
    );
}

function saveUsuario() {
    var datos = {
        nombre: $("#nombre").val(),
        contraseña: $("#contraseña").val(),
        rol: {
            id: $("#rol").val()
        },
        persona: {
            id: $("#persona").val()
        }
    };

    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/seguridad/usuario/",
        data: JSON.stringify(datos),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (usuario) {
        loadTable();
        clearData();
    });
}

function findById(id) {
    $.ajax({
        url: `http://localhost:9000/api/v1/shedule/seguridad/usuario/${id}`,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (usuario) {
        $("#id").val(usuario.id);
        $("#nombre").val(usuario.nombre);
        $("#contraseña").val(usuario.contraseña);
        $("#rol").val(usuario.rol.id);
        $("#persona").val(usuario.persona.id);
    });
}

function updateUsuario() {
    var id = $("#id").val();
    var datos = {
        nombre: $("#nombre").val(),
        contraseña: $("#contraseña").val(),
        rol: {
            id: $("#rol").val()
        },
        persona: {
            id: $("#persona").val()
        }
    };

    $.ajax({
        url: `http://localhost:9000/api/v1/shedule/seguridad/usuario/${id}`,
        data: JSON.stringify(datos),
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (usuario) {
        loadTable();
        clearData();
        $('#modalUsuario').modal('hide');
    });
}

function deleteUsuario(id) {
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
                url: `http://localhost:9000/api/v1/shedule/seguridad/usuario/${id}`,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }).done(function () {
                loadTable();
                Swal.fire(
                    "Borrado",
                    "El usuario ha sido eliminado",
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
    $("#contraseña").val("");
    $("#rol").val("");
    $("#persona").val("");
}

$(document).ready(function () {
    loadTable();
});
