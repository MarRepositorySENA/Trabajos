package com.backend.shedule.Entity.Operacional;

import java.util.Date;

import com.backend.shedule.Entity.BaseEntity.BaseEntity;
import com.backend.shedule.Entity.Seguridad.Usuario;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="notificacion")
public class Notificacion extends BaseEntity{

	@Column(name="fecha_generacion")
	private Date fechaGeneracion;
	
	@Column(name="descripcion")
	private String descripcion;
	
	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "usuario_id", nullable = false, unique = true)
	private Usuario usuario;

	public Date getFechaGeneracion() {
		return fechaGeneracion;
	}

	public void setFechaGeneracion(Date fechaGeneracion) {
		this.fechaGeneracion = fechaGeneracion;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	
	
}
