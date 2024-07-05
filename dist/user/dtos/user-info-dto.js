"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfoResponseDto = void 0;
class UserInfoResponseDto {
    constructor(user) {
        this.user_id = user.user_id;
        this.full_name = user.full_name;
        this.email = user.email;
        this.gender = user.gender;
        this.phone = user.phone;
        this.birth_day = user.birth_day;
        this.note = user.note;
    }
}
exports.UserInfoResponseDto = UserInfoResponseDto;
//# sourceMappingURL=user-info-dto.js.map