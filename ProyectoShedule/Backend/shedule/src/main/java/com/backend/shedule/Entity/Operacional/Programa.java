package com.backend.shedule.Entity.Operacional;

import com.backend.shedule.Entity.BaseEntity.BaseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name="programa")
public class Programa extends BaseEntity{

	@Column(name="nombre")
	private String nombre;
	
	@Column(name="descripcion")
	private String descripcion;

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


	
}
