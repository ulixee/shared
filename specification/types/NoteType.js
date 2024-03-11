"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NoteType;
(function (NoteType) {
    NoteType[NoteType["transferIn"] = 0] = "transferIn";
    NoteType[NoteType["transferOut"] = 1] = "transferOut";
    NoteType[NoteType["transfer"] = 2] = "transfer";
    NoteType[NoteType["revenue"] = 3] = "revenue";
    NoteType[NoteType["settlementFees"] = 4] = "settlementFees";
    NoteType[NoteType["interest"] = 5] = "interest";
    NoteType[NoteType["micronoteFunds"] = 6] = "micronoteFunds";
    NoteType[NoteType["micronoteBatchRefund"] = 7] = "micronoteBatchRefund";
    NoteType[NoteType["burn"] = 8] = "burn";
    NoteType[NoteType["stakeCreate"] = 9] = "stakeCreate";
    NoteType[NoteType["stakeRefund"] = 10] = "stakeRefund";
})(NoteType || (NoteType = {}));
exports.default = NoteType;
//# sourceMappingURL=NoteType.js.map