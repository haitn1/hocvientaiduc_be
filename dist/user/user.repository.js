"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
class UserRepository extends typeorm_1.Repository {
    async createBySignIn(name, email, password) {
        const u = new user_entity_1.UserEntity();
        u.name = name;
        u.email = email;
        u.password = password;
        return await this.save(u);
    }
    async createUser(user) {
        const u = new user_entity_1.UserEntity();
        u.name = user.name;
        u.email = user.email;
        u.password = user.password;
        u.phone = user.phone;
        u.gender = user.gender;
        u.birth = user.birth;
        u.note = user.note;
        u.presenter_id = user.presenter_id;
        u.created = new Date();
        u.updated = new Date();
        const ii = this.create(u);
        const us = await this.save(ii);
        await console.log(`UserService - Insert new User ${JSON.stringify(us)}`);
        return us;
    }
    async activeByUserId(user_id) {
        const user = await this.findOneBy({ user_id: user_id });
        (await user).active = true;
        return await this.save(user);
    }
    async removeUser(user_id) {
        await this.delete(user_id);
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map