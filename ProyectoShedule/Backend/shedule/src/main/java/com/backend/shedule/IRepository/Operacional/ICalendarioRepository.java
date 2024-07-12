package com.backend.shedule.IRepository.Operacional;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Operacional.Calendario;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;

@Repository
public interface ICalendarioRepository extends BaseRepository<Calendario, Long >{
	
}
