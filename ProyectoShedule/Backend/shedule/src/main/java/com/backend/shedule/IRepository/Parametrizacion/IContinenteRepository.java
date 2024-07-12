package com.backend.shedule.IRepository.Parametrizacion;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Parametrizacion.Continente;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;

@Repository
public interface IContinenteRepository extends BaseRepository<Continente, Long> {

}
