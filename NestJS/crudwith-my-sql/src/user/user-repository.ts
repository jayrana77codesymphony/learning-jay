import { DataSource } from "typeorm";
import { User } from "./user.entity";

export const userRepository={
    provide:'user-repository',
    useFactory:(dataSource:DataSource)=>dataSource.getRepository(User),
    inject:['data-source']
}