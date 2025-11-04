import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { CustomPipeTestingModule } from './custom-pipe-testing/custom-pipe-testing.module';
import { LoggingMiddlewareMiddleware } from './middlewares/logging-middleware/logging-middleware.middleware';

@Module({
  imports: [ StudentModule, CustomPipeTestingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddlewareMiddleware).forRoutes('*')
  }
}
