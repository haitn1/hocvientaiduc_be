import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order.entity';
import { OrderRepository } from './order.repository';
import { OrderResolver } from './order.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, OrderRepository])],
  controllers: [OrderController],
  providers: [OrderService,OrderRepository,OrderResolver],
  exports:[OrderService]
})
export class OrderModule {}
