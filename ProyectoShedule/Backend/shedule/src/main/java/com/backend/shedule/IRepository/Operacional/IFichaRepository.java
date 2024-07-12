package com.backend.shedule.IRepository.Operacional;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Operacional.Ficha;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;

@Repository
public interface IFichaRepository extends BaseRepository<Ficha, Long>  {

}
