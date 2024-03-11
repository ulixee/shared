"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProofOfKnowledgeSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
const IXoredCandidate_1 = require("./IXoredCandidate");
const ICoordinator_1 = require("./ICoordinator");
exports.ProofOfKnowledgeSchema = zod_1.z.object({
    hash: common_1.hashValidation,
    micronoteId: common_1.micronoteIdValidation,
    micronoteBlockHeight: common_1.blockHeightValidation,
    blockHeight: common_1.blockHeightValidation,
    xoredCandidates: IXoredCandidate_1.XoredCandidateSchema.array(),
    coordinator: ICoordinator_1.CoordinatorSchema,
    decoderHash: common_1.hashValidation,
    decoderReputation: zod_1.z.number().int().nonnegative(),
    identityReputationChanges: zod_1.z.record(common_1.identityValidation, zod_1.z.number().int()),
    isBlockEligible: zod_1.z.boolean(),
    resultHash: common_1.hashValidation,
    webhitsClaimAddress: common_1.addressValidation,
    viewOfTruthHash: common_1.hashValidation,
    maxBasePricePerKb: common_1.micronoteTokenValidation,
    maxBasePricePerQuery: common_1.micronoteTokenValidation,
});
//# sourceMappingURL=IProofOfKnowedge.js.map