"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
const ITransactionSource_1 = require("./ITransactionSource");
const ITransactionOutput_1 = require("./ITransactionOutput");
const TransactionType_1 = require("./TransactionType");
exports.TransactionSchema = zod_1.z.object({
    transactionHash: common_1.hashValidation, // transaction hash
    version: zod_1.z.string(),
    time: zod_1.z.date(),
    type: zod_1.z.nativeEnum(TransactionType_1.default),
    expiresAtBlockHeight: common_1.blockHeightValidation,
    sources: ITransactionSource_1.TransactionSourceSchema.array(), // empty means coinbase (ie, printed)
    outputs: ITransactionOutput_1.TransactionOutputSchema.array(),
});
//# sourceMappingURL=ITransaction.js.map