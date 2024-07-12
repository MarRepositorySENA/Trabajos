function loadTable() {
    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/operacional/horario/",
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (items) {
        var variable = "";
        items.forEach(function (Elementos, posicion, array) {
            variable += `<tr>
                            <td>` + parseInt(posicion + 1) + `</td> 
                            <td>` + Elementos.dia + `</td> 
                            <td>` + Elementos.descripcion + `</td> 
                            <td>` + Elementos.ambiente.nombre + `</td> 
                            <td>` + Elementos.ficha.numero + `</td> 
                            <td>` + Elementos.materia.nombre + `</td> 
                            <td>` + Elementos.jornada.nombre + `</td> 
                            <td>` + Elementos.instructor.nombre + `</td> 
                            <td>
                                <button type="button" class="btn btn-warning" onclick="findById(${Elementos.id})" data-bs-toggle="modal" data-bs-target="#modalHorario"><i class='bx bx-search'></i></button>
                                <button type="button" class="btn btn-danger" onclick="Delete(${Elementos.id})"><i class='bx bx-trash'></i></button>
                            </td>
                         </tr>`;
        });
        $("#dataResult").html(variable);
    });
}

function saveHorario() {
    var datos = {
        dia: $("#dia").val(),
        descripcion: $("#descripcion").val(),
        ambiente: { id: $("#ambiente").val() },
        ficha: { id: $("#ficha").val() },
        materia: { id: $("#materia").val() },
        jornada: { id: $("#jornada").val() },
        instructor: { id: $("#instructor").val() }
    };
    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/operacional/horario/",
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
        url: "http://localhost:9000/api/v1/shedule/operacional/horario/" + id,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (item) {
        $("#id").val(item.id);
        $("#dia").val(item.dia);
        $("#descripcion").val(item.descripcion);
        $("#ambiente").val(item.ambiente.id);
        $("#ficha").val(item.ficha.id);
        $("#materia").val(item.materia.id);
        $("#jornada").val(item.jornada.id);
        $("#instructor").val(item.instructor.id);
    });
}

function update() {
    var id = $("#id").val();
    var datos = {
        dia: $("#dia").val(),
        descripcion: $("#descripcion").val(),
        ambiente: { id: $("#ambiente").val() },
        ficha: { id: $("#ficha").val() },
        materia: { id: $("#materia").val() },
        jornada: { id: $("#jornada").val() },
        instructor: { id: $("#instructor").val() }
    };
    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/operacional/horario/" + id,
        data: JSON.stringify(datos),
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function () {
        loadTable();
        clearData();
        $('#modalHorario').modal('hide');
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
                url: "http://localhost:9000/api/v1/shedule/operacional/horario/" + id,
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
    $("#dia").val("");
    $("#descripcion").val("");
    $("#ambiente").val("");
    $("#ficha").val("");
    $("#materia").val("");
    $("#jornada").val("");
    $("#instructor").val("");
}
