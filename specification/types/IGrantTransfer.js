"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrantTransferSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
const IAddressSignature_1 = require("./IAddressSignature");
exports.GrantTransferSchema = zod_1.z.object({
    coinageHash: common_1.hashValidation,
    signature: IAddressSignature_1.AddressSignatureSchema,
});
//# sourceMappingURL=IGrantTransfer.js.map