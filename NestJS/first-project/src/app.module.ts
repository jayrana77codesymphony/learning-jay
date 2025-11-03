import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { CustomPipeTestingModule } from './custom-pipe-testing/custom-pipe-testing.module';

@Module({
  imports: [ StudentModule, CustomPipeTestingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
