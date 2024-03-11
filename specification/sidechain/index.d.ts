/// <reference types="node" />
import { IZodHandlers, IZodSchemaToApiTypes } from '../utils/IZodApi';
declare const SidechainApiSchema: {
    'Ramp.audit': {
        args: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUndefined>>;
        result: import("zod").ZodObject<{
            auditDate: import("zod").ZodDate;
            usdcToArgonConversionRate: import("zod").ZodNumber;
            argonsInCirculation_e6: import("zod").ZodBigInt;
            usdcReserves_e6: import("zod").ZodBigInt;
            usdcReserveAddresses: import("zod").ZodArray<import("zod").ZodObject<{
                blockchain: import("zod").ZodString;
                blockchainNetwork: import("zod").ZodString;
                address: import("zod").ZodString;
                ownershipProof: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                address: string;
                blockchain: string;
                blockchainNetwork: string;
                ownershipProof: string;
            }, {
                address: string;
                blockchain: string;
                blockchainNetwork: string;
                ownershipProof: string;
            }>, "many">;
        }, "strip", import("zod").ZodTypeAny, {
            auditDate: Date;
            usdcToArgonConversionRate: number;
            argonsInCirculation_e6: bigint;
            usdcReserves_e6: bigint;
            usdcReserveAddresses: {
                address: string;
                blockchain: string;
                blockchainNetwork: string;
                ownershipProof: string;
            }[];
        }, {
            auditDate: Date;
            usdcToArgonConversionRate: number;
            argonsInCirculation_e6: bigint;
            usdcReserves_e6: bigint;
            usdcReserveAddresses: {
                address: string;
                blockchain: string;
                blockchainNetwork: string;
                ownershipProof: string;
            }[];
        }>;
    };
    'Ramp.createTransferInAddress': {
        args: import("zod").ZodObject<{
            blockchain: import("zod").ZodEnum<["ethereum", "polygon"]>;
            address: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            address: string;
            blockchain: "ethereum" | "polygon";
        }, {
            address: string;
            blockchain: "ethereum" | "polygon";
        }>;
        result: import("zod").ZodObject<{
            blockchainNetwork: import("zod").ZodString;
            address: import("zod").ZodString;
            expirationDate: import("zod").ZodDate;
        }, "strip", import("zod").ZodTypeAny, {
            address: string;
            blockchainNetwork: string;
            expirationDate: Date;
        }, {
            address: string;
            blockchainNetwork: string;
            expirationDate: Date;
        }>;
    };
    'Stake.settings': {
        args: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUndefined>>;
        result: import("zod").ZodObject<{
            centagons: import("zod").ZodEffects<import("zod").ZodBigInt, bigint, bigint>;
            rootIdentity: import("zod").ZodString;
            stakeAddress: import("zod").ZodString;
            stableBlockHeight: import("zod").ZodNumber;
            stableBlockHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
            currentBlockHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
            currentBlockHeight: import("zod").ZodNumber;
            refundBlockWindow: import("zod").ZodNumber;
        }, "strip", import("zod").ZodTypeAny, {
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
        args: import("zod").ZodObject<{
            note: import("zod").ZodObject<{
                toAddress: import("zod").ZodString;
                fromAddress: import("zod").ZodString;
                centagons: import("zod").ZodEffects<import("zod").ZodBigInt, bigint, bigint>;
                noteHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                type: import("zod").ZodNativeEnum<typeof import("../types/NoteType").default>;
                effectiveBlockHeight: import("zod").ZodOptional<import("zod").ZodNumber>;
                guaranteeBlockHeight: import("zod").ZodOptional<import("zod").ZodNumber>;
                timestamp: import("zod").ZodDate;
                signature: import("zod").ZodObject<{
                    signers: import("zod").ZodArray<import("zod").ZodObject<{
                        signature: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                        identity: import("zod").ZodString;
                        ownershipMerkleProofs: import("zod").ZodArray<import("zod").ZodObject<{
                            position: import("zod").ZodNativeEnum<typeof import("../types/IMerkleProof").MerklePosition>;
                            hash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                        }, "strip", import("zod").ZodTypeAny, {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }, {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }>, "many">;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    signatureSettings: import("zod").ZodObject<{
                        countRequired: import("zod").ZodNumber;
                        settingsMerkleProofs: import("zod").ZodArray<import("zod").ZodObject<{
                            position: import("zod").ZodNativeEnum<typeof import("../types/IMerkleProof").MerklePosition>;
                            hash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                        }, "strip", import("zod").ZodTypeAny, {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }, {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }>, "many">;
                        salt: import("zod").ZodOptional<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>>;
                        identityIndices: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodNumber, "many">>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                }, "strip", import("zod").ZodTypeAny, {
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
            }, "strip", import("zod").ZodTypeAny, {
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
            stakedIdentity: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
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
        result: import("zod").ZodObject<{
            signature: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
            blockHeight: import("zod").ZodNumber;
            rootIdentity: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
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
        args: import("zod").ZodObject<{
            address: import("zod").ZodString;
            stakedIdentity: import("zod").ZodString;
            signature: import("zod").ZodObject<{
                signers: import("zod").ZodArray<import("zod").ZodObject<{
                    signature: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    identity: import("zod").ZodString;
                    ownershipMerkleProofs: import("zod").ZodArray<import("zod").ZodObject<{
                        position: import("zod").ZodNativeEnum<typeof import("../types/IMerkleProof").MerklePosition>;
                        hash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    }, "strip", import("zod").ZodTypeAny, {
                        position: import("../types/IMerkleProof").MerklePosition;
                        hash: Buffer;
                    }, {
                        position: import("../types/IMerkleProof").MerklePosition;
                        hash: Buffer;
                    }>, "many">;
                }, "strip", import("zod").ZodTypeAny, {
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
                signatureSettings: import("zod").ZodObject<{
                    countRequired: import("zod").ZodNumber;
                    settingsMerkleProofs: import("zod").ZodArray<import("zod").ZodObject<{
                        position: import("zod").ZodNativeEnum<typeof import("../types/IMerkleProof").MerklePosition>;
                        hash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    }, "strip", import("zod").ZodTypeAny, {
                        position: import("../types/IMerkleProof").MerklePosition;
                        hash: Buffer;
                    }, {
                        position: import("../types/IMerkleProof").MerklePosition;
                        hash: Buffer;
                    }>, "many">;
                    salt: import("zod").ZodOptional<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>>;
                    identityIndices: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodNumber, "many">>;
                }, "strip", import("zod").ZodTypeAny, {
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
            }, "strip", import("zod").ZodTypeAny, {
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
        }, "strip", import("zod").ZodTypeAny, {
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
        result: import("zod").ZodObject<{
            blockEndHeight: import("zod").ZodNumber;
            refundNoteHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
            refundEffectiveHeight: import("zod").ZodNumber;
        }, "strip", import("zod").ZodTypeAny, {
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
        args: import("zod").ZodObject<{
            stakedIdentity: import("zod").ZodString;
            signature: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
        }, "strip", import("zod").ZodTypeAny, {
            signature: Buffer;
            stakedIdentity: string;
        }, {
            signature: Buffer;
            stakedIdentity: string;
        }>;
        result: import("zod").ZodObject<{
            signature: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
            blockHeight: import("zod").ZodNumber;
            rootIdentity: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            signature: Buffer;
            rootIdentity: string;
            blockHeight: number;
        }, {
            signature: Buffer;
            rootIdentity: string;
            blockHeight: number;
        }>;
    };
    'Note.get': {
        args: import("zod").ZodObject<{
            noteHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
        }, "strip", import("zod").ZodTypeAny, {
            noteHash: Buffer;
        }, {
            noteHash: Buffer;
        }>;
        result: import("zod").ZodObject<{
            note: import("zod").ZodObject<{
                toAddress: import("zod").ZodString;
                fromAddress: import("zod").ZodString;
                centagons: import("zod").ZodEffects<import("zod").ZodBigInt, bigint, bigint>;
                noteHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                type: import("zod").ZodNativeEnum<typeof import("../types/NoteType").default>;
                effectiveBlockHeight: import("zod").ZodOptional<import("zod").ZodNumber>;
                guaranteeBlockHeight: import("zod").ZodOptional<import("zod").ZodNumber>;
                timestamp: import("zod").ZodDate;
                signature: import("zod").ZodObject<{
                    signers: import("zod").ZodArray<import("zod").ZodObject<{
                        signature: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                        identity: import("zod").ZodString;
                        ownershipMerkleProofs: import("zod").ZodArray<import("zod").ZodObject<{
                            position: import("zod").ZodNativeEnum<typeof import("../types/IMerkleProof").MerklePosition>;
                            hash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                        }, "strip", import("zod").ZodTypeAny, {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }, {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }>, "many">;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    signatureSettings: import("zod").ZodObject<{
                        countRequired: import("zod").ZodNumber;
                        settingsMerkleProofs: import("zod").ZodArray<import("zod").ZodObject<{
                            position: import("zod").ZodNativeEnum<typeof import("../types/IMerkleProof").MerklePosition>;
                            hash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                        }, "strip", import("zod").ZodTypeAny, {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }, {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }>, "many">;
                        salt: import("zod").ZodOptional<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>>;
                        identityIndices: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodNumber, "many">>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                }, "strip", import("zod").ZodTypeAny, {
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
            }, "strip", import("zod").ZodTypeAny, {
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
        }, "strip", import("zod").ZodTypeAny, {
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
        args: import("zod").ZodObject<{
            note: import("zod").ZodObject<{
                toAddress: import("zod").ZodString;
                fromAddress: import("zod").ZodString;
                centagons: import("zod").ZodEffects<import("zod").ZodBigInt, bigint, bigint>;
                noteHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                type: import("zod").ZodNativeEnum<typeof import("../types/NoteType").default>;
                effectiveBlockHeight: import("zod").ZodOptional<import("zod").ZodNumber>;
                guaranteeBlockHeight: import("zod").ZodOptional<import("zod").ZodNumber>;
                timestamp: import("zod").ZodDate;
                signature: import("zod").ZodObject<{
                    signers: import("zod").ZodArray<import("zod").ZodObject<{
                        signature: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                        identity: import("zod").ZodString;
                        ownershipMerkleProofs: import("zod").ZodArray<import("zod").ZodObject<{
                            position: import("zod").ZodNativeEnum<typeof import("../types/IMerkleProof").MerklePosition>;
                            hash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                        }, "strip", import("zod").ZodTypeAny, {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }, {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }>, "many">;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    signatureSettings: import("zod").ZodObject<{
                        countRequired: import("zod").ZodNumber;
                        settingsMerkleProofs: import("zod").ZodArray<import("zod").ZodObject<{
                            position: import("zod").ZodNativeEnum<typeof import("../types/IMerkleProof").MerklePosition>;
                            hash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                        }, "strip", import("zod").ZodTypeAny, {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }, {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }>, "many">;
                        salt: import("zod").ZodOptional<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>>;
                        identityIndices: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodNumber, "many">>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                }, "strip", import("zod").ZodTypeAny, {
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
            }, "strip", import("zod").ZodTypeAny, {
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
        }, "strip", import("zod").ZodTypeAny, {
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
        result: import("zod").ZodObject<{
            accepted: import("zod").ZodBoolean;
        }, "strip", import("zod").ZodTypeAny, {
            accepted: boolean;
        }, {
            accepted: boolean;
        }>;
    };
    'MicronoteBatch.fund': {
        args: import("zod").ZodObject<{
            note: import("zod").ZodObject<{
                toAddress: import("zod").ZodString;
                fromAddress: import("zod").ZodString;
                centagons: import("zod").ZodEffects<import("zod").ZodBigInt, bigint, bigint>;
                noteHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                type: import("zod").ZodNativeEnum<typeof import("../types/NoteType").default>;
                effectiveBlockHeight: import("zod").ZodOptional<import("zod").ZodNumber>;
                guaranteeBlockHeight: import("zod").ZodOptional<import("zod").ZodNumber>;
                timestamp: import("zod").ZodDate;
                signature: import("zod").ZodObject<{
                    signers: import("zod").ZodArray<import("zod").ZodObject<{
                        signature: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                        identity: import("zod").ZodString;
                        ownershipMerkleProofs: import("zod").ZodArray<import("zod").ZodObject<{
                            position: import("zod").ZodNativeEnum<typeof import("../types/IMerkleProof").MerklePosition>;
                            hash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                        }, "strip", import("zod").ZodTypeAny, {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }, {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }>, "many">;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    signatureSettings: import("zod").ZodObject<{
                        countRequired: import("zod").ZodNumber;
                        settingsMerkleProofs: import("zod").ZodArray<import("zod").ZodObject<{
                            position: import("zod").ZodNativeEnum<typeof import("../types/IMerkleProof").MerklePosition>;
                            hash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                        }, "strip", import("zod").ZodTypeAny, {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }, {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }>, "many">;
                        salt: import("zod").ZodOptional<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>>;
                        identityIndices: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodNumber, "many">>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                }, "strip", import("zod").ZodTypeAny, {
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
            }, "strip", import("zod").ZodTypeAny, {
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
            batchSlug: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
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
        result: import("zod").ZodObject<{
            fundsId: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            fundsId: string;
        }, {
            fundsId: string;
        }>;
    };
    'MicronoteBatch.activeFunds': {
        args: import("zod").ZodObject<{
            batchSlug: import("zod").ZodString;
            address: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            address: string;
            batchSlug: string;
        }, {
            address: string;
            batchSlug: string;
        }>;
        result: import("zod").ZodArray<import("zod").ZodObject<{
            fundsId: import("zod").ZodString;
            microgonsRemaining: import("zod").ZodNumber;
            allowedRecipientAddresses: import("zod").ZodArray<import("zod").ZodString, "many">;
        }, "strip", import("zod").ZodTypeAny, {
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
        args: import("zod").ZodObject<{
            batchSlug: import("zod").ZodString;
            microgons: import("zod").ZodNumber;
            address: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            address: string;
            batchSlug: string;
            microgons: number;
        }, {
            address: string;
            batchSlug: string;
            microgons: number;
        }>;
        result: import("zod").ZodObject<{
            fundsId: import("zod").ZodString;
            microgonsRemaining: import("zod").ZodNumber;
            allowedRecipientAddresses: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
        }, "strip", import("zod").ZodTypeAny, {
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
        args: import("zod").ZodObject<{
            fundIds: import("zod").ZodArray<import("zod").ZodString, "many">;
            batchSlug: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            batchSlug: string;
            fundIds: string[];
        }, {
            batchSlug: string;
            fundIds: string[];
        }>;
        result: import("zod").ZodObject<{
            isBatchSettled: import("zod").ZodBoolean;
            settledTime: import("zod").ZodDate;
            settlements: import("zod").ZodArray<import("zod").ZodObject<{
                fundsId: import("zod").ZodString;
                fundedCentagons: import("zod").ZodEffects<import("zod").ZodBigInt, bigint, bigint>;
                settledCentagons: import("zod").ZodEffects<import("zod").ZodBigInt, bigint, bigint>;
            }, "strip", import("zod").ZodTypeAny, {
                fundsId: string;
                fundedCentagons: bigint;
                settledCentagons: bigint;
            }, {
                fundsId: string;
                fundedCentagons: bigint;
                settledCentagons: bigint;
            }>, "many">;
        }, "strip", import("zod").ZodTypeAny, {
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
    'Micronote.create': {
        args: import("zod").ZodObject<{
            batchSlug: import("zod").ZodString;
            address: import("zod").ZodString;
            microgons: import("zod").ZodNumber;
            fundsId: import("zod").ZodOptional<import("zod").ZodString>;
            signature: import("zod").ZodObject<{
                signers: import("zod").ZodArray<import("zod").ZodObject<{
                    signature: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    identity: import("zod").ZodString;
                    ownershipMerkleProofs: import("zod").ZodArray<import("zod").ZodObject<{
                        position: import("zod").ZodNativeEnum<typeof import("../types/IMerkleProof").MerklePosition>;
                        hash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    }, "strip", import("zod").ZodTypeAny, {
                        position: import("../types/IMerkleProof").MerklePosition;
                        hash: Buffer;
                    }, {
                        position: import("../types/IMerkleProof").MerklePosition;
                        hash: Buffer;
                    }>, "many">;
                }, "strip", import("zod").ZodTypeAny, {
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
                signatureSettings: import("zod").ZodObject<{
                    countRequired: import("zod").ZodNumber;
                    settingsMerkleProofs: import("zod").ZodArray<import("zod").ZodObject<{
                        position: import("zod").ZodNativeEnum<typeof import("../types/IMerkleProof").MerklePosition>;
                        hash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    }, "strip", import("zod").ZodTypeAny, {
                        position: import("../types/IMerkleProof").MerklePosition;
                        hash: Buffer;
                    }, {
                        position: import("../types/IMerkleProof").MerklePosition;
                        hash: Buffer;
                    }>, "many">;
                    salt: import("zod").ZodOptional<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>>;
                    identityIndices: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodNumber, "many">>;
                }, "strip", import("zod").ZodTypeAny, {
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
            }, "strip", import("zod").ZodTypeAny, {
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
            isAuditable: import("zod").ZodOptional<import("zod").ZodBoolean>;
        }, "strip", import("zod").ZodTypeAny, {
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
            batchSlug: string;
            microgons: number;
            fundsId?: string | undefined;
            isAuditable?: boolean | undefined;
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
            batchSlug: string;
            microgons: number;
            fundsId?: string | undefined;
            isAuditable?: boolean | undefined;
        }>;
        result: import("zod").ZodObject<{
            id: import("zod").ZodString;
            micronoteSignature: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
            blockHeight: import("zod").ZodNumber;
            fundsId: import("zod").ZodString;
            guaranteeBlockHeight: import("zod").ZodNumber;
            fundMicrogonsRemaining: import("zod").ZodNumber;
        }, "strip", import("zod").ZodTypeAny, {
            guaranteeBlockHeight: number;
            blockHeight: number;
            micronoteSignature: Buffer;
            fundsId: string;
            id: string;
            fundMicrogonsRemaining: number;
        }, {
            guaranteeBlockHeight: number;
            blockHeight: number;
            micronoteSignature: Buffer;
            fundsId: string;
            id: string;
            fundMicrogonsRemaining: number;
        }>;
    };
    'Micronote.hold': {
        args: import("zod").ZodObject<{
            batchSlug: import("zod").ZodString;
            id: import("zod").ZodString;
            identity: import("zod").ZodString;
            signature: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
            microgons: import("zod").ZodNumber;
            holdAuthorizationCode: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            signature: Buffer;
            identity: string;
            batchSlug: string;
            microgons: number;
            id: string;
            holdAuthorizationCode?: string | undefined;
        }, {
            signature: Buffer;
            identity: string;
            batchSlug: string;
            microgons: number;
            id: string;
            holdAuthorizationCode?: string | undefined;
        }>;
        result: import("zod").ZodObject<{
            holdAuthorizationCode: import("zod").ZodOptional<import("zod").ZodString>;
            holdId: import("zod").ZodOptional<import("zod").ZodString>;
            accepted: import("zod").ZodBoolean;
            remainingBalance: import("zod").ZodNumber;
            currentBlockHeight: import("zod").ZodNumber;
            currentBlockHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
        }, "strip", import("zod").ZodTypeAny, {
            currentBlockHash: Buffer;
            currentBlockHeight: number;
            accepted: boolean;
            remainingBalance: number;
            holdAuthorizationCode?: string | undefined;
            holdId?: string | undefined;
        }, {
            currentBlockHash: Buffer;
            currentBlockHeight: number;
            accepted: boolean;
            remainingBalance: number;
            holdAuthorizationCode?: string | undefined;
            holdId?: string | undefined;
        }>;
    };
    'Micronote.settle': {
        args: import("zod").ZodObject<{
            batchSlug: import("zod").ZodString;
            id: import("zod").ZodString;
            identity: import("zod").ZodString;
            tokenAllocation: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>;
            signature: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
            holdId: import("zod").ZodOptional<import("zod").ZodString>;
            isFinal: import("zod").ZodBoolean;
        }, "strip", import("zod").ZodTypeAny, {
            signature: Buffer;
            identity: string;
            batchSlug: string;
            id: string;
            tokenAllocation: Record<string, number>;
            isFinal: boolean;
            holdId?: string | undefined;
        }, {
            signature: Buffer;
            identity: string;
            batchSlug: string;
            id: string;
            tokenAllocation: Record<string, number>;
            isFinal: boolean;
            holdId?: string | undefined;
        }>;
        result: import("zod").ZodObject<{
            finalCost: import("zod").ZodOptional<import("zod").ZodNumber>;
        }, "strip", import("zod").ZodTypeAny, {
            finalCost?: number | undefined;
        }, {
            finalCost?: number | undefined;
        }>;
    };
    'FundingTransfer.status': {
        args: import("zod").ZodObject<{
            noteHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
        }, "strip", import("zod").ZodTypeAny, {
            noteHash: Buffer;
        }, {
            noteHash: Buffer;
        }>;
        result: import("zod").ZodObject<{
            transactionHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
            currentBlockHeight: import("zod").ZodNumber;
            blocks: import("zod").ZodArray<import("zod").ZodObject<{
                blockHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                blockHeight: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                blockHeight: number;
                blockHash: Buffer;
            }, {
                blockHeight: number;
                blockHash: Buffer;
            }>, "many">;
        }, "strip", import("zod").ZodTypeAny, {
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
        args: import("zod").ZodObject<{}, "strip", import("zod").ZodTypeAny, {}, {}>;
        result: import("zod").ZodObject<{
            transferOutKey: import("zod").ZodString;
            transferInKeys: import("zod").ZodArray<import("zod").ZodString, "many">;
        }, "strip", import("zod").ZodTypeAny, {
            transferOutKey: string;
            transferInKeys: string[];
        }, {
            transferOutKey: string;
            transferInKeys: string[];
        }>;
    };
    'FundingTransfer.out': {
        args: import("zod").ZodObject<{
            note: import("zod").ZodObject<{
                toAddress: import("zod").ZodString;
                fromAddress: import("zod").ZodString;
                centagons: import("zod").ZodEffects<import("zod").ZodBigInt, bigint, bigint>;
                noteHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                type: import("zod").ZodNativeEnum<typeof import("../types/NoteType").default>;
                effectiveBlockHeight: import("zod").ZodOptional<import("zod").ZodNumber>;
                guaranteeBlockHeight: import("zod").ZodOptional<import("zod").ZodNumber>;
                timestamp: import("zod").ZodDate;
                signature: import("zod").ZodObject<{
                    signers: import("zod").ZodArray<import("zod").ZodObject<{
                        signature: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                        identity: import("zod").ZodString;
                        ownershipMerkleProofs: import("zod").ZodArray<import("zod").ZodObject<{
                            position: import("zod").ZodNativeEnum<typeof import("../types/IMerkleProof").MerklePosition>;
                            hash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                        }, "strip", import("zod").ZodTypeAny, {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }, {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }>, "many">;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    signatureSettings: import("zod").ZodObject<{
                        countRequired: import("zod").ZodNumber;
                        settingsMerkleProofs: import("zod").ZodArray<import("zod").ZodObject<{
                            position: import("zod").ZodNativeEnum<typeof import("../types/IMerkleProof").MerklePosition>;
                            hash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                        }, "strip", import("zod").ZodTypeAny, {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }, {
                            position: import("../types/IMerkleProof").MerklePosition;
                            hash: Buffer;
                        }>, "many">;
                        salt: import("zod").ZodOptional<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>>;
                        identityIndices: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodNumber, "many">>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                }, "strip", import("zod").ZodTypeAny, {
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
            }, "strip", import("zod").ZodTypeAny, {
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
        }, "strip", import("zod").ZodTypeAny, {
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
        result: import("zod").ZodObject<{
            noteHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
            currentBlockHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
        }, "strip", import("zod").ZodTypeAny, {
            noteHash: Buffer;
            currentBlockHash: Buffer;
        }, {
            noteHash: Buffer;
            currentBlockHash: Buffer;
        }>;
    };
    'Address.getBalance': {
        args: import("zod").ZodObject<{
            address: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>;
        result: import("zod").ZodObject<{
            balance: import("zod").ZodBigInt;
        }, "strip", import("zod").ZodTypeAny, {
            balance: bigint;
        }, {
            balance: bigint;
        }>;
    };
    'Address.register': {
        args: import("zod").ZodObject<{
            address: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>;
        result: import("zod").ZodObject<{
            success: import("zod").ZodBoolean;
        }, "strip", import("zod").ZodTypeAny, {
            success: boolean;
        }, {
            success: boolean;
        }>;
    };
    'Sidechain.settings': {
        args: import("zod").ZodObject<{
            identity: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        }, "strip", import("zod").ZodTypeAny, {
            identity?: string | null | undefined;
        }, {
            identity?: string | null | undefined;
        }>;
        result: import("zod").ZodObject<{
            version: import("zod").ZodString;
            rootIdentities: import("zod").ZodArray<import("zod").ZodString, "many">;
            identityProofSignatures: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>, "many">>;
            latestBlockSettings: import("zod").ZodObject<{
                xoredCandidateDistance: import("zod").ZodObject<{
                    powerOf2: import("zod").ZodNumber;
                    multiplierE6: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, "strip", import("zod").ZodTypeAny, {
                    powerOf2: number;
                    multiplierE6?: number | undefined;
                }, {
                    powerOf2: number;
                    multiplierE6?: number | undefined;
                }>;
                datum: import("zod").ZodObject<{
                    xoredCandidatesMinimum: import("zod").ZodNumber;
                    secondPingPercent: import("zod").ZodNumber;
                    auditorsCount: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
                    xoredCandidatesMinimum: number;
                    secondPingPercent: number;
                    auditorsCount: number;
                }, {
                    xoredCandidatesMinimum: number;
                    secondPingPercent: number;
                    auditorsCount: number;
                }>;
                networkNodes: import("zod").ZodNumber;
                bitSamplingsInBlock: import("zod").ZodNumber;
                bitSamplingBlockAge: import("zod").ZodNumber;
                blockHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                nextLinkTarget: import("zod").ZodObject<{
                    powerOf2: import("zod").ZodNumber;
                    multiplierE6: import("zod").ZodOptional<import("zod").ZodNumber>;
                }, "strip", import("zod").ZodTypeAny, {
                    powerOf2: number;
                    multiplierE6?: number | undefined;
                }, {
                    powerOf2: number;
                    multiplierE6?: number | undefined;
                }>;
                height: import("zod").ZodNumber;
                sidechains: import("zod").ZodArray<import("zod").ZodObject<{
                    url: import("zod").ZodString;
                    rootIdentity: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    rootIdentity: string;
                    url: string;
                }, {
                    rootIdentity: string;
                    url: string;
                }>, "many">;
                minimumMicronoteBurnPercent: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                height: number;
                nextLinkTarget: {
                    powerOf2: number;
                    multiplierE6?: number | undefined;
                };
                xoredCandidateDistance: {
                    powerOf2: number;
                    multiplierE6?: number | undefined;
                };
                datum: {
                    xoredCandidatesMinimum: number;
                    secondPingPercent: number;
                    auditorsCount: number;
                };
                networkNodes: number;
                bitSamplingsInBlock: number;
                bitSamplingBlockAge: number;
                blockHash: Buffer;
                sidechains: {
                    rootIdentity: string;
                    url: string;
                }[];
                minimumMicronoteBurnPercent: number;
            }, {
                height: number;
                nextLinkTarget: {
                    powerOf2: number;
                    multiplierE6?: number | undefined;
                };
                xoredCandidateDistance: {
                    powerOf2: number;
                    multiplierE6?: number | undefined;
                };
                datum: {
                    xoredCandidatesMinimum: number;
                    secondPingPercent: number;
                    auditorsCount: number;
                };
                networkNodes: number;
                bitSamplingsInBlock: number;
                bitSamplingBlockAge: number;
                blockHash: Buffer;
                sidechains: {
                    rootIdentity: string;
                    url: string;
                }[];
                minimumMicronoteBurnPercent: number;
            }>;
            settlementFeeMicrogons: import("zod").ZodNumber;
            batchDurationMinutes: import("zod").ZodNumber;
        }, "strip", import("zod").ZodTypeAny, {
            version: string;
            rootIdentities: string[];
            latestBlockSettings: {
                height: number;
                nextLinkTarget: {
                    powerOf2: number;
                    multiplierE6?: number | undefined;
                };
                xoredCandidateDistance: {
                    powerOf2: number;
                    multiplierE6?: number | undefined;
                };
                datum: {
                    xoredCandidatesMinimum: number;
                    secondPingPercent: number;
                    auditorsCount: number;
                };
                networkNodes: number;
                bitSamplingsInBlock: number;
                bitSamplingBlockAge: number;
                blockHash: Buffer;
                sidechains: {
                    rootIdentity: string;
                    url: string;
                }[];
                minimumMicronoteBurnPercent: number;
            };
            settlementFeeMicrogons: number;
            batchDurationMinutes: number;
            identityProofSignatures?: Buffer[] | undefined;
        }, {
            version: string;
            rootIdentities: string[];
            latestBlockSettings: {
                height: number;
                nextLinkTarget: {
                    powerOf2: number;
                    multiplierE6?: number | undefined;
                };
                xoredCandidateDistance: {
                    powerOf2: number;
                    multiplierE6?: number | undefined;
                };
                datum: {
                    xoredCandidatesMinimum: number;
                    secondPingPercent: number;
                    auditorsCount: number;
                };
                networkNodes: number;
                bitSamplingsInBlock: number;
                bitSamplingBlockAge: number;
                blockHash: Buffer;
                sidechains: {
                    rootIdentity: string;
                    url: string;
                }[];
                minimumMicronoteBurnPercent: number;
            };
            settlementFeeMicrogons: number;
            batchDurationMinutes: number;
            identityProofSignatures?: Buffer[] | undefined;
        }>;
    };
    'Sidechain.audit': {
        args: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUndefined>>;
        result: import("zod").ZodObject<{
            auditDate: import("zod").ZodDate;
            argonsInCirculation_e2: import("zod").ZodBigInt;
            argonsBurnedYesterday_e2: import("zod").ZodBigInt;
            argonsBurnedRolling30DayAverage_e2: import("zod").ZodBigInt;
        }, "strip", import("zod").ZodTypeAny, {
            auditDate: Date;
            argonsInCirculation_e2: bigint;
            argonsBurnedYesterday_e2: bigint;
            argonsBurnedRolling30DayAverage_e2: bigint;
        }, {
            auditDate: Date;
            argonsInCirculation_e2: bigint;
            argonsBurnedYesterday_e2: bigint;
            argonsBurnedRolling30DayAverage_e2: bigint;
        }>;
    };
    'Sidechain.openBatches': {
        args: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUndefined>>;
        result: import("zod").ZodObject<{
            micronote: import("zod").ZodArray<import("zod").ZodObject<{
                batchHost: import("zod").ZodString;
                batchSlug: import("zod").ZodString;
                plannedClosingTime: import("zod").ZodDate;
                stopNewNotesTime: import("zod").ZodDate;
                minimumFundingCentagons: import("zod").ZodEffects<import("zod").ZodBigInt, bigint, bigint>;
                micronoteBatchIdentity: import("zod").ZodString;
                micronoteBatchAddress: import("zod").ZodString;
                sidechainIdentity: import("zod").ZodString;
                sidechainValidationSignature: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
            }, "strip", import("zod").ZodTypeAny, {
                micronoteBatchIdentity: string;
                batchHost: string;
                batchSlug: string;
                plannedClosingTime: Date;
                stopNewNotesTime: Date;
                minimumFundingCentagons: bigint;
                micronoteBatchAddress: string;
                sidechainIdentity: string;
                sidechainValidationSignature: Buffer;
            }, {
                micronoteBatchIdentity: string;
                batchHost: string;
                batchSlug: string;
                plannedClosingTime: Date;
                stopNewNotesTime: Date;
                minimumFundingCentagons: bigint;
                micronoteBatchAddress: string;
                sidechainIdentity: string;
                sidechainValidationSignature: Buffer;
            }>, "many">;
        }, "strip", import("zod").ZodTypeAny, {
            micronote: {
                micronoteBatchIdentity: string;
                batchHost: string;
                batchSlug: string;
                plannedClosingTime: Date;
                stopNewNotesTime: Date;
                minimumFundingCentagons: bigint;
                micronoteBatchAddress: string;
                sidechainIdentity: string;
                sidechainValidationSignature: Buffer;
            }[];
        }, {
            micronote: {
                micronoteBatchIdentity: string;
                batchHost: string;
                batchSlug: string;
                plannedClosingTime: Date;
                stopNewNotesTime: Date;
                minimumFundingCentagons: bigint;
                micronoteBatchAddress: string;
                sidechainIdentity: string;
                sidechainValidationSignature: Buffer;
            }[];
        }>;
    };
};
export type ISidechainApiTypes = IZodSchemaToApiTypes<typeof SidechainApiSchema>;
export type ISidechainApis = IZodHandlers<typeof SidechainApiSchema>;
export default SidechainApiSchema;
