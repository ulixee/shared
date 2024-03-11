/// <reference types="node" />
import { z } from 'zod';
export declare const ProofOfKnowledgeSchema: z.ZodObject<{
    hash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
    micronoteId: z.ZodString;
    micronoteBlockHeight: z.ZodNumber;
    blockHeight: z.ZodNumber;
    xoredCandidates: z.ZodArray<z.ZodObject<{
        nodeId: z.ZodString;
        identity: z.ZodString;
        publicIp: z.ZodString;
        publicPort: z.ZodNumber;
        reputation: z.ZodNumber;
        signature: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
        available: z.ZodBoolean;
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
        pricePerKb: z.ZodNumber;
        pricePerQuery: z.ZodNumber;
        firstPingSignature: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
        secondPingSignature: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
        result: z.ZodAny;
        resultHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
        webhitsClaimAddress: z.ZodString;
        resultSignature: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
        resultError: z.ZodObject<{
            name: z.ZodString;
            description: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            description: string;
        }, {
            name: string;
            description: string;
        }>;
        isConsensusResult: z.ZodBoolean;
        isHighReputationRunner: z.ZodBoolean;
        paymentAddress: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        signature: Buffer;
        identity: string;
        reputation: number;
        stakeSignature: {
            signature: Buffer;
            rootIdentity: string;
            blockHeight: number;
        };
        paymentAddress: string;
        nodeId: string;
        publicIp: string;
        publicPort: number;
        available: boolean;
        pricePerKb: number;
        pricePerQuery: number;
        firstPingSignature: Buffer;
        secondPingSignature: Buffer;
        resultHash: Buffer;
        webhitsClaimAddress: string;
        resultSignature: Buffer;
        resultError: {
            name: string;
            description: string;
        };
        isConsensusResult: boolean;
        isHighReputationRunner: boolean;
        result?: any;
    }, {
        signature: Buffer;
        identity: string;
        reputation: number;
        stakeSignature: {
            signature: Buffer;
            rootIdentity: string;
            blockHeight: number;
        };
        paymentAddress: string;
        nodeId: string;
        publicIp: string;
        publicPort: number;
        available: boolean;
        pricePerKb: number;
        pricePerQuery: number;
        firstPingSignature: Buffer;
        secondPingSignature: Buffer;
        resultHash: Buffer;
        webhitsClaimAddress: string;
        resultSignature: Buffer;
        resultError: {
            name: string;
            description: string;
        };
        isConsensusResult: boolean;
        isHighReputationRunner: boolean;
        result?: any;
    }>, "many">;
    coordinator: z.ZodObject<{
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
    decoderHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
    decoderReputation: z.ZodNumber;
    identityReputationChanges: z.ZodRecord<z.ZodString, z.ZodNumber>;
    isBlockEligible: z.ZodBoolean;
    resultHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
    webhitsClaimAddress: z.ZodString;
    viewOfTruthHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
    maxBasePricePerKb: z.ZodNumber;
    maxBasePricePerQuery: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    hash: Buffer;
    blockHeight: number;
    viewOfTruthHash: Buffer;
    micronoteId: string;
    resultHash: Buffer;
    webhitsClaimAddress: string;
    micronoteBlockHeight: number;
    xoredCandidates: {
        signature: Buffer;
        identity: string;
        reputation: number;
        stakeSignature: {
            signature: Buffer;
            rootIdentity: string;
            blockHeight: number;
        };
        paymentAddress: string;
        nodeId: string;
        publicIp: string;
        publicPort: number;
        available: boolean;
        pricePerKb: number;
        pricePerQuery: number;
        firstPingSignature: Buffer;
        secondPingSignature: Buffer;
        resultHash: Buffer;
        webhitsClaimAddress: string;
        resultSignature: Buffer;
        resultError: {
            name: string;
            description: string;
        };
        isConsensusResult: boolean;
        isHighReputationRunner: boolean;
        result?: any;
    }[];
    coordinator: {
        identity: string;
        reputation: number;
        proofSignature: Buffer;
        stakeSignature: {
            signature: Buffer;
            rootIdentity: string;
            blockHeight: number;
        };
        paymentAddress: string;
    };
    decoderHash: Buffer;
    decoderReputation: number;
    identityReputationChanges: Record<string, number>;
    isBlockEligible: boolean;
    maxBasePricePerKb: number;
    maxBasePricePerQuery: number;
}, {
    hash: Buffer;
    blockHeight: number;
    viewOfTruthHash: Buffer;
    micronoteId: string;
    resultHash: Buffer;
    webhitsClaimAddress: string;
    micronoteBlockHeight: number;
    xoredCandidates: {
        signature: Buffer;
        identity: string;
        reputation: number;
        stakeSignature: {
            signature: Buffer;
            rootIdentity: string;
            blockHeight: number;
        };
        paymentAddress: string;
        nodeId: string;
        publicIp: string;
        publicPort: number;
        available: boolean;
        pricePerKb: number;
        pricePerQuery: number;
        firstPingSignature: Buffer;
        secondPingSignature: Buffer;
        resultHash: Buffer;
        webhitsClaimAddress: string;
        resultSignature: Buffer;
        resultError: {
            name: string;
            description: string;
        };
        isConsensusResult: boolean;
        isHighReputationRunner: boolean;
        result?: any;
    }[];
    coordinator: {
        identity: string;
        reputation: number;
        proofSignature: Buffer;
        stakeSignature: {
            signature: Buffer;
            rootIdentity: string;
            blockHeight: number;
        };
        paymentAddress: string;
    };
    decoderHash: Buffer;
    decoderReputation: number;
    identityReputationChanges: Record<string, number>;
    isBlockEligible: boolean;
    maxBasePricePerKb: number;
    maxBasePricePerQuery: number;
}>;
type IProofOfKnowledge = z.infer<typeof ProofOfKnowledgeSchema>;
export default IProofOfKnowledge;
