import { OrderService } from './Order.service';
export declare class OrderResolver {
    private orderService;
    constructor(orderService: OrderService);
    Orders(): Promise<any[]>;
    Order(): Promise<any>;
}
