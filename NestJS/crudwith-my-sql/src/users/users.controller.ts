import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { createUsersDto,updateUsersDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  fineOne(@Param('id',ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() createUsersDto:createUsersDto) {
    return this.userService.create(createUsersDto);
  }

  @Patch(':id')
  update(@Param('id',ParseIntPipe) id: number,@Body() updateUsersDto:updateUsersDto) {
    return this.userService.update(id, updateUsersDto);
  }

  @Delete(':id')
  delete(@Param('id',ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
  
}
