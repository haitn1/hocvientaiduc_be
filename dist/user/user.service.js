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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const user_repository_1 = require("./user.repository");
let UserService = class UserService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async findAll() {
        return await this.userRepo.find();
    }
    async findOne() {
        return this.userRepo.findOne({});
    }
    async findOneById(user_id) {
        return this.userRepo.findOneBy({ user_id: user_id });
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
        const us = await this.userRepo.save(u);
        await console.log(`UserService - Insert new User ${JSON.stringify(us)}`);
        return us;
    }
    user() {
        return this.userRepo.findOne({});
    }
    async activeByUserId(user_id) {
        const user = await this.userRepo.findOneBy({ user_id: user_id });
        (await user).active = true;
        return await this.userRepo.save(user);
    }
    async remove(user_id) {
        await this.userRepo.delete(user_id);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
//# sourceMappingURL=user.service.js.map