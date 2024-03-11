/// <reference types="node" />
import { z } from 'zod';
import { IZodSchemaToApiTypes } from '../utils/IZodApi';
export declare const MicronoteBatchApiSchemas: {
    'MicronoteBatch.fund': {
        args: z.ZodObject<{
            note: z.ZodObject<{
                toAddress: z.ZodString;
                fromAddress: z.ZodString;
                centagons: z.ZodEffects<z.ZodBigInt, bigint, bigint>;
                noteHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
                type: z.ZodNativeEnum<typeof import("../types/NoteType").default>;
                effectiveBlockHeight: z.ZodOptional<z.ZodNumber>;
                guaranteeBlockHeight: z.ZodOptional<z.ZodNumber>;
                timestamp: z.ZodDate;
                signature: z.ZodObject<{
                    signers: z.ZodArray<z.ZodObject<{
                        signature: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
                        identity: z.ZodString;
                        ownershipMerkleProofs: z.ZodArray<z.ZodObject<{
                            position: z.ZodNativeEnum<typeof import("../types/IMerkleProof").MerklePosition>;
                            hash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
                        }, "strip", z.ZodTypeAny, {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }, {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }>, "many">;
                    }, "strip", z.ZodTypeAny, {
                        signature: Buffer;
                        identity: string;
                        ownershipMerkleProofs: {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }[];
                    }, {
                        signature: Buffer;
                        identity: string;
                        ownershipMerkleProofs: {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }[];
                    }>, "many">;
                    signatureSettings: z.ZodObject<{
                        countRequired: z.ZodNumber;
                        settingsMerkleProofs: z.ZodArray<z.ZodObject<{
                            position: z.ZodNativeEnum<typeof import("../types/IMerkleProof").MerklePosition>;
                            hash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
                        }, "strip", z.ZodTypeAny, {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }, {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }>, "many">;
                        salt: z.ZodOptional<z.ZodType<Buffer, z.ZodTypeDef, Buffer>>;
                        identityIndices: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                    }, "strip", z.ZodTypeAny, {
                        countRequired: number;
                        settingsMerkleProofs: {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }[];
                        salt?: Buffer | undefined;
                        identityIndices?: number[] | undefined;
                    }, {
                        countRequired: number;
                        settingsMerkleProofs: {
                            position: import("../types/IMerkleProof").MerklePosition;
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
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }[];
                    }[];
                    signatureSettings: {
                        countRequired: number;
                        settingsMerkleProofs: {
                            position: import("../types/IMerkleProof").MerklePosition;
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
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }[];
                    }[];
                    signatureSettings: {
                        countRequired: number;
                        settingsMerkleProofs: {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }[];
                        salt?: Buffer | undefined;
                        identityIndices?: number[] | undefined;
                    };
                }>;
            }, "strip", z.ZodTypeAny, {
                type: import("../types/NoteType").default;
                signature: {
                    signers: {
                        signature: Buffer;
                        identity: string;
                        ownershipMerkleProofs: {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }[];
                    }[];
                    signatureSettings: {
                        countRequired: number;
                        settingsMerkleProofs: {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }[];
                        salt?: Buffer | undefined;
                        identityIndices?: number[] | undefined;
                    };
                };
                toAddress: string;
                fromAddress: string;
                centagons: bigint;
                noteHash: Buffer;
                timestamp: Date;
                effectiveBlockHeight?: number | undefined;
                guaranteeBlockHeight?: number | undefined;
            }, {
                type: import("../types/NoteType").default;
                signature: {
                    signers: {
                        signature: Buffer;
                        identity: string;
                        ownershipMerkleProofs: {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }[];
                    }[];
                    signatureSettings: {
                        countRequired: number;
                        settingsMerkleProofs: {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }[];
                        salt?: Buffer | undefined;
                        identityIndices?: number[] | undefined;
                    };
                };
                toAddress: string;
                fromAddress: string;
                centagons: bigint;
                noteHash: Buffer;
                timestamp: Date;
                effectiveBlockHeight?: number | undefined;
                guaranteeBlockHeight?: number | undefined;
            }>;
            batchSlug: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            batchSlug: string;
            note: {
                type: import("../types/NoteType").default;
                signature: {
                    signers: {
                        signature: Buffer;
                        identity: string;
                        ownershipMerkleProofs: {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }[];
                    }[];
                    signatureSettings: {
                        countRequired: number;
                        settingsMerkleProofs: {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }[];
                        salt?: Buffer | undefined;
                        identityIndices?: number[] | undefined;
                    };
                };
                toAddress: string;
                fromAddress: string;
                centagons: bigint;
                noteHash: Buffer;
                timestamp: Date;
                effectiveBlockHeight?: number | undefined;
                guaranteeBlockHeight?: number | undefined;
            };
        }, {
            batchSlug: string;
            note: {
                type: import("../types/NoteType").default;
                signature: {
                    signers: {
                        signature: Buffer;
                        identity: string;
                        ownershipMerkleProofs: {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }[];
                    }[];
                    signatureSettings: {
                        countRequired: number;
                        settingsMerkleProofs: {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }[];
                        salt?: Buffer | undefined;
                        identityIndices?: number[] | undefined;
                    };
                };
                toAddress: string;
                fromAddress: string;
                centagons: bigint;
                noteHash: Buffer;
                timestamp: Date;
                effectiveBlockHeight?: number | undefined;
                guaranteeBlockHeight?: number | undefined;
            };
        }>;
        result: z.ZodObject<{
            fundsId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            fundsId: string;
        }, {
            fundsId: string;
        }>;
    };
    'MicronoteBatch.activeFunds': {
        args: z.ZodObject<{
            batchSlug: z.ZodString;
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
            batchSlug: string;
        }, {
            address: string;
            batchSlug: string;
        }>;
        result: z.ZodArray<z.ZodObject<{
            fundsId: z.ZodString;
            microgonsRemaining: z.ZodNumber;
            allowedRecipientAddresses: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            fundsId: string;
            microgonsRemaining: number;
            allowedRecipientAddresses: string[];
        }, {
            fundsId: string;
            microgonsRemaining: number;
            allowedRecipientAddresses: string[];
        }>, "many">;
    };
    'MicronoteBatch.findFund': {
        args: z.ZodObject<{
            batchSlug: z.ZodString;
            microgons: z.ZodNumber;
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
            batchSlug: string;
            microgons: number;
        }, {
            address: string;
            batchSlug: string;
            microgons: number;
        }>;
        result: z.ZodObject<{
            fundsId: z.ZodString;
            microgonsRemaining: z.ZodNumber;
            allowedRecipientAddresses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            fundsId: string;
            microgonsRemaining: number;
            allowedRecipientAddresses?: string[] | undefined;
        }, {
            fundsId: string;
            microgonsRemaining: number;
            allowedRecipientAddresses?: string[] | undefined;
        }>;
    };
    'MicronoteBatch.getFundSettlement': {
        args: z.ZodObject<{
            fundIds: z.ZodArray<z.ZodString, "many">;
            batchSlug: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            batchSlug: string;
            fundIds: string[];
        }, {
            batchSlug: string;
            fundIds: string[];
        }>;
        result: z.ZodObject<{
            isBatchSettled: z.ZodBoolean;
            settledTime: z.ZodDate;
            settlements: z.ZodArray<z.ZodObject<{
                fundsId: z.ZodString;
                fundedCentagons: z.ZodEffects<z.ZodBigInt, bigint, bigint>;
                settledCentagons: z.ZodEffects<z.ZodBigInt, bigint, bigint>;
            }, "strip", z.ZodTypeAny, {
                fundsId: string;
                fundedCentagons: bigint;
                settledCentagons: bigint;
            }, {
                fundsId: string;
                fundedCentagons: bigint;
                settledCentagons: bigint;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            isBatchSettled: boolean;
            settledTime: Date;
            settlements: {
                fundsId: string;
                fundedCentagons: bigint;
                settledCentagons: bigint;
            }[];
        }, {
            isBatchSettled: boolean;
            settledTime: Date;
            settlements: {
                fundsId: string;
                fundedCentagons: bigint;
                settledCentagons: bigint;
            }[];
        }>;
    };
};
type IMicronoteBatchApis = IZodSchemaToApiTypes<typeof MicronoteBatchApiSchemas>;
export default IMicronoteBatchApis;
