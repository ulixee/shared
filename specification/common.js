"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.micronoteTokenValidation = exports.centagonTokenValidation = exports.micronoteIdValidation = exports.blockHeightValidation = exports.signatureValidation = exports.isHex = exports.hashValidation = exports.identityValidation = exports.addressValidation = void 0;
const zod_1 = require("zod");
exports.addressValidation = zod_1.z
    .string()
    .length(61)
    .regex(/^ar1[ac-hj-np-z02-9]{58}/, 'This is not an Argon address (Bech32 encoded, starting with "ar1").');
exports.identityValidation = zod_1.z
    .string()
    .length(61)
    .regex(/^id1[ac-hj-np-z02-9]{58}/, 'This is not a Ulixee identity (Bech32 encoded public key starting with "id1").');
exports.hashValidation = zod_1.z
    .instanceof(Buffer)
    .refine(x => x.length === 32, { message: 'Hashes must be 32 bytes' });
exports.isHex = /^(0x|0h)?[0-9A-F]+$/i;
exports.signatureValidation = zod_1.z
    .instanceof(Buffer)
    .refine(x => x.length === 64, { message: 'Signatures must be 64 bytes' });
exports.blockHeightValidation = zod_1.z.number().int().nonnegative();
exports.micronoteIdValidation = zod_1.z
    .string()
    .length(62)
    .regex(/^mcr1[ac-hj-np-z02-9]{58}/, 'This is not a Micronote id (Bech32 encoded, starting with "mcr").');
exports.centagonTokenValidation = zod_1.z.bigint().refine(x => x > 0n);
exports.micronoteTokenValidation = zod_1.z.number().int().positive();
//# sourceMappingURL=common.js.map