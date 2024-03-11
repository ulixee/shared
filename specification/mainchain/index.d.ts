/// <reference types="node" />
import { IZodHandlers, IZodSchemaToApiTypes } from '../utils/IZodApi';
declare const MainchainApiSchema: {
    'Transaction.created': {
        args: import("zod").ZodObject<{
            transaction: import("zod").ZodObject<{
                transactionHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                version: import("zod").ZodString;
                time: import("zod").ZodDate;
                type: import("zod").ZodNativeEnum<typeof import("../types/TransactionType").default>;
                expiresAtBlockHeight: import("zod").ZodNumber;
                sources: import("zod").ZodArray<import("zod").ZodObject<{
                    sourceTransactionHash: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>>;
                    sourceOutputIndex: import("zod").ZodOptional<import("zod").ZodNumber>;
                    sourceAddressSignatureSettings: import("zod").ZodObject<{
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
                    sourceAddressSigners: import("zod").ZodArray<import("zod").ZodObject<{
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
                    sourceLedger: import("zod").ZodNativeEnum<typeof import("../types/LedgerType").default>;
                    blockClaimHeight: import("zod").ZodOptional<import("zod").ZodNumber>;
                    coinageHash: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>>;
                }, "strip", import("zod").ZodTypeAny, {
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
                    sourceLedger: import("../types/LedgerType").default;
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
                    sourceLedger: import("../types/LedgerType").default;
                    sourceTransactionHash?: Buffer | undefined;
                    sourceOutputIndex?: number | undefined;
                    blockClaimHeight?: number | undefined;
                    coinageHash?: Buffer | undefined;
                }>, "many">;
                outputs: import("zod").ZodArray<import("zod").ZodObject<{
                    address: import("zod").ZodString;
                    centagons: import("zod").ZodEffects<import("zod").ZodBigInt, bigint, bigint>;
                    isBond: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    isBurned: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    addressOnSidechain: import("zod").ZodOptional<import("zod").ZodString>;
                    isSidechained: import("zod").ZodOptional<import("zod").ZodBoolean>;
                }, "strip", import("zod").ZodTypeAny, {
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
            }, "strip", import("zod").ZodTypeAny, {
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
                    sourceLedger: import("../types/LedgerType").default;
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
                    sourceLedger: import("../types/LedgerType").default;
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
            ledger: import("zod").ZodNativeEnum<typeof import("../types/LedgerType").default>;
            nodeIdsAlreadySent: import("zod").ZodArray<import("zod").ZodString, "many">;
        }, "strip", import("zod").ZodTypeAny, {
            ledger: import("../types/LedgerType").default;
            nodeIdsAlreadySent: string[];
            transaction: {
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
                    sourceLedger: import("../types/LedgerType").default;
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
            };
        }, {
            ledger: import("../types/LedgerType").default;
            nodeIdsAlreadySent: string[];
            transaction: {
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
                    sourceLedger: import("../types/LedgerType").default;
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
            };
        }>;
        result: import("zod").ZodObject<{
            accept: import("zod").ZodBoolean;
            error: import("zod").ZodNativeEnum<typeof import("../types/TransactionError").default>;
            message: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            error: import("../types/TransactionError").default;
            accept: boolean;
            message?: string | undefined;
        }, {
            error: import("../types/TransactionError").default;
            accept: boolean;
            message?: string | undefined;
        }>;
    };
    'Transaction.transfer': {
        args: import("zod").ZodObject<{
            transaction: import("zod").ZodObject<{
                transactionHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                version: import("zod").ZodString;
                time: import("zod").ZodDate;
                type: import("zod").ZodNativeEnum<typeof import("../types/TransactionType").default>;
                expiresAtBlockHeight: import("zod").ZodNumber;
                sources: import("zod").ZodArray<import("zod").ZodObject<{
                    sourceTransactionHash: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>>;
                    sourceOutputIndex: import("zod").ZodOptional<import("zod").ZodNumber>;
                    sourceAddressSignatureSettings: import("zod").ZodObject<{
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
                    sourceAddressSigners: import("zod").ZodArray<import("zod").ZodObject<{
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
                    sourceLedger: import("zod").ZodNativeEnum<typeof import("../types/LedgerType").default>;
                    blockClaimHeight: import("zod").ZodOptional<import("zod").ZodNumber>;
                    coinageHash: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>>;
                }, "strip", import("zod").ZodTypeAny, {
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
                    sourceLedger: import("../types/LedgerType").default;
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
                    sourceLedger: import("../types/LedgerType").default;
                    sourceTransactionHash?: Buffer | undefined;
                    sourceOutputIndex?: number | undefined;
                    blockClaimHeight?: number | undefined;
                    coinageHash?: Buffer | undefined;
                }>, "many">;
                outputs: import("zod").ZodArray<import("zod").ZodObject<{
                    address: import("zod").ZodString;
                    centagons: import("zod").ZodEffects<import("zod").ZodBigInt, bigint, bigint>;
                    isBond: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    isBurned: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    addressOnSidechain: import("zod").ZodOptional<import("zod").ZodString>;
                    isSidechained: import("zod").ZodOptional<import("zod").ZodBoolean>;
                }, "strip", import("zod").ZodTypeAny, {
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
            }, "strip", import("zod").ZodTypeAny, {
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
                    sourceLedger: import("../types/LedgerType").default;
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
                    sourceLedger: import("../types/LedgerType").default;
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
            ledger: import("zod").ZodNativeEnum<typeof import("../types/LedgerType").default>;
        }, "strip", import("zod").ZodTypeAny, {
            ledger: import("../types/LedgerType").default;
            transaction: {
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
                    sourceLedger: import("../types/LedgerType").default;
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
            };
        }, {
            ledger: import("../types/LedgerType").default;
            transaction: {
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
                    sourceLedger: import("../types/LedgerType").default;
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
            };
        }>;
        result: import("zod").ZodObject<{
            preliminaryBlockHeight: import("zod").ZodNumber;
            error: import("zod").ZodNativeEnum<typeof import("../types/TransactionError").default>;
            message: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            error: import("../types/TransactionError").default;
            preliminaryBlockHeight: number;
            message?: string | undefined;
        }, {
            error: import("../types/TransactionError").default;
            preliminaryBlockHeight: number;
            message?: string | undefined;
        }>;
    };
    'Transaction.claim': {
        args: import("zod").ZodObject<{
            transaction: import("zod").ZodObject<{
                transactionHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                version: import("zod").ZodString;
                time: import("zod").ZodDate;
                type: import("zod").ZodNativeEnum<typeof import("../types/TransactionType").default>;
                expiresAtBlockHeight: import("zod").ZodNumber;
                sources: import("zod").ZodArray<import("zod").ZodObject<{
                    sourceTransactionHash: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>>;
                    sourceOutputIndex: import("zod").ZodOptional<import("zod").ZodNumber>;
                    sourceAddressSignatureSettings: import("zod").ZodObject<{
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
                    sourceAddressSigners: import("zod").ZodArray<import("zod").ZodObject<{
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
                    sourceLedger: import("zod").ZodNativeEnum<typeof import("../types/LedgerType").default>;
                    blockClaimHeight: import("zod").ZodOptional<import("zod").ZodNumber>;
                    coinageHash: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>>;
                }, "strip", import("zod").ZodTypeAny, {
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
                    sourceLedger: import("../types/LedgerType").default;
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
                    sourceLedger: import("../types/LedgerType").default;
                    sourceTransactionHash?: Buffer | undefined;
                    sourceOutputIndex?: number | undefined;
                    blockClaimHeight?: number | undefined;
                    coinageHash?: Buffer | undefined;
                }>, "many">;
                outputs: import("zod").ZodArray<import("zod").ZodObject<{
                    address: import("zod").ZodString;
                    centagons: import("zod").ZodEffects<import("zod").ZodBigInt, bigint, bigint>;
                    isBond: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    isBurned: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    addressOnSidechain: import("zod").ZodOptional<import("zod").ZodString>;
                    isSidechained: import("zod").ZodOptional<import("zod").ZodBoolean>;
                }, "strip", import("zod").ZodTypeAny, {
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
            }, "strip", import("zod").ZodTypeAny, {
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
                    sourceLedger: import("../types/LedgerType").default;
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
                    sourceLedger: import("../types/LedgerType").default;
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
        }, "strip", import("zod").ZodTypeAny, {
            transaction: {
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
                    sourceLedger: import("../types/LedgerType").default;
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
            };
        }, {
            transaction: {
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
                    sourceLedger: import("../types/LedgerType").default;
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
            };
        }>;
        result: import("zod").ZodObject<{
            preliminaryBlockHeight: import("zod").ZodNumber;
            error: import("zod").ZodNativeEnum<typeof import("../types/TransactionError").default>;
            message: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            error: import("../types/TransactionError").default;
            preliminaryBlockHeight: number;
            message?: string | undefined;
        }, {
            error: import("../types/TransactionError").default;
            preliminaryBlockHeight: number;
            message?: string | undefined;
        }>;
    };
    'Transaction.purchase': {
        args: import("zod").ZodObject<{
            transaction: import("zod").ZodObject<{
                transactionHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                version: import("zod").ZodString;
                time: import("zod").ZodDate;
                type: import("zod").ZodNativeEnum<typeof import("../types/TransactionType").default>;
                expiresAtBlockHeight: import("zod").ZodNumber;
                sources: import("zod").ZodArray<import("zod").ZodObject<{
                    sourceTransactionHash: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>>;
                    sourceOutputIndex: import("zod").ZodOptional<import("zod").ZodNumber>;
                    sourceAddressSignatureSettings: import("zod").ZodObject<{
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
                    sourceAddressSigners: import("zod").ZodArray<import("zod").ZodObject<{
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
                    sourceLedger: import("zod").ZodNativeEnum<typeof import("../types/LedgerType").default>;
                    blockClaimHeight: import("zod").ZodOptional<import("zod").ZodNumber>;
                    coinageHash: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>>;
                }, "strip", import("zod").ZodTypeAny, {
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
                    sourceLedger: import("../types/LedgerType").default;
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
                    sourceLedger: import("../types/LedgerType").default;
                    sourceTransactionHash?: Buffer | undefined;
                    sourceOutputIndex?: number | undefined;
                    blockClaimHeight?: number | undefined;
                    coinageHash?: Buffer | undefined;
                }>, "many">;
                outputs: import("zod").ZodArray<import("zod").ZodObject<{
                    address: import("zod").ZodString;
                    centagons: import("zod").ZodEffects<import("zod").ZodBigInt, bigint, bigint>;
                    isBond: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    isBurned: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    addressOnSidechain: import("zod").ZodOptional<import("zod").ZodString>;
                    isSidechained: import("zod").ZodOptional<import("zod").ZodBoolean>;
                }, "strip", import("zod").ZodTypeAny, {
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
            }, "strip", import("zod").ZodTypeAny, {
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
                    sourceLedger: import("../types/LedgerType").default;
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
                    sourceLedger: import("../types/LedgerType").default;
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
        }, "strip", import("zod").ZodTypeAny, {
            transaction: {
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
                    sourceLedger: import("../types/LedgerType").default;
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
            };
        }, {
            transaction: {
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
                    sourceLedger: import("../types/LedgerType").default;
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
            };
        }>;
        result: import("zod").ZodObject<{
            preliminaryBlockHeight: import("zod").ZodNumber;
            error: import("zod").ZodNativeEnum<typeof import("../types/TransactionError").default>;
            message: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            error: import("../types/TransactionError").default;
            preliminaryBlockHeight: number;
            message?: string | undefined;
        }, {
            error: import("../types/TransactionError").default;
            preliminaryBlockHeight: number;
            message?: string | undefined;
        }>;
    };
    'Transaction.verifyInBlock': {
        args: import("zod").ZodObject<{
            transactionHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
            transactionIndex: import("zod").ZodNumber;
            blockHeight: import("zod").ZodNumber;
            ledger: import("zod").ZodNativeEnum<typeof import("../types/LedgerType").default>;
        }, "strip", import("zod").ZodTypeAny, {
            blockHeight: number;
            transactionHash: Buffer;
            ledger: import("../types/LedgerType").default;
            transactionIndex: number;
        }, {
            blockHeight: number;
            transactionHash: Buffer;
            ledger: import("../types/LedgerType").default;
            transactionIndex: number;
        }>;
        result: import("zod").ZodObject<{
            proofs: import("zod").ZodArray<import("zod").ZodObject<{
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
            proofs: {
                position: import("../types/IMerkleProof").MerklePosition;
                hash: Buffer;
            }[];
        }, {
            proofs: {
                position: import("../types/IMerkleProof").MerklePosition;
                hash: Buffer;
            }[];
        }>;
    };
    'Transaction.checkForBondRedemption': {
        args: import("zod").ZodObject<{
            transactionHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
        }, "strip", import("zod").ZodTypeAny, {
            transactionHash: Buffer;
        }, {
            transactionHash: Buffer;
        }>;
        result: import("zod").ZodObject<{
            transaction: import("zod").ZodObject<{
                transactionHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                version: import("zod").ZodString;
                time: import("zod").ZodDate;
                type: import("zod").ZodNativeEnum<typeof import("../types/TransactionType").default>;
                expiresAtBlockHeight: import("zod").ZodNumber;
                sources: import("zod").ZodArray<import("zod").ZodObject<{
                    sourceTransactionHash: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>>;
                    sourceOutputIndex: import("zod").ZodOptional<import("zod").ZodNumber>;
                    sourceAddressSignatureSettings: import("zod").ZodObject<{
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
                    sourceAddressSigners: import("zod").ZodArray<import("zod").ZodObject<{
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
                    sourceLedger: import("zod").ZodNativeEnum<typeof import("../types/LedgerType").default>;
                    blockClaimHeight: import("zod").ZodOptional<import("zod").ZodNumber>;
                    coinageHash: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>>;
                }, "strip", import("zod").ZodTypeAny, {
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
                    sourceLedger: import("../types/LedgerType").default;
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
                    sourceLedger: import("../types/LedgerType").default;
                    sourceTransactionHash?: Buffer | undefined;
                    sourceOutputIndex?: number | undefined;
                    blockClaimHeight?: number | undefined;
                    coinageHash?: Buffer | undefined;
                }>, "many">;
                outputs: import("zod").ZodArray<import("zod").ZodObject<{
                    address: import("zod").ZodString;
                    centagons: import("zod").ZodEffects<import("zod").ZodBigInt, bigint, bigint>;
                    isBond: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    isBurned: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    addressOnSidechain: import("zod").ZodOptional<import("zod").ZodString>;
                    isSidechained: import("zod").ZodOptional<import("zod").ZodBoolean>;
                }, "strip", import("zod").ZodTypeAny, {
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
            }, "strip", import("zod").ZodTypeAny, {
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
                    sourceLedger: import("../types/LedgerType").default;
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
                    sourceLedger: import("../types/LedgerType").default;
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
            blockHeight: import("zod").ZodNumber;
        }, "strip", import("zod").ZodTypeAny, {
            blockHeight: number;
            transaction: {
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
                    sourceLedger: import("../types/LedgerType").default;
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
            };
        }, {
            blockHeight: number;
            transaction: {
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
                    sourceLedger: import("../types/LedgerType").default;
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
            };
        }>;
    };
    'Sidechain.authorize': {
        args: import("zod").ZodObject<{
            sidechain: import("zod").ZodObject<{
                sidechainHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                rootIdentity: import("zod").ZodString;
                url: import("zod").ZodString;
                transfer: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    sidechainHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    transferSignature: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                }, "strip", import("zod").ZodTypeAny, {
                    sidechainHash: Buffer;
                    transferSignature: Buffer;
                }, {
                    sidechainHash: Buffer;
                    transferSignature: Buffer;
                }>, "many">>;
            }, "strip", import("zod").ZodTypeAny, {
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
            }>;
        }, "strip", import("zod").ZodTypeAny, {
            sidechain: {
                rootIdentity: string;
                sidechainHash: Buffer;
                url: string;
                transfer?: {
                    sidechainHash: Buffer;
                    transferSignature: Buffer;
                }[] | undefined;
            };
        }, {
            sidechain: {
                rootIdentity: string;
                sidechainHash: Buffer;
                url: string;
                transfer?: {
                    sidechainHash: Buffer;
                    transferSignature: Buffer;
                }[] | undefined;
            };
        }>;
        result: import("zod").ZodObject<{
            accept: import("zod").ZodBoolean;
            error: import("zod").ZodNativeEnum<typeof import("./SidechainGovernanceApis").SidechainGovernanceError>;
        }, "strip", import("zod").ZodTypeAny, {
            error: import("./SidechainGovernanceApis").SidechainGovernanceError;
            accept: boolean;
        }, {
            error: import("./SidechainGovernanceApis").SidechainGovernanceError;
            accept: boolean;
        }>;
    };
    'Sidechain.authorized': {
        args: import("zod").ZodObject<{
            sidechain: import("zod").ZodObject<{
                sidechainHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                rootIdentity: import("zod").ZodString;
                url: import("zod").ZodString;
                transfer: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    sidechainHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    transferSignature: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                }, "strip", import("zod").ZodTypeAny, {
                    sidechainHash: Buffer;
                    transferSignature: Buffer;
                }, {
                    sidechainHash: Buffer;
                    transferSignature: Buffer;
                }>, "many">>;
            }, "strip", import("zod").ZodTypeAny, {
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
            }>;
            nodeIdsAlreadySent: import("zod").ZodArray<import("zod").ZodString, "many">;
        }, "strip", import("zod").ZodTypeAny, {
            nodeIdsAlreadySent: string[];
            sidechain: {
                rootIdentity: string;
                sidechainHash: Buffer;
                url: string;
                transfer?: {
                    sidechainHash: Buffer;
                    transferSignature: Buffer;
                }[] | undefined;
            };
        }, {
            nodeIdsAlreadySent: string[];
            sidechain: {
                rootIdentity: string;
                sidechainHash: Buffer;
                url: string;
                transfer?: {
                    sidechainHash: Buffer;
                    transferSignature: Buffer;
                }[] | undefined;
            };
        }>;
        result: import("zod").ZodObject<{
            accept: import("zod").ZodBoolean;
            error: import("zod").ZodNativeEnum<typeof import("./SidechainGovernanceApis").SidechainGovernanceError>;
        }, "strip", import("zod").ZodTypeAny, {
            error: import("./SidechainGovernanceApis").SidechainGovernanceError;
            accept: boolean;
        }, {
            error: import("./SidechainGovernanceApis").SidechainGovernanceError;
            accept: boolean;
        }>;
    };
    'Coinage.create': {
        args: import("zod").ZodObject<{
            coinage: import("zod").ZodObject<{
                type: import("zod").ZodNativeEnum<typeof import("../types/CoinageType").default>;
                hash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                centagons: import("zod").ZodEffects<import("zod").ZodBigInt, bigint, bigint>;
                minimumClaimCentagons: import("zod").ZodEffects<import("zod").ZodBigInt, bigint, bigint>;
                blockHeight: import("zod").ZodNumber;
                expirationBlockHeight: import("zod").ZodNumber;
                oldestClaimHeight: import("zod").ZodNumber;
                grantAddress: import("zod").ZodString;
                transfer: import("zod").ZodObject<{
                    coinageHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
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
            }, "strip", import("zod").ZodTypeAny, {
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
            }>;
        }, "strip", import("zod").ZodTypeAny, {
            coinage: {
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
            };
        }, {
            coinage: {
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
            };
        }>;
        result: import("zod").ZodObject<{
            accept: import("zod").ZodBoolean;
            error: import("zod").ZodNativeEnum<typeof import("./CoinageApis").CoinageError>;
        }, "strip", import("zod").ZodTypeAny, {
            error: import("./CoinageApis").CoinageError;
            accept: boolean;
        }, {
            error: import("./CoinageApis").CoinageError;
            accept: boolean;
        }>;
    };
    'Coinage.created': {
        args: import("zod").ZodObject<{
            coinage: import("zod").ZodObject<{
                type: import("zod").ZodNativeEnum<typeof import("../types/CoinageType").default>;
                hash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                centagons: import("zod").ZodEffects<import("zod").ZodBigInt, bigint, bigint>;
                minimumClaimCentagons: import("zod").ZodEffects<import("zod").ZodBigInt, bigint, bigint>;
                blockHeight: import("zod").ZodNumber;
                expirationBlockHeight: import("zod").ZodNumber;
                oldestClaimHeight: import("zod").ZodNumber;
                grantAddress: import("zod").ZodString;
                transfer: import("zod").ZodObject<{
                    coinageHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
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
            }, "strip", import("zod").ZodTypeAny, {
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
            }>;
            nodeIdsAlreadySent: import("zod").ZodArray<import("zod").ZodString, "many">;
        }, "strip", import("zod").ZodTypeAny, {
            nodeIdsAlreadySent: string[];
            coinage: {
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
            };
        }, {
            nodeIdsAlreadySent: string[];
            coinage: {
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
            };
        }>;
        result: import("zod").ZodObject<{
            accept: import("zod").ZodBoolean;
            error: import("zod").ZodNativeEnum<typeof import("./CoinageApis").CoinageError>;
        }, "strip", import("zod").ZodTypeAny, {
            error: import("./CoinageApis").CoinageError;
            accept: boolean;
        }, {
            error: import("./CoinageApis").CoinageError;
            accept: boolean;
        }>;
    };
    'BlockHeader.getMany': {
        args: import("zod").ZodObject<{
            heights: import("zod").ZodArray<import("zod").ZodNumber, "many">;
        }, "strip", import("zod").ZodTypeAny, {
            heights: number[];
        }, {
            heights: number[];
        }>;
        result: import("zod").ZodObject<{
            headers: import("zod").ZodArray<import("zod").ZodObject<{
                hash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                version: import("zod").ZodString;
                height: import("zod").ZodNumber;
                linkNonce: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                prevBlockHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
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
                time: import("zod").ZodDate;
                stableMerkleRoot: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                sharesMerkleRoot: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                coinagesHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                bondCentagonsCreated: import("zod").ZodEffects<import("zod").ZodBigInt, bigint, bigint>;
                stableCoinUSDCents: import("zod").ZodNumber;
                stableCoinVolume: import("zod").ZodNumber;
                datumSummaryHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                sampledBitsHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
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
                xoredCandidateAverage: import("zod").ZodNumber;
                sidechainChangesHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                sidechainSnapshotsHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
            }, "strip", import("zod").ZodTypeAny, {
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
            }>, "many">;
        }, "strip", import("zod").ZodTypeAny, {
            headers: {
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
            }[];
        }, {
            headers: {
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
            }[];
        }>;
    };
    'BlockHeader.get': {
        args: import("zod").ZodObject<{
            hash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
            includeFork: import("zod").ZodBoolean;
        }, "strip", import("zod").ZodTypeAny, {
            hash: Buffer;
            includeFork: boolean;
        }, {
            hash: Buffer;
            includeFork: boolean;
        }>;
        result: import("zod").ZodObject<{
            header: import("zod").ZodObject<{
                hash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                version: import("zod").ZodString;
                height: import("zod").ZodNumber;
                linkNonce: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                prevBlockHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
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
                time: import("zod").ZodDate;
                stableMerkleRoot: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                sharesMerkleRoot: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                coinagesHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                bondCentagonsCreated: import("zod").ZodEffects<import("zod").ZodBigInt, bigint, bigint>;
                stableCoinUSDCents: import("zod").ZodNumber;
                stableCoinVolume: import("zod").ZodNumber;
                datumSummaryHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                sampledBitsHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
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
                xoredCandidateAverage: import("zod").ZodNumber;
                sidechainChangesHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                sidechainSnapshotsHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
            }, "strip", import("zod").ZodTypeAny, {
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
            isOnFork: import("zod").ZodBoolean;
        }, "strip", import("zod").ZodTypeAny, {
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
            isOnFork: boolean;
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
            isOnFork: boolean;
        }>;
    };
    'Block.create': {
        args: import("zod").ZodObject<{
            prevBlockHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
            payoutAddress: import("zod").ZodString;
            linkNonce: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
            datumSummary: import("zod").ZodObject<{
                identity: import("zod").ZodString;
                blockHeight: import("zod").ZodNumber;
                averageXoredCandidates: import("zod").ZodNumber;
                datumsPerMicronoteBatch: import("zod").ZodArray<import("zod").ZodObject<{
                    micronoteBatchUrl: import("zod").ZodString;
                    micronoteBatchIdentity: import("zod").ZodString;
                    micronoteIdsHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    micronotesCount: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
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
                webhitsClaimAddresses: import("zod").ZodArray<import("zod").ZodObject<{
                    viewOfTruthHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    addressCounts: import("zod").ZodArray<import("zod").ZodObject<{
                        claimAddress: import("zod").ZodString;
                        count: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
                        claimAddress: string;
                        count: number;
                    }, {
                        claimAddress: string;
                        count: number;
                    }>, "many">;
                }, "strip", import("zod").ZodTypeAny, {
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
                signature: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
            }, "strip", import("zod").ZodTypeAny, {
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
            bitSampling: import("zod").ZodObject<{
                bitDatumHistories: import("zod").ZodArray<import("zod").ZodObject<{
                    identity: import("zod").ZodString;
                    blockHeight: import("zod").ZodNumber;
                    averageXoredCandidates: import("zod").ZodNumber;
                    datumsPerMicronoteBatch: import("zod").ZodArray<import("zod").ZodObject<{
                        micronoteBatchUrl: import("zod").ZodString;
                        micronoteBatchIdentity: import("zod").ZodString;
                        micronoteIdsHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                        micronotesCount: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    webhitsClaimAddresses: import("zod").ZodArray<import("zod").ZodObject<{
                        viewOfTruthHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                        addressCounts: import("zod").ZodArray<import("zod").ZodObject<{
                            claimAddress: import("zod").ZodString;
                            count: import("zod").ZodNumber;
                        }, "strip", import("zod").ZodTypeAny, {
                            claimAddress: string;
                            count: number;
                        }, {
                            claimAddress: string;
                            count: number;
                        }>, "many">;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    signature: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                }, "strip", import("zod").ZodTypeAny, {
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
            }, "strip", import("zod").ZodTypeAny, {
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
        }, "strip", import("zod").ZodTypeAny, {
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
        result: import("zod").ZodObject<{
            success: import("zod").ZodBoolean;
        }, "strip", import("zod").ZodTypeAny, {
            success: boolean;
        }, {
            success: boolean;
        }>;
    };
    'Block.created': {
        args: import("zod").ZodObject<{
            block: import("zod").ZodObject<{
                header: import("zod").ZodObject<{
                    hash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    version: import("zod").ZodString;
                    height: import("zod").ZodNumber;
                    linkNonce: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    prevBlockHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
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
                    time: import("zod").ZodDate;
                    stableMerkleRoot: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    sharesMerkleRoot: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    coinagesHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    bondCentagonsCreated: import("zod").ZodEffects<import("zod").ZodBigInt, bigint, bigint>;
                    stableCoinUSDCents: import("zod").ZodNumber;
                    stableCoinVolume: import("zod").ZodNumber;
                    datumSummaryHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    sampledBitsHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
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
                    xoredCandidateAverage: import("zod").ZodNumber;
                    sidechainChangesHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    sidechainSnapshotsHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                }, "strip", import("zod").ZodTypeAny, {
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
                stableLedger: import("zod").ZodArray<import("zod").ZodObject<{
                    transactionHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    version: import("zod").ZodString;
                    time: import("zod").ZodDate;
                    type: import("zod").ZodNativeEnum<typeof import("../types/TransactionType").default>;
                    expiresAtBlockHeight: import("zod").ZodNumber;
                    sources: import("zod").ZodArray<import("zod").ZodObject<{
                        sourceTransactionHash: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>>;
                        sourceOutputIndex: import("zod").ZodOptional<import("zod").ZodNumber>;
                        sourceAddressSignatureSettings: import("zod").ZodObject<{
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
                        sourceAddressSigners: import("zod").ZodArray<import("zod").ZodObject<{
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
                        sourceLedger: import("zod").ZodNativeEnum<typeof import("../types/LedgerType").default>;
                        blockClaimHeight: import("zod").ZodOptional<import("zod").ZodNumber>;
                        coinageHash: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                        sourceLedger: import("../types/LedgerType").default;
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
                        sourceLedger: import("../types/LedgerType").default;
                        sourceTransactionHash?: Buffer | undefined;
                        sourceOutputIndex?: number | undefined;
                        blockClaimHeight?: number | undefined;
                        coinageHash?: Buffer | undefined;
                    }>, "many">;
                    outputs: import("zod").ZodArray<import("zod").ZodObject<{
                        address: import("zod").ZodString;
                        centagons: import("zod").ZodEffects<import("zod").ZodBigInt, bigint, bigint>;
                        isBond: import("zod").ZodOptional<import("zod").ZodBoolean>;
                        isBurned: import("zod").ZodOptional<import("zod").ZodBoolean>;
                        addressOnSidechain: import("zod").ZodOptional<import("zod").ZodString>;
                        isSidechained: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                }, "strip", import("zod").ZodTypeAny, {
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
                        sourceLedger: import("../types/LedgerType").default;
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
                        sourceLedger: import("../types/LedgerType").default;
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
                sharesLedger: import("zod").ZodArray<import("zod").ZodObject<{
                    transactionHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    version: import("zod").ZodString;
                    time: import("zod").ZodDate;
                    type: import("zod").ZodNativeEnum<typeof import("../types/TransactionType").default>;
                    expiresAtBlockHeight: import("zod").ZodNumber;
                    sources: import("zod").ZodArray<import("zod").ZodObject<{
                        sourceTransactionHash: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>>;
                        sourceOutputIndex: import("zod").ZodOptional<import("zod").ZodNumber>;
                        sourceAddressSignatureSettings: import("zod").ZodObject<{
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
                        sourceAddressSigners: import("zod").ZodArray<import("zod").ZodObject<{
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
                        sourceLedger: import("zod").ZodNativeEnum<typeof import("../types/LedgerType").default>;
                        blockClaimHeight: import("zod").ZodOptional<import("zod").ZodNumber>;
                        coinageHash: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                        sourceLedger: import("../types/LedgerType").default;
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
                        sourceLedger: import("../types/LedgerType").default;
                        sourceTransactionHash?: Buffer | undefined;
                        sourceOutputIndex?: number | undefined;
                        blockClaimHeight?: number | undefined;
                        coinageHash?: Buffer | undefined;
                    }>, "many">;
                    outputs: import("zod").ZodArray<import("zod").ZodObject<{
                        address: import("zod").ZodString;
                        centagons: import("zod").ZodEffects<import("zod").ZodBigInt, bigint, bigint>;
                        isBond: import("zod").ZodOptional<import("zod").ZodBoolean>;
                        isBurned: import("zod").ZodOptional<import("zod").ZodBoolean>;
                        addressOnSidechain: import("zod").ZodOptional<import("zod").ZodString>;
                        isSidechained: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                }, "strip", import("zod").ZodTypeAny, {
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
                        sourceLedger: import("../types/LedgerType").default;
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
                        sourceLedger: import("../types/LedgerType").default;
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
                coinages: import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodNativeEnum<typeof import("../types/CoinageType").default>;
                    hash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    centagons: import("zod").ZodEffects<import("zod").ZodBigInt, bigint, bigint>;
                    minimumClaimCentagons: import("zod").ZodEffects<import("zod").ZodBigInt, bigint, bigint>;
                    blockHeight: import("zod").ZodNumber;
                    expirationBlockHeight: import("zod").ZodNumber;
                    oldestClaimHeight: import("zod").ZodNumber;
                    grantAddress: import("zod").ZodString;
                    transfer: import("zod").ZodObject<{
                        coinageHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
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
                }, "strip", import("zod").ZodTypeAny, {
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
                datumSummary: import("zod").ZodObject<{
                    identity: import("zod").ZodString;
                    blockHeight: import("zod").ZodNumber;
                    averageXoredCandidates: import("zod").ZodNumber;
                    datumsPerMicronoteBatch: import("zod").ZodArray<import("zod").ZodObject<{
                        micronoteBatchUrl: import("zod").ZodString;
                        micronoteBatchIdentity: import("zod").ZodString;
                        micronoteIdsHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                        micronotesCount: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    webhitsClaimAddresses: import("zod").ZodArray<import("zod").ZodObject<{
                        viewOfTruthHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                        addressCounts: import("zod").ZodArray<import("zod").ZodObject<{
                            claimAddress: import("zod").ZodString;
                            count: import("zod").ZodNumber;
                        }, "strip", import("zod").ZodTypeAny, {
                            claimAddress: string;
                            count: number;
                        }, {
                            claimAddress: string;
                            count: number;
                        }>, "many">;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    signature: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                }, "strip", import("zod").ZodTypeAny, {
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
                bitSampling: import("zod").ZodObject<{
                    bitDatumHistories: import("zod").ZodArray<import("zod").ZodObject<{
                        identity: import("zod").ZodString;
                        blockHeight: import("zod").ZodNumber;
                        averageXoredCandidates: import("zod").ZodNumber;
                        datumsPerMicronoteBatch: import("zod").ZodArray<import("zod").ZodObject<{
                            micronoteBatchUrl: import("zod").ZodString;
                            micronoteBatchIdentity: import("zod").ZodString;
                            micronoteIdsHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                            micronotesCount: import("zod").ZodNumber;
                        }, "strip", import("zod").ZodTypeAny, {
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
                        webhitsClaimAddresses: import("zod").ZodArray<import("zod").ZodObject<{
                            viewOfTruthHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                            addressCounts: import("zod").ZodArray<import("zod").ZodObject<{
                                claimAddress: import("zod").ZodString;
                                count: import("zod").ZodNumber;
                            }, "strip", import("zod").ZodTypeAny, {
                                claimAddress: string;
                                count: number;
                            }, {
                                claimAddress: string;
                                count: number;
                            }>, "many">;
                        }, "strip", import("zod").ZodTypeAny, {
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
                        signature: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                }, "strip", import("zod").ZodTypeAny, {
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
                sidechainGovernance: import("zod").ZodObject<{
                    authorizedSidechains: import("zod").ZodArray<import("zod").ZodObject<{
                        sidechainHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                        rootIdentity: import("zod").ZodString;
                        url: import("zod").ZodString;
                        transfer: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                            sidechainHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                            transferSignature: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                        }, "strip", import("zod").ZodTypeAny, {
                            sidechainHash: Buffer;
                            transferSignature: Buffer;
                        }, {
                            sidechainHash: Buffer;
                            transferSignature: Buffer;
                        }>, "many">>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                }, "strip", import("zod").ZodTypeAny, {
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
            }, "strip", import("zod").ZodTypeAny, {
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
                        sourceLedger: import("../types/LedgerType").default;
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
                        sourceLedger: import("../types/LedgerType").default;
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
                        sourceLedger: import("../types/LedgerType").default;
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
                        sourceLedger: import("../types/LedgerType").default;
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
            nodeIdsAlreadySent: import("zod").ZodArray<import("zod").ZodString, "many">;
        }, "strip", import("zod").ZodTypeAny, {
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
                        sourceLedger: import("../types/LedgerType").default;
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
                        sourceLedger: import("../types/LedgerType").default;
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
                        sourceLedger: import("../types/LedgerType").default;
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
                        sourceLedger: import("../types/LedgerType").default;
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
        result: import("zod").ZodObject<{
            accept: import("zod").ZodBoolean;
            error: import("zod").ZodNativeEnum<typeof import("../types/BlockError").default>;
            message: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            message: string;
            error: import("../types/BlockError").default;
            accept: boolean;
        }, {
            message: string;
            error: import("../types/BlockError").default;
            accept: boolean;
        }>;
    };
    'Block.findWithTransaction': {
        args: import("zod").ZodObject<{
            transactionHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
            ledgerType: import("zod").ZodNativeEnum<typeof import("../types/LedgerType").default>;
        }, "strip", import("zod").ZodTypeAny, {
            transactionHash: Buffer;
            ledgerType: import("../types/LedgerType").default;
        }, {
            transactionHash: Buffer;
            ledgerType: import("../types/LedgerType").default;
        }>;
        result: import("zod").ZodObject<{
            blockHeight: import("zod").ZodNumber;
            merkleRoot: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
            blockHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
        }, "strip", import("zod").ZodTypeAny, {
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
        args: import("zod").ZodObject<{
            blockHeights: import("zod").ZodArray<import("zod").ZodNumber, "many">;
            blockHashes: import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>, "many">;
        }, "strip", import("zod").ZodTypeAny, {
            blockHeights: number[];
            blockHashes: Buffer[];
        }, {
            blockHeights: number[];
            blockHashes: Buffer[];
        }>;
        result: import("zod").ZodObject<{
            blocks: import("zod").ZodArray<import("zod").ZodObject<{
                header: import("zod").ZodObject<{
                    hash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    version: import("zod").ZodString;
                    height: import("zod").ZodNumber;
                    linkNonce: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    prevBlockHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
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
                    time: import("zod").ZodDate;
                    stableMerkleRoot: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    sharesMerkleRoot: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    coinagesHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    bondCentagonsCreated: import("zod").ZodEffects<import("zod").ZodBigInt, bigint, bigint>;
                    stableCoinUSDCents: import("zod").ZodNumber;
                    stableCoinVolume: import("zod").ZodNumber;
                    datumSummaryHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    sampledBitsHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
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
                    xoredCandidateAverage: import("zod").ZodNumber;
                    sidechainChangesHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    sidechainSnapshotsHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                }, "strip", import("zod").ZodTypeAny, {
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
                stableLedger: import("zod").ZodArray<import("zod").ZodObject<{
                    transactionHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    version: import("zod").ZodString;
                    time: import("zod").ZodDate;
                    type: import("zod").ZodNativeEnum<typeof import("../types/TransactionType").default>;
                    expiresAtBlockHeight: import("zod").ZodNumber;
                    sources: import("zod").ZodArray<import("zod").ZodObject<{
                        sourceTransactionHash: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>>;
                        sourceOutputIndex: import("zod").ZodOptional<import("zod").ZodNumber>;
                        sourceAddressSignatureSettings: import("zod").ZodObject<{
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
                        sourceAddressSigners: import("zod").ZodArray<import("zod").ZodObject<{
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
                        sourceLedger: import("zod").ZodNativeEnum<typeof import("../types/LedgerType").default>;
                        blockClaimHeight: import("zod").ZodOptional<import("zod").ZodNumber>;
                        coinageHash: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                        sourceLedger: import("../types/LedgerType").default;
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
                        sourceLedger: import("../types/LedgerType").default;
                        sourceTransactionHash?: Buffer | undefined;
                        sourceOutputIndex?: number | undefined;
                        blockClaimHeight?: number | undefined;
                        coinageHash?: Buffer | undefined;
                    }>, "many">;
                    outputs: import("zod").ZodArray<import("zod").ZodObject<{
                        address: import("zod").ZodString;
                        centagons: import("zod").ZodEffects<import("zod").ZodBigInt, bigint, bigint>;
                        isBond: import("zod").ZodOptional<import("zod").ZodBoolean>;
                        isBurned: import("zod").ZodOptional<import("zod").ZodBoolean>;
                        addressOnSidechain: import("zod").ZodOptional<import("zod").ZodString>;
                        isSidechained: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                }, "strip", import("zod").ZodTypeAny, {
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
                        sourceLedger: import("../types/LedgerType").default;
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
                        sourceLedger: import("../types/LedgerType").default;
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
                sharesLedger: import("zod").ZodArray<import("zod").ZodObject<{
                    transactionHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    version: import("zod").ZodString;
                    time: import("zod").ZodDate;
                    type: import("zod").ZodNativeEnum<typeof import("../types/TransactionType").default>;
                    expiresAtBlockHeight: import("zod").ZodNumber;
                    sources: import("zod").ZodArray<import("zod").ZodObject<{
                        sourceTransactionHash: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>>;
                        sourceOutputIndex: import("zod").ZodOptional<import("zod").ZodNumber>;
                        sourceAddressSignatureSettings: import("zod").ZodObject<{
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
                        sourceAddressSigners: import("zod").ZodArray<import("zod").ZodObject<{
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
                        sourceLedger: import("zod").ZodNativeEnum<typeof import("../types/LedgerType").default>;
                        blockClaimHeight: import("zod").ZodOptional<import("zod").ZodNumber>;
                        coinageHash: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                        sourceLedger: import("../types/LedgerType").default;
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
                        sourceLedger: import("../types/LedgerType").default;
                        sourceTransactionHash?: Buffer | undefined;
                        sourceOutputIndex?: number | undefined;
                        blockClaimHeight?: number | undefined;
                        coinageHash?: Buffer | undefined;
                    }>, "many">;
                    outputs: import("zod").ZodArray<import("zod").ZodObject<{
                        address: import("zod").ZodString;
                        centagons: import("zod").ZodEffects<import("zod").ZodBigInt, bigint, bigint>;
                        isBond: import("zod").ZodOptional<import("zod").ZodBoolean>;
                        isBurned: import("zod").ZodOptional<import("zod").ZodBoolean>;
                        addressOnSidechain: import("zod").ZodOptional<import("zod").ZodString>;
                        isSidechained: import("zod").ZodOptional<import("zod").ZodBoolean>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                }, "strip", import("zod").ZodTypeAny, {
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
                        sourceLedger: import("../types/LedgerType").default;
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
                        sourceLedger: import("../types/LedgerType").default;
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
                coinages: import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodNativeEnum<typeof import("../types/CoinageType").default>;
                    hash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    centagons: import("zod").ZodEffects<import("zod").ZodBigInt, bigint, bigint>;
                    minimumClaimCentagons: import("zod").ZodEffects<import("zod").ZodBigInt, bigint, bigint>;
                    blockHeight: import("zod").ZodNumber;
                    expirationBlockHeight: import("zod").ZodNumber;
                    oldestClaimHeight: import("zod").ZodNumber;
                    grantAddress: import("zod").ZodString;
                    transfer: import("zod").ZodObject<{
                        coinageHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
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
                }, "strip", import("zod").ZodTypeAny, {
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
                datumSummary: import("zod").ZodObject<{
                    identity: import("zod").ZodString;
                    blockHeight: import("zod").ZodNumber;
                    averageXoredCandidates: import("zod").ZodNumber;
                    datumsPerMicronoteBatch: import("zod").ZodArray<import("zod").ZodObject<{
                        micronoteBatchUrl: import("zod").ZodString;
                        micronoteBatchIdentity: import("zod").ZodString;
                        micronoteIdsHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                        micronotesCount: import("zod").ZodNumber;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    webhitsClaimAddresses: import("zod").ZodArray<import("zod").ZodObject<{
                        viewOfTruthHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                        addressCounts: import("zod").ZodArray<import("zod").ZodObject<{
                            claimAddress: import("zod").ZodString;
                            count: import("zod").ZodNumber;
                        }, "strip", import("zod").ZodTypeAny, {
                            claimAddress: string;
                            count: number;
                        }, {
                            claimAddress: string;
                            count: number;
                        }>, "many">;
                    }, "strip", import("zod").ZodTypeAny, {
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
                    signature: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                }, "strip", import("zod").ZodTypeAny, {
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
                bitSampling: import("zod").ZodObject<{
                    bitDatumHistories: import("zod").ZodArray<import("zod").ZodObject<{
                        identity: import("zod").ZodString;
                        blockHeight: import("zod").ZodNumber;
                        averageXoredCandidates: import("zod").ZodNumber;
                        datumsPerMicronoteBatch: import("zod").ZodArray<import("zod").ZodObject<{
                            micronoteBatchUrl: import("zod").ZodString;
                            micronoteBatchIdentity: import("zod").ZodString;
                            micronoteIdsHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                            micronotesCount: import("zod").ZodNumber;
                        }, "strip", import("zod").ZodTypeAny, {
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
                        webhitsClaimAddresses: import("zod").ZodArray<import("zod").ZodObject<{
                            viewOfTruthHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                            addressCounts: import("zod").ZodArray<import("zod").ZodObject<{
                                claimAddress: import("zod").ZodString;
                                count: import("zod").ZodNumber;
                            }, "strip", import("zod").ZodTypeAny, {
                                claimAddress: string;
                                count: number;
                            }, {
                                claimAddress: string;
                                count: number;
                            }>, "many">;
                        }, "strip", import("zod").ZodTypeAny, {
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
                        signature: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                }, "strip", import("zod").ZodTypeAny, {
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
                sidechainGovernance: import("zod").ZodObject<{
                    authorizedSidechains: import("zod").ZodArray<import("zod").ZodObject<{
                        sidechainHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                        rootIdentity: import("zod").ZodString;
                        url: import("zod").ZodString;
                        transfer: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                            sidechainHash: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                            transferSignature: import("zod").ZodEffects<import("zod").ZodType<Buffer, import("zod").ZodTypeDef, Buffer>, Buffer, Buffer>;
                        }, "strip", import("zod").ZodTypeAny, {
                            sidechainHash: Buffer;
                            transferSignature: Buffer;
                        }, {
                            sidechainHash: Buffer;
                            transferSignature: Buffer;
                        }>, "many">>;
                    }, "strip", import("zod").ZodTypeAny, {
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
                }, "strip", import("zod").ZodTypeAny, {
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
            }, "strip", import("zod").ZodTypeAny, {
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
                        sourceLedger: import("../types/LedgerType").default;
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
                        sourceLedger: import("../types/LedgerType").default;
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
                        sourceLedger: import("../types/LedgerType").default;
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
                        sourceLedger: import("../types/LedgerType").default;
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
        }, "strip", import("zod").ZodTypeAny, {
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
                        sourceLedger: import("../types/LedgerType").default;
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
                        sourceLedger: import("../types/LedgerType").default;
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
                        sourceLedger: import("../types/LedgerType").default;
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
                        sourceLedger: import("../types/LedgerType").default;
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
        args: import("zod").ZodObject<{
            blockHeight: import("zod").ZodOptional<import("zod").ZodNumber>;
        }, "strip", import("zod").ZodTypeAny, {
            blockHeight?: number | undefined;
        }, {
            blockHeight?: number | undefined;
        }>;
        result: import("zod").ZodObject<{
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
    };
};
export type IMainchainApiTypes = IZodSchemaToApiTypes<typeof MainchainApiSchema>;
export type IMainchainApis = IZodHandlers<typeof MainchainApiSchema>;
export default MainchainApiSchema;
