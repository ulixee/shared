"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArithmeticEncodingSchema = void 0;
const zod_1 = require("zod");
exports.ArithmeticEncodingSchema = zod_1.z.object({
    powerOf2: zod_1.z.number().nonnegative(),
    multiplierE6: zod_1.z.number().nonnegative().optional(),
});
//# sourceMappingURL=IArithmeticEncoding.js.map