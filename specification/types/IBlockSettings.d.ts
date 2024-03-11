/// <reference types="node" />
import { z } from 'zod';
export declare const DatumSettingsSchema: z.ZodObject<{
    xoredCandidatesMinimum: z.ZodNumber;
    secondPingPercent: z.ZodNumber;
    auditorsCount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    xoredCandidatesMinimum: number;
    secondPingPercent: number;
    auditorsCount: number;
}, {
    xoredCandidatesMinimum: number;
    secondPingPercent: number;
    auditorsCount: number;
}>;
export declare const ApprovedSidechainSchema: z.ZodObject<{
    url: z.ZodString;
    rootIdentity: z.ZodString;
}, "strip", z.ZodTypeAny, {
    rootIdentity: string;
    url: string;
}, {
    rootIdentity: string;
    url: string;
}>;
export declare const BlockSettingsSchema: z.ZodObject<{
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
    datum: z.ZodObject<{
        xoredCandidatesMinimum: z.ZodNumber;
        secondPingPercent: z.ZodNumber;
        auditorsCount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        xoredCandidatesMinimum: number;
        secondPingPercent: number;
        auditorsCount: number;
    }, {
        xoredCandidatesMinimum: number;
        secondPingPercent: number;
        auditorsCount: number;
    }>;
    networkNodes: z.ZodNumber;
    bitSamplingsInBlock: z.ZodNumber;
    bitSamplingBlockAge: z.ZodNumber;
    blockHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
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
    height: z.ZodNumber;
    sidechains: z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        rootIdentity: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        rootIdentity: string;
        url: string;
    }, {
        rootIdentity: string;
        url: string;
    }>, "many">;
    minimumMicronoteBurnPercent: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    height: number;
    nextLinkTarget: {
        powerOf2: number;
        multiplierE6?: number | undefined;
    };
    xoredCandidateDistance: {
        powerOf2: number;
        multiplierE6?: number | undefined;
    };
    datum: {
        xoredCandidatesMinimum: number;
        secondPingPercent: number;
        auditorsCount: number;
    };
    networkNodes: number;
    bitSamplingsInBlock: number;
    bitSamplingBlockAge: number;
    blockHash: Buffer;
    sidechains: {
        rootIdentity: string;
        url: string;
    }[];
    minimumMicronoteBurnPercent: number;
}, {
    height: number;
    nextLinkTarget: {
        powerOf2: number;
        multiplierE6?: number | undefined;
    };
    xoredCandidateDistance: {
        powerOf2: number;
        multiplierE6?: number | undefined;
    };
    datum: {
        xoredCandidatesMinimum: number;
        secondPingPercent: number;
        auditorsCount: number;
    };
    networkNodes: number;
    bitSamplingsInBlock: number;
    bitSamplingBlockAge: number;
    blockHash: Buffer;
    sidechains: {
        rootIdentity: string;
        url: string;
    }[];
    minimumMicronoteBurnPercent: number;
}>;
type IBlockSettings = z.infer<typeof BlockSettingsSchema>;
export default IBlockSettings;
