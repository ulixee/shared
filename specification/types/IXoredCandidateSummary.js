"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XoredCandidateSummarySchema = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
const IStakeSignature_1 = require("./IStakeSignature");
exports.XoredCandidateSummarySchema = zod_1.z.object({
    identity: common_1.identityValidation,
    reputation: zod_1.z.number().nonnegative(),
    firstPingSignature: common_1.signatureValidation,
    secondPingSignature: common_1.signatureValidation,
    auditSignature: common_1.signatureValidation,
    stakeSignature: IStakeSignature_1.StakeSignatureSchema,
    paymentAddress: common_1.addressValidation,
});
//# sourceMappingURL=IXoredCandidateSummary.js.map