package com.backend.shedule.IRepository.Parametrizacion;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Parametrizacion.Locacion;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;

@Repository
public interface ILocacionRepository extends BaseRepository<Locacion, Long>{

}
