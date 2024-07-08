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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async signIn(signupData) {
        const { name, email, password } = signupData;
        const user = await this.userService.findOneByEmail(email);
        if (user) {
            throw new common_1.UnauthorizedException();
        }
        const hashPass = await bcrypt.hash(password, 10);
        console.log(`signIn : hash pass [${hashPass}]`);
        const u = await this.userService.createBySignIn(name, email, hashPass);
        return {
            access_token: await this.generateUserToken(u),
            message: 'Success'
        };
    }
    async login(login) {
        const { email, password } = login;
        const user = await this.userService.findOneByEmail(email);
        if (user === null) {
            throw new common_1.UnauthorizedException();
        }
        const passMatch = await bcrypt.compare(password, user.password);
        if (!passMatch) {
            throw new common_1.UnauthorizedException('wrong credentials');
        }
        return {
            access_token: await this.generateUserToken(user),
            message: 'Success'
        };
    }
    async generateUserToken(user) {
        const access_token = this.jwtService.sign({ user_id: user.user_id }, { expiresIn: '1h' });
        return access_token;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map