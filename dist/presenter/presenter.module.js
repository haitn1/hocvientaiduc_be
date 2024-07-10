"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresenterModule = void 0;
const common_1 = require("@nestjs/common");
const presenter_service_1 = require("./presenter.service");
const presenter_resolver_1 = require("./presenter.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const presenter_entity_1 = require("./entities/presenter.entity");
const presenter_repository_1 = require("./presenter.repository");
let PresenterModule = class PresenterModule {
};
exports.PresenterModule = PresenterModule;
exports.PresenterModule = PresenterModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([presenter_entity_1.PresenterEntity, presenter_repository_1.PresenterPrepository])],
        providers: [presenter_resolver_1.PresenterResolver, presenter_service_1.PresenterService],
        exports: [presenter_service_1.PresenterService],
    })
], PresenterModule);
//# sourceMappingURL=presenter.module.js.map