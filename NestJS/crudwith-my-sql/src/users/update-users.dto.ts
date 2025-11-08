import { updateEmploymentDto } from "src/employment/update-employment.dto";
import { updateUsersPersonalDetailsDto } from "src/users-personal-details/update-users-personal-details.dto";

export class updateUsersDto {
    userName: string;

    email: string;

    password: string;

    mobileNumber: string;

    personalDetails: updateUsersPersonalDetailsDto;

    employment: updateEmploymentDto;
}