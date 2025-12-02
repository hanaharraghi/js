import { Test, TestingModule } from '@nestjs/testing';
import { ProdactService } from './prodact.service';

describe('ProdactService', () => {
  let service: ProdactService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdactService],
    }).compile();

    service = module.get<ProdactService>(ProdactService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
