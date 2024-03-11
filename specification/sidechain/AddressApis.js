"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressApiSchemas = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
exports.AddressApiSchemas = {
    'Address.getBalance': {
        args: zod_1.z.object({
            address: common_1.addressValidation,
        }),
        result: zod_1.z.object({
            balance: zod_1.z.bigint(),
        }),
    },
    'Address.register': {
        args: zod_1.z.object({
            address: common_1.addressValidation,
        }),
        result: zod_1.z.object({
            success: zod_1.z.boolean(),
        }),
    },
};
//# sourceMappingURL=AddressApis.js.map