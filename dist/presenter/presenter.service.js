"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresenterService = void 0;
const common_1 = require("@nestjs/common");
const presenter_schema_1 = require("./schemas/presenter.schema");
let PresenterService = class PresenterService {
    create(createPresenterInput) {
        const pre = new presenter_schema_1.Presenter();
        pre.id = createPresenterInput.id;
        pre.name = createPresenterInput.name;
        return pre;
    }
    findAll() {
        const pre = new presenter_schema_1.Presenter();
        pre.id = 1;
        pre.name = "admin";
        return [pre, pre];
    }
    findOne(id) {
        const pre = new presenter_schema_1.Presenter();
        pre.id = 1;
        pre.name = "admin";
        return pre;
    }
    update(id, updatePresenterInput) {
        const pre = new presenter_schema_1.Presenter();
        pre.id = 1;
        pre.name = "admin";
        return pre;
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
    (0, common_1.Injectable)()
], PresenterService);
//# sourceMappingURL=presenter.service.js.map