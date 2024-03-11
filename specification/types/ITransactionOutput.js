"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionOutputSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
exports.TransactionOutputSchema = zod_1.z.object({
    address: common_1.addressValidation, // signatureSettings + hashed alpha sorted public keys
    centagons: common_1.centagonTokenValidation,
    isBond: zod_1.z.boolean().optional(),
    isBurned: zod_1.z.boolean().optional(), // if the coins are burned up as part of the transaction
    addressOnSidechain: common_1.addressValidation.optional(),
    isSidechained: zod_1.z.boolean().optional(),
});
//# sourceMappingURL=ITransactionOutput.js.map