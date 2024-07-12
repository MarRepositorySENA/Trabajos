package com.backend.shedule.Entity.Seguridad;

import com.backend.shedule.Entity.BaseEntity.BaseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="vista")
public class Vista extends BaseEntity{
	
	@Column(name="etiqueta")
	private String etiqueta;
	
	@Column(name="ruta")
	private String ruta;
	
	@Column(name="codigo")
	private Integer codigo;
	

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "modulo_id", nullable = false, unique = true)
	private Modulo modulo;
	

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "rol_id", nullable = false, unique = true)
	private Rol rol;


	public String getEtiqueta() {
		return etiqueta;
	}


	public void setEtiqueta(String etiqueta) {
		this.etiqueta = etiqueta;
	}


	public String getRuta() {
		return ruta;
	}


	public void setRuta(String ruta) {
		this.ruta = ruta;
	}


	public Integer getCodigo() {
		return codigo;
	}


	public void setCodigo(Integer codigo) {
		this.codigo = codigo;
	}


	public Modulo getModulo() {
		return modulo;
	}


	public void setModulo(Modulo modulo) {
		this.modulo = modulo;
	}


	public Rol getRol() {
		return rol;
	}


	public void setRol(Rol rol) {
		this.rol = rol;
	}
	
	


}
