import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderRepository } from './order.repository';
import { OrderEntity } from './entities/order.entity';
export declare class OrderService {
    private readonly orderRepo;
    constructor(orderRepo: OrderRepository);
    create(order: CreateOrderDto): Promise<OrderEntity>;
    findOne(id: number): Promise<OrderEntity>;
    findOneByType(type: string): Promise<OrderEntity>;
    findOneById(id: number): Promise<OrderEntity>;
    update(id: number, updateOrderDto: UpdateOrderDto): string;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    createOrder(Order: OrderEntity): Promise<any>;
    findAll(): Promise<OrderEntity[]>;
}
