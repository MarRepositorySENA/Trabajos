package com.backend.shedule.Controller.Parametrizacion;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.shedule.Controller.BaseController.BaseController;
import com.backend.shedule.Entity.Parametrizacion.CentroFormacion;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/shedule/parametrizacion/centro_formacion/")
public class CentroFormacionController extends BaseController<CentroFormacion>{

}
