/// <reference types="node" />
import { z } from 'zod';
export declare const AuthorizedSidechainTransferSchema: z.ZodObject<{
    sidechainHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
    transferSignature: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
}, "strip", z.ZodTypeAny, {
    sidechainHash: Buffer;
    transferSignature: Buffer;
}, {
    sidechainHash: Buffer;
    transferSignature: Buffer;
}>;
export declare const AuthorizedSidechainSchema: z.ZodObject<{
    sidechainHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
    rootIdentity: z.ZodString;
    url: z.ZodString;
    transfer: z.ZodOptional<z.ZodArray<z.ZodObject<{
        sidechainHash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
        transferSignature: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
    }, "strip", z.ZodTypeAny, {
        sidechainHash: Buffer;
        transferSignature: Buffer;
    }, {
        sidechainHash: Buffer;
        transferSignature: Buffer;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    rootIdentity: string;
    sidechainHash: Buffer;
    url: string;
    transfer?: {
        sidechainHash: Buffer;
        transferSignature: Buffer;
    }[] | undefined;
}, {
    rootIdentity: string;
    sidechainHash: Buffer;
    url: string;
    transfer?: {
        sidechainHash: Buffer;
        transferSignature: Buffer;
    }[] | undefined;
}>;
type IAuthorizedSidechain = z.infer<typeof AuthorizedSidechainSchema>;
type IAuthorizedSidechainTransfer = z.infer<typeof AuthorizedSidechainTransferSchema>;
export { IAuthorizedSidechainTransfer };
export default IAuthorizedSidechain;
