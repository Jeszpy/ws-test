import { Test, TestingModule } from '@nestjs/testing';
import { HlebLohGateway } from './hleb-loh.gateway';

describe('HlebLohGateway', () => {
  let gateway: HlebLohGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HlebLohGateway],
    }).compile();

    gateway = module.get<HlebLohGateway>(HlebLohGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
