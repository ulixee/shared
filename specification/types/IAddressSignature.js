"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressSignatureSchema = void 0;
const zod_1 = require("zod");
const IMerkleProof_1 = require("./IMerkleProof");
const IAddressOwnershipProof_1 = require("./IAddressOwnershipProof");
exports.AddressSignatureSchema = zod_1.z.object({
    signers: IAddressOwnershipProof_1.AddressOwnershipProofSchema.array(),
    signatureSettings: zod_1.z.object({
        countRequired: zod_1.z.number(),
        settingsMerkleProofs: IMerkleProof_1.MerkleProofSchema.array(),
        salt: zod_1.z.instanceof(Buffer).optional(),
        identityIndices: zod_1.z.number().array().optional(),
    }),
});
//# sourceMappingURL=IAddressSignature.js.map