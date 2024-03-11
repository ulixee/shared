"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hashUtils_1 = require("@ulixee/commons/lib/hashUtils");
const IMerkleProof_1 = require("@ulixee/specification/types/IMerkleProof");
/**
 * Use sha256 instead of default keccak used in the network.
 * This ensures the leaves have a different (albeit slight) encoding
 *
 * Keccak has different padding than sha256
 * @param content
 */
function createHash(content) {
    return (0, hashUtils_1.sha256)(content);
}
/**
 * Class reprensenting a Merkle Tree - converted to typescript from:
 * https://github.com/miguelmota/merkletreejs
 *
 * @namespace MerkleTree
 */
class MerkleTree {
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
    constructor(leaves, nodeHashAlgorithm) {
        // NOTE: should be different than leaf algorithm to block second pre-image attacks
        this.nodeHashAlgorithm = createHash;
        this.leaves = leaves;
        this.layers = [{ nodes: this.leaves }];
        if (nodeHashAlgorithm) {
            this.nodeHashAlgorithm = nodeHashAlgorithm;
        }
        this.createPyramid(this.leaves);
    }
    /**
     * getRoot
     * @desc Returns the Merkle root hash as a Buffer.
     * @return {Buffer}
     * @example
     * const root = tree.getRoot()
     */
    getRoot() {
        return this.layers[this.layers.length - 1].nodes[0] || Buffer.from([]);
    }
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
    getProof(leaf, index) {
        let finalIndex = index;
        if (typeof index !== 'number') {
            finalIndex = this.leaves.findIndex(x => Buffer.compare(x, leaf) === 0);
        }
        if (finalIndex <= -1) {
            return [];
        }
        return this.getProofForIndex(finalIndex);
    }
    getProofForIndex(index) {
        const proof = [];
        let finalIndex = index;
        if (finalIndex < 0) {
            finalIndex = this.leaves.length + finalIndex;
        }
        for (const layer of this.layers) {
            const isRightNode = finalIndex % 2;
            const pairIndex = isRightNode ? finalIndex - 1 : finalIndex + 1;
            if (pairIndex < layer.nodes.length) {
                const position = isRightNode ? IMerkleProof_1.MerklePosition.Left : IMerkleProof_1.MerklePosition.Right;
                const thisProof = { hash: layer.nodes[pairIndex], position };
                proof.push(thisProof);
            }
            // set finalIndex to parent finalIndex
            finalIndex = (finalIndex / 2) | 0;
        }
        return proof;
    }
    buildLayer(nodes) {
        const layer = { nodes: [] };
        /**
         * Go bottom up creating layers in a pyramid
         */
        for (let i = 0; i < nodes.length - 1; i += 2) {
            const left = nodes[i];
            const right = nodes[i + 1];
            const data = Buffer.concat([left, right]);
            const hash = this.nodeHashAlgorithm(data);
            layer.nodes.push(hash);
        }
        // is odd number of nodeTraversal
        if (nodes.length % 2 === 1) {
            // don't double hash - just push
            const alreadyHashed = nodes[nodes.length - 1];
            layer.nodes.push(alreadyHashed);
        }
        return layer;
    }
    createPyramid(nodes) {
        let nodeTraversal = nodes;
        while (nodeTraversal.length > 1) {
            /**
             * create layer of the pyramid
             */
            this.layers.push(this.buildLayer(nodeTraversal));
            /**
             * now combine entries from top layer (we keep going until there's only 1 entry)
             */
            nodeTraversal = this.layers[this.layers.length - 1].nodes;
        }
    }
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
    static verify(proof, targetNode, root, nodeHashAlgorithm = createHash) {
        let hash = targetNode;
        if (!proof.length || !targetNode || !root) {
            return false;
        }
        for (const node of proof) {
            const buffers = [hash];
            const nodeBuffer = node.hash;
            if (node.position === IMerkleProof_1.MerklePosition.Left) {
                buffers.unshift(nodeBuffer);
            }
            else {
                buffers.push(nodeBuffer);
            }
            hash = nodeHashAlgorithm(Buffer.concat(buffers));
        }
        return Buffer.compare(hash, root) === 0;
    }
    /**
     * Get the index that the given proof correlates to. NOTE: only works in a balanced tree
     * @param proof {IMerkleProof[]}
     */
    static getLeafIndex(proof) {
        let position = 0;
        let layer = 0;
        for (const p of proof) {
            if (p.position === IMerkleProof_1.MerklePosition.Left) {
                position += 2 ** layer;
            }
            layer += 1;
        }
        return position;
    }
}
exports.default = MerkleTree;
//# sourceMappingURL=MerkleTree.js.map