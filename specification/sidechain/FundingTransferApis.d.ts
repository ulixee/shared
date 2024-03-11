/// <reference types="node" />
import { z } from 'zod';
import { IZodSchemaToApiTypes } from '../utils/IZodApi';
export declare const FundingTransferApiSchemas: {
    'FundingTransfer.status': {
        args: z.ZodObject<{
            noteHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
        }, "strip", z.ZodTypeAny, {
            noteHash: Buffer;
        }, {
            noteHash: Buffer;
        }>;
        result: z.ZodObject<{
            transactionHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
            currentBlockHeight: z.ZodNumber;
            blocks: z.ZodArray<z.ZodObject<{
                blockHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
                blockHeight: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                blockHeight: number;
                blockHash: Buffer;
            }, {
                blockHeight: number;
                blockHash: Buffer;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            currentBlockHeight: number;
            transactionHash: Buffer;
            blocks: {
                blockHeight: number;
                blockHash: Buffer;
            }[];
        }, {
            currentBlockHeight: number;
            transactionHash: Buffer;
            blocks: {
                blockHeight: number;
                blockHash: Buffer;
            }[];
        }>;
    };
    'FundingTransfer.keys': {
        args: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
        result: z.ZodObject<{
            transferOutKey: z.ZodString;
            transferInKeys: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            transferOutKey: string;
            transferInKeys: string[];
        }, {
            transferOutKey: string;
            transferInKeys: string[];
        }>;
    };
    'FundingTransfer.out': {
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
        }, "strip", z.ZodTypeAny, {
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
            noteHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
            currentBlockHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
        }, "strip", z.ZodTypeAny, {
            noteHash: Buffer;
            currentBlockHash: Buffer;
        }, {
            noteHash: Buffer;
            currentBlockHash: Buffer;
        }>;
    };
};
type IFundingTransferApis = IZodSchemaToApiTypes<typeof FundingTransferApiSchemas>;
export default IFundingTransferApis;
