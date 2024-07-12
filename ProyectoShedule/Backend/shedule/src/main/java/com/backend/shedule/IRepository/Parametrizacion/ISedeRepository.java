package com.backend.shedule.IRepository.Parametrizacion;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Parametrizacion.Sede;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;

@Repository
public interface ISedeRepository extends BaseRepository<Sede, Long> {

}
