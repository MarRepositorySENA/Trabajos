package com.backend.shedule.IRepository.Operacional;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Operacional.Fase;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;

@Repository
public interface IFaseRepository extends BaseRepository<Fase, Long>{

}
