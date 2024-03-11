/// <reference types="node" />
import { z } from 'zod';
import CoinageType from './CoinageType';
export declare const CoinageSchema: z.ZodObject<{
    type: z.ZodNativeEnum<typeof CoinageType>;
    hash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
    centagons: z.ZodEffects<z.ZodBigInt, bigint, bigint>;
    minimumClaimCentagons: z.ZodEffects<z.ZodBigInt, bigint, bigint>;
    blockHeight: z.ZodNumber;
    expirationBlockHeight: z.ZodNumber;
    oldestClaimHeight: z.ZodNumber;
    grantAddress: z.ZodString;
    transfer: z.ZodObject<{
        coinageHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
        signature: z.ZodObject<{
            signers: z.ZodArray<z.ZodObject<{
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
            signatureSettings: z.ZodObject<{
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
        }, "strip", z.ZodTypeAny, {
            signers: {
                signature: Buffer;
                identity: string;
                ownershipMerkleProofs: {
                    position: import("./IMerkleProof").MerklePosition;
                    hash: Buffer;
                }[];
            }[];
            signatureSettings: {
                countRequired: number;
                settingsMerkleProofs: {
                    position: import("./IMerkleProof").MerklePosition;
                    hash: Buffer;
                }[];
                salt?: Buffer | undefined;
                identityIndices?: number[] | undefined;
            };
        }, {
            signers: {
                signature: Buffer;
                identity: string;
                ownershipMerkleProofs: {
                    position: import("./IMerkleProof").MerklePosition;
                    hash: Buffer;
                }[];
            }[];
            signatureSettings: {
                countRequired: number;
                settingsMerkleProofs: {
                    position: import("./IMerkleProof").MerklePosition;
                    hash: Buffer;
                }[];
                salt?: Buffer | undefined;
                identityIndices?: number[] | undefined;
            };
        }>;
    }, "strip", z.ZodTypeAny, {
        signature: {
            signers: {
                signature: Buffer;
                identity: string;
                ownershipMerkleProofs: {
                    position: import("./IMerkleProof").MerklePosition;
                    hash: Buffer;
                }[];
            }[];
            signatureSettings: {
                countRequired: number;
                settingsMerkleProofs: {
                    position: import("./IMerkleProof").MerklePosition;
                    hash: Buffer;
                }[];
                salt?: Buffer | undefined;
                identityIndices?: number[] | undefined;
            };
        };
        coinageHash: Buffer;
    }, {
        signature: {
            signers: {
                signature: Buffer;
                identity: string;
                ownershipMerkleProofs: {
                    position: import("./IMerkleProof").MerklePosition;
                    hash: Buffer;
                }[];
            }[];
            signatureSettings: {
                countRequired: number;
                settingsMerkleProofs: {
                    position: import("./IMerkleProof").MerklePosition;
                    hash: Buffer;
                }[];
                salt?: Buffer | undefined;
                identityIndices?: number[] | undefined;
            };
        };
        coinageHash: Buffer;
    }>;
}, "strip", z.ZodTypeAny, {
    type: CoinageType;
    hash: Buffer;
    centagons: bigint;
    transfer: {
        signature: {
            signers: {
                signature: Buffer;
                identity: string;
                ownershipMerkleProofs: {
                    position: import("./IMerkleProof").MerklePosition;
                    hash: Buffer;
                }[];
            }[];
            signatureSettings: {
                countRequired: number;
                settingsMerkleProofs: {
                    position: import("./IMerkleProof").MerklePosition;
                    hash: Buffer;
                }[];
                salt?: Buffer | undefined;
                identityIndices?: number[] | undefined;
            };
        };
        coinageHash: Buffer;
    };
    blockHeight: number;
    minimumClaimCentagons: bigint;
    expirationBlockHeight: number;
    oldestClaimHeight: number;
    grantAddress: string;
}, {
    type: CoinageType;
    hash: Buffer;
    centagons: bigint;
    transfer: {
        signature: {
            signers: {
                signature: Buffer;
                identity: string;
                ownershipMerkleProofs: {
                    position: import("./IMerkleProof").MerklePosition;
                    hash: Buffer;
                }[];
            }[];
            signatureSettings: {
                countRequired: number;
                settingsMerkleProofs: {
                    position: import("./IMerkleProof").MerklePosition;
                    hash: Buffer;
                }[];
                salt?: Buffer | undefined;
                identityIndices?: number[] | undefined;
            };
        };
        coinageHash: Buffer;
    };
    blockHeight: number;
    minimumClaimCentagons: bigint;
    expirationBlockHeight: number;
    oldestClaimHeight: number;
    grantAddress: string;
}>;
type ICoinage = z.infer<typeof CoinageSchema>;
export default ICoinage;
