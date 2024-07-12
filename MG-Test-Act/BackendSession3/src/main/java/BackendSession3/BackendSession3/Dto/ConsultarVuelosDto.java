package BackendSession3.BackendSession3.Dto;

import java.time.LocalDate;
import java.time.LocalTime;

public class ConsultarVuelosDto  {

    private String codigoIataSalida;
    private String aeropuertoSalida;
    private String codigoIataDestino;
    private String aeropuertoDestino;
    private LocalDate fecha;
    private LocalTime hora;
    private String numeroVuelo;
    private Double precioCabina;
    
    
	public String getAeropuertoSalida() {
		return aeropuertoSalida;
	}
	public void setAeropuertoSalida(String aeropuertoSalida) {
		this.aeropuertoSalida = aeropuertoSalida;
	}
	public String getAeropuertoDestino() {
		return aeropuertoDestino;
	}
	public void setAeropuertoDestino(String aeropuertoDestino) {
		this.aeropuertoDestino = aeropuertoDestino;
	}
	public String getCodigoIataSalida() {
		return codigoIataSalida;
	}
	public void setCodigoIataSalida(String codigoIataSalida) {
		this.codigoIataSalida = codigoIataSalida;
	}
	public String getCodigoIataDestino() {
		return codigoIataDestino;
	}
	public void setCodigoIataDestino(String codigoIataDestino) {
		this.codigoIataDestino = codigoIataDestino;
	}
	public LocalDate getFecha() {
		return fecha;
	}
	public void setFecha(LocalDate fecha) {
		this.fecha = fecha;
	}
	public LocalTime getHora() {
		return hora;
	}
	public void setHora(LocalTime hora) {
		this.hora = hora;
	}
	public String getNumeroVuelo() {
		return numeroVuelo;
	}
	public void setNumeroVuelo(String numeroVuelo) {
		this.numeroVuelo = numeroVuelo;
	}
	public Double getPrecioCabina() {
		return precioCabina;
	}
	public void setPrecioCabina(Double precioCabina) {
		this.precioCabina = precioCabina;
	}

    

}
