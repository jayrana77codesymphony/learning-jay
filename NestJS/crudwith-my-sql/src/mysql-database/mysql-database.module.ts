import { Module } from '@nestjs/common';
import { databaseConnection } from './databaseConfig';

@Module({
      providers: [...databaseConnection],
      exports:[...databaseConnection]
})
export class MysqlDatabaseModule {}
