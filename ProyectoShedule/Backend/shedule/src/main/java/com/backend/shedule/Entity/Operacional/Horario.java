package com.backend.shedule.Entity.Operacional;



import com.backend.shedule.Entity.BaseEntity.BaseEntity;
import com.backend.shedule.Entity.Enum.Dias;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="horario")
public class Horario extends BaseEntity {

	@Column(name="dia")
	private Dias dia;
	
	@Column(name="descripcion")
	private String descripcion;
	
	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "ambiente_id", nullable = false, unique = true)
	private Ambiente ambiente;
	
	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "ficha_id", nullable = false, unique = true)
	private Ficha ficha;
	
	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "materia_id", nullable = false, unique = true)
	private Materia materia;
	
	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "jornada_id", nullable = false, unique = true)
	private Jornada jornada;
	
	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "instructor_id", nullable = false, unique = true)
	private Instructor instructor;

	public Dias getDia() {
		return dia;
	}

	public void setDia(Dias dia) {
		this.dia = dia;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Ambiente getAmbiente() {
		return ambiente;
	}

	public void setAmbiente(Ambiente ambiente) {
		this.ambiente = ambiente;
	}

	public Ficha getFicha() {
		return ficha;
	}

	public void setFicha(Ficha ficha) {
		this.ficha = ficha;
	}

	public Materia getMateria() {
		return materia;
	}

	public void setMateria(Materia materia) {
		this.materia = materia;
	}

	public Jornada getJornada() {
		return jornada;
	}

	public void setJornada(Jornada jornada) {
		this.jornada = jornada;
	}

	public Instructor getInstructor() {
		return instructor;
	}

	public void setInstructor(Instructor instructor) {
		this.instructor = instructor;
	}
	
	
}
