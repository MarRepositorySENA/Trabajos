function consultarEleccion() {
  // Destruir la instancia de DataTable existente
  if ($.fn.DataTable.isDataTable('#myTable')) {
    $('#myTable').DataTable().destroy();
  }

  var eleccion = $('input[name="eleccionViaje"]:checked').val();
  var fecha = $("#fechaSalida").val();

  if (!fecha) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    fecha = yyyy + '-' + mm + '-' + dd;
  }

  var hora = $("#horaSalida").val();

  if (!hora) {
    var now = new Date();
    var hours = String(now.getHours()).padStart(2, '0');
    var minutes = String(now.getMinutes()).padStart(2, '0');
    var seconds = String(now.getSeconds()).padStart(2, '0');
    hora = hours + ':' + minutes + ':' + seconds;
  } else {
    if (hora.length === 5) {
      hora += ':00';
    }
  }

  var apiUrl = "http://localhost:9000/session3/api/v1/session3/Operational/Shedules/consultar/vuelos";
  if (eleccion == "retorno") {
    apiUrl += "/regreso";
  }

  $.ajax({
    url: apiUrl,
    method: "GET",
    data: {
      aeropuertoSalida: $("#aeropuertoSalida").val(),
      aeropuertoDestino: $("#aeropuertoDestino").val(),
      fecha: fecha,
      hora: null,
      tipoCabina: $("#tipoCabinaId").val(),
    },
    headers: {
      "Content-Type": "application/json"
    }
  }).done(function (item) {
    var variable = "";
    item.forEach(function (Elementos, posicion) {
      variable += `<tr>
                    <td>${parseInt(posicion + 1)}</td> 
                    <td>${Elementos.codigoIataSalida}-${Elementos.aeropuertoSalida}</td> 
                    <td>${Elementos.codigoIataDestino}-${Elementos.aeropuertoDestino}</td> 
                    <td>${Elementos.fecha}</td> 
                    <td>${Elementos.hora}</td> 
                    <td>${Elementos.numeroVuelo}</td> 
                    <td>${Elementos.precioCabina}</td>
                  </tr>`;
    });

    $("#ResultadoVuelo" + (eleccion == "ida" ? "Salida" : "Regreso")).html(variable);

    // Reinicializar DataTable después de actualizar el contenido
    var table = $('#myTable').DataTable({
      select: {
        style: 'single'
      }
    });

    // Capturar el evento de selección de filas
    table.on('select', function (e, dt, type, indexes) {
      if (type === 'row') {
        var data = table.row(indexes).data();
        console.log('Fila seleccionada:', data);

        // Guardar los datos seleccionados en un diccionario
        var selectedData = {
          posicion: data[0],
          aeropuertoSalida: data[1],
          aeropuertoDestino: data[2],
          fecha: data[3],
          hora: data[4],
          numeroVuelo: data[5],
          precioCabina: data[6]
        };

        // Almacenar el diccionario en localStorage
        localStorage.setItem('selectedFlight', JSON.stringify(selectedData));
        localStorage.setItem('localStorageResultReturn', JSON.stringify(selectedData));
      }
    });

  });
}

function reservar() {
  if (localStorage.getItem('selectedFlight') == null) {
    alert("Debe seleccionar un vuelo")
  } else {
    localStorage.setItem('cantidadPasajeros', $("#contadorPasajeros").val());
    localStorage.setItem('tipoCabina', $("#tipoCabinaId").val());
    window.location.href = '/View/ConfirmacionVuelos.html';
  }

}


function cargarTiposCabinas() {
  $.ajax({
    url: 'http://localhost:9000/session3/api/v1/session3/Sales/CabinTypes/',
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).done(function (item) {
    var variable = "<option value='economico' selected disabled>- seleccion -</option>";
    item.forEach(function (Elementos, posicion) {
      variable += `<option value="${Elementos.name}">${Elementos.name}</option>`;
    });
    $("#tipoCabinaId").html(variable);
  })
}