/// <reference types="node" />
import { z } from 'zod';
export declare const AddressCountsSchema: z.ZodObject<{
    claimAddress: z.ZodString;
    count: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    claimAddress: string;
    count: number;
}, {
    claimAddress: string;
    count: number;
}>;
export declare const WebhitsClaimAddressSchema: z.ZodObject<{
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
}>;
type IWebhitsClaimAddress = z.infer<typeof WebhitsClaimAddressSchema>;
export default IWebhitsClaimAddress;
