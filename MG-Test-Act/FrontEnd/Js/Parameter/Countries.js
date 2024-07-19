//Cargar tabla Pais
function loadCountries() {
    $.ajax({
        url: "http://localhost:9000/session3/api/v1/session3/Parameter/Countries/",
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (item) {
        let variable = "";
        item.forEach(function (Elementos, posicion) {
            variable += `<tr>
                            <td>${parseInt(posicion + 1)}</td> 
                            <td>${Elementos.name}</td> 
                            <td>
                                <button type="button" class="btn btn-success" onclick="findCountryById(${Elementos.id})"><i class='bx bx-search'></i></button>
                                <button type="button" class="btn btn-danger" onclick="deleteCountry(${Elementos.id})"><i class='bx bx-trash'></i></button>
                            </td> 
                        </tr>`;
        });
        $("#tablaPais").html(variable);
    });
}

//Guardar cabina
function saveCountries() {
    id= $("#id").val();
    verificarId= !!id
    urlCountries = verificarId ? "http://localhost:9000/session3/api/v1/session3/Parameter/Countries/"+ id : "http://localhost:9000/session3/api/v1/session3/Parameter/Countries/"
    metodo= verificarId ? "PUT" : "POST"

    

    var nombrePais = $("#nombrePais").val(); // Obtiene el valor del campo

    var datos = {
        name: $("#nombrePais").val(),//val sirve para captura o  envie datos dentro de los parentesis al frontend
    }
    $.ajax({
        url: urlCountries,
        data: JSON.stringify(datos),
        method: metodo,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(
        function (item) {
            loadCountries();
            clearCountryForm();
    })
}

//Busqueda por id
function findCountryById(id) {
    $.ajax({
        url: "http://localhost:9000/session3/api/v1/session3/Parameter/Countries/" + id,
        method: "GET",
        headers: {
            "Content-Type": "application/json" //El tipo de contenido es tipo json, referencia la misma estrucutra de CrossOrigin del backend
        }
    }).done(
        function (item) {
            $("#id").val(item.id),
                $("#nombrePais").val(item.name)
        }
    )
}

//Eliminar
function deleteCountry(id) {
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
                url: "http://localhost:9000/session3/api/v1/session3/Parameter/Countries/" + id,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }).done(
                function (item) {
                    loadCountries();

                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            ).fail(
                function (item) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: item.responseJSON.message,
                        footer: '<a href="#">Why do I have this issue?</a>'
                    });
                }
            )
        }
    });
}



function clearCountryForm() {
    $("#id").val(""),
        $("#nombrePais").val("")

}

