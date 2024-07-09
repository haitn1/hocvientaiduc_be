import { Repository } from "typeorm";
import { OrderEntity } from "./entities/order.entity";
import { OrderInput } from "./dto/order-input.dto";
export declare class OrderRepository extends Repository<OrderEntity> {
    createByOrderInput(order: OrderInput): Promise<OrderEntity>;
}
