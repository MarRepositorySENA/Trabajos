package com.backend.shedule.IRepository.Operacional;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Operacional.GestorLinea;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;

@Repository
public interface IGestorLineaRepository extends BaseRepository<GestorLinea, Long>{

}
