"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoordinatorSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
const IStakeSignature_1 = require("./IStakeSignature");
exports.CoordinatorSchema = zod_1.z.object({
    identity: common_1.identityValidation,
    reputation: zod_1.z.number().int().nonnegative(),
    proofSignature: common_1.signatureValidation,
    stakeSignature: IStakeSignature_1.StakeSignatureSchema,
    paymentAddress: common_1.addressValidation,
});
//# sourceMappingURL=ICoordinator.js.map