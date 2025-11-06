import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Get(':id')
  fineOne(@Param('id') id: string) {
    return this.userService.findOne(Number(id));
  }
  @Post()
  create(
    @Body()
    userData: {
      userName: string;
      email: string;
      password: string;
      mobileNumber: number;
    },
  ) {
    return this.userService.create(userData);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    userData: {
      userName: string;
      email: string;
      password: string;
      mobileNumber: number;
    },
  ) {
    return this.userService.update(Number(id), userData);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.delete(Number(id));
  }
}
