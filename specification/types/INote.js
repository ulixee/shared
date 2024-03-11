"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteSchema = void 0;
const zod_1 = require("zod");
const IAddressSignature_1 = require("./IAddressSignature");
const common_1 = require("../common");
const NoteType_1 = require("./NoteType");
exports.NoteSchema = zod_1.z.object({
    toAddress: common_1.addressValidation,
    fromAddress: common_1.addressValidation,
    centagons: zod_1.z.bigint().refine(x => x > 0),
    noteHash: common_1.hashValidation,
    type: zod_1.z.nativeEnum(NoteType_1.default),
    effectiveBlockHeight: common_1.blockHeightValidation.optional(),
    guaranteeBlockHeight: common_1.blockHeightValidation.optional(),
    timestamp: zod_1.z.date(),
    signature: IAddressSignature_1.AddressSignatureSchema,
});
//# sourceMappingURL=INote.js.map