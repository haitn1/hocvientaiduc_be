import { Repository } from "typeorm";
import { CreateOrderDto } from "./dto/create-order.dto";
import { OrderEntity } from "./entities/order.entity";
export declare class OrderRepository extends Repository<OrderEntity> {
    createByOrder(order: CreateOrderDto): Promise<OrderEntity>;
}
