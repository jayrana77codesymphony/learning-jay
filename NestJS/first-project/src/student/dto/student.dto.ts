import { IsInt, IsString } from "class-validator";

export class StudentDto {
    @IsString()
    firstName:string;
    @IsString()
    lastName:string;
    @IsString()
    middleName:string;
    @IsInt()
    age:number;
}