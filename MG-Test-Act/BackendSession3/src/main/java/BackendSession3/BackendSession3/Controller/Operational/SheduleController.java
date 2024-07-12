package BackendSession3.BackendSession3.Controller.Operational;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import BackendSession3.BackendSession3.Controller.BaseController.BaseController;
import BackendSession3.BackendSession3.Dto.ConsultarVuelosDto;
import BackendSession3.BackendSession3.Entity.Operational.Shedules;
import BackendSession3.BackendSession3.Service.Operational.ShedulesService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/session3/Operational/Shedules/")
public class SheduleController extends BaseController<Shedules> {

	@Autowired
	private ShedulesService service;

	@GetMapping("/consultar/vuelos")

	List<ConsultarVuelosDto> ConsultarVuelos(@RequestParam(required = false) String aeropuertoSalida,
			@RequestParam(required = false) String aeropuertoDestino, @RequestParam LocalDate fecha,
			@RequestParam(required = false) LocalTime hora, @RequestParam String tipoCabina) {
		return service.ConsultarVuelos(aeropuertoSalida, aeropuertoDestino, fecha, hora, tipoCabina);
	}

	@GetMapping("/consultar/vuelos/regreso")
	List<ConsultarVuelosDto> consultarVuelosRegreso(@RequestParam String aeropuertoSalida,@RequestParam(required = false) String aeropuertoDestino, @RequestParam(required = false)LocalDate fecha,
			@RequestParam(required = false) LocalTime hora, @RequestParam String tipoCabina) {
		return service.ConsultarVuelos(aeropuertoSalida, aeropuertoDestino, fecha, hora, tipoCabina);
	}
}
