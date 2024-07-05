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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const item_service_1 = require("./item.service");
const item_entity_1 = require("./item.entity");
const pubSub = new graphql_subscriptions_1.PubSub();
let ItemResolver = class ItemResolver {
    constructor(itemService) {
        this.itemService = itemService;
    }
    async items() {
        return this.itemService.findAll();
    }
    async item() {
        return this.itemService.item();
    }
};
exports.ItemResolver = ItemResolver;
__decorate([
    (0, graphql_1.Query)('items'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ItemResolver.prototype, "items", null);
__decorate([
    (0, graphql_1.Query)('item'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ItemResolver.prototype, "item", null);
exports.ItemResolver = ItemResolver = __decorate([
    (0, graphql_1.Resolver)(() => item_entity_1.Item),
    __metadata("design:paramtypes", [item_service_1.ItemService])
], ItemResolver);
//# sourceMappingURL=item.resolver.js.map