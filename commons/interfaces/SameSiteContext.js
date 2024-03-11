"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSameSiteContext = void 0;
const sameSiteContext = ['none', 'strict', 'lax'];
function isSameSiteContext(type) {
    return sameSiteContext.includes(type);
}
exports.isSameSiteContext = isSameSiteContext;
//# sourceMappingURL=SameSiteContext.js.map