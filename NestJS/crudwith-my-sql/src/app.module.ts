import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/users.entity';
import { EmploymentModule } from './employment/employment.module';
import { UsersPersonalDetailsModule } from './users-personal-details/users-personal-details.module';
import { UsersPersonalDetails } from './users-personal-details/users-personal-details.entity';
import { Employment } from './employment/employment.entity';

@Module({
  imports: [
    UserModule,
    EmploymentModule,
    UsersPersonalDetailsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Users,UsersPersonalDetails,Employment],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}