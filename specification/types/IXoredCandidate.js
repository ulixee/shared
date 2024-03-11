"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XoredCandidateSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
const IStakeSignature_1 = require("./IStakeSignature");
exports.XoredCandidateSchema = zod_1.z.object({
    nodeId: zod_1.z.string(),
    identity: common_1.identityValidation,
    publicIp: zod_1.z.string(),
    publicPort: zod_1.z.number().int().positive(),
    reputation: zod_1.z.number().int().nonnegative(),
    signature: common_1.signatureValidation,
    available: zod_1.z.boolean(),
    stakeSignature: IStakeSignature_1.StakeSignatureSchema,
    pricePerKb: common_1.micronoteTokenValidation,
    pricePerQuery: common_1.micronoteTokenValidation,
    firstPingSignature: common_1.signatureValidation,
    secondPingSignature: common_1.signatureValidation,
    result: zod_1.z.any(),
    resultHash: common_1.hashValidation,
    webhitsClaimAddress: common_1.addressValidation,
    resultSignature: common_1.signatureValidation,
    resultError: zod_1.z.object({
        name: zod_1.z.string(),
        description: zod_1.z.string(),
    }),
    isConsensusResult: zod_1.z.boolean(),
    isHighReputationRunner: zod_1.z.boolean(),
    paymentAddress: common_1.addressValidation,
});
//# sourceMappingURL=IXoredCandidate.js.map