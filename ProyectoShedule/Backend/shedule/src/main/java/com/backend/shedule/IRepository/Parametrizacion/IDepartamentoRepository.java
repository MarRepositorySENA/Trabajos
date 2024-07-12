package com.backend.shedule.IRepository.Parametrizacion;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Parametrizacion.Departamento;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;

@Repository
public interface IDepartamentoRepository extends BaseRepository<Departamento, Long>{

}
