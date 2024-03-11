"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerklePosition = exports.MerkleProofSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
var MerklePosition;
(function (MerklePosition) {
    MerklePosition[MerklePosition["Left"] = 0] = "Left";
    MerklePosition[MerklePosition["Right"] = 1] = "Right";
})(MerklePosition || (exports.MerklePosition = MerklePosition = {}));
exports.MerkleProofSchema = zod_1.z.object({
    position: zod_1.z.nativeEnum(MerklePosition),
    hash: common_1.hashValidation,
});
//# sourceMappingURL=IMerkleProof.js.map