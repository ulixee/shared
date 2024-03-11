/// <reference types="node" />
import { z } from 'zod';
import { IZodSchemaToApiTypes } from '../utils/IZodApi';
export declare const StakeApiSchemas: {
    'Stake.settings': {
        args: z.ZodOptional<z.ZodNullable<z.ZodUndefined>>;
        result: z.ZodObject<{
            centagons: z.ZodEffects<z.ZodBigInt, bigint, bigint>;
            rootIdentity: z.ZodString;
            stakeAddress: z.ZodString;
            stableBlockHeight: z.ZodNumber;
            stableBlockHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
            currentBlockHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
            currentBlockHeight: z.ZodNumber;
            refundBlockWindow: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            centagons: bigint;
            rootIdentity: string;
            stakeAddress: string;
            stableBlockHeight: number;
            stableBlockHash: Buffer;
            currentBlockHash: Buffer;
            currentBlockHeight: number;
            refundBlockWindow: number;
        }, {
            centagons: bigint;
            rootIdentity: string;
            stakeAddress: string;
            stableBlockHeight: number;
            stableBlockHash: Buffer;
            currentBlockHash: Buffer;
            currentBlockHeight: number;
            refundBlockWindow: number;
        }>;
    };
    'Stake.create': {
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
            stakedIdentity: z.ZodString;
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
            stakedIdentity: string;
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
            stakedIdentity: string;
        }>;
        result: z.ZodObject<{
            signature: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
            blockHeight: z.ZodNumber;
            rootIdentity: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            signature: Buffer;
            rootIdentity: string;
            blockHeight: number;
        }, {
            signature: Buffer;
            rootIdentity: string;
            blockHeight: number;
        }>;
    };
    'Stake.refund': {
        args: z.ZodObject<{
            address: z.ZodString;
            stakedIdentity: z.ZodString;
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
            address: string;
            stakedIdentity: string;
        }, {
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
            address: string;
            stakedIdentity: string;
        }>;
        result: z.ZodObject<{
            blockEndHeight: z.ZodNumber;
            refundNoteHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
            refundEffectiveHeight: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            blockEndHeight: number;
            refundNoteHash: Buffer;
            refundEffectiveHeight: number;
        }, {
            blockEndHeight: number;
            refundNoteHash: Buffer;
            refundEffectiveHeight: number;
        }>;
    };
    'Stake.signature': {
        args: z.ZodObject<{
            stakedIdentity: z.ZodString;
            signature: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
        }, "strip", z.ZodTypeAny, {
            signature: Buffer;
            stakedIdentity: string;
        }, {
            signature: Buffer;
            stakedIdentity: string;
        }>;
        result: z.ZodObject<{
            signature: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
            blockHeight: z.ZodNumber;
            rootIdentity: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            signature: Buffer;
            rootIdentity: string;
            blockHeight: number;
        }, {
            signature: Buffer;
            rootIdentity: string;
            blockHeight: number;
        }>;
    };
};
type IStakeApis = IZodSchemaToApiTypes<typeof StakeApiSchemas>;
export default IStakeApis;
