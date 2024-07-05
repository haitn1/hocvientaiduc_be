"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkExpDate = checkExpDate;
exports.extractUserId = extractUserId;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
function checkExpDate(exp) {
    try {
        if (exp * 1000 < Date.now()) {
            throw new common_1.UnauthorizedException('JWT Token has been expired.');
        }
    }
    catch (exception) {
        throw new common_1.UnauthorizedException('JWT Token is malformed,');
    }
}
function extractUserId(token) {
    try {
        const decodedToken = jwt.verify(token, "");
        checkExpDate(decodedToken.exp);
        return decodedToken.userId;
    }
    catch (exception) {
        throw new common_1.UnauthorizedException('JWT Token is malformed.');
    }
}
//# sourceMappingURL=token-utils.js.map