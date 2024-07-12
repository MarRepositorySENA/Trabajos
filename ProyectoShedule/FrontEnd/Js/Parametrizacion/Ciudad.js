function loadTable() {
    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/parametrizacion/ciudad/",
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
                            <td>` + Elementos.descripcion + `</td> 
                            <td>` + Elementos.code + `</td> 
                            <td>` + Elementos.departamento.nombre + `</td> 
                            <td>
                                <button type="button" class="btn btn-warning" onclick="findById(${Elementos.id})" data-bs-toggle="modal" data-bs-target="#modalCiudad"><i class='bx bx-search'></i></button>
                                <button type="button" class="btn btn-danger" onclick="Delete(${Elementos.id})"><i class='bx bx-trash'></i></button>
                            </td>
                         </tr>`;
        });
        $("#dataResult").html(variable);
    });
}

function saveCiudad() {
    var datos = {
        nombre: $("#nombre").val(),
        descripcion: $("#descripcion").val(),
        code: $("#code").val(),
        departamento: { id: $("#departamento").val() }
    };
    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/parametrizacion/ciudad/",
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
        url: "http://localhost:9000/api/v1/shedule/parametrizacion/ciudad/" + id,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (item) {
        $("#id").val(item.id);
        $("#nombre").val(item.nombre);
        $("#descripcion").val(item.descripcion);
        $("#code").val(item.code);
        $("#departamento").val(item.departamento.id);
    });
}

function update() {
    var id = $("#id").val();
    var datos = {
        nombre: $("#nombre").val(),
        descripcion: $("#descripcion").val(),
        code: $("#code").val(),
        departamento: { id: $("#departamento").val() }
    };
    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/parametrizacion/ciudad/" + id,
        data: JSON.stringify(datos),
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function () {
        loadTable();
        clearData();
        $('#modalCiudad').modal('hide');
    });
}

function Delete(id) {
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
                url: "http://localhost:9000/api/v1/shedule/parametrizacion/ciudad/" + id,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }).done(function () {
                loadTable();
                Swal.fire({
                    title: "¡Borrado!",
                    text: "Tu registro ha sido eliminado.",
                    icon: "success"
                });
            }).fail(function (item) {
                Swal.fire({
                    icon: "error",
                    title: "¡Oops...",
                    text: item.responseJSON.message,
                    footer: '<a href="#">¿Por qué tengo este problema?</a>'
                });
            });
        }
    });
}

function clearData() {
    $("#id").val("");
    $("#nombre").val("");
    $("#descripcion").val("");
    $("#code").val("");
    $("#departamento").val("");
}
