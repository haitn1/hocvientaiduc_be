import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {  OrderEntity } from './order.entity';
import { OrderRepository } from './order.repository';
import { OrderInput } from './dto/order-input.dto';

@Injectable()
export class OrderService {
  constructor(
    // Khai báo Repository để kết nối db
    @InjectRepository(OrderEntity)
    public readonly orderRepo:OrderRepository,
  ) {}


  async createByOrderInput(Order: OrderInput): Promise< OrderEntity >{
    const i = new OrderEntity();
    i.name = Order.name;
    i.data = Order.data;
     return await this.orderRepo.save(i);
  }

  async create(Order: OrderEntity): Promise< OrderEntity >{
     return await this.orderRepo.save(Order);
  }

  async findAll(): Promise <OrderEntity[]> {
    return this.orderRepo.find();
  }

  findOneById(id: string): Promise<OrderEntity> {
    return this.orderRepo.findOneBy({id: id});
  }

  Order() {
    return this.orderRepo.findOne({});
  }
}