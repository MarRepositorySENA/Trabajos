//Tabla Roles
function loadRoles() {
    $.ajax({
        url: "http://localhost:9000/session3/api/v1/session3/Security/Roles/",
        method: "GET",
        headers: {
            "Content-Type": "application/json" 
        }
    }).done(
        function (item) {
            variable = ""
            item.forEach(function (Elementos, posicion, array) {
                variable += `<tr>
                            <td>` + parseInt(posicion + 1) + `</td> 
                            <td>` + Elementos.title + `</td> 
                            <td> <button type="button" class="btn btn-success" onclick="findRolesById(${Elementos.id})"><i class='bx bx-search'></i></button>
                                <button type="button" class="btn btn-danger" onclick="DeleteRoles(${Elementos.id})"><i class='bx bx-trash'></i></button>
                            </td> 
                            </tr> `

            });

            $("#tablaRoles").html(variable)
        }
    )
}

//Guardar Roles
function saveRoles(){
    id= $("#id").val();
    console.log("id",id)
    verificarId= !!id
    urlRoles = verificarId ? "http://localhost:9000/session3/api/v1/session3/Security/Roles/"+ id : "http://localhost:9000/session3/api/v1/session3/Security/Roles/"
    metodo= verificarId ? "PUT" : "POST"


    var title = $("#title").val(); 
    
    if (!title) {
        Swal.fire({
            icon: 'warning',
            title: 'Campo vacío',
            text: 'Por favor, ingresa el titulo de la cabina.',
            confirmButtonText: 'OK'
        });
        return; 
    }

    var datos = {
        title: $("#title").val(),
    }
   
    $.ajax({
        url: urlRoles,
        data: JSON.stringify(datos),
        method: metodo,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(
        function (item) {
            loadRoles()
           
        }).fail(function (jqXHR, textStatus, errorThrown) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo guardar el titulo de Roles. Inténtalo nuevamente.',
                confirmButtonText: 'OK'
            });

        });
}

//Busqueda por id
function findRolesById(id) {
    $.ajax({
        url: "http://localhost:9000/session3/api/v1/session3/Security/Roles/"+id,
        method: "GET",
        headers: {
            "Content-Type": "application/json" 
        }
    }).done(
        function (item) {
                $("#id").val(item.id),
                $("#title").val(item.title)
        }
    )
}

function DeleteRoles(id){
    $.ajax ({
        url: "http://localhost:9000/session3/api/v1/session3/Security/Roles/"+id,
        method: "DELETE",
        headers: {
            "Content-Type": "application/json" 
        }
    }).done (
        function(item){
            loadRoles()
        }
    )
}