"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicronoteBatchSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
exports.MicronoteBatchSchema = zod_1.z.object({
    batchHost: zod_1.z.string().url(),
    batchSlug: zod_1.z
        .string()
        .regex(/^[0-9A-Fa-f]+$/)
        .length(14),
    plannedClosingTime: zod_1.z.date(),
    stopNewNotesTime: zod_1.z.date(),
    minimumFundingCentagons: zod_1.z.bigint().refine(x => x >= 1n),
    micronoteBatchIdentity: common_1.identityValidation,
    micronoteBatchAddress: common_1.addressValidation,
    sidechainIdentity: common_1.identityValidation,
    sidechainValidationSignature: common_1.signatureValidation,
});
//# sourceMappingURL=IMicronoteBatch.js.map