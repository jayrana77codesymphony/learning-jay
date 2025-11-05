import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(@Inject('user-repository') private repository:Repository<User>){}
    getAllUsers(){
        return this.repository.find()
    }
    getOneUser(id:number){
        return this.repository.findOneBy({id})
    }
    addUser(userData:{userName:string,email:string,password:string,mobileNumber:number}){
        const user = new User()
        user.userName = userData.userName
        user.email = userData.email
        user.password = userData.password
        user.mobileNumber = userData.mobileNumber
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
