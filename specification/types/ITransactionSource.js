"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionSourceSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
const IAddressSignature_1 = require("./IAddressSignature");
const LedgerType_1 = require("./LedgerType");
exports.TransactionSourceSchema = zod_1.z.object({
    sourceTransactionHash: common_1.hashValidation.optional(),
    sourceOutputIndex: zod_1.z.number().int().nonnegative().optional(),
    sourceAddressSignatureSettings: IAddressSignature_1.AddressSignatureSchema.shape.signatureSettings,
    sourceAddressSigners: IAddressSignature_1.AddressSignatureSchema.shape.signers,
    sourceLedger: zod_1.z.nativeEnum(LedgerType_1.default), // if coinage or bond, need to specify where we're trying to grab from
    blockClaimHeight: common_1.blockHeightValidation.optional(), // required if the transaction source is a coinage claim
    coinageHash: common_1.hashValidation.optional(), // required for coinage claims
});
//# sourceMappingURL=ITransactionSource.js.map