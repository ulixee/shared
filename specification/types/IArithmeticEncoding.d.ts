import { z } from 'zod';
export declare const ArithmeticEncodingSchema: z.ZodObject<{
    powerOf2: z.ZodNumber;
    multiplierE6: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    powerOf2: number;
    multiplierE6?: number | undefined;
}, {
    powerOf2: number;
    multiplierE6?: number | undefined;
}>;
type IArithmeticEncoding = z.infer<typeof ArithmeticEncodingSchema>;
export default IArithmeticEncoding;
