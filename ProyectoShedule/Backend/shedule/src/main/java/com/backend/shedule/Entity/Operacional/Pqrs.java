package com.backend.shedule.Entity.Operacional;

import java.util.Date;

import com.backend.shedule.Entity.BaseEntity.BaseEntity;
import com.backend.shedule.Entity.Seguridad.Rol;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="pqrs")
public class Pqrs extends BaseEntity{
	
	@Column(name="titulo")
	private String titulo;
	
	@Column(name="descripcion")
	private String descripcion;
	
	@Column(name="fecha")
	private Date fecha;
	
	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "rol_id", nullable = false, unique = true)
	private Rol rol;

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public Rol getRol() {
		return rol;
	}

	public void setRol(Rol rol) {
		this.rol = rol;
	}
	
	
	
}
