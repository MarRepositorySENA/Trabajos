package com.backend.shedule.Entity.Operacional;

import java.sql.Time;

import com.backend.shedule.Entity.BaseEntity.BaseEntity;
import com.backend.shedule.Entity.Seguridad.Rol;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="periodo")
public class Periodo extends BaseEntity {
	
	@Column(name="descripcion")
	private String descripcion;
	
	@Column(name="nombre")
	private String nombre;
	
	@Column(name="fecha_inicio")
	private Time fechaInicio;
	
	@Column(name="fecha_fin")
	private Time fechaFin;
	
	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "rol_id", nullable = false, unique = true)
	private Rol rol;

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
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

	public Rol getRol() {
		return rol;
	}

	public void setRol(Rol rol) {
		this.rol = rol;
	}
	
	

}
