import { z } from 'zod';
import { IZodSchemaToApiTypes } from '../utils/IZodApi';
export declare const AddressApiSchemas: {
    'Address.getBalance': {
        args: z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>;
        result: z.ZodObject<{
            balance: z.ZodBigInt;
        }, "strip", z.ZodTypeAny, {
            balance: bigint;
        }, {
            balance: bigint;
        }>;
    };
    'Address.register': {
        args: z.ZodObject<{
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
        }, {
            address: string;
        }>;
        result: z.ZodObject<{
            success: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            success: boolean;
        }, {
            success: boolean;
        }>;
    };
};
type IAddressApis = IZodSchemaToApiTypes<typeof AddressApiSchemas>;
export default IAddressApis;
