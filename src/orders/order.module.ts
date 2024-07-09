import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrderResolver } from './order.resolver';
import { OrderService } from './order.service';
import { OrderEntity } from './order.entity';
import { DateScalar } from 'src/common/scalars/date.scalar';
import { OrderRepository } from './order.repository';
import { OrderInput } from './dto/order-input.dto';


@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, OrderRepository])],
  providers: [OrderResolver, OrderService, DateScalar, OrderInput],
  exports: [OrderService],
  
})
export class OrderModule {
  
}