"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfoResponseDto = void 0;
class UserInfoResponseDto {
    constructor(user) {
        this.user_id = user.user_id;
        this.name = user.name;
        this.email = user.email;
        this.gender = user.gender;
        this.phone = user.phone;
        this.birth = user.birth;
        this.note = user.note;
    }
}
exports.UserInfoResponseDto = UserInfoResponseDto;
//# sourceMappingURL=user-info.dto.js.map