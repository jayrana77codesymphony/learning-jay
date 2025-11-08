import { PartialType } from "@nestjs/mapped-types";

export class createUsersDto {
    userName: string;
    email: string;
    password: string;
    mobileNumber: number;
    cityId:number;
}

export class updateUsersDto extends PartialType(createUsersDto){}