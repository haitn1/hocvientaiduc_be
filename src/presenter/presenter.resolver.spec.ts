import { Test, TestingModule } from '@nestjs/testing';
import { PresenterResolver } from './presenter.resolver';
import { PresenterService } from './presenter.service';

describe('PresenterResolver', () => {
  let resolver: PresenterResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PresenterResolver, PresenterService],
    }).compile();

    resolver = module.get<PresenterResolver>(PresenterResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
