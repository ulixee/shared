"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hashUtils_1 = require("@ulixee/commons/lib/hashUtils");
const assert = require("assert");
const MerkleTree_1 = require("@ulixee/crypto/lib/MerkleTree");
const IAddressSettings_1 = require("../interfaces/IAddressSettings");
class AddressOwnersTree {
    static getProof(identity, isClaim, merkleTree) {
        const signatureSettings = AddressOwnersTree.getSignatureSettingsProof(merkleTree, isClaim);
        const ownerIdentityProof = AddressOwnersTree.getIdentityIsOwnerProof(merkleTree, identity);
        return {
            signatureSettings,
            ownerIdentityProof,
        };
    }
    static getIdentityIsOwnerProof(merkleTree, identity) {
        return merkleTree.getProof((0, hashUtils_1.sha256)(identity));
    }
    static getSignatureSettingsProof(merkleTree, isClaim) {
        return merkleTree.getProofForIndex(isClaim ? -1 : -2);
    }
    static create(identities, details) {
        const { claimSignatureSettings } = details;
        let signatureSettings = details.transferSignatureSettings;
        assert(identities.length > 0 && identities.length <= 6, 'Must provide 1-6 valid public key(s)');
        assert(signatureSettings ? signatureSettings < 7 : true, 'Must require 6 or less signatures in a multisig');
        if (!signatureSettings) {
            signatureSettings = identities.length;
        }
        const claimKeyIndices = [];
        const transferKeyIndices = [];
        for (let i = 0; i < details.signerTypes.length; i += 1) {
            const type = details.signerTypes[i];
            if (type === IAddressSettings_1.UniversalSigner || type === IAddressSettings_1.ClaimsSigner)
                claimKeyIndices.push(i);
            if (type === IAddressSettings_1.UniversalSigner || type === IAddressSettings_1.TransferSigner)
                transferKeyIndices.push(i);
        }
        if (claimKeyIndices && claimKeyIndices.length) {
            assert(claimKeyIndices.length >= details.claimSignatureSettings, 'Must provide enough valid public key indices to make claims');
            for (const index of claimKeyIndices) {
                assert(index < identities.length, 'Claim index must be within range of public keys');
            }
        }
        if (transferKeyIndices && transferKeyIndices.length) {
            assert(transferKeyIndices.length >= signatureSettings, 'Must provide enough valid public key indices to make transfers');
            for (const index of transferKeyIndices) {
                assert(index < identities.length, 'Transfer index must be within range of public keys');
            }
        }
        const leaves = identities.map(hashUtils_1.sha256);
        let fillLeaves = 2;
        if (leaves.length > 2) {
            fillLeaves = 6;
        }
        // fill up to 4 or 8 leaves so tree is balanced
        while (leaves.length < fillLeaves) {
            leaves.push(
            // empty string hashed
            Buffer.from('0000000000000000000000000000000000000000000000000000000000000000', 'hex'));
        }
        leaves.push(this.createLeaf(signatureSettings, details.transferSignatureSalt, transferKeyIndices));
        leaves.push(this.createLeaf(claimSignatureSettings ?? 1, details.claimSignatureSalt, claimKeyIndices));
        return new MerkleTree_1.default(leaves);
    }
    static createLeaf(signatureSettings, salt, publicKeyIndices) {
        const parts = [
            signatureSettings ?? '',
            salt?.toString('hex') ?? '',
            publicKeyIndices?.join(',') ?? '',
        ];
        return (0, hashUtils_1.sha256)(parts.join(''));
    }
}
exports.default = AddressOwnersTree;
//# sourceMappingURL=AddressOwnersTree.js.map