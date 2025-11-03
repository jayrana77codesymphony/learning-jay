import { Module } from '@nestjs/common';
import { CustomPipeTestingController } from './custom-pipe-testing.controller';

@Module({
  providers: [],
  controllers: [CustomPipeTestingController]
})
export class CustomPipeTestingModule {}
