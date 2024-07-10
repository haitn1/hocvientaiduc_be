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
const user_repository_1 = require("./user.repository");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
let UserService = class UserService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async findAll() {
        return await this.userRepo.find();
    }
    async findOneById(user_id) {
        return this.userRepo.findOneBy({ user_id: user_id });
    }
    async findOneByEmail(email) {
        console.log(`UserService- findOneByEmail email[${email}]`);
        return await this.userRepo.findOneBy({ email: email });
    }
    async createBySignIn(name, email, password) {
        return await this.userRepo.createBySignIn(name, email, password);
    }
    async create(user) {
        return await this.userRepo.createUser(user);
    }
    user() {
        return this.userRepo.findOne({});
    }
    async activeByUserId(user_id) {
        return await this.userRepo.activeByUserId(user_id);
    }
    async remove(user_id) {
        await this.userRepo.removeUser(user_id);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
//# sourceMappingURL=user.service.js.map