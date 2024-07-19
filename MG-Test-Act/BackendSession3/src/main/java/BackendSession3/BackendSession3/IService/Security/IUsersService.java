package BackendSession3.BackendSession3.IService.Security;

import java.util.List;
import BackendSession3.BackendSession3.Dto.IConsultarUsersDto;
import BackendSession3.BackendSession3.Entity.Security.Users;
import BackendSession3.BackendSession3.IService.IBaseService.IBaseService;

public interface IUsersService extends IBaseService<Users>{

	List<IConsultarUsersDto> consultarUsuarios ();
}
