import { Test, TestingModule } from '@nestjs/testing';
import { ProdactController } from './prodact.controller';

describe('ProdactController', () => {
  let controller: ProdactController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdactController],
    }).compile();

    controller = module.get<ProdactController>(ProdactController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
