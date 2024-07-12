package BackendSession3.BackendSession3.IService.Operational;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import BackendSession3.BackendSession3.Dto.ConsultarVuelosDto;
import BackendSession3.BackendSession3.Entity.Operational.Shedules;
import BackendSession3.BackendSession3.IService.IBaseService.IBaseService;

public interface IShedulesService extends IBaseService<Shedules> {

	List<ConsultarVuelosDto> ConsultarVuelos(String aeropuertoSalida, String aeropuertoDestino, LocalDate fecha,
			LocalTime hora, String tipoCabina);
	
	List<ConsultarVuelosDto> consultarVuelosRegreso(String aeropuertoSalida, String aeropuertoDestino, LocalDate fecha,
			LocalTime hora, String tipoCabina);

}
