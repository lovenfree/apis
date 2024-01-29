import { Test, TestingModule } from '@nestjs/testing';
import { QuicknodeService } from './quicknode.service';

describe('QuicknodeService', () => {
  let service: QuicknodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuicknodeService],
    }).compile();

    service = module.get<QuicknodeService>(QuicknodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
