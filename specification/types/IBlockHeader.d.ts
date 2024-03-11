/// <reference types="node" />
import { z } from 'zod';
export declare const BlockHeaderSchema: z.ZodObject<{
    hash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
    version: z.ZodString;
    height: z.ZodNumber;
    linkNonce: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
    prevBlockHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
    nextLinkTarget: z.ZodObject<{
        powerOf2: z.ZodNumber;
        multiplierE6: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        powerOf2: number;
        multiplierE6?: number | undefined;
    }, {
        powerOf2: number;
        multiplierE6?: number | undefined;
    }>;
    time: z.ZodDate;
    stableMerkleRoot: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
    sharesMerkleRoot: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
    coinagesHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
    bondCentagonsCreated: z.ZodEffects<z.ZodBigInt, bigint, bigint>;
    stableCoinUSDCents: z.ZodNumber;
    stableCoinVolume: z.ZodNumber;
    datumSummaryHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
    sampledBitsHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
    xoredCandidateDistance: z.ZodObject<{
        powerOf2: z.ZodNumber;
        multiplierE6: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        powerOf2: number;
        multiplierE6?: number | undefined;
    }, {
        powerOf2: number;
        multiplierE6?: number | undefined;
    }>;
    xoredCandidateAverage: z.ZodNumber;
    sidechainChangesHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
    sidechainSnapshotsHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
}, "strip", z.ZodTypeAny, {
    hash: Buffer;
    version: string;
    time: Date;
    height: number;
    linkNonce: Buffer;
    prevBlockHash: Buffer;
    nextLinkTarget: {
        powerOf2: number;
        multiplierE6?: number | undefined;
    };
    stableMerkleRoot: Buffer;
    sharesMerkleRoot: Buffer;
    coinagesHash: Buffer;
    bondCentagonsCreated: bigint;
    stableCoinUSDCents: number;
    stableCoinVolume: number;
    datumSummaryHash: Buffer;
    sampledBitsHash: Buffer;
    xoredCandidateDistance: {
        powerOf2: number;
        multiplierE6?: number | undefined;
    };
    xoredCandidateAverage: number;
    sidechainChangesHash: Buffer;
    sidechainSnapshotsHash: Buffer;
}, {
    hash: Buffer;
    version: string;
    time: Date;
    height: number;
    linkNonce: Buffer;
    prevBlockHash: Buffer;
    nextLinkTarget: {
        powerOf2: number;
        multiplierE6?: number | undefined;
    };
    stableMerkleRoot: Buffer;
    sharesMerkleRoot: Buffer;
    coinagesHash: Buffer;
    bondCentagonsCreated: bigint;
    stableCoinUSDCents: number;
    stableCoinVolume: number;
    datumSummaryHash: Buffer;
    sampledBitsHash: Buffer;
    xoredCandidateDistance: {
        powerOf2: number;
        multiplierE6?: number | undefined;
    };
    xoredCandidateAverage: number;
    sidechainChangesHash: Buffer;
    sidechainSnapshotsHash: Buffer;
}>;
type IBlockHeader = z.infer<typeof BlockHeaderSchema>;
export default IBlockHeader;
