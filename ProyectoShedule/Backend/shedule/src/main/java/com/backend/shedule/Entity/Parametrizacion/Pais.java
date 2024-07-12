package com.backend.shedule.Entity.Parametrizacion;

import com.backend.shedule.Entity.BaseEntity.BaseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="pais")
public class Pais extends BaseEntity{
	
	@Column(name="nombre")
	private String nombre;
	
	@Column(name="descripcion")
	private String descripcion;
	
	@Column(name="code")
	private String code;
	
	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "continente_id", nullable = false, unique = true)
	private Continente continente;

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

	public Continente getContinente() {
		return continente;
	}

	public void setContinente(Continente continente) {
		this.continente = continente;
	}
	
	
	
	
}
