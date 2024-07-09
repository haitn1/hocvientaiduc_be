import { Query, Resolver } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

import { OrderService } from './Order.service';
import { Order } from './Order.schema';

@Resolver(()=>Order)
export class OrderResolver {
  constructor(private orderService: OrderService) {}

  @Query(()=>Order)
  async Orders(): Promise<any[]> {
    return this.orderService.findAll();
  }

  @Query(()=>Order)
  async Order(): Promise<any> {
    return this.orderService.Order();
  }

}