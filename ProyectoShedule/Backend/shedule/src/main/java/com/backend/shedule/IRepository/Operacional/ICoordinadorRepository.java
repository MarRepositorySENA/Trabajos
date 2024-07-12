package com.backend.shedule.IRepository.Operacional;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Operacional.Coordinador;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;

@Repository
public interface ICoordinadorRepository extends BaseRepository<Coordinador, Long>{

}
