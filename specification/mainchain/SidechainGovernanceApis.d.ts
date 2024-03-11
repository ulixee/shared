/// <reference types="node" />
import { z } from 'zod';
import { IZodSchemaToApiTypes } from '../utils/IZodApi';
export declare enum SidechainGovernanceError {
    BAD_SIGNATURE = 0,
    NO_PERMISSIONS = 1
}
export declare const SidechainGovernanceSchemas: {
    'Sidechain.authorize': {
        args: z.ZodObject<{
            sidechain: z.ZodObject<{
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
            }>;
        }, "strip", z.ZodTypeAny, {
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
        result: z.ZodObject<{
            accept: z.ZodBoolean;
            error: z.ZodNativeEnum<typeof SidechainGovernanceError>;
        }, "strip", z.ZodTypeAny, {
            error: SidechainGovernanceError;
            accept: boolean;
        }, {
            error: SidechainGovernanceError;
            accept: boolean;
        }>;
    };
    'Sidechain.authorized': {
        args: z.ZodObject<{
            sidechain: z.ZodObject<{
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
            }>;
            nodeIdsAlreadySent: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
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
        result: z.ZodObject<{
            accept: z.ZodBoolean;
            error: z.ZodNativeEnum<typeof SidechainGovernanceError>;
        }, "strip", z.ZodTypeAny, {
            error: SidechainGovernanceError;
            accept: boolean;
        }, {
            error: SidechainGovernanceError;
            accept: boolean;
        }>;
    };
};
type ISidechainGovernanceApis = IZodSchemaToApiTypes<typeof SidechainGovernanceSchemas>;
export default ISidechainGovernanceApis;
