package com.backend.shedule.Controller.Seguridad;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.shedule.Controller.BaseController.BaseController;
import com.backend.shedule.Entity.Seguridad.Modulo;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/shedule/seguridad/modulo/")
public class ModuloController extends BaseController<Modulo>{

}
