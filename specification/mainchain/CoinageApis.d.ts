/// <reference types="node" />
import { z } from 'zod';
import { IZodSchemaToApiTypes } from '../utils/IZodApi';
export declare enum CoinageError {
    BAD_SIGNATURE = 0,
    NO_PERMISSIONS = 1,
    INVALID_PARAMETER = 2,
    INVALID_TYPE = 3
}
export declare const CoinageApiSchemas: {
    'Coinage.create': {
        args: z.ZodObject<{
            coinage: z.ZodObject<{
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
            }>;
        }, "strip", z.ZodTypeAny, {
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
        result: z.ZodObject<{
            accept: z.ZodBoolean;
            error: z.ZodNativeEnum<typeof CoinageError>;
        }, "strip", z.ZodTypeAny, {
            error: CoinageError;
            accept: boolean;
        }, {
            error: CoinageError;
            accept: boolean;
        }>;
    };
    'Coinage.created': {
        args: z.ZodObject<{
            coinage: z.ZodObject<{
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
            }>;
            nodeIdsAlreadySent: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
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
        result: z.ZodObject<{
            accept: z.ZodBoolean;
            error: z.ZodNativeEnum<typeof CoinageError>;
        }, "strip", z.ZodTypeAny, {
            error: CoinageError;
            accept: boolean;
        }, {
            error: CoinageError;
            accept: boolean;
        }>;
    };
};
type ICoinageApis = IZodSchemaToApiTypes<typeof CoinageApiSchemas>;
export default ICoinageApis;
