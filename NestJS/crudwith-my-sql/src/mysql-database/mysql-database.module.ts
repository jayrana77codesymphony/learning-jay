import { Module } from '@nestjs/common';
import { database } from './databaseConfig';

@Module({
      providers: [...database],
      exports:[...database]
})
export class MysqlDatabaseModule {}
