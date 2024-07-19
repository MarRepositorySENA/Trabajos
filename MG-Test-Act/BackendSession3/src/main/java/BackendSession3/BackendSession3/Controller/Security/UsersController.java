package BackendSession3.BackendSession3.Controller.Security;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import BackendSession3.BackendSession3.Controller.BaseController.BaseController;
import BackendSession3.BackendSession3.Dto.IConsultarUsersDto;
import BackendSession3.BackendSession3.Entity.Security.Users;
import BackendSession3.BackendSession3.Service.Security.UsersService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/session3/Security/Users/")
public class UsersController extends BaseController<Users>{

	@Autowired
	private UsersService service;
	
	@GetMapping("/consultar/users")
	List<IConsultarUsersDto> consultarUsuarios (){
		return service.consultarUsuarios();
	}
}
