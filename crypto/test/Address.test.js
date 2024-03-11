"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Identity_1 = require("@ulixee/crypto/lib/Identity");
const Address_1 = require("../lib/Address");
const AddressSignature_1 = require("../lib/AddressSignature");
const IAddressSettings_1 = require("../interfaces/IAddressSettings");
let address;
let identity1;
let identity2;
beforeAll(async () => {
    [identity1, identity2] = await Promise.all([Identity_1.default.create(), Identity_1.default.create()]);
    address = Address_1.default.createFromSigningIdentities([identity1, identity2], {
        claimSignatureSettings: 1,
        transferSignatureSettings: 1,
        signerTypes: [IAddressSettings_1.UniversalSigner, IAddressSettings_1.ClaimsSigner],
    });
});
test('should validate the keys match the allowed keys', async () => {
    expect(address.bech32).toBeTruthy();
    expect(address.transferSigners).toHaveLength(1);
    expect(address.claimSigners).toHaveLength(2);
    const hash = Buffer.from('hash');
    jest.spyOn(address, 'verifyKeyType').mockImplementationOnce(() => null);
    const signature = address.sign(hash, [1]);
    expect(AddressSignature_1.default.verify(address.bech32, signature, hash, false)).toBe('Invalid public key provided');
});
test('should allow the proper keys if provided', async () => {
    const signature = address.sign(Buffer.from('hash'), [0]);
    expect(AddressSignature_1.default.verify(address.bech32, signature, Buffer.from('hash'), false)).toBeNull();
});
test('should be able to save to a file and recreate', async () => {
    const filePath = await address.save();
    expect(filePath.endsWith(`${address.bech32}.json`)).toBe(true);
    const wallet2 = Address_1.default.readFromFile(address.bech32);
    expect(wallet2.ownersMerkleTree).toBeTruthy();
    expect(wallet2.transferSigners.map(x => x.publicKey.toString('hex'))).toEqual(address.transferSigners.map(x => x.publicKey.toString('hex')));
    const signature = wallet2.sign(Buffer.from('claim'), [0], true);
    expect(Address_1.default.verify(wallet2.bech32, Buffer.from('claim'), signature, true)).toBe(true);
});
//# sourceMappingURL=Address.test.js.map