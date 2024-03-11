"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakeSettingsSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
exports.StakeSettingsSchema = zod_1.z.object({
    centagons: common_1.centagonTokenValidation,
    rootIdentity: common_1.identityValidation,
    stakeAddress: common_1.addressValidation,
    stableBlockHeight: common_1.blockHeightValidation,
    stableBlockHash: common_1.hashValidation,
    currentBlockHash: common_1.hashValidation,
    currentBlockHeight: common_1.blockHeightValidation,
    refundBlockWindow: zod_1.z.number().int().nonnegative(),
});
//# sourceMappingURL=IStakeSettings.js.map