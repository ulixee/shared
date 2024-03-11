"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MerkleTree_1 = require("@ulixee/crypto/lib/MerkleTree");
const path = require("path");
const fs = require("fs");
const Identity_1 = require("@ulixee/crypto/lib/Identity");
const TypeSerializer_1 = require("@ulixee/commons/lib/TypeSerializer");
const bufferUtils_1 = require("@ulixee/commons/lib/bufferUtils");
const IAddressSettings_1 = require("../interfaces/IAddressSettings");
const AddressOwnersTree_1 = require("./AddressOwnersTree");
const AddressSignature_1 = require("./AddressSignature");
let isFilepathInitialized = false;
class Address {
    constructor(merkleTreeLeaves, settings, loadedIdentitiesAtIndexes) {
        this.transferSigners = [];
        this.claimSigners = [];
        this.loadedIdentitiesAtIndexes = [];
        this.loadedIdentitiesAtIndexes = loadedIdentitiesAtIndexes;
        this.addressSettings = settings ?? {};
        this.addressSettings.signerTypes ??= loadedIdentitiesAtIndexes.map(() => IAddressSettings_1.UniversalSigner);
        for (let i = 0; i <= loadedIdentitiesAtIndexes.length; i += 1) {
            if (loadedIdentitiesAtIndexes[i]) {
                const keyType = this.addressSettings.signerTypes[i];
                if (keyType === IAddressSettings_1.UniversalSigner || keyType === IAddressSettings_1.TransferSigner) {
                    this.transferSigners.push(loadedIdentitiesAtIndexes[i]);
                }
                if (keyType === IAddressSettings_1.UniversalSigner || keyType === IAddressSettings_1.ClaimsSigner) {
                    this.claimSigners.push(loadedIdentitiesAtIndexes[i]);
                }
            }
        }
        this.addressSettings.transferSignatureSettings ||= this.transferSigners.length;
        this.addressSettings.claimSignatureSettings ||= 1;
        this.ownersMerkleTree = new MerkleTree_1.default(merkleTreeLeaves);
        this.bech32 = Address.encodeAddress(this.ownersMerkleTree.getRoot());
    }
    async save(format = false, filename, relativeTo) {
        const basePath = relativeTo || path.join(process.cwd(), Address.defaultDirname);
        if (!isFilepathInitialized) {
            if (!fs.existsSync(basePath))
                fs.mkdirSync(basePath, { recursive: true });
            isFilepathInitialized = true;
        }
        const json = TypeSerializer_1.default.stringify(this.toJSON(), { format });
        const filepath = path.resolve(basePath, `${filename || this.bech32}.json`);
        if (fs.existsSync(filepath)) {
            throw new Error('You attempted to overwrite an existing address!!');
        }
        await fs.promises.writeFile(filepath, json, { encoding: 'utf8' });
        return filepath;
    }
    sign(hash, identityIndexes, isClaim = false) {
        const identities = [];
        for (let i = 0; i < this.loadedIdentitiesAtIndexes.length; i += 1) {
            if (!identityIndexes.includes(i))
                continue;
            this.verifyKeyType(i, isClaim);
            const key = this.loadedIdentitiesAtIndexes[i];
            if (key)
                identities.push(key);
        }
        return AddressSignature_1.default.create(hash, identities, this.ownersMerkleTree, this.addressSettings, isClaim);
    }
    verifyKeyType(index, isClaim) {
        const keyType = this.addressSettings.signerTypes[index];
        const isUniversalKey = keyType === IAddressSettings_1.UniversalSigner;
        if (!isUniversalKey) {
            if (isClaim && keyType !== IAddressSettings_1.ClaimsSigner)
                throw new Error(`Invalid key index provided (${index}). Index not valid for claim transactions.`);
            if (!isClaim && keyType !== IAddressSettings_1.TransferSigner)
                throw new Error(`Invalid key index provided (${index}). Index not valid for transfer transactions.`);
        }
    }
    equals(addressBech32) {
        return this.bech32 === addressBech32;
    }
    toJSON() {
        return {
            settings: this.addressSettings,
            bech32: this.bech32,
            merkleLeaves: this.ownersMerkleTree.leaves,
            loadedKeysAtIndexes: this.loadedIdentitiesAtIndexes.map(x => (x ? x.export() : null)),
        };
    }
    static verify(addressBech32, hashedMessage, signature, isClaim = false) {
        const treeRoot = this.decodeAddress(addressBech32);
        const addressSignature = new AddressSignature_1.default(treeRoot, signature);
        return !addressSignature.isInvalid(hashedMessage, isClaim);
    }
    static createFromSigningIdentities(signingIdentities, settings) {
        settings ??= { signerTypes: signingIdentities.map(() => IAddressSettings_1.UniversalSigner) };
        settings.transferSignatureSettings ??= settings.signerTypes.filter(x => x === IAddressSettings_1.UniversalSigner || x === IAddressSettings_1.TransferSigner).length;
        settings.claimSignatureSettings ??= 1;
        const merkleTree = AddressOwnersTree_1.default.create(signingIdentities.map(x => x.bech32), settings);
        settings.signerTypes ??= signingIdentities.map(() => IAddressSettings_1.UniversalSigner);
        return new Address(merkleTree.leaves, settings, signingIdentities);
    }
    static fromStored(stored) {
        const { merkleLeaves, loadedKeysAtIndexes, bech32, settings } = stored;
        const address = new Address(merkleLeaves, settings, loadedKeysAtIndexes.map(x => (x ? Identity_1.default.loadFromPem(x) : null)));
        if (address.bech32 !== bech32)
            throw new Error(`Failed to load Address. Different key calculated. (calculated: ${address.bech32}, stored: ${bech32})`);
        return address;
    }
    static readFromPath(filepath, relativeToDir = process.cwd()) {
        if (!path.isAbsolute(filepath))
            filepath = path.resolve(relativeToDir, filepath);
        const data = fs.readFileSync(filepath, { encoding: 'utf8' });
        const address = TypeSerializer_1.default.parse(data);
        return Address.fromStored(address);
    }
    static readFromFile(addressBech32, relativeToDir = process.cwd()) {
        const filepath = path.resolve(relativeToDir, Address.defaultDirname, `${addressBech32}.json`);
        return Address.readFromPath(filepath);
    }
    static getIdentityIndices(settings, isClaim) {
        const identityIndices = [];
        for (let i = 0; i < settings.signerTypes.length; i += 1) {
            const type = settings.signerTypes[i];
            if (type === IAddressSettings_1.UniversalSigner)
                identityIndices.push(i);
            else if (isClaim && type === IAddressSettings_1.ClaimsSigner)
                identityIndices.push(i);
            else if (!isClaim && type === IAddressSettings_1.TransferSigner)
                identityIndices.push(i);
        }
        return identityIndices;
    }
    static encodeAddress(treeRoot) {
        return (0, bufferUtils_1.encodeBuffer)(treeRoot, 'ar');
    }
    static decodeAddress(addressBech32) {
        return (0, bufferUtils_1.decodeBuffer)(addressBech32, 'ar');
    }
}
Address.defaultDirname = 'addresses';
exports.default = Address;
//# sourceMappingURL=Address.js.map