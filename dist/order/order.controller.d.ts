import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(createOrderDto: CreateOrderDto): Promise<import("./entities/order.entity").OrderEntity>;
    findAll(): Promise<import("./entities/order.entity").OrderEntity[]>;
    findOne(id: number): Promise<import("./entities/order.entity").OrderEntity>;
    findOneByType(type: string): Promise<import("./entities/order.entity").OrderEntity>;
    update(id: string, updateOrderDto: UpdateOrderDto): string;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
