import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { usersRepository } from './users-repository';
import { MysqlDatabaseModule } from 'src/mysql-database/mysql-database.module';

@Module({
  imports:[MysqlDatabaseModule],
  controllers: [UsersController],
  providers: [UsersService,usersRepository]
})
export class UserModule {}