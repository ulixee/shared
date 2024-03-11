/// <reference types="node" />
import { z } from 'zod';
export declare const MicronoteBatchSchema: z.ZodObject<{
    batchHost: z.ZodString;
    batchSlug: z.ZodString;
    plannedClosingTime: z.ZodDate;
    stopNewNotesTime: z.ZodDate;
    minimumFundingCentagons: z.ZodEffects<z.ZodBigInt, bigint, bigint>;
    micronoteBatchIdentity: z.ZodString;
    micronoteBatchAddress: z.ZodString;
    sidechainIdentity: z.ZodString;
    sidechainValidationSignature: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
}, "strip", z.ZodTypeAny, {
    micronoteBatchIdentity: string;
    batchHost: string;
    batchSlug: string;
    plannedClosingTime: Date;
    stopNewNotesTime: Date;
    minimumFundingCentagons: bigint;
    micronoteBatchAddress: string;
    sidechainIdentity: string;
    sidechainValidationSignature: Buffer;
}, {
    micronoteBatchIdentity: string;
    batchHost: string;
    batchSlug: string;
    plannedClosingTime: Date;
    stopNewNotesTime: Date;
    minimumFundingCentagons: bigint;
    micronoteBatchAddress: string;
    sidechainIdentity: string;
    sidechainValidationSignature: Buffer;
}>;
type IMicronoteBatch = z.infer<typeof MicronoteBatchSchema>;
export default IMicronoteBatch;
