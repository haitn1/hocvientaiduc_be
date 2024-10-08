"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const order_repository_1 = require("./order.repository");
const typeorm_1 = require("@nestjs/typeorm");
const order_entity_1 = require("./entities/order.entity");
let OrderService = class OrderService {
    constructor(orderRepo) {
        this.orderRepo = orderRepo;
    }
    async create(order) {
        return await this.orderRepo.createByOrder(order);
    }
    async findOne(id) {
        return this.orderRepo.findOneBy({ id: id });
    }
    async findOneByType(type) {
        return this.orderRepo.findOneBy({ type: type });
    }
    async findOneById(id) {
        return await this.orderRepo.findOneBy({ id: id });
    }
    update(id, updateOrderDto) {
        return `This action updates a #${id} order`;
    }
    async remove(id) {
        return await this.orderRepo.delete({ id: id });
    }
    async createOrder(Order) {
        return await this.orderRepo.save(Order);
    }
    async findAll() {
        return await this.orderRepo.find();
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.OrderEntity)),
    __metadata("design:paramtypes", [order_repository_1.OrderRepository])
], OrderService);
//# sourceMappingURL=order.service.js.map