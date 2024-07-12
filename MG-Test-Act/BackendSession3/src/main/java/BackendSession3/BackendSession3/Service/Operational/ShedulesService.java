package BackendSession3.BackendSession3.Service.Operational;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import BackendSession3.BackendSession3.Dto.ConsultarVuelosDto;
import BackendSession3.BackendSession3.Dto.IConsultarVuelosDto;
import BackendSession3.BackendSession3.Entity.Operational.Shedules;
import BackendSession3.BackendSession3.IRepository.Operational.IShedulesRepository;
import BackendSession3.BackendSession3.IService.Operational.IShedulesService;
import BackendSession3.BackendSession3.Service.BaseService.BaseService;

@Service
public class ShedulesService extends BaseService<Shedules> implements IShedulesService {

	@Autowired
	private IShedulesRepository repository;

	@Override
	public List<ConsultarVuelosDto> ConsultarVuelos(String aeropuertoSalida, String aeropuertoDestino, LocalDate fecha,
			LocalTime hora, String tipoCabina) {
		List<IConsultarVuelosDto> VuelosConsultados = repository.consultarVuelos(aeropuertoSalida, aeropuertoDestino,
				fecha, hora);

		List<ConsultarVuelosDto> VuelosPrecioModificados = new ArrayList<>();
		// Itera sobre los resultados de la consulta
		for (IConsultarVuelosDto vuelo : VuelosConsultados) {
			// Crea una instancia de ConsultarVuelosDto
			ConsultarVuelosDto vueloModificado = new ConsultarVuelosDto();

			// Copia los valores del vuelo original al vuelo modificado
			vueloModificado.setCodigoIataSalida(vuelo.getCodigoIataSalida());
			vueloModificado.setAeropuertoSalida(vuelo.getAeropuertoSalida());
			vueloModificado.setCodigoIataDestino(vuelo.getCodigoIataDestino());
			vueloModificado.setAeropuertoDestino(vuelo.getAeropuertoDestino());
			vueloModificado.setFecha(vuelo.getFecha());
			vueloModificado.setHora(vuelo.getHora());
			vueloModificado.setNumeroVuelo(vuelo.getNumeroVuelo());
			vueloModificado.setPrecioCabina(calcularPrecio(tipoCabina, vuelo.getPrecioCabina()));
			VuelosPrecioModificados.add(vueloModificado);
		}
		return VuelosPrecioModificados;

	}

	Double calcularPrecio(String tipoCabina, Double precioCabina) {
		if (tipoCabina.equalsIgnoreCase("primera clase")) {
			precioCabina *= 1.35 * 1.30;
		} else if (tipoCabina.equalsIgnoreCase("Ejecutiva")) {
			precioCabina *= 1.30;
		}
		return precioCabina;
	}

	@Override
	public List<ConsultarVuelosDto> consultarVuelosRegreso(String aeropuertoSalida, String aeropuertoDestino,
			LocalDate fecha, LocalTime hora, String tipoCabina) {
		List<IConsultarVuelosDto> VuelosConsultados = repository.consultarVuelos(aeropuertoSalida, aeropuertoDestino,
				fecha, hora);

		List<ConsultarVuelosDto> VuelosPrecioModificados = new ArrayList<>();
		// Itera sobre los resultados de la consulta
		for (IConsultarVuelosDto vuelo : VuelosConsultados) {
			// Crea una instancia de ConsultarVuelosDto
			ConsultarVuelosDto vueloModificado = new ConsultarVuelosDto();

			// Copia los valores del vuelo original al vuelo modificado
			vueloModificado.setCodigoIataSalida(vuelo.getCodigoIataSalida());
			vueloModificado.setAeropuertoSalida(vuelo.getAeropuertoSalida());
			vueloModificado.setCodigoIataDestino(vuelo.getCodigoIataDestino());
			vueloModificado.setAeropuertoDestino(vuelo.getAeropuertoDestino());
			vueloModificado.setFecha(vuelo.getFecha());
			vueloModificado.setHora(vuelo.getHora());
			vueloModificado.setNumeroVuelo(vuelo.getNumeroVuelo());
			vueloModificado.setPrecioCabina(calcularPrecio(tipoCabina, vuelo.getPrecioCabina()));
			VuelosPrecioModificados.add(vueloModificado);
		}
		return VuelosPrecioModificados;
	}

}