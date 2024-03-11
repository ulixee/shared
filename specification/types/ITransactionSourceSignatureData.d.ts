/// <reference types="node" />
import { z } from 'zod';
import LedgerType from './LedgerType';
import TransactionType from './TransactionType';
export declare const TransactionSourceSignatureDataSchema: z.ZodObject<{
    version: z.ZodString;
    ledger: z.ZodNativeEnum<typeof LedgerType>;
    type: z.ZodNativeEnum<typeof TransactionType>;
    sourceTransactionHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
    sourceTransactionOutputIndex: z.ZodNumber;
    sourceLedger: z.ZodNativeEnum<typeof LedgerType>;
    address: z.ZodString;
    addressSignatureSettings: z.ZodObject<{
        countRequired: z.ZodNumber;
        settingsMerkleProofs: z.ZodArray<z.ZodObject<{
            position: z.ZodNativeEnum<typeof import("./IMerkleProof").MerklePosition>;
            hash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
        }, "strip", z.ZodTypeAny, {
            position: import("./IMerkleProof").MerklePosition;
            hash: Buffer;
        }, {
            position: import("./IMerkleProof").MerklePosition;
            hash: Buffer;
        }>, "many">;
        salt: z.ZodOptional<z.ZodType<Buffer, z.ZodTypeDef, Buffer>>;
        identityIndices: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    }, "strip", z.ZodTypeAny, {
        countRequired: number;
        settingsMerkleProofs: {
            position: import("./IMerkleProof").MerklePosition;
            hash: Buffer;
        }[];
        salt?: Buffer | undefined;
        identityIndices?: number[] | undefined;
    }, {
        countRequired: number;
        settingsMerkleProofs: {
            position: import("./IMerkleProof").MerklePosition;
            hash: Buffer;
        }[];
        salt?: Buffer | undefined;
        identityIndices?: number[] | undefined;
    }>;
    centagons: z.ZodEffects<z.ZodBigInt, bigint, bigint>;
    coinageHash: z.ZodOptional<z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>>;
    outputs: z.ZodArray<z.ZodObject<{
        address: z.ZodString;
        centagons: z.ZodEffects<z.ZodBigInt, bigint, bigint>;
        isBond: z.ZodOptional<z.ZodBoolean>;
        isBurned: z.ZodOptional<z.ZodBoolean>;
        addressOnSidechain: z.ZodOptional<z.ZodString>;
        isSidechained: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        centagons: bigint;
        address: string;
        isBond?: boolean | undefined;
        isBurned?: boolean | undefined;
        addressOnSidechain?: string | undefined;
        isSidechained?: boolean | undefined;
    }, {
        centagons: bigint;
        address: string;
        isBond?: boolean | undefined;
        isBurned?: boolean | undefined;
        addressOnSidechain?: string | undefined;
        isSidechained?: boolean | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: TransactionType;
    centagons: bigint;
    sourceTransactionHash: Buffer;
    sourceLedger: LedgerType;
    address: string;
    version: string;
    outputs: {
        centagons: bigint;
        address: string;
        isBond?: boolean | undefined;
        isBurned?: boolean | undefined;
        addressOnSidechain?: string | undefined;
        isSidechained?: boolean | undefined;
    }[];
    ledger: LedgerType;
    sourceTransactionOutputIndex: number;
    addressSignatureSettings: {
        countRequired: number;
        settingsMerkleProofs: {
            position: import("./IMerkleProof").MerklePosition;
            hash: Buffer;
        }[];
        salt?: Buffer | undefined;
        identityIndices?: number[] | undefined;
    };
    coinageHash?: Buffer | undefined;
}, {
    type: TransactionType;
    centagons: bigint;
    sourceTransactionHash: Buffer;
    sourceLedger: LedgerType;
    address: string;
    version: string;
    outputs: {
        centagons: bigint;
        address: string;
        isBond?: boolean | undefined;
        isBurned?: boolean | undefined;
        addressOnSidechain?: string | undefined;
        isSidechained?: boolean | undefined;
    }[];
    ledger: LedgerType;
    sourceTransactionOutputIndex: number;
    addressSignatureSettings: {
        countRequired: number;
        settingsMerkleProofs: {
            position: import("./IMerkleProof").MerklePosition;
            hash: Buffer;
        }[];
        salt?: Buffer | undefined;
        identityIndices?: number[] | undefined;
    };
    coinageHash?: Buffer | undefined;
}>;
type ITransactionSourceSignatureData = z.infer<typeof TransactionSourceSignatureDataSchema>;
export default ITransactionSourceSignatureData;
