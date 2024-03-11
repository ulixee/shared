"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressOwnershipProofSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
const IMerkleProof_1 = require("./IMerkleProof");
exports.AddressOwnershipProofSchema = zod_1.z.object({
    signature: common_1.signatureValidation,
    identity: common_1.identityValidation,
    ownershipMerkleProofs: IMerkleProof_1.MerkleProofSchema.array(),
});
//# sourceMappingURL=IAddressOwnershipProof.js.map