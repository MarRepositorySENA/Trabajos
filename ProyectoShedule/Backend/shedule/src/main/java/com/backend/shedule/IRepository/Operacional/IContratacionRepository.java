package com.backend.shedule.IRepository.Operacional;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Operacional.Contratacion;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;

@Repository
public interface IContratacionRepository  extends BaseRepository<Contratacion, Long>{

}
