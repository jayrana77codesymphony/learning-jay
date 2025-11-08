import { Body, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { createUsersDto } from './create-users.dto';
import { updateUsersDto } from './update-users.dto';
import { Employment } from 'src/employment/employment.entity';
import { UsersPersonalDetails } from 'src/users-personal-details/users-personal-details.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private usersRepository: Repository<Users>,
      @InjectRepository(Employment) private employmentRepository: Repository<Employment>,
      @InjectRepository(UsersPersonalDetails) private usersPersonalDetailsRepository: Repository<UsersPersonalDetails>) {}

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

  async update(id: number, @Body() updateUsersDto: updateUsersDto) {
    const { personalDetails, employment, ...usersDetails } = updateUsersDto;
    await this.usersRepository.update(id, usersDetails);
    if (personalDetails && employment) {
        const user = await this.usersRepository.findOne({where: { id }});
        if (user && user.personalDetails){
            await this.usersPersonalDetailsRepository.update(user.personalDetails.id, personalDetails);
        }
        else{
            return "PersonalDetails not found or user not found";
        }
        if (user && user.employment) {
            await this.employmentRepository.update(user.employment.id, employment);
        }
        else{
            return "Employment detail not found or user not found";
        }
    }
    return await this.usersRepository.findOne({ where:{id} ,relations: ['personalDetails', 'employment']});
  }

  async delete(id: number) {
    const deletedRecord = await this.usersRepository.findOne({ where: {id} });
    await this.usersRepository.delete(id);
    await this.usersPersonalDetailsRepository.delete(id);
    await this.employmentRepository.delete(id);
    return deletedRecord;
  }
}
