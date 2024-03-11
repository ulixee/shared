/// <reference types="node" />
import { z } from 'zod';
import { IZodSchemaToApiTypes } from '../utils/IZodApi';
export declare const MicronoteApiSchemas: {
    'Micronote.create': {
        args: z.ZodObject<{
            batchSlug: z.ZodString;
            address: z.ZodString;
            microgons: z.ZodNumber;
            fundsId: z.ZodOptional<z.ZodString>;
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
            isAuditable: z.ZodOptional<z.ZodBoolean>;
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
        result: z.ZodObject<{
            id: z.ZodString;
            micronoteSignature: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
            blockHeight: z.ZodNumber;
            fundsId: z.ZodString;
            guaranteeBlockHeight: z.ZodNumber;
            fundMicrogonsRemaining: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
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
        args: z.ZodObject<{
            batchSlug: z.ZodString;
            id: z.ZodString;
            identity: z.ZodString;
            signature: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
            microgons: z.ZodNumber;
            holdAuthorizationCode: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
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
        result: z.ZodObject<{
            holdAuthorizationCode: z.ZodOptional<z.ZodString>;
            holdId: z.ZodOptional<z.ZodString>;
            accepted: z.ZodBoolean;
            remainingBalance: z.ZodNumber;
            currentBlockHeight: z.ZodNumber;
            currentBlockHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
        }, "strip", z.ZodTypeAny, {
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
        args: z.ZodObject<{
            batchSlug: z.ZodString;
            id: z.ZodString;
            identity: z.ZodString;
            tokenAllocation: z.ZodRecord<z.ZodString, z.ZodNumber>;
            signature: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
            holdId: z.ZodOptional<z.ZodString>;
            isFinal: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
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
        result: z.ZodObject<{
            finalCost: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            finalCost?: number | undefined;
        }, {
            finalCost?: number | undefined;
        }>;
    };
};
type IMicronoteApis = IZodSchemaToApiTypes<typeof MicronoteApiSchemas>;
export default IMicronoteApis;
