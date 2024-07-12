package com.backend.shedule.Entity.Operacional;




import com.backend.shedule.Entity.BaseEntity.BaseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import jakarta.persistence.Table;

@Entity
@Table(name="ambiente")
public class Ambiente extends BaseEntity{
	
	@Column(name="nombre")
	private String nombre;
	
	@Column(name="ubicacion")
	private String ubicacion;

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getUbicacion() {
		return ubicacion;
	}

	public void setUbicacion(String ubicacion) {
		this.ubicacion = ubicacion;
	}
	
	
	

}
