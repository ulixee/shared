"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionApiSchemas = void 0;
const zod_1 = require("zod");
const ITransaction_1 = require("../types/ITransaction");
const index_1 = require("../index");
const common_1 = require("../common");
const IMerkleProof_1 = require("../types/IMerkleProof");
const TransactionResponseSchema = zod_1.z.object({
    preliminaryBlockHeight: common_1.blockHeightValidation,
    error: zod_1.z.nativeEnum(index_1.TransactionError),
    message: zod_1.z.string().optional(),
});
exports.TransactionApiSchemas = {
    'Transaction.created': {
        args: zod_1.z.object({
            transaction: ITransaction_1.TransactionSchema,
            ledger: zod_1.z.nativeEnum(index_1.LedgerType),
            nodeIdsAlreadySent: zod_1.z.string().array(),
        }),
        result: zod_1.z.object({
            accept: zod_1.z.boolean(),
            error: zod_1.z.nativeEnum(index_1.TransactionError),
            message: zod_1.z.string().optional(),
        }),
    },
    'Transaction.transfer': {
        args: zod_1.z.object({
            transaction: ITransaction_1.TransactionSchema,
            ledger: zod_1.z.nativeEnum(index_1.LedgerType),
        }),
        result: TransactionResponseSchema,
    },
    'Transaction.claim': {
        args: zod_1.z.object({
            transaction: ITransaction_1.TransactionSchema,
        }),
        result: TransactionResponseSchema,
    },
    'Transaction.purchase': {
        args: zod_1.z.object({
            transaction: ITransaction_1.TransactionSchema,
        }),
        result: TransactionResponseSchema,
    },
    'Transaction.verifyInBlock': {
        args: zod_1.z.object({
            transactionHash: common_1.hashValidation,
            transactionIndex: zod_1.z.number().int().nonnegative(),
            blockHeight: common_1.blockHeightValidation,
            ledger: zod_1.z.nativeEnum(index_1.LedgerType),
        }),
        result: zod_1.z.object({
            proofs: IMerkleProof_1.MerkleProofSchema.array(),
        }),
    },
    'Transaction.checkForBondRedemption': {
        args: zod_1.z.object({
            transactionHash: common_1.hashValidation,
        }),
        result: zod_1.z.object({
            transaction: ITransaction_1.TransactionSchema,
            blockHeight: common_1.blockHeightValidation,
        }),
    },
};
//# sourceMappingURL=TransactionApis.js.map