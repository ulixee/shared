"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizedSidechainSchema = exports.AuthorizedSidechainTransferSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
exports.AuthorizedSidechainTransferSchema = zod_1.z.object({
    sidechainHash: common_1.hashValidation,
    transferSignature: common_1.hashValidation,
});
exports.AuthorizedSidechainSchema = zod_1.z.object({
    sidechainHash: common_1.hashValidation,
    rootIdentity: common_1.identityValidation,
    url: zod_1.z.string().url(),
    transfer: exports.AuthorizedSidechainTransferSchema.array().optional(), // optional - if rotating key/address
});
//# sourceMappingURL=IAuthorizedSidechain.js.map