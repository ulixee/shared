"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FundingTransferApiSchemas = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
const INote_1 = require("../types/INote");
exports.FundingTransferApiSchemas = {
    'FundingTransfer.status': {
        args: zod_1.z.object({
            noteHash: common_1.hashValidation,
        }),
        result: zod_1.z.object({
            transactionHash: common_1.hashValidation,
            currentBlockHeight: common_1.blockHeightValidation,
            blocks: zod_1.z
                .object({
                blockHash: common_1.hashValidation,
                blockHeight: common_1.blockHeightValidation,
            })
                .array(),
        }),
    },
    'FundingTransfer.keys': {
        args: zod_1.z.object({}),
        result: zod_1.z.object({
            transferOutKey: common_1.addressValidation,
            transferInKeys: common_1.addressValidation.array(),
        }),
    },
    'FundingTransfer.out': {
        args: zod_1.z.object({
            note: INote_1.NoteSchema,
        }),
        result: zod_1.z.object({
            noteHash: common_1.hashValidation,
            currentBlockHash: common_1.hashValidation,
        }),
    },
};
//# sourceMappingURL=FundingTransferApis.js.map