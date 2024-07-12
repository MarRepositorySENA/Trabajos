package com.backend.shedule.Entity.Operacional;

import com.backend.shedule.Entity.BaseEntity.BaseEntity;
import com.backend.shedule.Entity.Seguridad.Rol;
import com.backend.shedule.Entity.Seguridad.Usuario;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="contratacion")
public class Contratacion extends BaseEntity {
	
	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "rol_id", nullable = false, unique = true)
	private Rol rol;
	
	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "usuario_id", nullable = false, unique = true)
	private Usuario usuario;
	
	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "cargo_id", nullable = false, unique = true)
	private Cargo cargo;

	public Rol getRol() {
		return rol;
	}

	public void setRol(Rol rol) {
		this.rol = rol;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public Cargo getCargo() {
		return cargo;
	}

	public void setCargo(Cargo cargo) {
		this.cargo = cargo;
	}
	
	
}
