package com.backend.shedule.IRepository.Operacional;

import org.springframework.stereotype.Repository;

import com.backend.shedule.Entity.Operacional.Instructor;
import com.backend.shedule.IRepository.IBaseRepository.BaseRepository;
@Repository
public interface IInstructorRepository extends BaseRepository<Instructor, Long>{

}
