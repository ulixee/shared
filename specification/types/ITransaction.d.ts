/// <reference types="node" />
import { z } from 'zod';
import TransactionType from './TransactionType';
export declare const TransactionSchema: z.ZodObject<{
    transactionHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
    version: z.ZodString;
    time: z.ZodDate;
    type: z.ZodNativeEnum<typeof TransactionType>;
    expiresAtBlockHeight: z.ZodNumber;
    sources: z.ZodArray<z.ZodObject<{
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
        sourceLedger: z.ZodNativeEnum<typeof import("./LedgerType").default>;
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
        sourceLedger: import("./LedgerType").default;
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
        sourceLedger: import("./LedgerType").default;
        sourceTransactionHash?: Buffer | undefined;
        sourceOutputIndex?: number | undefined;
        blockClaimHeight?: number | undefined;
        coinageHash?: Buffer | undefined;
    }>, "many">;
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
    transactionHash: Buffer;
    version: string;
    time: Date;
    expiresAtBlockHeight: number;
    sources: {
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
        sourceLedger: import("./LedgerType").default;
        sourceTransactionHash?: Buffer | undefined;
        sourceOutputIndex?: number | undefined;
        blockClaimHeight?: number | undefined;
        coinageHash?: Buffer | undefined;
    }[];
    outputs: {
        centagons: bigint;
        address: string;
        isBond?: boolean | undefined;
        isBurned?: boolean | undefined;
        addressOnSidechain?: string | undefined;
        isSidechained?: boolean | undefined;
    }[];
}, {
    type: TransactionType;
    transactionHash: Buffer;
    version: string;
    time: Date;
    expiresAtBlockHeight: number;
    sources: {
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
        sourceLedger: import("./LedgerType").default;
        sourceTransactionHash?: Buffer | undefined;
        sourceOutputIndex?: number | undefined;
        blockClaimHeight?: number | undefined;
        coinageHash?: Buffer | undefined;
    }[];
    outputs: {
        centagons: bigint;
        address: string;
        isBond?: boolean | undefined;
        isBurned?: boolean | undefined;
        addressOnSidechain?: string | undefined;
        isSidechained?: boolean | undefined;
    }[];
}>;
type ITransaction = z.infer<typeof TransactionSchema>;
export default ITransaction;
