"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockHeaderSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
const IArithmeticEncoding_1 = require("./IArithmeticEncoding");
exports.BlockHeaderSchema = zod_1.z.object({
    hash: common_1.hashValidation,
    version: zod_1.z.string(),
    height: common_1.blockHeightValidation,
    linkNonce: common_1.hashValidation,
    prevBlockHash: common_1.hashValidation,
    nextLinkTarget: IArithmeticEncoding_1.ArithmeticEncodingSchema, // the max value of the hash that is allowed for the next linked block
    time: zod_1.z.date(),
    stableMerkleRoot: common_1.hashValidation,
    sharesMerkleRoot: common_1.hashValidation,
    coinagesHash: common_1.hashValidation,
    bondCentagonsCreated: zod_1.z.bigint().refine(x => x >= 0n, 'Cannot be negative'),
    stableCoinUSDCents: zod_1.z.number().int().nonnegative(), // figure out bond price from stable price.
    stableCoinVolume: zod_1.z.number().int().nonnegative(), // figure out bond price from stable price. NOTE: not in centagons
    datumSummaryHash: common_1.hashValidation,
    sampledBitsHash: common_1.hashValidation,
    xoredCandidateDistance: IArithmeticEncoding_1.ArithmeticEncodingSchema, // minimum xor distance for future candidates
    xoredCandidateAverage: zod_1.z.number().int().nonnegative(),
    sidechainChangesHash: common_1.hashValidation,
    sidechainSnapshotsHash: common_1.hashValidation,
});
//# sourceMappingURL=IBlockHeader.js.map