package BackendSession3.BackendSession3.Dto;

import java.time.LocalDate;
import java.time.LocalTime;

public interface IConsultarVuelosDto {

    // Aeropuertos
    String getAeropuertoSalida();
    String getAeropuertoDestino();

    String getCodigoIataSalida();
    String getCodigoIataDestino();

    // Horarios
    LocalDate getFecha();
    LocalTime getHora();
    String getNumeroVuelo();
    Double getPrecioCabina();
    
    
}
