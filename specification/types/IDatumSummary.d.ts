/// <reference types="node" />
import { z } from 'zod';
export declare const DatumSummarySchema: z.ZodObject<{
    identity: z.ZodString;
    blockHeight: z.ZodNumber;
    averageXoredCandidates: z.ZodNumber;
    datumsPerMicronoteBatch: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    webhitsClaimAddresses: z.ZodArray<z.ZodObject<{
        viewOfTruthHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
        addressCounts: z.ZodArray<z.ZodObject<{
            claimAddress: z.ZodString;
            count: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            claimAddress: string;
            count: number;
        }, {
            claimAddress: string;
            count: number;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        viewOfTruthHash: Buffer;
        addressCounts: {
            claimAddress: string;
            count: number;
        }[];
    }, {
        viewOfTruthHash: Buffer;
        addressCounts: {
            claimAddress: string;
            count: number;
        }[];
    }>, "many">;
    signature: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
}, "strip", z.ZodTypeAny, {
    signature: Buffer;
    identity: string;
    blockHeight: number;
    averageXoredCandidates: number;
    datumsPerMicronoteBatch: {
        micronoteBatchUrl: string;
        micronoteBatchIdentity: string;
        micronoteIdsHash: Buffer;
        micronotesCount: number;
    }[];
    webhitsClaimAddresses: {
        viewOfTruthHash: Buffer;
        addressCounts: {
            claimAddress: string;
            count: number;
        }[];
    }[];
}, {
    signature: Buffer;
    identity: string;
    blockHeight: number;
    averageXoredCandidates: number;
    datumsPerMicronoteBatch: {
        micronoteBatchUrl: string;
        micronoteBatchIdentity: string;
        micronoteIdsHash: Buffer;
        micronotesCount: number;
    }[];
    webhitsClaimAddresses: {
        viewOfTruthHash: Buffer;
        addressCounts: {
            claimAddress: string;
            count: number;
        }[];
    }[];
}>;
type IDatumSummary = z.infer<typeof DatumSummarySchema>;
export default IDatumSummary;
