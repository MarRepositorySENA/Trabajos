package com.backend.shedule.IRepository.Parametrizacion;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Parametrizacion.Regional;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;

@Repository
public interface IRegionalRepository extends BaseRepository<Regional, Long> {

}
