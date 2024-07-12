package com.backend.shedule.IRepository.Operacional;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Operacional.Aprendiz;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;

@Repository
public interface IAprendizRepository extends BaseRepository<Aprendiz, Long>{

}
