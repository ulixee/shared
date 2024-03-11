"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinageSchema = void 0;
const zod_1 = require("zod");
const CoinageType_1 = require("./CoinageType");
const common_1 = require("../common");
const IGrantTransfer_1 = require("./IGrantTransfer");
exports.CoinageSchema = zod_1.z.object({
    type: zod_1.z.nativeEnum(CoinageType_1.default),
    hash: common_1.hashValidation,
    centagons: common_1.centagonTokenValidation,
    minimumClaimCentagons: common_1.centagonTokenValidation,
    blockHeight: common_1.blockHeightValidation,
    expirationBlockHeight: common_1.blockHeightValidation,
    oldestClaimHeight: common_1.blockHeightValidation,
    grantAddress: common_1.addressValidation,
    transfer: IGrantTransfer_1.GrantTransferSchema, // optional - if rotating key/address
});
//# sourceMappingURL=ICoinage.js.map