import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){}
    @Get()
    getAllUsers(){
        return this.userService.getAllUsers()
    }
    @Get(':id')
    getOneUser(@Param('id') id:string){
        return this.userService.getOneUser(Number(id))
    }
    @Post()
    addNewUser(@Body() userData:{userName:string,email:string,password:string,mobileNumber:number}){
        return this.userService.addUser(userData)
    }
    @Patch(':id')
    updateUser(@Param('id') id:string,@Body() userData:{userName:string,email:string,password:string,mobileNumber:number}){
        return this.userService.updateUser(Number(id),userData)
    }
    @Delete(':id')
    deleteUser(@Param('id') id:string){
        return this.userService.deleteUser(Number(id))
    }
}
