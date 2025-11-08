import { Module } from '@nestjs/common';
import { UsersPersonalDetails } from './users-personal-details.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([UsersPersonalDetails])],
    controllers: [],
    providers: [],
})
export class UsersPersonalDetailsModule {};