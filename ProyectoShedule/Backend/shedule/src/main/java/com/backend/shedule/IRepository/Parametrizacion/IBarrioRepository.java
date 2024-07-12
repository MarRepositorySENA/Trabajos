package com.backend.shedule.IRepository.Parametrizacion;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Parametrizacion.Barrio;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;

@Repository
public interface IBarrioRepository extends BaseRepository<Barrio, Long> {

}
