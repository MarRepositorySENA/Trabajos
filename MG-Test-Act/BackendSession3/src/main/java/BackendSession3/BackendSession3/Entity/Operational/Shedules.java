package BackendSession3.BackendSession3.Entity.Operational;


//import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;

import BackendSession3.BackendSession3.Entity.BaseEntity.BaseEntity;
import BackendSession3.BackendSession3.Entity.Logistics.Aircrafts;
import BackendSession3.BackendSession3.Entity.Logistics.Routes;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Shedules")
public class Shedules extends BaseEntity {

	@Column(name = "date")
	private LocalDate date;

	@Column(name = "time")
	private LocalTime time;

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "aircraft_id", nullable = false, unique = true)
	private Aircrafts aircraftId;

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "route_id", nullable = false, unique = true)
	private Routes routeId;

	@Column(name = "economy_price")
	private Double economyPrice;

	@Column(name = "confirmed", nullable = false)
	private Boolean confirmed;

	@Column(name = "flight_number", nullable = false)
	private String flightNumber;

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	

	public LocalTime getTime() {
		return time;
	}

	public void setTime(LocalTime time) {
		this.time = time;
	}

	public Aircrafts getAircraftId() {
		return aircraftId;
	}

	public void setAircraftId(Aircrafts aircraftId) {
		this.aircraftId = aircraftId;
	}

	public Routes getRouteId() {
		return routeId;
	}

	public void setRouteId(Routes routeId) {
		this.routeId = routeId;
	}

	public Double getEconomyPrice() {
		return economyPrice;
	}

	public void setEconomyPrice(Double economyPrice) {
		this.economyPrice = economyPrice;
	}

	public Boolean getConfirmed() {
		return confirmed;
	}

	public void setConfirmed(Boolean confirmed) {
		this.confirmed = confirmed;
	}

	public String getFlightNumber() {
		return flightNumber;
	}

	public void setFlightNumber(String flightNumber) {
		this.flightNumber = flightNumber;
	}

	

}
