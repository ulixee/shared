"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhitsClaimAddressSchema = exports.AddressCountsSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
exports.AddressCountsSchema = zod_1.z.object({
    claimAddress: common_1.addressValidation,
    count: zod_1.z.number().int().nonnegative(),
});
exports.WebhitsClaimAddressSchema = zod_1.z.object({
    viewOfTruthHash: common_1.hashValidation,
    addressCounts: exports.AddressCountsSchema.array(),
});
//# sourceMappingURL=IWebhitsClaimAddress.js.map