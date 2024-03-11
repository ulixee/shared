/// <reference types="node" />
import { z } from 'zod';
export declare const BlockSchema: z.ZodObject<{
    header: z.ZodObject<{
        hash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
        version: z.ZodString;
        height: z.ZodNumber;
        linkNonce: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
        prevBlockHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
        nextLinkTarget: z.ZodObject<{
            powerOf2: z.ZodNumber;
            multiplierE6: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            powerOf2: number;
            multiplierE6?: number | undefined;
        }, {
            powerOf2: number;
            multiplierE6?: number | undefined;
        }>;
        time: z.ZodDate;
        stableMerkleRoot: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
        sharesMerkleRoot: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
        coinagesHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
        bondCentagonsCreated: z.ZodEffects<z.ZodBigInt, bigint, bigint>;
        stableCoinUSDCents: z.ZodNumber;
        stableCoinVolume: z.ZodNumber;
        datumSummaryHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
        sampledBitsHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
        xoredCandidateDistance: z.ZodObject<{
            powerOf2: z.ZodNumber;
            multiplierE6: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            powerOf2: number;
            multiplierE6?: number | undefined;
        }, {
            powerOf2: number;
            multiplierE6?: number | undefined;
        }>;
        xoredCandidateAverage: z.ZodNumber;
        sidechainChangesHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
        sidechainSnapshotsHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
    }, "strip", z.ZodTypeAny, {
        hash: Buffer;
        version: string;
        time: Date;
        height: number;
        linkNonce: Buffer;
        prevBlockHash: Buffer;
        nextLinkTarget: {
            powerOf2: number;
            multiplierE6?: number | undefined;
        };
        stableMerkleRoot: Buffer;
        sharesMerkleRoot: Buffer;
        coinagesHash: Buffer;
        bondCentagonsCreated: bigint;
        stableCoinUSDCents: number;
        stableCoinVolume: number;
        datumSummaryHash: Buffer;
        sampledBitsHash: Buffer;
        xoredCandidateDistance: {
            powerOf2: number;
            multiplierE6?: number | undefined;
        };
        xoredCandidateAverage: number;
        sidechainChangesHash: Buffer;
        sidechainSnapshotsHash: Buffer;
    }, {
        hash: Buffer;
        version: string;
        time: Date;
        height: number;
        linkNonce: Buffer;
        prevBlockHash: Buffer;
        nextLinkTarget: {
            powerOf2: number;
            multiplierE6?: number | undefined;
        };
        stableMerkleRoot: Buffer;
        sharesMerkleRoot: Buffer;
        coinagesHash: Buffer;
        bondCentagonsCreated: bigint;
        stableCoinUSDCents: number;
        stableCoinVolume: number;
        datumSummaryHash: Buffer;
        sampledBitsHash: Buffer;
        xoredCandidateDistance: {
            powerOf2: number;
            multiplierE6?: number | undefined;
        };
        xoredCandidateAverage: number;
        sidechainChangesHash: Buffer;
        sidechainSnapshotsHash: Buffer;
    }>;
    stableLedger: z.ZodArray<z.ZodObject<{
        transactionHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
        version: z.ZodString;
        time: z.ZodDate;
        type: z.ZodNativeEnum<typeof import("./TransactionType").default>;
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
        type: import("./TransactionType").default;
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
        type: import("./TransactionType").default;
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
    }>, "many">;
    sharesLedger: z.ZodArray<z.ZodObject<{
        transactionHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
        version: z.ZodString;
        time: z.ZodDate;
        type: z.ZodNativeEnum<typeof import("./TransactionType").default>;
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
        type: import("./TransactionType").default;
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
        type: import("./TransactionType").default;
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
    }>, "many">;
    coinages: z.ZodArray<z.ZodObject<{
        type: z.ZodNativeEnum<typeof import("./CoinageType").default>;
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
        type: import("./CoinageType").default;
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
        type: import("./CoinageType").default;
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
    }>, "many">;
    datumSummary: z.ZodObject<{
        identity: z.ZodString;
        blockHeight: z.ZodNumber;
        averageXoredCandidates: z.ZodNumber;
        datumsPerMicronoteBatch: z.ZodArray<z.ZodObject<{
            micronoteBatchUrl: z.ZodString;
            micronoteBatchIdentity: z.ZodString;
            micronoteIdsHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
            micronotesCount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            micronoteBatchUrl: string;
            micronoteBatchIdentity: string;
            micronoteIdsHash: Buffer;
            micronotesCount: number;
        }, {
            micronoteBatchUrl: string;
            micronoteBatchIdentity: string;
            micronoteIdsHash: Buffer;
            micronotesCount: number;
        }>, "many">;
        webhitsClaimAddresses: z.ZodArray<z.ZodObject<{
            viewOfTruthHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
            addressCounts: z.ZodArray<z.ZodObject<{
                claimAddress: z.ZodString;
                count: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                claimAddress: string;
                count: number;
            }, {
                claimAddress: string;
                count: number;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            viewOfTruthHash: Buffer;
            addressCounts: {
                claimAddress: string;
                count: number;
            }[];
        }, {
            viewOfTruthHash: Buffer;
            addressCounts: {
                claimAddress: string;
                count: number;
            }[];
        }>, "many">;
        signature: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
    }, "strip", z.ZodTypeAny, {
        signature: Buffer;
        identity: string;
        blockHeight: number;
        averageXoredCandidates: number;
        datumsPerMicronoteBatch: {
            micronoteBatchUrl: string;
            micronoteBatchIdentity: string;
            micronoteIdsHash: Buffer;
            micronotesCount: number;
        }[];
        webhitsClaimAddresses: {
            viewOfTruthHash: Buffer;
            addressCounts: {
                claimAddress: string;
                count: number;
            }[];
        }[];
    }, {
        signature: Buffer;
        identity: string;
        blockHeight: number;
        averageXoredCandidates: number;
        datumsPerMicronoteBatch: {
            micronoteBatchUrl: string;
            micronoteBatchIdentity: string;
            micronoteIdsHash: Buffer;
            micronotesCount: number;
        }[];
        webhitsClaimAddresses: {
            viewOfTruthHash: Buffer;
            addressCounts: {
                claimAddress: string;
                count: number;
            }[];
        }[];
    }>;
    bitSampling: z.ZodObject<{
        bitDatumHistories: z.ZodArray<z.ZodObject<{
            identity: z.ZodString;
            blockHeight: z.ZodNumber;
            averageXoredCandidates: z.ZodNumber;
            datumsPerMicronoteBatch: z.ZodArray<z.ZodObject<{
                micronoteBatchUrl: z.ZodString;
                micronoteBatchIdentity: z.ZodString;
                micronoteIdsHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
                micronotesCount: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                micronoteBatchUrl: string;
                micronoteBatchIdentity: string;
                micronoteIdsHash: Buffer;
                micronotesCount: number;
            }, {
                micronoteBatchUrl: string;
                micronoteBatchIdentity: string;
                micronoteIdsHash: Buffer;
                micronotesCount: number;
            }>, "many">;
            webhitsClaimAddresses: z.ZodArray<z.ZodObject<{
                viewOfTruthHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
                addressCounts: z.ZodArray<z.ZodObject<{
                    claimAddress: z.ZodString;
                    count: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    claimAddress: string;
                    count: number;
                }, {
                    claimAddress: string;
                    count: number;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                viewOfTruthHash: Buffer;
                addressCounts: {
                    claimAddress: string;
                    count: number;
                }[];
            }, {
                viewOfTruthHash: Buffer;
                addressCounts: {
                    claimAddress: string;
                    count: number;
                }[];
            }>, "many">;
            signature: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
        }, "strip", z.ZodTypeAny, {
            signature: Buffer;
            identity: string;
            blockHeight: number;
            averageXoredCandidates: number;
            datumsPerMicronoteBatch: {
                micronoteBatchUrl: string;
                micronoteBatchIdentity: string;
                micronoteIdsHash: Buffer;
                micronotesCount: number;
            }[];
            webhitsClaimAddresses: {
                viewOfTruthHash: Buffer;
                addressCounts: {
                    claimAddress: string;
                    count: number;
                }[];
            }[];
        }, {
            signature: Buffer;
            identity: string;
            blockHeight: number;
            averageXoredCandidates: number;
            datumsPerMicronoteBatch: {
                micronoteBatchUrl: string;
                micronoteBatchIdentity: string;
                micronoteIdsHash: Buffer;
                micronotesCount: number;
            }[];
            webhitsClaimAddresses: {
                viewOfTruthHash: Buffer;
                addressCounts: {
                    claimAddress: string;
                    count: number;
                }[];
            }[];
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        bitDatumHistories: {
            signature: Buffer;
            identity: string;
            blockHeight: number;
            averageXoredCandidates: number;
            datumsPerMicronoteBatch: {
                micronoteBatchUrl: string;
                micronoteBatchIdentity: string;
                micronoteIdsHash: Buffer;
                micronotesCount: number;
            }[];
            webhitsClaimAddresses: {
                viewOfTruthHash: Buffer;
                addressCounts: {
                    claimAddress: string;
                    count: number;
                }[];
            }[];
        }[];
    }, {
        bitDatumHistories: {
            signature: Buffer;
            identity: string;
            blockHeight: number;
            averageXoredCandidates: number;
            datumsPerMicronoteBatch: {
                micronoteBatchUrl: string;
                micronoteBatchIdentity: string;
                micronoteIdsHash: Buffer;
                micronotesCount: number;
            }[];
            webhitsClaimAddresses: {
                viewOfTruthHash: Buffer;
                addressCounts: {
                    claimAddress: string;
                    count: number;
                }[];
            }[];
        }[];
    }>;
    sidechainGovernance: z.ZodObject<{
        authorizedSidechains: z.ZodArray<z.ZodObject<{
            sidechainHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
            rootIdentity: z.ZodString;
            url: z.ZodString;
            transfer: z.ZodOptional<z.ZodArray<z.ZodObject<{
                sidechainHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
                transferSignature: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
            }, "strip", z.ZodTypeAny, {
                sidechainHash: Buffer;
                transferSignature: Buffer;
            }, {
                sidechainHash: Buffer;
                transferSignature: Buffer;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            rootIdentity: string;
            sidechainHash: Buffer;
            url: string;
            transfer?: {
                sidechainHash: Buffer;
                transferSignature: Buffer;
            }[] | undefined;
        }, {
            rootIdentity: string;
            sidechainHash: Buffer;
            url: string;
            transfer?: {
                sidechainHash: Buffer;
                transferSignature: Buffer;
            }[] | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        authorizedSidechains: {
            rootIdentity: string;
            sidechainHash: Buffer;
            url: string;
            transfer?: {
                sidechainHash: Buffer;
                transferSignature: Buffer;
            }[] | undefined;
        }[];
    }, {
        authorizedSidechains: {
            rootIdentity: string;
            sidechainHash: Buffer;
            url: string;
            transfer?: {
                sidechainHash: Buffer;
                transferSignature: Buffer;
            }[] | undefined;
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    header: {
        hash: Buffer;
        version: string;
        time: Date;
        height: number;
        linkNonce: Buffer;
        prevBlockHash: Buffer;
        nextLinkTarget: {
            powerOf2: number;
            multiplierE6?: number | undefined;
        };
        stableMerkleRoot: Buffer;
        sharesMerkleRoot: Buffer;
        coinagesHash: Buffer;
        bondCentagonsCreated: bigint;
        stableCoinUSDCents: number;
        stableCoinVolume: number;
        datumSummaryHash: Buffer;
        sampledBitsHash: Buffer;
        xoredCandidateDistance: {
            powerOf2: number;
            multiplierE6?: number | undefined;
        };
        xoredCandidateAverage: number;
        sidechainChangesHash: Buffer;
        sidechainSnapshotsHash: Buffer;
    };
    stableLedger: {
        type: import("./TransactionType").default;
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
    }[];
    sharesLedger: {
        type: import("./TransactionType").default;
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
    }[];
    coinages: {
        type: import("./CoinageType").default;
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
    }[];
    datumSummary: {
        signature: Buffer;
        identity: string;
        blockHeight: number;
        averageXoredCandidates: number;
        datumsPerMicronoteBatch: {
            micronoteBatchUrl: string;
            micronoteBatchIdentity: string;
            micronoteIdsHash: Buffer;
            micronotesCount: number;
        }[];
        webhitsClaimAddresses: {
            viewOfTruthHash: Buffer;
            addressCounts: {
                claimAddress: string;
                count: number;
            }[];
        }[];
    };
    bitSampling: {
        bitDatumHistories: {
            signature: Buffer;
            identity: string;
            blockHeight: number;
            averageXoredCandidates: number;
            datumsPerMicronoteBatch: {
                micronoteBatchUrl: string;
                micronoteBatchIdentity: string;
                micronoteIdsHash: Buffer;
                micronotesCount: number;
            }[];
            webhitsClaimAddresses: {
                viewOfTruthHash: Buffer;
                addressCounts: {
                    claimAddress: string;
                    count: number;
                }[];
            }[];
        }[];
    };
    sidechainGovernance: {
        authorizedSidechains: {
            rootIdentity: string;
            sidechainHash: Buffer;
            url: string;
            transfer?: {
                sidechainHash: Buffer;
                transferSignature: Buffer;
            }[] | undefined;
        }[];
    };
}, {
    header: {
        hash: Buffer;
        version: string;
        time: Date;
        height: number;
        linkNonce: Buffer;
        prevBlockHash: Buffer;
        nextLinkTarget: {
            powerOf2: number;
            multiplierE6?: number | undefined;
        };
        stableMerkleRoot: Buffer;
        sharesMerkleRoot: Buffer;
        coinagesHash: Buffer;
        bondCentagonsCreated: bigint;
        stableCoinUSDCents: number;
        stableCoinVolume: number;
        datumSummaryHash: Buffer;
        sampledBitsHash: Buffer;
        xoredCandidateDistance: {
            powerOf2: number;
            multiplierE6?: number | undefined;
        };
        xoredCandidateAverage: number;
        sidechainChangesHash: Buffer;
        sidechainSnapshotsHash: Buffer;
    };
    stableLedger: {
        type: import("./TransactionType").default;
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
    }[];
    sharesLedger: {
        type: import("./TransactionType").default;
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
    }[];
    coinages: {
        type: import("./CoinageType").default;
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
    }[];
    datumSummary: {
        signature: Buffer;
        identity: string;
        blockHeight: number;
        averageXoredCandidates: number;
        datumsPerMicronoteBatch: {
            micronoteBatchUrl: string;
            micronoteBatchIdentity: string;
            micronoteIdsHash: Buffer;
            micronotesCount: number;
        }[];
        webhitsClaimAddresses: {
            viewOfTruthHash: Buffer;
            addressCounts: {
                claimAddress: string;
                count: number;
            }[];
        }[];
    };
    bitSampling: {
        bitDatumHistories: {
            signature: Buffer;
            identity: string;
            blockHeight: number;
            averageXoredCandidates: number;
            datumsPerMicronoteBatch: {
                micronoteBatchUrl: string;
                micronoteBatchIdentity: string;
                micronoteIdsHash: Buffer;
                micronotesCount: number;
            }[];
            webhitsClaimAddresses: {
                viewOfTruthHash: Buffer;
                addressCounts: {
                    claimAddress: string;
                    count: number;
                }[];
            }[];
        }[];
    };
    sidechainGovernance: {
        authorizedSidechains: {
            rootIdentity: string;
            sidechainHash: Buffer;
            url: string;
            transfer?: {
                sidechainHash: Buffer;
                transferSignature: Buffer;
            }[] | undefined;
        }[];
    };
}>;
type IBlock = z.infer<typeof BlockSchema>;
export default IBlock;
