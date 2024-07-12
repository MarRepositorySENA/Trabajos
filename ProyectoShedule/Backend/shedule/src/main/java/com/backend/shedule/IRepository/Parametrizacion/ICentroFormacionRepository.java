package com.backend.shedule.IRepository.Parametrizacion;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Parametrizacion.CentroFormacion;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;

@Repository
public interface ICentroFormacionRepository extends BaseRepository<CentroFormacion, Long>{

}
