
//Funcion guardar
function saveOffices(){
    id = $("#id").val();
    verificarId= !!id
    urlOficina = verificarId ? "http://localhost:9000/session3/api/v1/session3/Parameter/Offices/"+id : "http://localhost:9000/session3/api/v1/session3/Parameter/Offices/"
    metodo= verificarId ? "PUT" : "POST"

    var title = $("#title").val();
    var phone = $("#phone").val();
    var contact = $("#contact").val();
    var countryId = $("#countryId").val();
    console.log(countryId)

    var datos = {
        title: $("#title").val(),
        phone: $("#phone").val(),
        contact: $("#contact").val(),
        countryId: {
            id: countryId
        }
    }
    $.ajax({
        url: urlOficina,
        data: JSON.stringify(datos),
        method: metodo,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(
        function (item) {

            loadOffices();
            clearData()
        })

        
}



//buscar por id
function findById(id) {
    $.ajax({
        url: "http://localhost:9000/session3/api/v1/session3/Parameter/Offices/" + id,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(
        function (item) {
            $("#id").val(item.id),
                $("#title").val(item.title),
                $("#phone").val(item.phone),
                $("#contact").val(item.contact),
                $("#countryId").val(item.countryId.id)
        }
    )

}

//metodo Eliminar
function Delete(id){
    $.ajax({
        url:"http://localhost:9000/session3/api/v1/session3/Parameter/Offices/"+id,
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(
        function (item){
            loadOffices();
        }
    )
}

function clearData() {
    $("#id").val("");
    $("#title").val("");
    $("#phone").val("");
    $("#contact").val("");
    $("#countryId").val("");
}
