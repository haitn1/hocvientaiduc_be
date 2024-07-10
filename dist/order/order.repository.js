"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRepository = void 0;
const typeorm_1 = require("typeorm");
const order_entity_1 = require("./entities/order.entity");
class OrderRepository extends typeorm_1.Repository {
    async createByOrder(order) {
        await console.log(`OrderRepository - createByOrderInput param ${JSON.stringify(order)}`);
        const o = new order_entity_1.OrderEntity();
        o.type = order.type;
        o.name = order.name;
        o.data = order.data;
        const us = await this.save(o);
        await console.log(`OrderRepository - createByOrderInput new User ${JSON.stringify(us)}`);
        return us;
    }
}
exports.OrderRepository = OrderRepository;
//# sourceMappingURL=order.repository.js.map