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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
const typeorm_1 = require("typeorm");
let UserService = class UserService {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    findAll() {
        return this.dataSource.manager.find(user_entity_1.User);
    }
    async create(user) {
        const u = new user_entity_1.User();
        u.full_name = user.full_name;
        u.email = user.email;
        u.password = user.password;
        u.phone = user.phone;
        u.gender = user.gender;
        u.birth_day = user.birth_day;
        u.note = user.note;
        u.presenter_id = user.presenter_id;
        u.create_at = new Date();
        u.update_at = new Date();
        const us = await this.dataSource.manager.save(u);
        await console.log(`UserService - Insert new User ${JSON.stringify(us)}`);
        return us;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], UserService);
//# sourceMappingURL=user.service.js.map