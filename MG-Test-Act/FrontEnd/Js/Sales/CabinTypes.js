function loadTable() {
    $.ajax({
        url: "http://localhost:9000/session3/api/v1/session3/Sales/CabinTypes/",
        method: "GET",
        headers: {
            "Content-Type": "application/json" //El tipo de contenido es tipo json, referencia la misma estrucutra de CrossOrigin del backend
        }
    }).done(
        function (item) {
            variable = ""
            item.forEach(function (Elementos, posicion, array) {
                variable += `<tr>
                            <td>` + parseInt(posicion + 1) + `</td> 
                            <td>` + Elementos.name + `</td> 
                            <td> <button type="button" class="btn btn-success" onclick="findById(${Elementos.id})"><i class='bx bx-search'></i></button>
                                <button type="button" class="btn btn-danger" onclick="Delete(${Elementos.id})"><i class='bx bx-trash'></i></button>
                            </td> 
                            </tr> `

            });

            $("#tablaCabinas").html(variable)
        }
    )
}
//Funcion guardar
function saveCabinType(){
    var nombreCabina = $("#nombreCabina").val(); 
    
    if (!nombreCabina) {
        Swal.fire({
            icon: 'warning',
            title: 'Campo vacío',
            text: 'Por favor, ingresa el nombre del tipo de cabina.',
            confirmButtonText: 'OK'
        });
        return; 
    }

    var datos = {
        name: $("#nombreCabina").val(),
    }
    console.log("mensajedatos", datos)
    $.ajax({
        url: "http://localhost:9000/session3/api/v1/session3/Sales/CabinTypes/",
        data: JSON.stringify(datos),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(
        function (item) {
            loadTable();
            clearData()
        }).fail(function (jqXHR, textStatus, errorThrown) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo guardar el tipo de cabina. Inténtalo nuevamente.',
                confirmButtonText: 'OK'
            });

        });
}

//Busqueda por id
function findById(id) {
    $.ajax({
        url: "http://localhost:9000/session3/api/v1/session3/Sales/CabinTypes/"+id,
        method: "GET",
        headers: {
            "Content-Type": "application/json" //El tipo de contenido es tipo json, referencia la misma estrucutra de CrossOrigin del backend
        }
    }).done(
        function (item) {
                $("#id").val(item.id),
                $("#nombreCabina").val(item.name)
        }
    )
}


function updateCabinType() {

    id=$("#id").val()
  
    var datos = {
        name: $("#nombreCabina").val(),//val sirve para captura o  envie datos dentro de los parentesis al frontend
    }
    $.ajax({
        url: "http://localhost:9000/session3/api/v1/session3/Sales/CabinTypes/"+id,
        data: JSON.stringify(datos),
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(
        function (item) {
            loadTable();
            clearData()
        }
    )
}
//Eliminar
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
                url: "http://localhost:9000/session3/api/v1/session3/Sales/CabinTypes/" + id,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }).done(
                function (item) {
                    loadTable()

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





function clearData() {
        $("#id").val(""),
        $("#nombreCabina").val("")
       
}

