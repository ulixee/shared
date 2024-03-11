/// <reference types="node" />
import { z } from 'zod';
import LedgerType from './LedgerType';
export declare const TransactionSourceSchema: z.ZodObject<{
    sourceTransactionHash: z.ZodOptional<z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>>;
    sourceOutputIndex: z.ZodOptional<z.ZodNumber>;
    sourceAddressSignatureSettings: z.ZodObject<{
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
    sourceAddressSigners: z.ZodArray<z.ZodObject<{
        signature: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
        identity: z.ZodString;
        ownershipMerkleProofs: z.ZodArray<z.ZodObject<{
            position: z.ZodNativeEnum<typeof import("./IMerkleProof").MerklePosition>;
            hash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
        }, "strip", z.ZodTypeAny, {
            position: import("./IMerkleProof").MerklePosition;
            hash: Buffer;
        }, {
            position: import("./IMerkleProof").MerklePosition;
            hash: Buffer;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        signature: Buffer;
        identity: string;
        ownershipMerkleProofs: {
            position: import("./IMerkleProof").MerklePosition;
            hash: Buffer;
        }[];
    }, {
        signature: Buffer;
        identity: string;
        ownershipMerkleProofs: {
            position: import("./IMerkleProof").MerklePosition;
            hash: Buffer;
        }[];
    }>, "many">;
    sourceLedger: z.ZodNativeEnum<typeof LedgerType>;
    blockClaimHeight: z.ZodOptional<z.ZodNumber>;
    coinageHash: z.ZodOptional<z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>>;
}, "strip", z.ZodTypeAny, {
    sourceAddressSignatureSettings: {
        countRequired: number;
        settingsMerkleProofs: {
            position: import("./IMerkleProof").MerklePosition;
            hash: Buffer;
        }[];
        salt?: Buffer | undefined;
        identityIndices?: number[] | undefined;
    };
    sourceAddressSigners: {
        signature: Buffer;
        identity: string;
        ownershipMerkleProofs: {
            position: import("./IMerkleProof").MerklePosition;
            hash: Buffer;
        }[];
    }[];
    sourceLedger: LedgerType;
    sourceTransactionHash?: Buffer | undefined;
    sourceOutputIndex?: number | undefined;
    blockClaimHeight?: number | undefined;
    coinageHash?: Buffer | undefined;
}, {
    sourceAddressSignatureSettings: {
        countRequired: number;
        settingsMerkleProofs: {
            position: import("./IMerkleProof").MerklePosition;
            hash: Buffer;
        }[];
        salt?: Buffer | undefined;
        identityIndices?: number[] | undefined;
    };
    sourceAddressSigners: {
        signature: Buffer;
        identity: string;
        ownershipMerkleProofs: {
            position: import("./IMerkleProof").MerklePosition;
            hash: Buffer;
        }[];
    }[];
    sourceLedger: LedgerType;
    sourceTransactionHash?: Buffer | undefined;
    sourceOutputIndex?: number | undefined;
    blockClaimHeight?: number | undefined;
    coinageHash?: Buffer | undefined;
}>;
type ITransactionSource = z.infer<typeof TransactionSourceSchema>;
export default ITransactionSource;
