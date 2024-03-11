"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockApiSchemas = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
const IDatumSummary_1 = require("../types/IDatumSummary");
const IBlock_1 = require("../types/IBlock");
const BlockError_1 = require("../types/BlockError");
const IBitDatumHistory_1 = require("../types/IBitDatumHistory");
const IBlockSettings_1 = require("../types/IBlockSettings");
const index_1 = require("../index");
exports.BlockApiSchemas = {
    'Block.create': {
        args: zod_1.z.object({
            prevBlockHash: common_1.hashValidation,
            payoutAddress: common_1.addressValidation,
            linkNonce: common_1.hashValidation, // since already calculated, send it through
            datumSummary: IDatumSummary_1.DatumSummarySchema,
            bitSampling: zod_1.z.object({
                bitDatumHistories: IBitDatumHistory_1.BitDatumHistorySchema.array(),
            }), // sampling of node datums created
        }),
        result: zod_1.z.object({
            success: zod_1.z.boolean(),
        }),
    },
    'Block.created': {
        args: zod_1.z.object({
            block: IBlock_1.BlockSchema,
            nodeIdsAlreadySent: zod_1.z.string().array(),
        }),
        result: zod_1.z.object({
            accept: zod_1.z.boolean(),
            error: zod_1.z.nativeEnum(BlockError_1.default),
            message: zod_1.z.string(),
        }),
    },
    'Block.findWithTransaction': {
        args: zod_1.z.object({
            transactionHash: common_1.hashValidation,
            ledgerType: zod_1.z.nativeEnum(index_1.LedgerType),
        }),
        result: zod_1.z.object({
            blockHeight: common_1.blockHeightValidation,
            merkleRoot: common_1.hashValidation,
            blockHash: common_1.hashValidation,
        }),
    },
    'Block.getMany': {
        args: zod_1.z.object({
            blockHeights: common_1.blockHeightValidation.array(),
            blockHashes: common_1.hashValidation.array(),
        }),
        result: zod_1.z.object({
            blocks: IBlock_1.BlockSchema.array(),
        }),
    },
    'Block.settings': {
        args: zod_1.z.object({
            blockHeight: common_1.blockHeightValidation.optional(),
        }),
        result: IBlockSettings_1.BlockSettingsSchema,
    },
};
//# sourceMappingURL=BlockApis.js.map