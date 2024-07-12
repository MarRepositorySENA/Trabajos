function loadTable() {
    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/parametrizacion/barrio/",
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
                            <td>` + Elementos.locacion.nombre + `</td> 
                            <td>
                                <button type="button" class="btn btn-warning" onclick="findById(${Elementos.id})" data-bs-toggle="modal" data-bs-target="#modalBarrio"><i class='bx bx-search'></i></button>
                                <button type="button" class="btn btn-danger" onclick="Delete(${Elementos.id})"><i class='bx bx-trash'></i></button>
                            </td>
                         </tr>`;
        });
        $("#dataResult").html(variable);
    });
}

function saveBarrio() {
    var datos = {
        nombre: $("#nombre").val(),
        descripcion: $("#descripcion").val(),
        code: $("#code").val(),
        locacion: { id: $("#locacion").val() }
    };
    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/parametrizacion/barrio/",
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
        url: "http://localhost:9000/api/v1/shedule/parametrizacion/barrio/" + id,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (item) {
        $("#id").val(item.id);
        $("#nombre").val(item.nombre);
        $("#descripcion").val(item.descripcion);
        $("#code").val(item.code);
        $("#locacion").val(item.locacion.id);
    });
}

function update() {
    var id = $("#id").val();
    var datos = {
        nombre: $("#nombre").val(),
        descripcion: $("#descripcion").val(),
        code: $("#code").val(),
        locacion: { id: $("#locacion").val() }
    };
    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/parametrizacion/barrio/" + id,
        data: JSON.stringify(datos),
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function () {
        loadTable();
        clearData();
        $('#modalBarrio').modal('hide');
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
                url: "http://localhost:9000/api/v1/shedule/parametrizacion/barrio/" + id,
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
    $("#descripcion").val("");
    $("#code").val("");
    $("#locacion").val("");
}
