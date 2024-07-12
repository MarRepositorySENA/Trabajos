function loadLocacionTable() {
    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/parametrizacion/locacion/",
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (items) {
        var tableRows = "";
        items.forEach(function (locacion, index) {
            tableRows += `<tr>
                            <td>${index + 1}</td>
                            <td>${locacion.nombre}</td>
                            <td>${locacion.descripcion}</td>
                            <td>${locacion.code}</td>
                            <td>${locacion.ciudad.nombre}</td>
                            <td>
                                <button type="button" class="btn btn-warning" onclick="findLocacionById(${locacion.id})" data-bs-toggle="modal" data-bs-target="#modalLocacion"><i class='bx bx-search'></i></button>
                                <button type="button" class="btn btn-danger" onclick="deleteLocacion(${locacion.id})"><i class='bx bx-trash'></i></button>
                            </td>
                        </tr>`;
        });
        $("#locacionTableBody").html(tableRows);
    });
}
function saveLocacion() {
    var datos = {
        nombre: $("#locacionNombre").val(),
        descripcion: $("#locacionDescripcion").val(),
        code: $("#locacionCode").val(),
        ciudad: {
            id: $("#ciudadId").val() // Assuming you have a hidden field for ciudadId
        }
    };
    
    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/parametrizacion/locacion/",
        method: "POST",
        data: JSON.stringify(datos),
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function () {
        loadLocacionTable();
        clearLocacionData();
    });
}
function findLocacionById(id) {
    $.ajax({
        url: `http://localhost:9000/api/v1/shedule/parametrizacion/locacion/${id}`,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (locacion) {
        $("#locacionId").val(locacion.id);
        $("#locacionNombre").val(locacion.nombre);
        $("#locacionDescripcion").val(locacion.descripcion);
        $("#locacionCode").val(locacion.code);
        $("#ciudadId").val(locacion.ciudad.id); // Assuming you have a hidden field for ciudadId
    });
}
function updateLocacion() {
    var id = $("#locacionId").val();
    var datos = {
        nombre: $("#locacionNombre").val(),
        descripcion: $("#locacionDescripcion").val(),
        code: $("#locacionCode").val(),
        ciudad: {
            id: $("#ciudadId").val() // Assuming you have a hidden field for ciudadId
        }
    };
    
    $.ajax({
        url: `http://localhost:9000/api/v1/shedule/parametrizacion/locacion/${id}`,
        method: "PUT",
        data: JSON.stringify(datos),
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function () {
        loadLocacionTable();
        clearLocacionData();
        $('#modalLocacion').modal('hide');
    });
}
function deleteLocacion(id) {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then(function (result) {
        if (result.isConfirmed) {
            $.ajax({
                url: `http://localhost:9000/api/v1/shedule/parametrizacion/locacion/${id}`,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }).done(function () {
                loadLocacionTable();
                Swal.fire({
                    title: "Deleted!",
                    text: "The location has been deleted.",
                    icon: "success"
                });
            }).fail(function (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.responseJSON.message,
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            });
        }
    });
}
function clearLocacionData() {
    $("#locacionId").val("");
    $("#locacionNombre").val("");
    $("#locacionDescripcion").val("");
    $("#locacionCode").val("");
    $("#ciudadId").val(""); // Assuming you have a hidden field for ciudadId
}
