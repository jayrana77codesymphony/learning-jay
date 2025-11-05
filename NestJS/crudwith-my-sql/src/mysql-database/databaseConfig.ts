import { DataSource } from "typeorm"
import { User } from "../user/user.entity"

export const database=[{
    provide:'data-source',
    useFactory:async()=>{
        const dataSource = new DataSource({
            type:'mysql',
            host:'localhost',
            username:'root',
            password:'',
            database:'learning_jay',
            port:3306,
            entities:[User],
            synchronize:true,
        })
        return dataSource.initialize()
    }
}]