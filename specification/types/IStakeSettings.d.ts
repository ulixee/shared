/// <reference types="node" />
import { z } from 'zod';
export declare const StakeSettingsSchema: z.ZodObject<{
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
type IStateSettings = z.infer<typeof StakeSettingsSchema>;
export default IStateSettings;
