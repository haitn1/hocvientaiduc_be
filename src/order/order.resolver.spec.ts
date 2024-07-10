import { Test, TestingModule } from '@nestjs/testing';
import { OrderResolver } from '../order/order.resolver';
import { OrderService } from './order.service';
import { OrderRepository } from './order.repository';
import { OrderEntity } from './entities/order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('OrderResolver', () => {
  let resolver: OrderResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([OrderEntity, OrderRepository])],
      providers: [OrderResolver,OrderService,OrderRepository],
    }).compile();

    resolver = module.get<OrderResolver>(OrderResolver);
  });

  it('should be defined', () => {
    expect(resolver.order(1)).toBe({id:1});
  });
});
