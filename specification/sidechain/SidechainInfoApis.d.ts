/// <reference types="node" />
import { z } from 'zod';
import { IZodSchemaToApiTypes } from '../utils/IZodApi';
export declare const SidechainInfoApiSchemas: {
    'Sidechain.settings': {
        args: z.ZodObject<{
            identity: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            identity?: string | null | undefined;
        }, {
            identity?: string | null | undefined;
        }>;
        result: z.ZodObject<{
            version: z.ZodString;
            rootIdentities: z.ZodArray<z.ZodString, "many">;
            identityProofSignatures: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>, "many">>;
            latestBlockSettings: z.ZodObject<{
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
            settlementFeeMicrogons: z.ZodNumber;
            batchDurationMinutes: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            version: string;
            rootIdentities: string[];
            latestBlockSettings: {
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
            };
            settlementFeeMicrogons: number;
            batchDurationMinutes: number;
            identityProofSignatures?: Buffer[] | undefined;
        }, {
            version: string;
            rootIdentities: string[];
            latestBlockSettings: {
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
            };
            settlementFeeMicrogons: number;
            batchDurationMinutes: number;
            identityProofSignatures?: Buffer[] | undefined;
        }>;
    };
    'Sidechain.audit': {
        args: z.ZodOptional<z.ZodNullable<z.ZodUndefined>>;
        result: z.ZodObject<{
            auditDate: z.ZodDate;
            argonsInCirculation_e2: z.ZodBigInt;
            argonsBurnedYesterday_e2: z.ZodBigInt;
            argonsBurnedRolling30DayAverage_e2: z.ZodBigInt;
        }, "strip", z.ZodTypeAny, {
            auditDate: Date;
            argonsInCirculation_e2: bigint;
            argonsBurnedYesterday_e2: bigint;
            argonsBurnedRolling30DayAverage_e2: bigint;
        }, {
            auditDate: Date;
            argonsInCirculation_e2: bigint;
            argonsBurnedYesterday_e2: bigint;
            argonsBurnedRolling30DayAverage_e2: bigint;
        }>;
    };
    'Sidechain.openBatches': {
        args: z.ZodOptional<z.ZodNullable<z.ZodUndefined>>;
        result: z.ZodObject<{
            micronote: z.ZodArray<z.ZodObject<{
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
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            micronote: {
                micronoteBatchIdentity: string;
                batchHost: string;
                batchSlug: string;
                plannedClosingTime: Date;
                stopNewNotesTime: Date;
                minimumFundingCentagons: bigint;
                micronoteBatchAddress: string;
                sidechainIdentity: string;
                sidechainValidationSignature: Buffer;
            }[];
        }, {
            micronote: {
                micronoteBatchIdentity: string;
                batchHost: string;
                batchSlug: string;
                plannedClosingTime: Date;
                stopNewNotesTime: Date;
                minimumFundingCentagons: bigint;
                micronoteBatchAddress: string;
                sidechainIdentity: string;
                sidechainValidationSignature: Buffer;
            }[];
        }>;
    };
};
type ISidechainInfoApis = IZodSchemaToApiTypes<typeof SidechainInfoApiSchemas>;
export default ISidechainInfoApis;
