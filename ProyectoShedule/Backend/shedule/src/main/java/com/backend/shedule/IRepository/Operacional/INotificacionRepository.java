package com.backend.shedule.IRepository.Operacional;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Operacional.Notificacion;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;

@Repository
public interface INotificacionRepository extends BaseRepository<Notificacion, Long> {

}
