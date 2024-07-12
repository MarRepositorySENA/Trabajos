// Función para cargar la tabla de sedes
function loadTable() {
    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/parametrizacion/sede/",
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (sedes) {
        let tableRows = "";
        sedes.forEach(function (sede, index) {
            tableRows += `<tr>
                            <td>${index + 1}</td>
                            <td>${sede.nombre}</td>
                            <td>${sede.descripcion}</td>
                            <td>${sede.code}</td>
                            <td>${sede.barrio.nombre}</td>
                            <td>${sede.centroFormacion.nombre}</td>
                            <td>
                                <button type="button" class="btn btn-warning" onclick="findById(${sede.id})" data-bs-toggle="modal" data-bs-target="#modalSede"><i class='bx bx-search'></i></button>
                                <button type="button" class="btn btn-danger" onclick="Delete(${sede.id})"><i class='bx bx-trash'></i></button>
                            </td>
                          </tr>`;
        });
        $("#dataResult").html(tableRows);
    }).fail(function (error) {
        console.error("Error loading sedes:", error);
    });
}

// Función para guardar una sede
function saveSede() {
    var sedeData = {
        nombre: $("#nombre").val(),
        descripcion: $("#descripcion").val(),
        code: $("#code").val(),
        barrio: { id: $("#barrioId").val() }, // Ajustar según la estructura del objeto barrio
        centroFormacion: { id: $("#centroFormacionId").val() } // Ajustar según la estructura del objeto centroFormacion
    };

    $.ajax({
        url: "http://localhost:9000/api/v1/shedule/parametrizacion/sede/",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(sedeData)
    }).done(function (response) {
        loadTable(); // Recargar la tabla después de guardar
        clearData(); // Limpiar los campos del formulario
    }).fail(function (error) {
        console.error("Error saving sede:", error);
    });
}

// Función para buscar una sede por ID
function findById(id) {
    $.ajax({
        url: `http://localhost:9000/api/v1/shedule/parametrizacion/sede/${id}`,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (sede) {
        $("#id").val(sede.id);
        $("#nombre").val(sede.nombre);
        $("#descripcion").val(sede.descripcion);
        $("#code").val(sede.code);
        $("#barrioId").val(sede.barrio.id); // Ajustar según la estructura del objeto barrio
        $("#centroFormacionId").val(sede.centroFormacion.id); // Ajustar según la estructura del objeto centroFormacion
    }).fail(function (error) {
        console.error("Error finding sede by ID:", error);
    });
}

// Función para actualizar una sede
function updateSede() {
    var sedeId = $("#id").val();
    var sedeData = {
        nombre: $("#nombre").val(),
        descripcion: $("#descripcion").val(),
        code: $("#code").val(),
        barrio: { id: $("#barrioId").val() }, // Ajustar según la estructura del objeto barrio
        centroFormacion: { id: $("#centroFormacionId").val() } // Ajustar según la estructura del objeto centroFormacion
    };

    $.ajax({
        url: `http://localhost:9000/api/v1/shedule/parametrizacion/sede/${sedeId}`,
        method: "PUT",
        contentType: "application/json",
        data: JSON.stringify(sedeData)
    }).done(function (response) {
        loadTable(); // Recargar la tabla después de actualizar
        clearData(); // Limpiar los campos del formulario
        $('#modalSede').modal('hide'); // Cerrar el modal después de actualizar
    }).fail(function (error) {
        console.error("Error updating sede:", error);
    });
}

// Función para eliminar una sede
function Delete(id) {
    Swal.fire({
        title: "¿Estás seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminarlo"
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: `http://localhost:9000/api/v1/shedule/parametrizacion/sede/${id}`,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }).done(function (response) {
                loadTable(); // Recargar la tabla después de eliminar
                Swal.fire(
                    "Eliminado",
                    "Tu registro ha sido eliminado.",
                    "success"
                );
            }).fail(function (error) {
                console.error("Error deleting sede:", error);
                Swal.fire(
                    "Error",
                    "Hubo un error al intentar eliminar el registro.",
                    "error"
                );
            });
        }
    });
}

// Función para limpiar los datos del formulario
function clearData() {
    $("#id").val("");
    $("#nombre").val("");
    $("#descripcion").val("");
    $("#code").val("");
    $("#barrioId").val(""); // Limpiar según la estructura del objeto barrio
    $("#centroFormacionId").val(""); // Limpiar según la estructura del objeto centroFormacion
}

// Función para inicializar la tabla al cargar la página
$(document).ready(function () {
    loadTable();
});
