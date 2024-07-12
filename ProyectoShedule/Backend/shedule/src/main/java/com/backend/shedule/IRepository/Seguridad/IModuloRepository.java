package com.backend.shedule.IRepository.Seguridad;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Seguridad.Modulo;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;

@Repository
public interface IModuloRepository extends BaseRepository<Modulo, Long> {

}
