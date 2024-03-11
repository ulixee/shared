/// <reference types="node" />
import { z } from 'zod';
export declare const XoredCandidateSummarySchema: z.ZodObject<{
    identity: z.ZodString;
    reputation: z.ZodNumber;
    firstPingSignature: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
    secondPingSignature: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
    auditSignature: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
    stakeSignature: z.ZodObject<{
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
    paymentAddress: z.ZodString;
}, "strip", z.ZodTypeAny, {
    identity: string;
    reputation: number;
    stakeSignature: {
        signature: Buffer;
        rootIdentity: string;
        blockHeight: number;
    };
    paymentAddress: string;
    firstPingSignature: Buffer;
    secondPingSignature: Buffer;
    auditSignature: Buffer;
}, {
    identity: string;
    reputation: number;
    stakeSignature: {
        signature: Buffer;
        rootIdentity: string;
        blockHeight: number;
    };
    paymentAddress: string;
    firstPingSignature: Buffer;
    secondPingSignature: Buffer;
    auditSignature: Buffer;
}>;
type IXoredCandidateSummary = z.infer<typeof XoredCandidateSummarySchema>;
export default IXoredCandidateSummary;
