package com.backend.shedule.IRepository.Operacional;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Operacional.Jornada;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;

@Repository
public interface IJornadaRepository extends BaseRepository<Jornada, Long> {

}
