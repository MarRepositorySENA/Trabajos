package com.backend.shedule.IRepository.Operacional;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Operacional.Horario;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;

@Repository
public interface IHorarioRepository extends BaseRepository<Horario, Long> {

}
