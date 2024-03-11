"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatumSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
const IProofOfKnowedge_1 = require("./IProofOfKnowedge");
exports.DatumSchema = zod_1.z.object({
    finalResult: zod_1.z.any(),
    proof: IProofOfKnowedge_1.ProofOfKnowledgeSchema.array(),
    signature: common_1.signatureValidation,
    identity: common_1.identityValidation,
    lastUpdated: zod_1.z.string(),
    isError: zod_1.z.boolean(),
});
//# sourceMappingURL=IDatum.js.map