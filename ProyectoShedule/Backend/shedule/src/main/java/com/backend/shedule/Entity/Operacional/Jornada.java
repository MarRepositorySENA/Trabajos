package com.backend.shedule.Entity.Operacional;

import java.sql.Time;

import com.backend.shedule.Entity.BaseEntity.BaseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name="jornada")
public class Jornada extends BaseEntity{
	
	@Column(name="code")
	private String code;
	
	@Column(name="descripcion")
	private String descripcion;
	
	@Column(name="fecha_inicio")
	private Time fechaInicio;
	
	@Column(name="fecha_fin")
	private Time fechaFin;

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Time getFechaInicio() {
		return fechaInicio;
	}

	public void setFechaInicio(Time fechaInicio) {
		this.fechaInicio = fechaInicio;
	}

	public Time getFechaFin() {
		return fechaFin;
	}

	public void setFechaFin(Time fechaFin) {
		this.fechaFin = fechaFin;
	}
	
	
}
