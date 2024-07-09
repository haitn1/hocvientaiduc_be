"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRepository = void 0;
const typeorm_1 = require("typeorm");
const order_entity_1 = require("./entities/order.entity");
class OrderRepository extends typeorm_1.Repository {
    async createByOrderInput(order) {
        const i = new order_entity_1.OrderEntity();
        i.id = order.id;
        i.name = order.name;
        i.data = order.data;
        return await this.save(i);
    }
}
exports.OrderRepository = OrderRepository;
//# sourceMappingURL=order.repository.js.map