import { Repository } from "typeorm";
import {  OrderEntity } from "./entities/order.entity";
import { OrderInput } from "./dto/order-input.dto";

export class OrderRepository extends Repository<OrderEntity>{
    async createByOrderInput(order: OrderInput): Promise< OrderEntity >{
        const i = new OrderEntity();
        i.id = order.id;
        i.name = order.name;
        i.data = order.data;
         return await this.save(i);
      }
    
}