
//Funcion guardar
function saveCabinType(){
    id= $("#id").val();
    console.log("save", id)
    verificarId= !!id
    urlCountries = verificarId ? "http://localhost:9000/session3/api/v1/session3/Sales/CabinTypes/"+ id : "http://localhost:9000/session3/api/v1/session3/Sales/CabinTypes/"
    metodo= verificarId ? "PUT" : "POST"


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
   
    $.ajax({
        url: "http://localhost:9000/session3/api/v1/session3/Sales/CabinTypes/",
        data: JSON.stringify(datos),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(
        function (item) {
            loadCabinTypes()
            clearCabinTypesForm()
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
function findCabinTypesById(id) {
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
                clearCabinTypesForm();
        }
    )
}



//Eliminar
function DeleteCabinTypes(id) {
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
                    loadCabynTypes();

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





function clearCabinTypesForm() {
        $("#id").val(""),
        $("#nombreCabina").val("")
       
}

