"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const item_resolver_1 = require("./item.resolver");
const item_service_1 = require("./item.service");
const item_entity_1 = require("./item.entity");
const date_scalar_1 = require("../common/scalars/date.scalar");
const item_repository_1 = require("./item.repository");
const item_input_dto_1 = require("./dto/item-input.dto");
let ItemModule = class ItemModule {
};
exports.ItemModule = ItemModule;
exports.ItemModule = ItemModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([item_entity_1.Item, item_repository_1.ItemRepository])],
        providers: [item_resolver_1.ItemResolver, item_service_1.ItemService, date_scalar_1.DateScalar, item_input_dto_1.ItemInput],
        exports: [item_service_1.ItemService],
    })
], ItemModule);
//# sourceMappingURL=item.module.js.map