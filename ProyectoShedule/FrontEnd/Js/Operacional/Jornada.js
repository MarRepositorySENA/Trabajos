function loadTable() {
    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/operacional/jornada/",
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (items) {
        var variable = "";
        items.forEach(function (Elementos, posicion, array) {
            variable += `<tr>
                            <td>` + parseInt(posicion + 1) + `</td> 
                            <td>` + Elementos.code + `</td> 
                            <td>` + Elementos.descripcion + `</td> 
                            <td>` + Elementos.fechaInicio + `</td> 
                            <td>` + Elementos.fechaFin + `</td> 
                            <td>
                                <button type="button" class="btn btn-warning" onclick="findById(${Elementos.id})" data-bs-toggle="modal" data-bs-target="#modalJornada"><i class='bx bx-search'></i></button>
                                <button type="button" class="btn btn-danger" onclick="Delete(${Elementos.id})"><i class='bx bx-trash'></i></button>
                            </td>
                         </tr>`;
        });
        $("#dataResult").html(variable);
    });
}

function saveJornada() {
    var datos = {
        code: $("#code").val(),
        descripcion: $("#descripcion").val(),
        fechaInicio: $("#fechaInicio").val(),
        fechaFin: $("#fechaFin").val()
    };
    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/operacional/jornada/",
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
        url: "http://localhost:9000/api/v1/shedule/operacional/jornada/" + id,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (item) {
        $("#id").val(item.id);
        $("#code").val(item.code);
        $("#descripcion").val(item.descripcion);
        $("#fechaInicio").val(item.fechaInicio);
        $("#fechaFin").val(item.fechaFin);
    });
}

function update() {
    var id = $("#id").val();
    var datos = {
        code: $("#code").val(),
        descripcion: $("#descripcion").val(),
        fechaInicio: $("#fechaInicio").val(),
        fechaFin: $("#fechaFin").val()
    };
    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/operacional/jornada/" + id,
        data: JSON.stringify(datos),
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function () {
        loadTable();
        clearData();
        $('#modalJornada').modal('hide');
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
                url: "http://localhost:9000/api/v1/shedule/operacional/jornada/" + id,
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
    $("#code").val("");
    $("#descripcion").val("");
    $("#fechaInicio").val("");
    $("#fechaFin").val("");
}
