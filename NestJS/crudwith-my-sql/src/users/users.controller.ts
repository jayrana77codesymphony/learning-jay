import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { createUsersDto } from './create-users.dto';
import { updateUsersDto } from './update-users.dto';
import { loginDto } from './login.dto';
import { JwtAuthGuard } from './auth.guard';

@Controller('users')
export class UsersController {
  usersService: UsersService;
  constructor(
    private userService: UsersService,
  ) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  profile() {
    return { message: 'Authorized' };
  }

  @Get(':id')
  fineOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() createUsersDto: createUsersDto) {
    return this.userService.create(createUsersDto);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateUsersDto: updateUsersDto) {
    return this.userService.update(id, updateUsersDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }

  @Post('login')
  login(@Body() loginDto: loginDto) {
    const { email, password, token } = loginDto;

    return this.userService.login(email, password, token);
  }
}
