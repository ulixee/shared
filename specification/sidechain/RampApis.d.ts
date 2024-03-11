import { z } from 'zod';
import { IZodSchemaToApiTypes } from '../utils/IZodApi';
export declare const RampApiSchemas: {
    'Ramp.audit': {
        args: z.ZodOptional<z.ZodNullable<z.ZodUndefined>>;
        result: z.ZodObject<{
            auditDate: z.ZodDate;
            usdcToArgonConversionRate: z.ZodNumber;
            argonsInCirculation_e6: z.ZodBigInt;
            usdcReserves_e6: z.ZodBigInt;
            usdcReserveAddresses: z.ZodArray<z.ZodObject<{
                blockchain: z.ZodString;
                blockchainNetwork: z.ZodString;
                address: z.ZodString;
                ownershipProof: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                address: string;
                blockchain: string;
                blockchainNetwork: string;
                ownershipProof: string;
            }, {
                address: string;
                blockchain: string;
                blockchainNetwork: string;
                ownershipProof: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            auditDate: Date;
            usdcToArgonConversionRate: number;
            argonsInCirculation_e6: bigint;
            usdcReserves_e6: bigint;
            usdcReserveAddresses: {
                address: string;
                blockchain: string;
                blockchainNetwork: string;
                ownershipProof: string;
            }[];
        }, {
            auditDate: Date;
            usdcToArgonConversionRate: number;
            argonsInCirculation_e6: bigint;
            usdcReserves_e6: bigint;
            usdcReserveAddresses: {
                address: string;
                blockchain: string;
                blockchainNetwork: string;
                ownershipProof: string;
            }[];
        }>;
    };
    'Ramp.createTransferInAddress': {
        args: z.ZodObject<{
            blockchain: z.ZodEnum<["ethereum", "polygon"]>;
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
            blockchain: "ethereum" | "polygon";
        }, {
            address: string;
            blockchain: "ethereum" | "polygon";
        }>;
        result: z.ZodObject<{
            blockchainNetwork: z.ZodString;
            address: z.ZodString;
            expirationDate: z.ZodDate;
        }, "strip", z.ZodTypeAny, {
            address: string;
            blockchainNetwork: string;
            expirationDate: Date;
        }, {
            address: string;
            blockchainNetwork: string;
            expirationDate: Date;
        }>;
    };
};
type IRampApis = IZodSchemaToApiTypes<typeof RampApiSchemas>;
export default IRampApis;
