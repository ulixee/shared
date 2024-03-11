"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitDatumHistorySchema = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
const IMicronoteBatchDatums_1 = require("./IMicronoteBatchDatums");
const IWebhitsClaimAddress_1 = require("./IWebhitsClaimAddress");
exports.BitDatumHistorySchema = zod_1.z.object({
    identity: common_1.identityValidation,
    blockHeight: common_1.blockHeightValidation,
    averageXoredCandidates: zod_1.z.number().int().nonnegative(),
    datumsPerMicronoteBatch: IMicronoteBatchDatums_1.MicronoteBatchDatumsSchema.array(),
    webhitsClaimAddresses: IWebhitsClaimAddress_1.WebhitsClaimAddressSchema.array(),
    signature: common_1.signatureValidation, // need signature from original user to make sure hash that gets put into network is truly from you (should include block height)
});
//# sourceMappingURL=IBitDatumHistory.js.map