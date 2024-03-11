/// <reference types="node" />
import { z } from 'zod';
export declare const addressValidation: z.ZodString;
export declare const identityValidation: z.ZodString;
export declare const hashValidation: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
export declare const isHex: RegExp;
export declare const signatureValidation: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
export declare const blockHeightValidation: z.ZodNumber;
export declare const micronoteIdValidation: z.ZodString;
export declare const centagonTokenValidation: z.ZodEffects<z.ZodBigInt, bigint, bigint>;
export declare const micronoteTokenValidation: z.ZodNumber;
