package com.backend.shedule.Entity.Parametrizacion;

import com.backend.shedule.Entity.BaseEntity.BaseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="sede")
public class Sede extends BaseEntity{

	@Column(name="nombre")
	private String nombre;
	
	@Column(name="descripcion")
	private String descripcion;
	
	@Column(name="code")
	private String code;
	
	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "barrio_id", nullable = false, unique = true)
	private Barrio barrio;
	
	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "centro_formacion_id", nullable = false, unique = true)
	private CentroFormacion centroFormacion;

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public Barrio getBarrio() {
		return barrio;
	}

	public void setBarrio(Barrio barrio) {
		this.barrio = barrio;
	}

	public CentroFormacion getCentroFormacion() {
		return centroFormacion;
	}

	public void setCentroFormacion(CentroFormacion centroFormacion) {
		this.centroFormacion = centroFormacion;
	}
	
	
}
