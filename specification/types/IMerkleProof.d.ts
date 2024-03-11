/// <reference types="node" />
import { z } from 'zod';
declare enum MerklePosition {
    Left = 0,
    Right = 1
}
export declare const MerkleProofSchema: z.ZodObject<{
    position: z.ZodNativeEnum<typeof MerklePosition>;
    hash: z.ZodEffects<z.ZodType<Buffer, z.ZodTypeDef, Buffer>, Buffer, Buffer>;
}, "strip", z.ZodTypeAny, {
    position: MerklePosition;
    hash: Buffer;
}, {
    position: MerklePosition;
    hash: Buffer;
}>;
type IMerkleProof = z.infer<typeof MerkleProofSchema>;
export { MerklePosition };
export default IMerkleProof;
