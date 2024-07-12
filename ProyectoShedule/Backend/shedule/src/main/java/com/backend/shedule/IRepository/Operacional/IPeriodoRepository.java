package com.backend.shedule.IRepository.Operacional;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Operacional.Periodo;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;

@Repository
public interface IPeriodoRepository extends BaseRepository<Periodo, Long>{

}
