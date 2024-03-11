"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidechainGovernanceSchemas = exports.SidechainGovernanceError = void 0;
const zod_1 = require("zod");
const IAuthorizedSidechain_1 = require("../types/IAuthorizedSidechain");
var SidechainGovernanceError;
(function (SidechainGovernanceError) {
    SidechainGovernanceError[SidechainGovernanceError["BAD_SIGNATURE"] = 0] = "BAD_SIGNATURE";
    SidechainGovernanceError[SidechainGovernanceError["NO_PERMISSIONS"] = 1] = "NO_PERMISSIONS";
})(SidechainGovernanceError || (exports.SidechainGovernanceError = SidechainGovernanceError = {}));
exports.SidechainGovernanceSchemas = {
    'Sidechain.authorize': {
        args: zod_1.z.object({
            sidechain: IAuthorizedSidechain_1.AuthorizedSidechainSchema,
        }),
        result: zod_1.z.object({
            accept: zod_1.z.boolean(),
            error: zod_1.z.nativeEnum(SidechainGovernanceError),
        }),
    },
    'Sidechain.authorized': {
        args: zod_1.z.object({
            sidechain: IAuthorizedSidechain_1.AuthorizedSidechainSchema,
            nodeIdsAlreadySent: zod_1.z.string().array(),
        }),
        result: zod_1.z.object({
            accept: zod_1.z.boolean(),
            error: zod_1.z.nativeEnum(SidechainGovernanceError),
        }),
    },
};
//# sourceMappingURL=SidechainGovernanceApis.js.map