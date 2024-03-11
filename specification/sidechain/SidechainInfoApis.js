"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidechainInfoApiSchemas = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
const IBlockSettings_1 = require("../types/IBlockSettings");
const IMicronoteBatch_1 = require("../types/IMicronoteBatch");
exports.SidechainInfoApiSchemas = {
    'Sidechain.settings': {
        args: zod_1.z.object({
            identity: common_1.identityValidation
                .nullish()
                .describe('Provide an identity to get proof back that the Sidechain owns the rootIdentity.'),
        }),
        result: zod_1.z.object({
            version: zod_1.z.string(),
            rootIdentities: common_1.identityValidation.array(),
            identityProofSignatures: common_1.signatureValidation.array().optional(),
            latestBlockSettings: IBlockSettings_1.BlockSettingsSchema,
            settlementFeeMicrogons: common_1.micronoteTokenValidation,
            batchDurationMinutes: zod_1.z.number().int(),
        }),
    },
    'Sidechain.audit': {
        args: zod_1.z.undefined().nullish(),
        result: zod_1.z.object({
            auditDate: zod_1.z.date(),
            argonsInCirculation_e2: zod_1.z
                .bigint()
                .describe('Argons with centagon precision as a whole number (e-2).'),
            argonsBurnedYesterday_e2: zod_1.z
                .bigint()
                .describe('Argons burned in the previous day (starting UTC 0:00 to UTC 23:59).'),
            argonsBurnedRolling30DayAverage_e2: zod_1.z
                .bigint()
                .describe('Average daily Argons burned over the previous 30 days.'),
        }),
    },
    'Sidechain.openBatches': {
        args: zod_1.z.undefined().nullish(),
        result: zod_1.z.object({
            micronote: IMicronoteBatch_1.MicronoteBatchSchema.array(),
        }),
    },
};
//# sourceMappingURL=SidechainInfoApis.js.map