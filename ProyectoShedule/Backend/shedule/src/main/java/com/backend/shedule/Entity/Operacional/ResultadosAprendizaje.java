package com.backend.shedule.Entity.Operacional;

import com.backend.shedule.Entity.BaseEntity.BaseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="resultados_aprendizaje")
public class ResultadosAprendizaje extends BaseEntity {
	
	@Column(name="nombre")
	private String nombre;
	
	@Column(name="descripcion")
	private String descripcion; 
	
	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "materia_id", nullable = false, unique = true)
	private Materia materia;

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

	public Materia getMateria() {
		return materia;
	}

	public void setMateria(Materia materia) {
		this.materia = materia;
	}
	
	

	
}
