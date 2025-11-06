import { DataSource } from "typeorm"
import { Users } from "../users/users.entity"

export const databaseConnection=[{
    provide:'data-source',
    useFactory:async()=>{
        const dataSource = new DataSource({
            type:'mysql',
            host:'localhost',
            username:'root',
            password:'',
            database:'learning_jay',
            port:3306,
            entities:[Users],
            synchronize:true,
        })
        return dataSource.initialize()
    }
}]