package com.backend.shedule.IRepository.Operacional;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Operacional.Cargo;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;

@Repository
public interface ICargoRepository extends BaseRepository<Cargo, Long>{

}
