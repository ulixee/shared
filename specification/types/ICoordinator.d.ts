/// <reference types="node" />
import { z } from 'zod';
export declare const CoordinatorSchema: z.ZodObject<{
    identity: z.ZodString;
    reputation: z.ZodNumber;
    proofSignature: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
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
    proofSignature: Buffer;
    stakeSignature: {
        signature: Buffer;
        rootIdentity: string;
        blockHeight: number;
    };
    paymentAddress: string;
}, {
    identity: string;
    reputation: number;
    proofSignature: Buffer;
    stakeSignature: {
        signature: Buffer;
        rootIdentity: string;
        blockHeight: number;
    };
    paymentAddress: string;
}>;
type ICoordinator = z.infer<typeof CoordinatorSchema>;
export default ICoordinator;
