Algoritmo ConsultarHorarios
    Definir documentoIdentidad Como Cadena
    Definir contrasena Como Cadena
    Escribir "Iniciar sesi�n en el sistema (Ingresar Documento de Identidad)"
    Leer documentoIdentidad
    Escribir "Ingresar Contrase�a"
    Leer contrasena
    Si documentoIdentidad <> "" Y contrasena <> "" Entonces
        Escribir "Iniciando sesi�n..."
        Escribir "Credenciales v�lidas. "
		Escribir "me dirijo al boton visualizar hprarios"
        Escribir "Horarios asignados:"
		Escribir "Mostrar horario asignado segun el rol"
		
    Sino
        Escribir "Documento de identidad y/o contrase�a incorrectos."
		Escribir "vuelve a intentar :) "
    FinSi
FinAlgoritmo