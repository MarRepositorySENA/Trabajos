package com.backend.shedule.IRepository.Operacional;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Operacional.Materia;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;

@Repository
public interface IMateriaRepository extends BaseRepository<Materia, Long> {

}
