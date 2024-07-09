import { OrderEntity } from './entities/order.entity';
import { OrderRepository } from './order.repository';
import { OrderInput } from './dto/order-input.dto';
export declare class OrderService {
    readonly orderRepo: OrderRepository;
    constructor(orderRepo: OrderRepository);
    createByOrderInput(order: OrderInput): Promise<any>;
    create(Order: OrderEntity): Promise<OrderEntity>;
    findAll(): Promise<OrderEntity[]>;
    findOneById(id: string): Promise<OrderEntity>;
    Order(): Promise<OrderEntity>;
}
