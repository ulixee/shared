/// <reference types="node" />
import { z } from 'zod';
import { IZodSchemaToApiTypes } from '../utils/IZodApi';
import BlockError from '../types/BlockError';
import { LedgerType } from '../index';
export declare const BlockApiSchemas: {
    'Block.create': {
        args: z.ZodObject<{
            prevBlockHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
            payoutAddress: z.ZodString;
            linkNonce: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
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
        }, "strip", z.ZodTypeAny, {
            linkNonce: Buffer;
            prevBlockHash: Buffer;
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
            payoutAddress: string;
        }, {
            linkNonce: Buffer;
            prevBlockHash: Buffer;
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
            payoutAddress: string;
        }>;
        result: z.ZodObject<{
            success: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            success: boolean;
        }, {
            success: boolean;
        }>;
    };
    'Block.created': {
        args: z.ZodObject<{
            block: z.ZodObject<{
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
                    type: z.ZodNativeEnum<typeof import("../types/TransactionType").default>;
                    expiresAtBlockHeight: z.ZodNumber;
                    sources: z.ZodArray<z.ZodObject<{
                        sourceTransactionHash: z.ZodOptional<z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>>;
                        sourceOutputIndex: z.ZodOptional<z.ZodNumber>;
                        sourceAddressSignatureSettings: z.ZodObject<{
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
                        sourceAddressSigners: z.ZodArray<z.ZodObject<{
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
                        sourceLedger: z.ZodNativeEnum<typeof LedgerType>;
                        blockClaimHeight: z.ZodOptional<z.ZodNumber>;
                        coinageHash: z.ZodOptional<z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>>;
                    }, "strip", z.ZodTypeAny, {
                        sourceAddressSignatureSettings: {
                            countRequired: number;
                            settingsMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
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
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                        }[];
                        sourceLedger: LedgerType;
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
                    type: import("../types/TransactionType").default;
                    transactionHash: Buffer;
                    version: string;
                    time: Date;
                    expiresAtBlockHeight: number;
                    sources: {
                        sourceAddressSignatureSettings: {
                            countRequired: number;
                            settingsMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                        }[];
                        sourceLedger: LedgerType;
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
                    type: import("../types/TransactionType").default;
                    transactionHash: Buffer;
                    version: string;
                    time: Date;
                    expiresAtBlockHeight: number;
                    sources: {
                        sourceAddressSignatureSettings: {
                            countRequired: number;
                            settingsMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                        }[];
                        sourceLedger: LedgerType;
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
                    type: z.ZodNativeEnum<typeof import("../types/TransactionType").default>;
                    expiresAtBlockHeight: z.ZodNumber;
                    sources: z.ZodArray<z.ZodObject<{
                        sourceTransactionHash: z.ZodOptional<z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>>;
                        sourceOutputIndex: z.ZodOptional<z.ZodNumber>;
                        sourceAddressSignatureSettings: z.ZodObject<{
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
                        sourceAddressSigners: z.ZodArray<z.ZodObject<{
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
                        sourceLedger: z.ZodNativeEnum<typeof LedgerType>;
                        blockClaimHeight: z.ZodOptional<z.ZodNumber>;
                        coinageHash: z.ZodOptional<z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>>;
                    }, "strip", z.ZodTypeAny, {
                        sourceAddressSignatureSettings: {
                            countRequired: number;
                            settingsMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
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
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                        }[];
                        sourceLedger: LedgerType;
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
                    type: import("../types/TransactionType").default;
                    transactionHash: Buffer;
                    version: string;
                    time: Date;
                    expiresAtBlockHeight: number;
                    sources: {
                        sourceAddressSignatureSettings: {
                            countRequired: number;
                            settingsMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                        }[];
                        sourceLedger: LedgerType;
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
                    type: import("../types/TransactionType").default;
                    transactionHash: Buffer;
                    version: string;
                    time: Date;
                    expiresAtBlockHeight: number;
                    sources: {
                        sourceAddressSignatureSettings: {
                            countRequired: number;
                            settingsMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                        }[];
                        sourceLedger: LedgerType;
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
                    type: z.ZodNativeEnum<typeof import("../types/CoinageType").default>;
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
                        coinageHash: Buffer;
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
                        coinageHash: Buffer;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    type: import("../types/CoinageType").default;
                    hash: Buffer;
                    centagons: bigint;
                    transfer: {
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
                        coinageHash: Buffer;
                    };
                    blockHeight: number;
                    minimumClaimCentagons: bigint;
                    expirationBlockHeight: number;
                    oldestClaimHeight: number;
                    grantAddress: string;
                }, {
                    type: import("../types/CoinageType").default;
                    hash: Buffer;
                    centagons: bigint;
                    transfer: {
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
                    type: import("../types/TransactionType").default;
                    transactionHash: Buffer;
                    version: string;
                    time: Date;
                    expiresAtBlockHeight: number;
                    sources: {
                        sourceAddressSignatureSettings: {
                            countRequired: number;
                            settingsMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                        }[];
                        sourceLedger: LedgerType;
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
                    type: import("../types/TransactionType").default;
                    transactionHash: Buffer;
                    version: string;
                    time: Date;
                    expiresAtBlockHeight: number;
                    sources: {
                        sourceAddressSignatureSettings: {
                            countRequired: number;
                            settingsMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                        }[];
                        sourceLedger: LedgerType;
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
                    type: import("../types/CoinageType").default;
                    hash: Buffer;
                    centagons: bigint;
                    transfer: {
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
                    type: import("../types/TransactionType").default;
                    transactionHash: Buffer;
                    version: string;
                    time: Date;
                    expiresAtBlockHeight: number;
                    sources: {
                        sourceAddressSignatureSettings: {
                            countRequired: number;
                            settingsMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                        }[];
                        sourceLedger: LedgerType;
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
                    type: import("../types/TransactionType").default;
                    transactionHash: Buffer;
                    version: string;
                    time: Date;
                    expiresAtBlockHeight: number;
                    sources: {
                        sourceAddressSignatureSettings: {
                            countRequired: number;
                            settingsMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                        }[];
                        sourceLedger: LedgerType;
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
                    type: import("../types/CoinageType").default;
                    hash: Buffer;
                    centagons: bigint;
                    transfer: {
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
            nodeIdsAlreadySent: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            block: {
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
                    type: import("../types/TransactionType").default;
                    transactionHash: Buffer;
                    version: string;
                    time: Date;
                    expiresAtBlockHeight: number;
                    sources: {
                        sourceAddressSignatureSettings: {
                            countRequired: number;
                            settingsMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                        }[];
                        sourceLedger: LedgerType;
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
                    type: import("../types/TransactionType").default;
                    transactionHash: Buffer;
                    version: string;
                    time: Date;
                    expiresAtBlockHeight: number;
                    sources: {
                        sourceAddressSignatureSettings: {
                            countRequired: number;
                            settingsMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                        }[];
                        sourceLedger: LedgerType;
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
                    type: import("../types/CoinageType").default;
                    hash: Buffer;
                    centagons: bigint;
                    transfer: {
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
            };
            nodeIdsAlreadySent: string[];
        }, {
            block: {
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
                    type: import("../types/TransactionType").default;
                    transactionHash: Buffer;
                    version: string;
                    time: Date;
                    expiresAtBlockHeight: number;
                    sources: {
                        sourceAddressSignatureSettings: {
                            countRequired: number;
                            settingsMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                        }[];
                        sourceLedger: LedgerType;
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
                    type: import("../types/TransactionType").default;
                    transactionHash: Buffer;
                    version: string;
                    time: Date;
                    expiresAtBlockHeight: number;
                    sources: {
                        sourceAddressSignatureSettings: {
                            countRequired: number;
                            settingsMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                        }[];
                        sourceLedger: LedgerType;
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
                    type: import("../types/CoinageType").default;
                    hash: Buffer;
                    centagons: bigint;
                    transfer: {
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
            };
            nodeIdsAlreadySent: string[];
        }>;
        result: z.ZodObject<{
            accept: z.ZodBoolean;
            error: z.ZodNativeEnum<typeof BlockError>;
            message: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message: string;
            error: BlockError;
            accept: boolean;
        }, {
            message: string;
            error: BlockError;
            accept: boolean;
        }>;
    };
    'Block.findWithTransaction': {
        args: z.ZodObject<{
            transactionHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
            ledgerType: z.ZodNativeEnum<typeof LedgerType>;
        }, "strip", z.ZodTypeAny, {
            transactionHash: Buffer;
            ledgerType: LedgerType;
        }, {
            transactionHash: Buffer;
            ledgerType: LedgerType;
        }>;
        result: z.ZodObject<{
            blockHeight: z.ZodNumber;
            merkleRoot: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
            blockHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
        }, "strip", z.ZodTypeAny, {
            blockHeight: number;
            blockHash: Buffer;
            merkleRoot: Buffer;
        }, {
            blockHeight: number;
            blockHash: Buffer;
            merkleRoot: Buffer;
        }>;
    };
    'Block.getMany': {
        args: z.ZodObject<{
            blockHeights: z.ZodArray<z.ZodNumber, "many">;
            blockHashes: z.ZodArray<z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>, "many">;
        }, "strip", z.ZodTypeAny, {
            blockHeights: number[];
            blockHashes: Buffer[];
        }, {
            blockHeights: number[];
            blockHashes: Buffer[];
        }>;
        result: z.ZodObject<{
            blocks: z.ZodArray<z.ZodObject<{
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
                    type: z.ZodNativeEnum<typeof import("../types/TransactionType").default>;
                    expiresAtBlockHeight: z.ZodNumber;
                    sources: z.ZodArray<z.ZodObject<{
                        sourceTransactionHash: z.ZodOptional<z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>>;
                        sourceOutputIndex: z.ZodOptional<z.ZodNumber>;
                        sourceAddressSignatureSettings: z.ZodObject<{
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
                        sourceAddressSigners: z.ZodArray<z.ZodObject<{
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
                        sourceLedger: z.ZodNativeEnum<typeof LedgerType>;
                        blockClaimHeight: z.ZodOptional<z.ZodNumber>;
                        coinageHash: z.ZodOptional<z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>>;
                    }, "strip", z.ZodTypeAny, {
                        sourceAddressSignatureSettings: {
                            countRequired: number;
                            settingsMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
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
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                        }[];
                        sourceLedger: LedgerType;
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
                    type: import("../types/TransactionType").default;
                    transactionHash: Buffer;
                    version: string;
                    time: Date;
                    expiresAtBlockHeight: number;
                    sources: {
                        sourceAddressSignatureSettings: {
                            countRequired: number;
                            settingsMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                        }[];
                        sourceLedger: LedgerType;
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
                    type: import("../types/TransactionType").default;
                    transactionHash: Buffer;
                    version: string;
                    time: Date;
                    expiresAtBlockHeight: number;
                    sources: {
                        sourceAddressSignatureSettings: {
                            countRequired: number;
                            settingsMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                        }[];
                        sourceLedger: LedgerType;
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
                    type: z.ZodNativeEnum<typeof import("../types/TransactionType").default>;
                    expiresAtBlockHeight: z.ZodNumber;
                    sources: z.ZodArray<z.ZodObject<{
                        sourceTransactionHash: z.ZodOptional<z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>>;
                        sourceOutputIndex: z.ZodOptional<z.ZodNumber>;
                        sourceAddressSignatureSettings: z.ZodObject<{
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
                        sourceAddressSigners: z.ZodArray<z.ZodObject<{
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
                        sourceLedger: z.ZodNativeEnum<typeof LedgerType>;
                        blockClaimHeight: z.ZodOptional<z.ZodNumber>;
                        coinageHash: z.ZodOptional<z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>>;
                    }, "strip", z.ZodTypeAny, {
                        sourceAddressSignatureSettings: {
                            countRequired: number;
                            settingsMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
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
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                        }[];
                        sourceLedger: LedgerType;
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
                    type: import("../types/TransactionType").default;
                    transactionHash: Buffer;
                    version: string;
                    time: Date;
                    expiresAtBlockHeight: number;
                    sources: {
                        sourceAddressSignatureSettings: {
                            countRequired: number;
                            settingsMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                        }[];
                        sourceLedger: LedgerType;
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
                    type: import("../types/TransactionType").default;
                    transactionHash: Buffer;
                    version: string;
                    time: Date;
                    expiresAtBlockHeight: number;
                    sources: {
                        sourceAddressSignatureSettings: {
                            countRequired: number;
                            settingsMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                        }[];
                        sourceLedger: LedgerType;
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
                    type: z.ZodNativeEnum<typeof import("../types/CoinageType").default>;
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
                        coinageHash: Buffer;
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
                        coinageHash: Buffer;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    type: import("../types/CoinageType").default;
                    hash: Buffer;
                    centagons: bigint;
                    transfer: {
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
                        coinageHash: Buffer;
                    };
                    blockHeight: number;
                    minimumClaimCentagons: bigint;
                    expirationBlockHeight: number;
                    oldestClaimHeight: number;
                    grantAddress: string;
                }, {
                    type: import("../types/CoinageType").default;
                    hash: Buffer;
                    centagons: bigint;
                    transfer: {
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
                    type: import("../types/TransactionType").default;
                    transactionHash: Buffer;
                    version: string;
                    time: Date;
                    expiresAtBlockHeight: number;
                    sources: {
                        sourceAddressSignatureSettings: {
                            countRequired: number;
                            settingsMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                        }[];
                        sourceLedger: LedgerType;
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
                    type: import("../types/TransactionType").default;
                    transactionHash: Buffer;
                    version: string;
                    time: Date;
                    expiresAtBlockHeight: number;
                    sources: {
                        sourceAddressSignatureSettings: {
                            countRequired: number;
                            settingsMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                        }[];
                        sourceLedger: LedgerType;
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
                    type: import("../types/CoinageType").default;
                    hash: Buffer;
                    centagons: bigint;
                    transfer: {
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
                    type: import("../types/TransactionType").default;
                    transactionHash: Buffer;
                    version: string;
                    time: Date;
                    expiresAtBlockHeight: number;
                    sources: {
                        sourceAddressSignatureSettings: {
                            countRequired: number;
                            settingsMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                        }[];
                        sourceLedger: LedgerType;
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
                    type: import("../types/TransactionType").default;
                    transactionHash: Buffer;
                    version: string;
                    time: Date;
                    expiresAtBlockHeight: number;
                    sources: {
                        sourceAddressSignatureSettings: {
                            countRequired: number;
                            settingsMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                        }[];
                        sourceLedger: LedgerType;
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
                    type: import("../types/CoinageType").default;
                    hash: Buffer;
                    centagons: bigint;
                    transfer: {
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
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            blocks: {
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
                    type: import("../types/TransactionType").default;
                    transactionHash: Buffer;
                    version: string;
                    time: Date;
                    expiresAtBlockHeight: number;
                    sources: {
                        sourceAddressSignatureSettings: {
                            countRequired: number;
                            settingsMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                        }[];
                        sourceLedger: LedgerType;
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
                    type: import("../types/TransactionType").default;
                    transactionHash: Buffer;
                    version: string;
                    time: Date;
                    expiresAtBlockHeight: number;
                    sources: {
                        sourceAddressSignatureSettings: {
                            countRequired: number;
                            settingsMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                        }[];
                        sourceLedger: LedgerType;
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
                    type: import("../types/CoinageType").default;
                    hash: Buffer;
                    centagons: bigint;
                    transfer: {
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
            }[];
        }, {
            blocks: {
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
                    type: import("../types/TransactionType").default;
                    transactionHash: Buffer;
                    version: string;
                    time: Date;
                    expiresAtBlockHeight: number;
                    sources: {
                        sourceAddressSignatureSettings: {
                            countRequired: number;
                            settingsMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                        }[];
                        sourceLedger: LedgerType;
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
                    type: import("../types/TransactionType").default;
                    transactionHash: Buffer;
                    version: string;
                    time: Date;
                    expiresAtBlockHeight: number;
                    sources: {
                        sourceAddressSignatureSettings: {
                            countRequired: number;
                            settingsMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                            salt?: Buffer | undefined;
                            identityIndices?: number[] | undefined;
                        };
                        sourceAddressSigners: {
                            signature: Buffer;
                            identity: string;
                            ownershipMerkleProofs: {
                                position: import("../types/IMerkleProof").MerklePosition;
                                hash: Buffer;
                            }[];
                        }[];
                        sourceLedger: LedgerType;
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
                    type: import("../types/CoinageType").default;
                    hash: Buffer;
                    centagons: bigint;
                    transfer: {
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
            }[];
        }>;
    };
    'Block.settings': {
        args: z.ZodObject<{
            blockHeight: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            blockHeight?: number | undefined;
        }, {
            blockHeight?: number | undefined;
        }>;
        result: z.ZodObject<{
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
            datum: z.ZodObject<{
                xoredCandidatesMinimum: z.ZodNumber;
                secondPingPercent: z.ZodNumber;
                auditorsCount: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                xoredCandidatesMinimum: number;
                secondPingPercent: number;
                auditorsCount: number;
            }, {
                xoredCandidatesMinimum: number;
                secondPingPercent: number;
                auditorsCount: number;
            }>;
            networkNodes: z.ZodNumber;
            bitSamplingsInBlock: z.ZodNumber;
            bitSamplingBlockAge: z.ZodNumber;
            blockHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
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
            height: z.ZodNumber;
            sidechains: z.ZodArray<z.ZodObject<{
                url: z.ZodString;
                rootIdentity: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                rootIdentity: string;
                url: string;
            }, {
                rootIdentity: string;
                url: string;
            }>, "many">;
            minimumMicronoteBurnPercent: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
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
    };
};
type IBlockApis = IZodSchemaToApiTypes<typeof BlockApiSchemas>;
export default IBlockApis;
