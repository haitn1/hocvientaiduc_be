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
exports.PresenterResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const presenter_service_1 = require("./presenter.service");
const create_presenter_input_1 = require("./dto/create-presenter.input");
const update_presenter_input_1 = require("./dto/update-presenter.input");
const presenter_schema_1 = require("./schemas/presenter.schema");
let PresenterResolver = class PresenterResolver {
    constructor(presenterService) {
        this.presenterService = presenterService;
    }
    create(createPresenterInput) {
        return this.presenterService.create(createPresenterInput);
    }
    async presenters() {
        return this.presenterService.findAll();
    }
    presenter(id) {
        return this.presenterService.findOne(id);
    }
    update(updatePresenterInput) {
        return this.presenterService.update(updatePresenterInput.id, updatePresenterInput);
    }
    remove(id) {
        return this.presenterService.remove(id);
    }
};
exports.PresenterResolver = PresenterResolver;
__decorate([
    (0, graphql_1.Mutation)('createPresenter'),
    __param(0, (0, graphql_1.Args)('createPresenterInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_presenter_input_1.CreatePresenterInput]),
    __metadata("design:returntype", void 0)
], PresenterResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Query)(() => [presenter_schema_1.Presenter]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PresenterResolver.prototype, "presenters", null);
__decorate([
    (0, graphql_1.Query)(() => presenter_schema_1.Presenter),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PresenterResolver.prototype, "presenter", null);
__decorate([
    (0, graphql_1.Mutation)('updatePresenter'),
    __param(0, (0, graphql_1.Args)('updatePresenterInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_presenter_input_1.UpdatePresenterInput]),
    __metadata("design:returntype", void 0)
], PresenterResolver.prototype, "update", null);
__decorate([
    (0, graphql_1.Mutation)('removePresenter'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PresenterResolver.prototype, "remove", null);
exports.PresenterResolver = PresenterResolver = __decorate([
    (0, graphql_1.Resolver)('Presenter'),
    __metadata("design:paramtypes", [presenter_service_1.PresenterService])
], PresenterResolver);
//# sourceMappingURL=presenter.resolver.js.map