import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {  OrderEntity } from './entities/order.entity';
import { OrderRepository } from './order.repository';
import { OrderInput } from './dto/order-input.dto';

@Injectable()
export class OrderService {
  constructor(
    // Khai báo Repository để kết nối db
    @InjectRepository(OrderEntity)
    public readonly orderRepo:OrderRepository,
  ) {}


  async createByOrderInput(order: OrderInput): Promise< any >{
     return await this.orderRepo.createByOrderInput(order);
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