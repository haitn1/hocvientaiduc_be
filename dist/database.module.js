"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DatabaseModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
let DatabaseModule = DatabaseModule_1 = class DatabaseModule {
    static async forRoot() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return {
            module: DatabaseModule_1,
            imports: [
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'mysql',
                    host: '125.212.218.93',
                    port: 3306,
                    username: 'root_haitn',
                    password: 'HVTD01!@1986',
                    database: 'hocvientaiduc_db',
                    synchronize: true,
                    keepConnectionAlive: true,
                    retryAttempts: 2,
                    retryDelay: 1000,
                })
            ]
        };
    }
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = DatabaseModule_1 = __decorate([
    (0, common_1.Module)({})
], DatabaseModule);
//# sourceMappingURL=database.module.js.map