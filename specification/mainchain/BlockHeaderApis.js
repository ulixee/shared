"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockHeaderApiSchemas = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
const IBlockHeader_1 = require("../types/IBlockHeader");
exports.BlockHeaderApiSchemas = {
    'BlockHeader.getMany': {
        args: zod_1.z.object({
            heights: common_1.blockHeightValidation.array(),
        }),
        result: zod_1.z.object({
            headers: IBlockHeader_1.BlockHeaderSchema.array(),
        }),
    },
    'BlockHeader.get': {
        args: zod_1.z.object({
            hash: common_1.hashValidation,
            includeFork: zod_1.z.boolean(),
        }),
        result: zod_1.z.object({
            header: IBlockHeader_1.BlockHeaderSchema,
            isOnFork: zod_1.z.boolean(),
        }),
    },
};
//# sourceMappingURL=BlockHeaderApis.js.map