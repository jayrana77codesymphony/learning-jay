import { Body, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { createUsersDto } from './create-users.dto';
import { updateUsersDto } from './update-users.dto';
import { Employment } from 'src/employment/employment.entity';
import { UsersPersonalDetails } from 'src/users-personal-details/users-personal-details.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
    @InjectRepository(Employment)
    private employmentRepository: Repository<Employment>,
    @InjectRepository(UsersPersonalDetails)
    private usersPersonalDetailsRepository: Repository<UsersPersonalDetails>,
    private jwtService: JwtService,
  ) {}

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  async create(createUsersDto: createUsersDto) {
    const existingUser = await this.usersRepository.findOne({
      where: { email: createUsersDto.email },
    });

    if (existingUser)
      return { message: 'Email already registered', user: null };

    const user = this.usersRepository.create(createUsersDto);
    const savedUser = await this.usersRepository.save(user);

    return { message: 'User Inserted Successfully!', user: savedUser };
  }

  async update(id: number, @Body() updateUsersDto: updateUsersDto) {
    const { personalDetails, employment, ...usersDetails } = updateUsersDto;
    await this.usersRepository.update(id, usersDetails);

    if (personalDetails && employment) {
      const user = await this.usersRepository.findOne({ where: { id } });

      if (user && user.personalDetails) {
        await this.usersPersonalDetailsRepository.update( user.personalDetails.id, personalDetails );
      } else {
        return 'PersonalDetails not found or user not found';
      }

      if (user && user.employment) {
        await this.employmentRepository.update(user.employment.id, employment);
      } else {
        return 'Employment detail not found or user not found';
      }
    }

    return await this.usersRepository.findOne({ where: { id }, relations: ['personalDetails', 'employment'] });
  }

  async delete(id: number) {
    const deletedRecord = await this.usersRepository.findOne({ where: { id } });
    await this.usersRepository.delete(id);
    await this.usersPersonalDetailsRepository.delete(id);
    await this.employmentRepository.delete(id);
    return deletedRecord;
  }

  async login(email: string, password: string, oldToken?: string) {
    const user = await this.usersRepository.findOne({ where: { email } });

    if (!user) return { message: 'Invalid email', token: null };
    if (user.password !== password)
      return { message: 'Invalid password', token: null };

    if (oldToken) {
      const tokenStatus = await this.validateToken(oldToken);

      if (tokenStatus.valid) {
        return { message: 'Login successful with same token', token: oldToken, user };
      }
    }

    const payload = { id: user.id, email: user.email };
    const newToken = await this.jwtService.signAsync(payload);

    return { message: 'Login successful and created new token', token: newToken, user };
  }

  async validateToken(token: string) {
    try {
      const decoded = await this.jwtService.verifyAsync(token);
      return { decoded, valid: true };
    }
    catch (error) {
      if (error.name === 'TokenExpiredError') {
        return { valid: false, message: 'Token expired' };
      }
      return { valid: false, message: 'Invalid token' };
    }
  }
}
