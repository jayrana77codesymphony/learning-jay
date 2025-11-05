import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userRepository } from './user-repository';
import { MysqlDatabaseModule } from 'src/mysql-database/mysql-database.module';

@Module({
  imports:[MysqlDatabaseModule],
  controllers: [UserController],
  providers: [UserService,userRepository]
})
export class UserModule {}