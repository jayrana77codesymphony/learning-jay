import { Module } from '@nestjs/common';
import { Employment } from './employment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Employment])],
    controllers: [],
    providers: [],
})
export class EmploymentModule {};