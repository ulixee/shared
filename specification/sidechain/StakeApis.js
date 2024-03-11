"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakeApiSchemas = void 0;
const zod_1 = require("zod");
const INote_1 = require("../types/INote");
const IStakeSettings_1 = require("../types/IStakeSettings");
const common_1 = require("../common");
const IStakeSignature_1 = require("../types/IStakeSignature");
const IAddressSignature_1 = require("../types/IAddressSignature");
exports.StakeApiSchemas = {
    'Stake.settings': { args: zod_1.z.undefined().nullish(), result: IStakeSettings_1.StakeSettingsSchema },
    'Stake.create': {
        args: zod_1.z.object({
            note: INote_1.NoteSchema,
            stakedIdentity: common_1.identityValidation,
        }),
        result: IStakeSignature_1.StakeSignatureSchema,
    },
    'Stake.refund': {
        args: zod_1.z.object({
            address: common_1.addressValidation,
            stakedIdentity: common_1.identityValidation,
            signature: IAddressSignature_1.AddressSignatureSchema,
        }),
        result: zod_1.z.object({
            blockEndHeight: common_1.blockHeightValidation,
            refundNoteHash: common_1.hashValidation,
            refundEffectiveHeight: common_1.blockHeightValidation,
        }),
    },
    'Stake.signature': {
        args: zod_1.z.object({
            stakedIdentity: common_1.identityValidation,
            signature: common_1.signatureValidation,
        }),
        result: IStakeSignature_1.StakeSignatureSchema,
    },
};
//# sourceMappingURL=StakeApis.js.map