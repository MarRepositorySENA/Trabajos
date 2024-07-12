package com.backend.shedule.IRepository.Operacional;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Operacional.PersonalAdministrativo;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;

@Repository
public interface IPersonalAdministrativoRepository extends BaseRepository<PersonalAdministrativo, Long> {

}
