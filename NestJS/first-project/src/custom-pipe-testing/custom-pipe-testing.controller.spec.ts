import { Test, TestingModule } from '@nestjs/testing';
import { CustomPipeTestingController } from './custom-pipe-testing.controller';

describe('CustomPipeTestingController', () => {
  let controller: CustomPipeTestingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomPipeTestingController],
    }).compile();

    controller = module.get<CustomPipeTestingController>(CustomPipeTestingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
