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
exports.PresenterService = void 0;
const common_1 = require("@nestjs/common");
const presenter_schema_1 = require("./schemas/presenter.schema");
const presenter_repository_1 = require("./presenter.repository");
const typeorm_1 = require("@nestjs/typeorm");
const presenter_entity_1 = require("./entities/presenter.entity");
let PresenterService = class PresenterService {
    constructor(presenterRepo) {
        this.presenterRepo = presenterRepo;
    }
    async create(createPresenterInput) {
        const pre = new presenter_schema_1.Presenter();
        pre.id = createPresenterInput.id;
        pre.name = createPresenterInput.name;
        pre.created = new Date();
        pre.updated = new Date();
        return await this.presenterRepo.save(pre);
    }
    async findAll() {
        return await this.presenterRepo.find();
    }
    async findOne(id) {
        return await this.presenterRepo.findOneBy({ id: id });
    }
    async update(id, updatePresenterInput) {
        return await this.presenterRepo.save({
            id: id,
            name: updatePresenterInput.name
        });
    }
    remove(id) {
        const pre = new presenter_schema_1.Presenter();
        pre.id = 1;
        pre.name = "admin";
        return pre;
    }
};
exports.PresenterService = PresenterService;
exports.PresenterService = PresenterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(presenter_entity_1.PresenterEntity)),
    __metadata("design:paramtypes", [presenter_repository_1.PresenterPrepository])
], PresenterService);
//# sourceMappingURL=presenter.service.js.map