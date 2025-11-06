import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
    constructor(@Inject('users-repository') private repository:Repository<Users>){}
    getAllUsers(){
        return this.repository.find()
    }
    getOneUser(id:number){
        return this.repository.findOneBy({id})
    }
    addUser(usersData:{userName:string,email:string,password:string,mobileNumber:number}){
        const user = new Users()
        user.userName = usersData.userName
        user.email = usersData.email
        user.password = usersData.password
        user.mobileNumber = usersData.mobileNumber
        this.repository.create(user)
        return this.repository.save(user)
    }
    updateUser(id:number,userData:{userName:string,email:string,password:string,mobileNumber:number}){
        this.repository.update(id,userData)
        return this.repository.findOneBy({id})
    }
    deleteUser(id:number){
        this.repository.delete(id)
        return this.repository.findOneBy({id})
    }
}
