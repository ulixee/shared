"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionType;
(function (TransactionType) {
    TransactionType[TransactionType["COINBASE"] = 0] = "COINBASE";
    TransactionType[TransactionType["TRANSFER"] = 1] = "TRANSFER";
    TransactionType[TransactionType["COINAGE_CLAIM"] = 2] = "COINAGE_CLAIM";
    TransactionType[TransactionType["BOND_PURCHASE"] = 3] = "BOND_PURCHASE";
    TransactionType[TransactionType["BOND_REDEMPTION"] = 4] = "BOND_REDEMPTION";
})(TransactionType || (TransactionType = {}));
exports.default = TransactionType;
//# sourceMappingURL=TransactionType.js.map