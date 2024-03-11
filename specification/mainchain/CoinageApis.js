"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinageApiSchemas = exports.CoinageError = void 0;
const zod_1 = require("zod");
const ICoinage_1 = require("../types/ICoinage");
var CoinageError;
(function (CoinageError) {
    CoinageError[CoinageError["BAD_SIGNATURE"] = 0] = "BAD_SIGNATURE";
    CoinageError[CoinageError["NO_PERMISSIONS"] = 1] = "NO_PERMISSIONS";
    CoinageError[CoinageError["INVALID_PARAMETER"] = 2] = "INVALID_PARAMETER";
    CoinageError[CoinageError["INVALID_TYPE"] = 3] = "INVALID_TYPE";
})(CoinageError || (exports.CoinageError = CoinageError = {}));
exports.CoinageApiSchemas = {
    'Coinage.create': {
        args: zod_1.z.object({
            coinage: ICoinage_1.CoinageSchema,
        }),
        result: zod_1.z.object({
            accept: zod_1.z.boolean(),
            error: zod_1.z.nativeEnum(CoinageError),
        }),
    },
    'Coinage.created': {
        args: zod_1.z.object({
            coinage: ICoinage_1.CoinageSchema,
            nodeIdsAlreadySent: zod_1.z.string().array(),
        }),
        result: zod_1.z.object({
            accept: zod_1.z.boolean(),
            error: zod_1.z.nativeEnum(CoinageError),
        }),
    },
};
//# sourceMappingURL=CoinageApis.js.map