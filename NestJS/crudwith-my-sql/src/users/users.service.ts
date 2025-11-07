import { Body, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { createUsersDto, updateUsersDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private repository: Repository<Users>) {}

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  create(createUsersDto: createUsersDto) {
    const user = this.repository.create(createUsersDto);
    return this.repository.save(user);
  }

  update(id: number, @Body() updateUsersDto: updateUsersDto) {
    this.repository.update(id, updateUsersDto);
    return this.repository.findOneBy({ id });
  }

  delete(id: number) {
    this.repository.delete(id);
    return this.repository.findOneBy({ id });
  }
}
