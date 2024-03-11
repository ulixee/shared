import { z } from 'zod';
export declare const TransactionOutputSchema: z.ZodObject<{
    address: z.ZodString;
    centagons: z.ZodEffects<z.ZodBigInt, bigint, bigint>;
    isBond: z.ZodOptional<z.ZodBoolean>;
    isBurned: z.ZodOptional<z.ZodBoolean>;
    addressOnSidechain: z.ZodOptional<z.ZodString>;
    isSidechained: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    centagons: bigint;
    address: string;
    isBond?: boolean | undefined;
    isBurned?: boolean | undefined;
    addressOnSidechain?: string | undefined;
    isSidechained?: boolean | undefined;
}, {
    centagons: bigint;
    address: string;
    isBond?: boolean | undefined;
    isBurned?: boolean | undefined;
    addressOnSidechain?: string | undefined;
    isSidechained?: boolean | undefined;
}>;
type ITransactionOutput = z.infer<typeof TransactionOutputSchema>;
export default ITransactionOutput;
