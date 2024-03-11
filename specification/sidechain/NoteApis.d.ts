/// <reference types="node" />
import { z } from 'zod';
import { IZodSchemaToApiTypes } from '../utils/IZodApi';
export declare const NoteApiSchemas: {
    'Note.get': {
        args: z.ZodObject<{
            noteHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
        }, "strip", z.ZodTypeAny, {
            noteHash: Buffer;
        }, {
            noteHash: Buffer;
        }>;
        result: z.ZodObject<{
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
    };
    'Note.create': {
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
            accepted: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            accepted: boolean;
        }, {
            accepted: boolean;
        }>;
    };
};
type INoteApis = IZodSchemaToApiTypes<typeof NoteApiSchemas>;
export default INoteApis;
