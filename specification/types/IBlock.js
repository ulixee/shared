"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockSchema = void 0;
const zod_1 = require("zod");
const IBlockHeader_1 = require("./IBlockHeader");
const IAuthorizedSidechain_1 = require("./IAuthorizedSidechain");
const ITransaction_1 = require("./ITransaction");
const ICoinage_1 = require("./ICoinage");
const IDatumSummary_1 = require("./IDatumSummary");
const IBitDatumHistory_1 = require("./IBitDatumHistory");
exports.BlockSchema = zod_1.z.object({
    header: IBlockHeader_1.BlockHeaderSchema,
    stableLedger: ITransaction_1.TransactionSchema.array(),
    sharesLedger: ITransaction_1.TransactionSchema.array(), // all share trades must happen in the sharesLedger
    // these fields can be rolled off
    coinages: ICoinage_1.CoinageSchema.array(),
    datumSummary: IDatumSummary_1.DatumSummarySchema,
    bitSampling: zod_1.z.object({
        bitDatumHistories: IBitDatumHistory_1.BitDatumHistorySchema.array(),
    }),
    sidechainGovernance: zod_1.z.object({
        authorizedSidechains: IAuthorizedSidechain_1.AuthorizedSidechainSchema.array(),
    }),
    // repeated SidechainSnapshot sidechainSnapshots = 8;
});
//# sourceMappingURL=IBlock.js.map