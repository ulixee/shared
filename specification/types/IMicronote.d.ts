/// <reference types="node" />
import { z } from 'zod';
export declare const MicronoteSchema: z.ZodObject<{
    microgons: z.ZodNumber;
    micronoteId: z.ZodString;
    blockHeight: z.ZodNumber;
    batchSlug: z.ZodString;
    micronoteBatchUrl: z.ZodString;
    micronoteBatchIdentity: z.ZodString;
    micronoteSignature: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
    sidechainIdentity: z.ZodString;
    sidechainValidationSignature: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
    guaranteeBlockHeight: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    guaranteeBlockHeight: number;
    blockHeight: number;
    micronoteBatchUrl: string;
    micronoteBatchIdentity: string;
    batchSlug: string;
    sidechainIdentity: string;
    sidechainValidationSignature: Buffer;
    microgons: number;
    micronoteId: string;
    micronoteSignature: Buffer;
}, {
    guaranteeBlockHeight: number;
    blockHeight: number;
    micronoteBatchUrl: string;
    micronoteBatchIdentity: string;
    batchSlug: string;
    sidechainIdentity: string;
    sidechainValidationSignature: Buffer;
    microgons: number;
    micronoteId: string;
    micronoteSignature: Buffer;
}>;
type IMicronote = z.infer<typeof MicronoteSchema>;
export default IMicronote;
