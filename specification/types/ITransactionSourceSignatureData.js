"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionSourceSignatureDataSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
const LedgerType_1 = require("./LedgerType");
const TransactionType_1 = require("./TransactionType");
const ITransactionOutput_1 = require("./ITransactionOutput");
const IAddressSignature_1 = require("./IAddressSignature");
exports.TransactionSourceSignatureDataSchema = zod_1.z.object({
    version: zod_1.z.string(),
    ledger: zod_1.z.nativeEnum(LedgerType_1.default),
    type: zod_1.z.nativeEnum(TransactionType_1.default),
    sourceTransactionHash: common_1.hashValidation, // transaction hash
    sourceTransactionOutputIndex: zod_1.z.number().int().nonnegative(),
    sourceLedger: zod_1.z.nativeEnum(LedgerType_1.default),
    address: common_1.addressValidation,
    addressSignatureSettings: IAddressSignature_1.AddressSignatureSchema.shape.signatureSettings, // signatures by other multisig authors
    centagons: common_1.centagonTokenValidation,
    coinageHash: common_1.hashValidation.optional(),
    outputs: ITransactionOutput_1.TransactionOutputSchema.array(),
});
//# sourceMappingURL=ITransactionSourceSignatureData.js.map