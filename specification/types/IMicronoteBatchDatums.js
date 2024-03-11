"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicronoteBatchDatumsSchema = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
exports.MicronoteBatchDatumsSchema = zod_1.z.object({
    micronoteBatchUrl: zod_1.z.string().url(),
    micronoteBatchIdentity: common_1.identityValidation,
    micronoteIdsHash: common_1.hashValidation,
    micronotesCount: zod_1.z.number().nonnegative(),
});
//# sourceMappingURL=IMicronoteBatchDatums.js.map