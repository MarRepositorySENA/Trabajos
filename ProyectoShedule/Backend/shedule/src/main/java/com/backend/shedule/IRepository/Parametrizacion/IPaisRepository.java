package com.backend.shedule.IRepository.Parametrizacion;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Parametrizacion.Pais;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;

@Repository
public interface IPaisRepository extends BaseRepository<Pais, Long> {

}
