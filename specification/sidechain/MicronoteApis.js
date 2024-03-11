"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicronoteApiSchemas = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
const IAddressSignature_1 = require("../types/IAddressSignature");
const IMicronoteBatch_1 = require("../types/IMicronoteBatch");
exports.MicronoteApiSchemas = {
    'Micronote.create': {
        args: zod_1.z.object({
            batchSlug: IMicronoteBatch_1.MicronoteBatchSchema.shape.batchSlug,
            address: common_1.addressValidation,
            microgons: common_1.micronoteTokenValidation.lte(1000e6), // $1000 max = 1000*1M microgon max
            fundsId: zod_1.z.string().length(30).optional(),
            signature: IAddressSignature_1.AddressSignatureSchema,
            isAuditable: zod_1.z.boolean().optional(),
        }),
        result: zod_1.z.object({
            id: common_1.micronoteIdValidation,
            micronoteSignature: common_1.signatureValidation,
            blockHeight: common_1.blockHeightValidation,
            fundsId: zod_1.z.string().length(30),
            guaranteeBlockHeight: common_1.blockHeightValidation,
            fundMicrogonsRemaining: common_1.micronoteTokenValidation,
        }),
    },
    'Micronote.hold': {
        args: zod_1.z.object({
            batchSlug: IMicronoteBatch_1.MicronoteBatchSchema.shape.batchSlug,
            id: common_1.micronoteIdValidation,
            identity: common_1.identityValidation,
            signature: common_1.signatureValidation,
            microgons: common_1.micronoteTokenValidation.describe('Number of microgons to put on hold.'),
            holdAuthorizationCode: zod_1.z
                .string()
                .length(16)
                .optional()
                .describe('Authorization code provided to hold funds.'),
        }),
        result: zod_1.z.object({
            holdAuthorizationCode: zod_1.z
                .string()
                .length(16)
                .optional()
                .describe('An authorization code that can be used to claim funds against a Micronote. Only returned to the first claimer.'),
            holdId: zod_1.z
                .string()
                .length(30)
                .optional()
                .describe('A holdId to settle. If insufficient funds, this value will not be returned.'),
            accepted: zod_1.z.boolean(),
            remainingBalance: common_1.micronoteTokenValidation.describe('Number of microgons remaining on this miconote.'),
            currentBlockHeight: common_1.blockHeightValidation,
            currentBlockHash: common_1.hashValidation,
        }),
    },
    'Micronote.settle': {
        args: zod_1.z.object({
            batchSlug: IMicronoteBatch_1.MicronoteBatchSchema.shape.batchSlug,
            id: common_1.micronoteIdValidation,
            identity: common_1.identityValidation,
            tokenAllocation: zod_1.z.record(common_1.addressValidation, common_1.micronoteTokenValidation),
            signature: common_1.signatureValidation,
            holdId: zod_1.z
                .string()
                .length(30)
                .optional()
                .describe('A hold id that will settle funds allocated in a hold.'),
            isFinal: zod_1.z.boolean().describe('Should this call finalize the Micronote and return change.'),
        }),
        result: zod_1.z.object({
            finalCost: zod_1.z.number().nonnegative().int().optional(),
        }),
    },
};
//# sourceMappingURL=MicronoteApis.js.map