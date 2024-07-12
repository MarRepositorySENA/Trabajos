package com.backend.shedule.IRepository.Operacional;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Operacional.Reporte;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;

@Repository
public interface IReporteRepository extends BaseRepository<Reporte, Long>{

}
