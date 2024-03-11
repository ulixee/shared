/// <reference types="node" />
import { z } from 'zod';
export declare const MicronoteBatchDatumsSchema: z.ZodObject<{
    micronoteBatchUrl: z.ZodString;
    micronoteBatchIdentity: z.ZodString;
    micronoteIdsHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
    micronotesCount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    micronoteBatchUrl: string;
    micronoteBatchIdentity: string;
    micronoteIdsHash: Buffer;
    micronotesCount: number;
}, {
    micronoteBatchUrl: string;
    micronoteBatchIdentity: string;
    micronoteIdsHash: Buffer;
    micronotesCount: number;
}>;
type IMicronoteBatchDatums = z.infer<typeof MicronoteBatchDatumsSchema>;
export default IMicronoteBatchDatums;
