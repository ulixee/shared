"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("@ulixee/commons/config/index");
const TypeSerializer_1 = require("@ulixee/commons/lib/TypeSerializer");
const utils_1 = require("@ulixee/commons/lib/utils");
const Identity_1 = require("@ulixee/crypto/lib/Identity");
const commander_1 = require("commander");
const crypto_1 = require("crypto");
const Path = require("path");
const Address_1 = require("./lib/Address");
const Ed25519_1 = require("./lib/Ed25519");
const logError = (err) => {
    console.log(`\nIDENTITIES ERROR: ${err.message}\n`); // eslint-disable-line no-console
};
const { version } = require('./package.json');
function cliCommands() {
    const cryptoCommands = new commander_1.Command().version(version);
    cryptoCommands
        .command('address')
        .description('Create a new address.')
        .argument('[signerPattern]', 'The pattern of signing Identities you wish to create. Specify which actions each identity should be used for. T=Transfer, C=Claim, U=Universal. eg, TTC = 3 key ring with 2 transfer identities and 1 claim key', 'U')
        .argument('[filename]', 'Where do you want to save this Address?', 'UlixeeAddress.json')
        .option('-t, --transfer-signatures <count>', 'How many signatures should be required for transfers?', parseInt, 1)
        .option('-s, --transfer-salt <salt>', 'Add salt (noise) to your transfer signatures', (0, crypto_1.randomBytes)(32).toString('base64'))
        .option('-c, --claim-signatures <count>', 'How many signatures should be required for claims (coinage claims, voting)?', parseInt, 1)
        .option('-d, --claim-salt <salt>', 'Add salt (noise) to your claims signatures', (0, crypto_1.randomBytes)(32).toString('base64'))
        .option('-q, --quiet', "Don't log any details to the console.", false)
        .action(async (signerPattern, filename, args) => {
        try {
            const { transferSignatures, claimSignatures, transferSalt, claimSalt, quiet } = args;
            const signersCount = signerPattern.length;
            (0, utils_1.assert)(signerPattern.length <= 6, 'A max of 6 signing Identities is allowed in an Address.');
            (0, utils_1.assert)(signerPattern.length > 0, 'You must specify at least one key');
            (0, utils_1.assert)(signerPattern.match(/^[TCU]{1,6}$/i), 'Valid signer options are T=Transfer, C=Claim, U=Universal');
            (0, utils_1.assert)(transferSignatures > 0, 'You must require at least one transfer signature (-t, --transfer-signatures).');
            (0, utils_1.assert)(claimSignatures > 0, 'You must require at least one claim signature  (-c, --claim-signatures)');
            (0, utils_1.assert)(transferSignatures <= signersCount, 'You cannot have more transfer signatures required than total identities');
            (0, utils_1.assert)(claimSignatures <= signersCount, 'You cannot have more claim signatures required than total identities');
            const signerTypes = [...signerPattern];
            const identities = await Promise.all(signerTypes.map(Identity_1.default.create));
            const addressSettings = {
                signerTypes,
                transferSignatureSettings: transferSignatures,
                transferSignatureSalt: transferSalt ? Buffer.from(transferSalt) : null,
                claimSignatureSettings: claimSignatures,
                claimSignatureSalt: claimSalt ? Buffer.from(claimSalt) : null,
            };
            const address = Address_1.default.createFromSigningIdentities(identities, addressSettings);
            if (filename.endsWith('.json')) {
                filename = filename.replace(Path.extname(filename), '');
            }
            const filepath = await address.save(true, Path.basename(filename), Path.dirname(filename));
            if (!quiet) {
                console.log('Wrote address: %s to %s', address.bech32, filepath); // eslint-disable-line no-console
                console.log(TypeSerializer_1.default.stringify(address.toJSON(), { format: true })); // eslint-disable-line no-console
            }
        }
        catch (err) {
            logError(err);
        }
    });
    cryptoCommands
        .command('identity')
        .description('Create an Identity (ed25519 key). It will be used to anonymously secure your network requests.')
        .option('-p, --passphrase <phrase>', 'Save the private key with a passphrase (pkcs8 format).')
        .option('-c, --passphrase-cipher <cipher>', 'Encrypt the internal key with a cipher (pkcs8 format).', Identity_1.default.defaultPkcsCipher)
        .option('-f, --filename <path>', 'Save this Identity to a filepath. If not specified, will be console logged.')
        .enablePositionalOptions(true)
        .action(async ({ filename, passphraseCipher, passphrase }) => {
        const identity = await Identity_1.default.create();
        if (filename) {
            await identity.save(filename, { passphrase, cipher: passphraseCipher });
            console.log('Saved to %s', filename); // eslint-disable-line no-console
        }
        else {
            console.log(identity.export(passphrase, passphraseCipher)); // eslint-disable-line no-console
        }
    });
    cryptoCommands
        .command('save-identity')
        .description('Save an Identity PEM to a local file.')
        .option('-k, --privateKey <key>', 'The private key bytes')
        .option('-f, --filename <path>', 'Save this Identity to a filepath. If not specified, will be placed in <DATA>/identities.')
        .option('-p, --passphrase <phrase>', 'Save identity to a file with a passphrase.')
        .option('-c, --passphrase-cipher <cipher>', 'Encrypt the internal key with a cipher (pkcs8 format).', Identity_1.default.defaultPkcsCipher)
        .action(async ({ privateKey, filename, passphraseCipher, passphrase }) => {
        const ed25519 = Ed25519_1.default.createPrivateKeyFromBytes(Buffer.from(privateKey, 'base64'));
        const identity = new Identity_1.default(ed25519);
        identity.verifyKeys();
        filename ||= Path.join(index_1.default.global.directoryPath, 'identities', `${identity.bech32}.pem`);
        await identity.save(filename, { passphrase, cipher: passphraseCipher });
        console.log('Saved %s to %s', identity.bech32, filename); // eslint-disable-line no-console
    });
    cryptoCommands
        .command('read-identity')
        .description('Output the bech32 value of an identity.')
        .option('--pem <pem>', 'The raw bytes of the PEM.')
        .option('-f, --filename <path>', 'Save this Identity to a filepath. If not specified, will be console logged.')
        .option('-p, --passphrase <phrase>', 'Save identity to a file with a passphrase.')
        .enablePositionalOptions(true)
        .action(({ pem, filename, passphrase }) => {
        if (filename) {
            const identity = Identity_1.default.loadFromFile(Path.resolve(process.cwd(), filename), {
                keyPassphrase: passphrase,
            });
            console.log(identity.bech32); // eslint-disable-line no-console
        }
        else {
            pem = pem?.replaceAll('\\n', '\n');
            const identity = Identity_1.default.loadFromPem(pem, { keyPassphrase: passphrase });
            console.log(identity.bech32); // eslint-disable-line no-console
        }
    });
    return cryptoCommands;
}
exports.default = cliCommands;
//# sourceMappingURL=cli.js.map