Algoritmo CrearHorarios
    Definir dia, numeroFicha, programaFormacion, ambiente, instructor, jornada, especialidad Como Cadena
    Definir horarioExistente Como Logico
    horarioExistente <- Falso
    
    Escribir "Seleccionar opci�n de gesti�n de horarios"
    Escribir "seleccionar d�a de la Semana"
    Leer dia
    
    Escribir "Ingresar n�mero de ficha del grupo de estudiantes"
    Leer numeroFicha
    
    Escribir "Ingresar programa de formaci�n"
    Leer programaFormacion
    
    Escribir "Seleccionar instructor para el horario"
    Leer instructor
    Si horarioExistente = Verdadero Entonces
        Escribir "El ambiente o el instructor ya est�n asignados en otro horario para el mismo d�a y hora. Por favor, elija otro."
    Sino
        Escribir "Seleccionar jornada "
        Leer jornada
        
        Escribir "Seleccionar especialidad para asignar el ambiente"
        Leer especialidad
        Si datosHorario <> "" Y numeroFicha <> "" Y programaFormacion <> "" Y ambiente <> "" Y instructor <> "" Y jornada <> "" Y especialidad <> "" Entonces
            Escribir "Guardar datos del horario"
            Escribir "Horario creado y asignado exitosamente."
        Sino
            Escribir "Datos del horario no v�lidos."
        FinSi
    FinSi
FinAlgoritmo