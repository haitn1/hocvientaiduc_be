import { OrderService } from './order.service';
export declare class OrderResolver {
    private orderService;
    constructor(orderService: OrderService);
    orders(): Promise<any[]>;
    order(id: number): Promise<import("./entities/order.entity").OrderEntity>;
}
