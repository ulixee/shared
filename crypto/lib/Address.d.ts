/// <reference types="node" />
import MerkleTree from '@ulixee/crypto/lib/MerkleTree';
import Identity from '@ulixee/crypto/lib/Identity';
import IAddressSignature from '@ulixee/specification/types/IAddressSignature';
import IAddressSettings from '../interfaces/IAddressSettings';
export default class Address {
    static defaultDirname: string;
    readonly bech32: string;
    addressSettings: IAddressSettings;
    ownersMerkleTree: MerkleTree;
    readonly transferSigners: Identity[];
    readonly claimSigners: Identity[];
    private readonly loadedIdentitiesAtIndexes;
    constructor(merkleTreeLeaves: Buffer[], settings: IAddressSettings, loadedIdentitiesAtIndexes: (Identity | undefined)[]);
    save(format?: boolean, filename?: string, relativeTo?: string): Promise<string>;
    sign(hash: Buffer, identityIndexes: number[], isClaim?: boolean): IAddressSignature;
    verifyKeyType(index: number, isClaim: boolean): void;
    equals(addressBech32: string): boolean;
    toJSON(): IAddressJson;
    static verify(addressBech32: string, hashedMessage: Buffer, signature: IAddressSignature, isClaim?: boolean): boolean;
    static createFromSigningIdentities(signingIdentities: Identity[], settings?: IAddressSettings): Address;
    static fromStored(stored: IAddressJson): Address;
    static readFromPath(filepath: string, relativeToDir?: string): Address;
    static readFromFile(addressBech32: string, relativeToDir?: string): Address;
    static getIdentityIndices(settings: IAddressSettings, isClaim: boolean): number[];
    static encodeAddress(treeRoot: Buffer): string;
    static decodeAddress(addressBech32: string): Buffer;
}
interface IAddressJson {
    bech32: string;
    merkleLeaves: Buffer[];
    settings: IAddressSettings;
    loadedKeysAtIndexes: (string | null)[];
}
export {};
