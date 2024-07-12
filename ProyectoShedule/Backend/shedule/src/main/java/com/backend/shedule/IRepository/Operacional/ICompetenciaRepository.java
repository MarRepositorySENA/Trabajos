package com.backend.shedule.IRepository.Operacional;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Operacional.Competencia;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;
@Repository
public interface ICompetenciaRepository extends BaseRepository<Competencia, Long> {

}
