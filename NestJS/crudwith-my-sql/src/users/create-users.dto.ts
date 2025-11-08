import { createEmploymentDto } from "src/employment/create-employment.dto";
import { createUsersPersonalDetailsDto } from "src/users-personal-details/create-users-personal-details.dto";

export class createUsersDto {
    userName: string;

    email: string;

    password: string;

    mobileNumber: string;

    personalDetails: createUsersPersonalDetailsDto;

    employment: createEmploymentDto;
}