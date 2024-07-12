// Archivo JavaScript para interactuar con la entidad Vista via AJAX

function loadTable() {
    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/seguridad/vista/",
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(
        function (vistas) {
            let variable = "";
            vistas.forEach(function (vista, index) {
                variable += `<tr>
                                <td>${index + 1}</td>
                                <td>${vista.etiqueta}</td>
                                <td>${vista.ruta}</td>
                                <td>${vista.codigo}</td>
                                <td>${vista.modulo.nombre}</td>
                                <td>${vista.rol.nombre}</td>
                                <td>
                                    <button type="button" class="btn btn-warning" onclick="findById(${vista.id})" data-bs-toggle="modal" data-bs-target="#modalVista"><i class='bx bx-search'></i></button>
                                    <button type="button" class="btn btn-danger" onclick="deleteVista(${vista.id})"><i class='bx bx-trash'></i></button>
                                </td>
                            </tr>`;
            });

            $("#dataResult").html(variable);
        }
    );
}

function saveVista() {
    var datos = {
        etiqueta: $("#etiqueta").val(),
        ruta: $("#ruta").val(),
        codigo: $("#codigo").val(),
        modulo: {
            id: $("#modulo").val()
        },
        rol: {
            id: $("#rol").val()
        }
    };

    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/seguridad/vista/",
        data: JSON.stringify(datos),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (vista) {
        loadTable();
        clearData();
    });
}

function findById(id) {
    $.ajax({
        url: `http://localhost:9000/api/v1/shedule/seguridad/vista/${id}`,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (vista) {
        $("#id").val(vista.id);
        $("#etiqueta").val(vista.etiqueta);
        $("#ruta").val(vista.ruta);
        $("#codigo").val(vista.codigo);
        $("#modulo").val(vista.modulo.id);
        $("#rol").val(vista.rol.id);
    });
}

function updateVista() {
    var id = $("#id").val();
    var datos = {
        etiqueta: $("#etiqueta").val(),
        ruta: $("#ruta").val(),
        codigo: $("#codigo").val(),
        modulo: {
            id: $("#modulo").val()
        },
        rol: {
            id: $("#rol").val()
        }
    };

    $.ajax({
        url: `http://localhost:9000/api/v1/shedule/seguridad/vista/${id}`,
        data: JSON.stringify(datos),
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (vista) {
        loadTable();
        clearData();
        $('#modalVista').modal('hide');
    });
}

function deleteVista(id) {
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
                url: `http://localhost:9000/api/v1/shedule/seguridad/vista/${id}`,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }).done(function () {
                loadTable();
                Swal.fire(
                    "Borrado",
                    "La vista ha sido eliminada",
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
    $("#etiqueta").val("");
    $("#ruta").val("");
    $("#codigo").val("");
    $("#modulo").val("");
    $("#rol").val("");
}

$(document).ready(function () {
    loadTable();
});
