function cargarLocalStorage() {
  var datosGuardados = JSON.parse(localStorage.getItem('selectedFlight'));

  if (datosGuardados) {
    var variable = `<tr>
                      <td> ${datosGuardados.aeropuertoSalida}</td>
                      <td> ${datosGuardados.aeropuertoDestino}</td>
                      <td> ${localStorage.getItem('tipoCabina')}</td>
                      <td> ${datosGuardados.fecha}</td>
                      <td> ${datosGuardados.numeroVuelo}</td>
                    </tr>`;
    $("#localStorageResult").html(variable);
  }
    var datosGuardadosRegresos = JSON.parse(localStorage.getItem('localStorageResultReturn'));
  
    if (datosGuardadosRegresos) {
      var variable = `<tr>
                        <td> ${datosGuardadosRegresos.aeropuertoSalida}</td>
                        <td> ${datosGuardadosRegresos.aeropuertoDestino}</td>
                        <td> ${localStorage.getItem('tipoCabina')}</td>
                        <td> ${datosGuardadosRegresos.fecha}</td>
                        <td> ${datosGuardadosRegresos.numeroVuelo}</td>
                      </tr>`;
      $("#ResultadoVueloRegreso").html(variable);
    }
  
  }
  




