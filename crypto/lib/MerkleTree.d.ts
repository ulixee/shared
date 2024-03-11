/// <reference types="node" />
import IMerkleProof from '@ulixee/specification/types/IMerkleProof';
interface Layer {
    nodes: Buffer[];
}
/**
 * Class reprensenting a Merkle Tree - converted to typescript from:
 * https://github.com/miguelmota/merkletreejs
 *
 * @namespace MerkleTree
 */
export default class MerkleTree {
    readonly leaves: Buffer[];
    layers: Layer[];
    nodeHashAlgorithm: (data: Buffer | string) => Buffer;
    /**
     * @desc Constructs a Merkle Tree.
     * All nodes and leaves are stored as Buffers.
     * Lonely leaf nodes are promoted to the next level up without being hashed again.
     * @param {Buffer[]} leaves - Array of hashed leaves. Each leaf must be a Buffer.
     * @param  nodeHashAlgorithm? {(data: Buffer | string) => Buffer}: Buffer)  - if you need to override the algorithm for creating nodes
     *
     * const leaves = ['a', 'b', 'c'].map(x => createHash(x))
     *
     * const tree = new MerkleTree(leaves)
     */
    constructor(leaves: Buffer[], nodeHashAlgorithm?: (data: Buffer | string) => Buffer);
    /**
     * getRoot
     * @desc Returns the Merkle root hash as a Buffer.
     * @return {Buffer}
     * @example
     * const root = tree.getRoot()
     */
    getRoot(): Buffer;
    /**
     * getProof
     * @desc Returns the proof for a target leaf.
     * @param {Buffer} leaf - Target leaf
     * @param {Number} [index] - Target leaf index in leaves array.
     * Use if there are leaves containing duplicate data in order to distinguish it.
     * @return {IMerkleProof[]} - Array of objects containing a position property of type string
     * with values of 'left' or 'right' and a data property of type Buffer.
     * @example
     * const proof = tree.getProof(leaves[2])
     *
     * @example
     * const leaves = ['a', 'b', 'a'].map(x => sha256(x))
     * const tree = new MerkleTree(leaves, sha256)
     * const proof = tree.getProof(leaves[2], 2)
     */
    getProof(leaf: Buffer, index?: number): IMerkleProof[];
    getProofForIndex(index: number): IMerkleProof[];
    private buildLayer;
    private createPyramid;
    /**
     * verify
     * @desc Returns true if the proof path (array of hashes) can connect the target node
     * to the Merkle root.
     * @param {IMerkleProof[]} proof - Array of proof objects that should connect
     * target node to Merkle root.
     * @param {Buffer} targetNode - Target node Buffer
     * @param {Buffer} root - Merkle root Buffer
     * @param {function} nodeHashAlgorithm - Function to hash nodes
     * @return {Boolean}
     * @example
     * const root = tree.getRoot()
     * const proof = tree.getProof(leaves[2])
     * const verified = tree.verify(proof, leaves[2], root)
     *
     */
    static verify(proof: IMerkleProof[], targetNode: Buffer, root: Buffer, nodeHashAlgorithm?: (data: Buffer | string) => Buffer): boolean;
    /**
     * Get the index that the given proof correlates to. NOTE: only works in a balanced tree
     * @param proof {IMerkleProof[]}
     */
    static getLeafIndex(proof: IMerkleProof[]): number;
}
export {};
