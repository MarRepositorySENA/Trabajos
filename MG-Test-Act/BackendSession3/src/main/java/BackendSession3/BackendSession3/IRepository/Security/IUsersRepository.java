package BackendSession3.BackendSession3.IRepository.Security;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import BackendSession3.BackendSession3.Dto.IConsultarUsersDto;
import BackendSession3.BackendSession3.Entity.Security.Users;
import BackendSession3.BackendSession3.IRepository.BaseRepository.IBaseRepository;
@Repository
public interface IUsersRepository extends IBaseRepository<Users, Long>{

	@Query(value = "select "
			+ "			R.title As titleRol, "
			+ "			O.title As nameOficces, "
			+ "			U.email, "
			+ "			U.first_name, "
			+ "			U.last_name "
			+" 			U.birth_date"
			+" 			U.active"
			+ "		from Users AS U "
			+ "			inner join Roles As R on U.role_id = R.id "
			+ " 		inner join Offices As O on U.office_id = O.id", nativeQuery = true)
	List<IConsultarUsersDto> consultarUsuarios ();
}
