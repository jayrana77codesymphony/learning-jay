import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { UsersPersonalDetails } from 'src/users-personal-details/users-personal-details.entity';
import { Employment } from 'src/employment/employment.entity';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    TypeOrmModule.forFeature([Users, UsersPersonalDetails, Employment]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1min' },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UserModule {}