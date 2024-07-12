package com.backend.shedule.IRepository.Seguridad;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Seguridad.Persona;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;

@Repository
public interface IPersonaRepository extends BaseRepository<Persona, Long> {

}
