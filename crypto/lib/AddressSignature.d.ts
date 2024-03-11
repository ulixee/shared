/// <reference types="node" />
import { IAddressOwnershipProof, IAddressSignature } from '@ulixee/specification';
import Identity from '@ulixee/crypto/lib/Identity';
import MerkleTree from '@ulixee/crypto/lib/MerkleTree';
import IAddressSettings from '../interfaces/IAddressSettings';
export default class AddressSignature {
    readonly treeRoot: Buffer;
    readonly signature: IAddressSignature;
    get signatureSettings(): IAddressSignature['signatureSettings'];
    constructor(treeRoot: Buffer, signature: IAddressSignature);
    isValidSignaturePosition(isClaim: boolean): boolean;
    isValidWalletOwnershipProof(owner: IAddressOwnershipProof): boolean;
    isValidSignatureSettingsProof(): boolean;
    isInvalid(messageHash: Buffer, isClaim: boolean): string;
    static buildSignatureSettings(addressTree: MerkleTree, addressSettings: IAddressSettings, isClaim?: boolean): IAddressSignature['signatureSettings'];
    static create(hash: Buffer, identities: Identity[], addressOwnersTree: MerkleTree, addressSettings: IAddressSettings, isClaim?: boolean): IAddressSignature;
    static verify(address: string, signature: IAddressSignature, messageHash: Buffer, isClaim: boolean): string | null;
}
