"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicronoteBatchApiSchemas = void 0;
const zod_1 = require("zod");
const IMicronoteBatch_1 = require("../types/IMicronoteBatch");
const INote_1 = require("../types/INote");
const common_1 = require("../common");
const fundsIdValidation = zod_1.z.string().length(30);
exports.MicronoteBatchApiSchemas = {
    'MicronoteBatch.fund': {
        args: zod_1.z.object({
            note: INote_1.NoteSchema,
            batchSlug: IMicronoteBatch_1.MicronoteBatchSchema.shape.batchSlug,
        }),
        result: zod_1.z.object({
            fundsId: fundsIdValidation,
        }),
    },
    'MicronoteBatch.activeFunds': {
        args: zod_1.z.object({
            batchSlug: IMicronoteBatch_1.MicronoteBatchSchema.shape.batchSlug,
            address: common_1.addressValidation,
        }),
        result: zod_1.z
            .object({
            fundsId: fundsIdValidation,
            microgonsRemaining: common_1.micronoteTokenValidation,
            allowedRecipientAddresses: common_1.addressValidation.array(),
        })
            .array(),
    },
    'MicronoteBatch.findFund': {
        args: zod_1.z.object({
            batchSlug: IMicronoteBatch_1.MicronoteBatchSchema.shape.batchSlug,
            microgons: common_1.micronoteTokenValidation,
            address: common_1.addressValidation,
        }),
        result: zod_1.z.object({
            fundsId: fundsIdValidation,
            microgonsRemaining: common_1.micronoteTokenValidation,
            allowedRecipientAddresses: common_1.addressValidation.array().optional(),
        }),
    },
    'MicronoteBatch.getFundSettlement': {
        args: zod_1.z.object({
            fundIds: fundsIdValidation.array(),
            batchSlug: IMicronoteBatch_1.MicronoteBatchSchema.shape.batchSlug,
        }),
        result: zod_1.z.object({
            isBatchSettled: zod_1.z.boolean(),
            settledTime: zod_1.z.date(),
            settlements: zod_1.z
                .object({
                fundsId: fundsIdValidation,
                fundedCentagons: zod_1.z.bigint().refine(x => x >= 0),
                settledCentagons: zod_1.z.bigint().refine(x => x >= 0),
            })
                .array(),
        }),
    },
};
//# sourceMappingURL=MicronoteBatchApis.js.map