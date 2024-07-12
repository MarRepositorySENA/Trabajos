package com.backend.shedule.Controller.Operacional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.shedule.Controller.BaseController.BaseController;
import com.backend.shedule.Entity.Operacional.Contratacion;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/shedule/operacional/contratacion/")
public class ContratacionController extends BaseController<Contratacion>{

}
