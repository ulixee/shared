/// <reference types="node" />
import { z } from 'zod';
import { IZodSchemaToApiTypes } from '../utils/IZodApi';
import { LedgerType, TransactionError } from '../index';
export declare const TransactionApiSchemas: {
    'Transaction.created': {
        args: z.ZodObject<{
            transaction: z.ZodObject<{
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
            }>;
            ledger: z.ZodNativeEnum<typeof LedgerType>;
            nodeIdsAlreadySent: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            ledger: LedgerType;
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
            };
        }, {
            ledger: LedgerType;
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
            };
        }>;
        result: z.ZodObject<{
            accept: z.ZodBoolean;
            error: z.ZodNativeEnum<typeof TransactionError>;
            message: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            error: TransactionError;
            accept: boolean;
            message?: string | undefined;
        }, {
            error: TransactionError;
            accept: boolean;
            message?: string | undefined;
        }>;
    };
    'Transaction.transfer': {
        args: z.ZodObject<{
            transaction: z.ZodObject<{
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
            }>;
            ledger: z.ZodNativeEnum<typeof LedgerType>;
        }, "strip", z.ZodTypeAny, {
            ledger: LedgerType;
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
            };
        }, {
            ledger: LedgerType;
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
            };
        }>;
        result: z.ZodObject<{
            preliminaryBlockHeight: z.ZodNumber;
            error: z.ZodNativeEnum<typeof TransactionError>;
            message: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            error: TransactionError;
            preliminaryBlockHeight: number;
            message?: string | undefined;
        }, {
            error: TransactionError;
            preliminaryBlockHeight: number;
            message?: string | undefined;
        }>;
    };
    'Transaction.claim': {
        args: z.ZodObject<{
            transaction: z.ZodObject<{
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
            }>;
        }, "strip", z.ZodTypeAny, {
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
            };
        }>;
        result: z.ZodObject<{
            preliminaryBlockHeight: z.ZodNumber;
            error: z.ZodNativeEnum<typeof TransactionError>;
            message: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            error: TransactionError;
            preliminaryBlockHeight: number;
            message?: string | undefined;
        }, {
            error: TransactionError;
            preliminaryBlockHeight: number;
            message?: string | undefined;
        }>;
    };
    'Transaction.purchase': {
        args: z.ZodObject<{
            transaction: z.ZodObject<{
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
            }>;
        }, "strip", z.ZodTypeAny, {
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
            };
        }>;
        result: z.ZodObject<{
            preliminaryBlockHeight: z.ZodNumber;
            error: z.ZodNativeEnum<typeof TransactionError>;
            message: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            error: TransactionError;
            preliminaryBlockHeight: number;
            message?: string | undefined;
        }, {
            error: TransactionError;
            preliminaryBlockHeight: number;
            message?: string | undefined;
        }>;
    };
    'Transaction.verifyInBlock': {
        args: z.ZodObject<{
            transactionHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
            transactionIndex: z.ZodNumber;
            blockHeight: z.ZodNumber;
            ledger: z.ZodNativeEnum<typeof LedgerType>;
        }, "strip", z.ZodTypeAny, {
            blockHeight: number;
            transactionHash: Buffer;
            ledger: LedgerType;
            transactionIndex: number;
        }, {
            blockHeight: number;
            transactionHash: Buffer;
            ledger: LedgerType;
            transactionIndex: number;
        }>;
        result: z.ZodObject<{
            proofs: z.ZodArray<z.ZodObject<{
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
        args: z.ZodObject<{
            transactionHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
        }, "strip", z.ZodTypeAny, {
            transactionHash: Buffer;
        }, {
            transactionHash: Buffer;
        }>;
        result: z.ZodObject<{
            transaction: z.ZodObject<{
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
            }>;
            blockHeight: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
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
            };
        }>;
    };
};
type ITransactionApis = IZodSchemaToApiTypes<typeof TransactionApiSchemas>;
export default ITransactionApis;
