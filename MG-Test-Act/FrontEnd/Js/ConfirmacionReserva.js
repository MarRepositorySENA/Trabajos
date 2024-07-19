

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
  
let pasajeros = [];

async function pasarBase64(file) {
  return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener('loadend', () => {
          resolve(reader.result.split(',')[1]); // Obtener la cadena base64 sin el prefijo
      });
      reader.readAsDataURL(file);
  });
}


async function guardarPasajero(){

  const imageInput = $("#foto-pasaporte")[0];
  const file = imageInput.files[0];
  let fotoPasaporteBase64 = '';

  if (file) {
      fotoPasaporteBase64 = await pasarBase64(file);
  }

  
  let pasajero = {
    nombre : $("#nombres").val(),
    apellido : $("#apellidos").val(),
    fechaNacimiento : $("#fecha-nacimiento").val(),
    numeroPasaporte : $("#numero-pasaporte").val(),
    paisPasaporte : $("#countryId").val(),
    telefono : $("#telefono").val(),
    fotoPasaporte : fotoPasaporteBase64
  }

  pasajeros.push(pasajero);

  cargarPasajeros(pasajeros);

}


function cargarPasajeros(pasajeros) {
  let variable = "";
  pasajeros.forEach(function (Elementos, index) {
      let nombrePais = countryMap[Elementos.paisPasaporte]; 
      variable += `<tr>
                    <td>${Elementos.nombre}</td> 
                    <td>${Elementos.apellido}</td> 
                    <td>${Elementos.fechaNacimiento}</td> 
                    <td>${Elementos.numeroPasaporte}</td> 
                    <td>${nombrePais}</td> 
                    <td>${Elementos.telefono}</td>
                    <td> <button type="button" class="btn btn-light" onclick="mostrarPasaporte(${index});"><i class='bx bxs-image'></i> Mostrar Pasaporte</button></td>
                  </tr>`;
  });

  $("#pasajeros").html(variable);
}


function registrarTickets() {
  // Obtener el userId desde el localStorage
  const userId = JSON.parse(localStorage.getItem('userId'));
  
  // Asegúrate de que `pasajeros` tenga datos
  if (pasajeros.length === 0) {
      alert('No hay pasajeros para registrar.');
      return;
  }

  // Iterar sobre cada pasajero y crear un ticket
  pasajeros.forEach(pasajero => {
      // Construir el objeto del ticket para cada pasajero
      const ticket = {
          userId: userId,
          sheduleId: 'id-del-horario', // Aquí deberás colocar el ID del horario correspondiente
          cabinTypeId: $('#tipoCabinaId').val(), // ID del tipo de cabina seleccionado
          firstName: pasajero.nombre,
          lastName: pasajero.apellido,
          email: '', // Aquí puedes agregar el email si está disponible
          phone: pasajero.telefono,
          passport_number: pasajero.numeroPasaporte,
          passportCountryId: pasajero.paisPasaporte,
          passportPhoto: pasajero.fotoPasaporte,
          booking_reference: '', // Puedes generar una referencia de reserva si es necesario
          confirmed: false // Si el ticket está confirmado o no
      };

      // Enviar el ticket al backend
      $.ajax({
          url: 'http://localhost:9000/session3/api/v1/session3/Sales/Tickets/', // Asegúrate de que esta URL sea correcta
          method: 'POST',
          contentType: 'application/json',
          data: JSON.stringify(ticket),
          success: function (response) {
              console.log('Ticket creado con éxito para:', pasajero.nombre);
          },
          error: function (error) {
              console.error('Error al crear el ticket para:', pasajero.nombre, error);
          }
      });
  });
}

