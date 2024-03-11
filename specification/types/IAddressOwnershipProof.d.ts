/// <reference types="node" />
import { z } from 'zod';
export declare const AddressOwnershipProofSchema: z.ZodObject<{
    signature: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
    identity: z.ZodString;
    ownershipMerkleProofs: z.ZodArray<z.ZodObject<{
        position: z.ZodNativeEnum<typeof import("./IMerkleProof").MerklePosition>;
        hash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
    }, "strip", z.ZodTypeAny, {
        position: import("./IMerkleProof").MerklePosition;
        hash: Buffer;
    }, {
        position: import("./IMerkleProof").MerklePosition;
        hash: Buffer;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    signature: Buffer;
    identity: string;
    ownershipMerkleProofs: {
        position: import("./IMerkleProof").MerklePosition;
        hash: Buffer;
    }[];
}, {
    signature: Buffer;
    identity: string;
    ownershipMerkleProofs: {
        position: import("./IMerkleProof").MerklePosition;
        hash: Buffer;
    }[];
}>;
type IAddressOwnershipProof = z.infer<typeof AddressOwnershipProofSchema>;
export default IAddressOwnershipProof;
