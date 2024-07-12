package com.backend.shedule.IRepository.Parametrizacion;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Parametrizacion.Ciudad;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;

@Repository
public interface ICiudadRepository extends BaseRepository<Ciudad, Long> {

}
