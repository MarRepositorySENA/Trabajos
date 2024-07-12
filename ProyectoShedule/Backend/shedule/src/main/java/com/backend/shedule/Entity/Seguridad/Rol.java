package com.backend.shedule.Entity.Seguridad;

import com.backend.shedule.Entity.BaseEntity.BaseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="rol")
public class Rol extends BaseEntity {
	
	@Column(name="nombre")
	private String nombre;
	
	@Column(name="descripcion")
	private String descripcion;
	
	@Column(name="estado")
	private Boolean estado;
	

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "vista_id", nullable = false, unique = true)
	private Vista vista;


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


	public Boolean getEstado() {
		return estado;
	}


	public void setEstado(Boolean estado) {
		this.estado = estado;
	}


	public Vista getVista() {
		return vista;
	}


	public void setVista(Vista vista) {
		this.vista = vista;
	}
	
	
	

}
