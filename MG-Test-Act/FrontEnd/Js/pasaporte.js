function mostrarPasaporte(index) {
    const pasajero = pasajeros[index];
    const nombre = `${pasajero.nombre} ${pasajero.apellido}`;
    const foto = pasajero.fotoPasaporte;

    // Almacenar datos en sessionStorage
    sessionStorage.setItem('pasaporteNombre', nombre);
    sessionStorage.setItem('pasaporteFoto', foto);

    // Abrir la ventana emergente
    const url = `http://127.0.0.1:5501/View/pasaporte.html`;
    window.open(url, 'ventanaPasaporte', 'width=600,height=400,left=100,top=100,resizable=yes,scrollbars=yes,status=yes');
}
