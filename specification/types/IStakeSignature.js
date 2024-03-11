"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakeSignatureSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
exports.StakeSignatureSchema = zod_1.z.object({
    signature: common_1.signatureValidation,
    blockHeight: common_1.blockHeightValidation,
    rootIdentity: common_1.identityValidation,
});
//# sourceMappingURL=IStakeSignature.js.map