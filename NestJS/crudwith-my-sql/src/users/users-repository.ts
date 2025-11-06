import { DataSource } from "typeorm";
import { Users } from "./users.entity";

export const usersRepository={
    provide:'users-repository',
    useFactory:(dataSource:DataSource)=>dataSource.getRepository(Users),
    inject:['data-source']
}