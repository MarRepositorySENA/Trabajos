function loadTable() {
    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/operacional/gestor_linea/",
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (items) {
        var variable = "";
        items.forEach(function (Elementos, posicion, array) {
            variable += `<tr>
                            <td>` + parseInt(posicion + 1) + `</td> 
                            <td>` + Elementos.nombre + `</td> 
                            <td>` + Elementos.rol.nombre + `</td> 
                            <td>` + Elementos.usuario.nombre + `</td> 
                            <td>` + Elementos.cargo.nombre + `</td> 
                            <td>
                                <button type="button" class="btn btn-warning" onclick="findById(${Elementos.id})" data-bs-toggle="modal" data-bs-target="#modalGestorLinea"><i class='bx bx-search'></i></button>
                                <button type="button" class="btn btn-danger" onclick="Delete(${Elementos.id})"><i class='bx bx-trash'></i></button>
                            </td>
                         </tr>`;
        });
        $("#dataResult").html(variable);
    });
}

function saveGestorLinea() {
    var datos = {
        nombre: $("#nombre").val(),
        contraseña: $("#contraseña").val(),
        rol: { id: $("#rol").val() },
        usuario: { id: $("#usuario").val() },
        cargo: { id: $("#cargo").val() }
    };
    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/operacional/gestor_linea/",
        data: JSON.stringify(datos),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function () {
        loadTable();
        clearData();
    });
}

function findById(id) {
    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/operacional/gestor_linea/" + id,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (item) {
        $("#id").val(item.id);
        $("#nombre").val(item.nombre);
        $("#contraseña").val(item.contraseña);
        $("#rol").val(item.rol.id);
        $("#usuario").val(item.usuario.id);
        $("#cargo").val(item.cargo.id);
    });
}

function update() {
    var id = $("#id").val();
    var datos = {
        nombre: $("#nombre").val(),
        contraseña: $("#contraseña").val(),
        rol: { id: $("#rol").val() },
        usuario: { id: $("#usuario").val() },
        cargo: { id: $("#cargo").val() }
    };
    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/operacional/gestor_linea/" + id,
        data: JSON.stringify(datos),
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function () {
        loadTable();
        clearData();
        $('#modalGestorLinea').modal('hide');
    });
}

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
                url: "http://localhost:9000/api/v1/shedule/operacional/gestor_linea/" + id,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }).done(function () {
                loadTable();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }).fail(function (item) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: item.responseJSON.message,
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            });
        }
    });
}

function clearData() {
    $("#id").val("");
    $("#nombre").val("");
    $("#contraseña").val("");
    $("#rol").val("");
    $("#usuario").val("");
    $("#cargo").val("");
}
