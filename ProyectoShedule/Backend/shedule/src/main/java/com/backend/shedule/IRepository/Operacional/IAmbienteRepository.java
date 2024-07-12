package com.backend.shedule.IRepository.Operacional;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Operacional.Ambiente;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;

@Repository
public interface IAmbienteRepository extends BaseRepository<Ambiente, Long>{

}
