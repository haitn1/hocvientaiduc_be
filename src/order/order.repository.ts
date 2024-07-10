import { Repository } from "typeorm";
import { CreateOrderDto } from "./dto/create-order.dto";
import { OrderEntity } from "./entities/order.entity";

export class OrderRepository extends Repository<OrderEntity>{

    async createByOrder(order: CreateOrderDto){
        await console.log(`OrderRepository - createByOrderInput param ${JSON.stringify(order)}`);
        const o = new OrderEntity();
        o.type = order.type;
        o.name = order.name;
        o.data = order.data;
        const us =  await this.save(o);
        await console.log(`OrderRepository - createByOrderInput new User ${JSON.stringify(us)}`);
       return us;
      }
     
}