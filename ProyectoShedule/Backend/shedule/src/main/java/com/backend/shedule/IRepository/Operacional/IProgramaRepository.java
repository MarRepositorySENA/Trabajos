package com.backend.shedule.IRepository.Operacional;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Operacional.Programa;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;

@Repository
public interface IProgramaRepository extends BaseRepository<Programa, Long> {

}
