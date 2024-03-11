"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockSettingsSchema = exports.ApprovedSidechainSchema = exports.DatumSettingsSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
const IArithmeticEncoding_1 = require("./IArithmeticEncoding");
exports.DatumSettingsSchema = zod_1.z.object({
    xoredCandidatesMinimum: zod_1.z.number().int().nonnegative(),
    secondPingPercent: zod_1.z.number().int().nonnegative(),
    auditorsCount: zod_1.z.number().int().nonnegative(),
});
exports.ApprovedSidechainSchema = zod_1.z.object({
    url: zod_1.z.string(),
    rootIdentity: common_1.identityValidation,
});
exports.BlockSettingsSchema = zod_1.z.object({
    xoredCandidateDistance: IArithmeticEncoding_1.ArithmeticEncodingSchema,
    datum: exports.DatumSettingsSchema,
    networkNodes: zod_1.z.number().int().nonnegative(),
    bitSamplingsInBlock: zod_1.z.number().int().nonnegative(),
    bitSamplingBlockAge: zod_1.z.number().int().nonnegative(),
    blockHash: common_1.hashValidation,
    nextLinkTarget: IArithmeticEncoding_1.ArithmeticEncodingSchema,
    height: zod_1.z.number().int().nonnegative(),
    sidechains: exports.ApprovedSidechainSchema.array(),
    minimumMicronoteBurnPercent: zod_1.z.number().int().nonnegative(),
});
//# sourceMappingURL=IBlockSettings.js.map