package com.backend.shedule.IRepository.Operacional;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Operacional.Pqrs;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;

@Repository
public interface IPqrsRepository extends BaseRepository<Pqrs, Long> {

}
