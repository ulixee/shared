"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Identity_1 = require("@ulixee/crypto/lib/Identity");
const MerkleTree_1 = require("@ulixee/crypto/lib/MerkleTree");
const hashUtils_1 = require("@ulixee/commons/lib/hashUtils");
const IMerkleProof_1 = require("@ulixee/specification/types/IMerkleProof");
const AddressOwnersTree_1 = require("./AddressOwnersTree");
const Address_1 = require("./Address");
class AddressSignature {
    get signatureSettings() {
        return this.signature.signatureSettings;
    }
    constructor(treeRoot, signature) {
        this.treeRoot = treeRoot;
        this.signature = signature;
    }
    isValidSignaturePosition(isClaim) {
        const proofsToRight = this.signatureSettings.settingsMerkleProofs.filter(x => x.position === IMerkleProof_1.MerklePosition.Right).length;
        // if this is a claim, must have no proofs to the right
        if (isClaim && proofsToRight > 0) {
            return false;
        }
        // if this is a transfer, there must be 1 proof to the right
        if (isClaim === false &&
            (proofsToRight !== 1 ||
                this.signatureSettings.settingsMerkleProofs[0].position !== IMerkleProof_1.MerklePosition.Right)) {
            return false;
        }
        return true;
    }
    isValidWalletOwnershipProof(owner) {
        const isValidProof = MerkleTree_1.default.verify(owner.ownershipMerkleProofs, (0, hashUtils_1.sha256)(owner.identity), this.treeRoot);
        if (!isValidProof)
            return false;
        const identityIndices = this.signature.signatureSettings.identityIndices;
        if (identityIndices && identityIndices.length) {
            const index = MerkleTree_1.default.getLeafIndex(owner.ownershipMerkleProofs);
            if (identityIndices.includes(index) === false) {
                return false;
            }
        }
        return true;
    }
    isValidSignatureSettingsProof() {
        // verify the signature count location
        return MerkleTree_1.default.verify(this.signatureSettings.settingsMerkleProofs, AddressOwnersTree_1.default.createLeaf(this.signatureSettings.countRequired, this.signatureSettings.salt, this.signatureSettings.identityIndices), this.treeRoot);
    }
    isInvalid(messageHash, isClaim) {
        const isValidSignatureSettings = this.isValidSignatureSettingsProof() && this.isValidSignaturePosition(isClaim);
        if (!isValidSignatureSettings) {
            return 'Invalid RequiredSignatureSettings proof provided';
        }
        const signatures = [];
        const seenIdentities = new Set();
        for (const signer of this.signature.signers) {
            const identity = signer.identity;
            if (seenIdentities.has(identity)) {
                continue;
            }
            seenIdentities.add(identity);
            const isValidIdentity = this.isValidWalletOwnershipProof(signer);
            if (isValidIdentity === false) {
                return 'Invalid public key provided';
            }
            /**
             * verify signatures of each public key
             */
            const isMatch = Identity_1.default.verify(signer.identity, (0, hashUtils_1.sha256)(Buffer.concat([messageHash, ...signatures])), signer.signature);
            if (isMatch === false) {
                return 'Invalid signature provided';
            }
            signatures.push(signer.signature);
        }
        // ensure signatures are unique
        if (seenIdentities.size < this.signatureSettings.countRequired) {
            return `Insufficient public key signatures provided ${seenIdentities.size} vs ${this.signatureSettings.countRequired} required`;
        }
        return null;
    }
    static buildSignatureSettings(addressTree, addressSettings, isClaim = false) {
        return {
            countRequired: isClaim
                ? addressSettings.claimSignatureSettings
                : addressSettings.transferSignatureSettings,
            settingsMerkleProofs: addressTree.getProofForIndex(isClaim ? -1 : -2), // notes are all transfers
            salt: isClaim ? addressSettings.claimSignatureSalt : addressSettings.transferSignatureSalt,
            identityIndices: Address_1.default.getIdentityIndices(addressSettings, isClaim),
        };
    }
    static create(hash, identities, addressOwnersTree, addressSettings, isClaim = false) {
        const signatures = [];
        return {
            signers: identities.map(identity => {
                const identityProof = AddressOwnersTree_1.default.getIdentityIsOwnerProof(addressOwnersTree, identity.bech32);
                const ownerProof = {
                    ownershipMerkleProofs: identityProof,
                    identity: identity.bech32,
                    signature: identity.sign((0, hashUtils_1.sha256)(Buffer.concat([hash, ...signatures]))),
                };
                signatures.push(ownerProof.signature);
                return ownerProof;
            }),
            signatureSettings: AddressSignature.buildSignatureSettings(addressOwnersTree, addressSettings, isClaim),
        };
    }
    static verify(address, signature, messageHash, isClaim) {
        const root = Address_1.default.decodeAddress(address);
        return new AddressSignature(root, signature).isInvalid(messageHash, isClaim);
    }
}
exports.default = AddressSignature;
//# sourceMappingURL=AddressSignature.js.map