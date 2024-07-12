function loadPaisTable() {
    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/parametrizacion/pais/",
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (items) {
        var tableRows = "";
        items.forEach(function (pais, index) {
            tableRows += `<tr>
                            <td>${index + 1}</td>
                            <td>${pais.nombre}</td>
                            <td>${pais.descripcion}</td>
                            <td>${pais.code}</td>
                            <td>${pais.continente.nombre}</td>
                            <td>
                                <button type="button" class="btn btn-warning" onclick="findPaisById(${pais.id})" data-bs-toggle="modal" data-bs-target="#modalPais"><i class='bx bx-search'></i></button>
                                <button type="button" class="btn btn-danger" onclick="deletePais(${pais.id})"><i class='bx bx-trash'></i></button>
                            </td>
                        </tr>`;
        });
        $("#paisTableBody").html(tableRows);
    });
}
function savePais() {
    var datos = {
        nombre: $("#paisNombre").val(),
        descripcion: $("#paisDescripcion").val(),
        code: $("#paisCode").val(),
        continente: {
            id: $("#continenteId").val() // Assuming you have a hidden field for continenteId
        }
    };
    
    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/parametrizacion/pais/",
        method: "POST",
        data: JSON.stringify(datos),
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function () {
        loadPaisTable();
        clearPaisData();
    });
}
function findPaisById(id) {
    $.ajax({
        url: `http://localhost:9000/api/v1/shedule/parametrizacion/pais/${id}`,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (pais) {
        $("#paisId").val(pais.id);
        $("#paisNombre").val(pais.nombre);
        $("#paisDescripcion").val(pais.descripcion);
        $("#paisCode").val(pais.code);
        $("#continenteId").val(pais.continente.id); // Assuming you have a hidden field for continenteId
    });
}
function updatePais() {
    var id = $("#paisId").val();
    var datos = {
        nombre: $("#paisNombre").val(),
        descripcion: $("#paisDescripcion").val(),
        code: $("#paisCode").val(),
        continente: {
            id: $("#continenteId").val() // Assuming you have a hidden field for continenteId
        }
    };
    
    $.ajax({
        url: `http://localhost:9000/api/v1/shedule/parametrizacion/pais/${id}`,
        method: "PUT",
        data: JSON.stringify(datos),
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function () {
        loadPaisTable();
        clearPaisData();
        $('#modalPais').modal('hide');
    });
}
function deletePais(id) {
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
                url: `http://localhost:9000/api/v1/shedule/parametrizacion/pais/${id}`,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }).done(function () {
                loadPaisTable();
                Swal.fire({
                    title: "Deleted!",
                    text: "The country has been deleted.",
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
function clearPaisData() {
    $("#paisId").val("");
    $("#paisNombre").val("");
    $("#paisDescripcion").val("");
    $("#paisCode").val("");
    $("#continenteId").val(""); // Assuming you have a hidden field for continenteId
}
