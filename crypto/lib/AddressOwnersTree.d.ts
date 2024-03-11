/// <reference types="node" />
import MerkleTree from '@ulixee/crypto/lib/MerkleTree';
import { IMerkleProof } from '@ulixee/specification';
import IAddressSettings from '../interfaces/IAddressSettings';
export default class AddressOwnersTree {
    static getProof(identity: string, isClaim: boolean, merkleTree: MerkleTree): {
        signatureSettings: IMerkleProof[];
        ownerIdentityProof: IMerkleProof[];
    };
    static getIdentityIsOwnerProof(merkleTree: MerkleTree, identity: string): IMerkleProof[];
    static getSignatureSettingsProof(merkleTree: MerkleTree, isClaim: boolean): IMerkleProof[];
    static create(identities: string[], details: IAddressSettings): MerkleTree;
    static createLeaf(signatureSettings: number, salt: Buffer, publicKeyIndices: number[]): Buffer;
}
