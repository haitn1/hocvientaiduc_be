import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

import { OrderService } from './order.service';
import { Order } from './schemas/order.schema';

@Resolver(()=>Order)
export class OrderResolver {
  constructor(private orderService: OrderService) {}

  @Query(()=>Order)
  async orders(): Promise<any[]> {
    return this.orderService.findAll();
  }

  @Query(()=>Order)
  async order(@Args('id', { type: () => Int }) id: number) {
    return this.orderService.findOneById(id);
  }

}