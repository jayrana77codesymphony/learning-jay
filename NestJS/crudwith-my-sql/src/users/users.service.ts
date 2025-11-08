import { Body, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { createUsersDto, updateUsersDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private usersRepository: Repository<Users>) {}

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  create(createUsersDto: createUsersDto) {
    const user = this.usersRepository.create(createUsersDto);
    return this.usersRepository.save(user);
  }

  update(id: number, @Body() updateUsersDto: updateUsersDto) {
    this.usersRepository.update(id, updateUsersDto);
    return this.usersRepository.findOneBy({ id });
  }

  delete(id: number) {
    this.usersRepository.delete(id);
    return this.usersRepository.findOneBy({ id });
  }
}
