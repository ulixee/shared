"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicronoteSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
const IMicronoteBatch_1 = require("./IMicronoteBatch");
exports.MicronoteSchema = zod_1.z.object({
    microgons: common_1.micronoteTokenValidation,
    micronoteId: common_1.micronoteIdValidation,
    blockHeight: common_1.blockHeightValidation,
    batchSlug: IMicronoteBatch_1.MicronoteBatchSchema.shape.batchSlug,
    micronoteBatchUrl: zod_1.z.string().url(),
    micronoteBatchIdentity: common_1.identityValidation,
    micronoteSignature: common_1.signatureValidation,
    sidechainIdentity: common_1.identityValidation,
    sidechainValidationSignature: common_1.signatureValidation,
    // guaranteeBlockHash: hashValidation.describe('TODO: Add back in. This should tell a server what block hash they can choose to trust or not'),
    guaranteeBlockHeight: common_1.blockHeightValidation,
});
//# sourceMappingURL=IMicronote.js.map