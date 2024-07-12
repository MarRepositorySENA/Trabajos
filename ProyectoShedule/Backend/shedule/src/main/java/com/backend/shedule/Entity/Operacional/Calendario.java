package com.backend.shedule.Entity.Operacional;

import java.util.Date;

import com.backend.shedule.Entity.BaseEntity.BaseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name="calendario")
public class Calendario extends BaseEntity {

	
	@Column(name="fecha_inicio")
	private Date fechaInicio;
	
	@Column(name="fecha_fin")
	private Date fechaFin;

	public Date getFechaInicio() {
		return fechaInicio;
	}

	public void setFechaInicio(Date fechaInicio) {
		this.fechaInicio = fechaInicio;
	}

	public Date getFechaFin() {
		return fechaFin;
	}

	public void setFechaFin(Date fechaFin) {
		this.fechaFin = fechaFin;
	}
	
	
}
