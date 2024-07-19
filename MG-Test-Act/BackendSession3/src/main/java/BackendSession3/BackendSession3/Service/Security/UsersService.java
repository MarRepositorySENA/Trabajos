package BackendSession3.BackendSession3.Service.Security;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import BackendSession3.BackendSession3.Dto.IConsultarUsersDto;
import BackendSession3.BackendSession3.Entity.Security.Users;
import BackendSession3.BackendSession3.IRepository.Security.IUsersRepository;
import BackendSession3.BackendSession3.IService.Security.IUsersService;
import BackendSession3.BackendSession3.Service.BaseService.BaseService;

@Service
public class UsersService extends BaseService<Users> implements IUsersService{

	@Autowired
	private IUsersRepository repository;

	@Override
	public List<IConsultarUsersDto> consultarUsuarios() {
		return repository.consultarUsuarios();
	}
	
	
}
