/// <reference types="node" />
import { z } from 'zod';
export declare const StakeSignatureSchema: z.ZodObject<{
    signature: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
    blockHeight: z.ZodNumber;
    rootIdentity: z.ZodString;
}, "strip", z.ZodTypeAny, {
    signature: Buffer;
    rootIdentity: string;
    blockHeight: number;
}, {
    signature: Buffer;
    rootIdentity: string;
    blockHeight: number;
}>;
type IStakeSignature = z.infer<typeof StakeSignatureSchema>;
export default IStakeSignature;
