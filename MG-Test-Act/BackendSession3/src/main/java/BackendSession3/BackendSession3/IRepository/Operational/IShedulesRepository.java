package BackendSession3.BackendSession3.IRepository.Operational;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import BackendSession3.BackendSession3.Dto.IConsultarVuelosDto;
import BackendSession3.BackendSession3.Entity.Operational.Shedules;
import BackendSession3.BackendSession3.IRepository.BaseRepository.IBaseRepository;

@Repository
public interface IShedulesRepository extends IBaseRepository<Shedules, Long> {

	@Query(value = "select"
			+ "				AerSalida.iata_code AS codigoIataSalida, "
			+ "				AerSalida.name AS aeropuertoSalida, "
			+ "				AerDestino.iata_code AS codigoIataDestino, "
			+ "				AerDestino.name AS aeropuertoDestino, "
			+ "				AerDestino.iata_code AS codigoIataDestino, " 
			+ "				Horarios.date AS fecha, "
			+ "				Horarios.time AS hora, " 
			+ "				Horarios.flight_number AS numeroVuelo, "
			+ "				Horarios.economy_price AS precioCabina " 
			+ "		from Shedules Horarios "
			+ "				inner join Routes Rutas on Horarios.route_id = Rutas.id "
			+ "				inner join Airports AerSalida on Rutas.departure_airport_id = AerSalida.id "
			+ "				inner join Airports AerDestino on Rutas.arrival_airport_id = AerDestino.id "
			+ "		where (:aeropuertoSalida IS NULL or AerSalida.name LIKE %:aeropuertoSalida% ) "
			+ "				and (:aeropuertoDestino IS NULL or AerDestino.name LIKE %:aeropuertoDestino%  ) "
			+ "				and (:fecha IS NULL or Horarios.date = :fecha) "
			+ "				and (:hora IS NULL or Horarios.time = :hora)", nativeQuery = true)
	List<IConsultarVuelosDto> consultarVuelos(String aeropuertoSalida, String aeropuertoDestino, LocalDate fecha,
			LocalTime hora);
	
	
	@Query(value = "select"
	        + "     AerDestino.iata_code AS codigoIataDestino, "
	        + "     AerDestino.name AS aeropuertoDestino, "
	        + "     AerSalida.iata_code AS codigoIataSalida, "
	        + "     AerSalida.name AS aeropuertoSalida, "
	        + "     Horarios.date AS fecha, "
	        + "     Horarios.time AS hora, "
	        + "     Horarios.flight_number AS numeroVuelo, "
	        + "     Horarios.economy_price AS precioCabina "
	        + "from Shedules Horarios "
	        + "     inner join Routes Rutas on Horarios.route_id = Rutas.id "
	        + "     inner join Airports AerSalida on Rutas.departure_airport_id = AerSalida.id "
	        + "     inner join Airports AerDestino on Rutas.arrival_airport_id = AerDestino.id "
	        + "where (:aeropuertoDestino IS NULL or AerSalida.name LIKE %:aeropuertoDestino%) "
	        + "  and (:aeropuertoSalida IS NULL or AerDestino.name LIKE %:aeropuertoSalida%) "
	        + "  and (:fecha IS NULL or Horarios.date = :fecha) "
	        + "  and (:hora IS NULL or Horarios.time = :hora)", 
	       nativeQuery = true)
	List<IConsultarVuelosDto> consultarVuelosRegreso(String aeropuertoDestino, String aeropuertoSalida, LocalDate fecha, LocalTime hora);




}
