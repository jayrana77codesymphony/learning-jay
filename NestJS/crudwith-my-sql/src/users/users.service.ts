import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private repository: Repository<Users>) {}
  findAll() {
    return this.repository.find();
  }
  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }
  create(usersData: {
    userName: string;
    email: string;
    password: string;
    mobileNumber: number;
  }) {
    const user = new Users();
    user.userName = usersData.userName;
    user.email = usersData.email;
    user.password = usersData.password;
    user.mobileNumber = usersData.mobileNumber;
    this.repository.create(user);
    return this.repository.save(user);
  }
  update(
    id: number,
    userData: {
      userName: string;
      email: string;
      password: string;
      mobileNumber: number;
    },
  ) {
    this.repository.update(id, userData);
    return this.repository.findOneBy({ id });
  }
  delete(id: number) {
    this.repository.delete(id);
    return this.repository.findOneBy({ id });
  }
}
