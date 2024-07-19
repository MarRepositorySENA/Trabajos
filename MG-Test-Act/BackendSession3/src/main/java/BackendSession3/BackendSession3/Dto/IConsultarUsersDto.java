package BackendSession3.BackendSession3.Dto;

import java.time.LocalDate;

public interface IConsultarUsersDto {
	
	String getTitleRol();
	String getNameOffices();
	
	String getEmail();
	String getFirstName();
	String getLastName();
	LocalDate getBirthDate();
	Boolean getActive();
	
	
}
