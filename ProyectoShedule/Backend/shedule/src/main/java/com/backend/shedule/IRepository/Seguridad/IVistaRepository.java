package com.backend.shedule.IRepository.Seguridad;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Seguridad.Vista;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;

@Repository
public interface IVistaRepository extends BaseRepository<Vista, Long> {

}
