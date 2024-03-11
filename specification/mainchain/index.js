"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BlockApis_1 = require("./BlockApis");
const BlockHeaderApis_1 = require("./BlockHeaderApis");
const SidechainGovernanceApis_1 = require("./SidechainGovernanceApis");
const CoinageApis_1 = require("./CoinageApis");
const TransactionApis_1 = require("./TransactionApis");
const MainchainApiSchema = {
    ...BlockApis_1.BlockApiSchemas,
    ...BlockHeaderApis_1.BlockHeaderApiSchemas,
    ...CoinageApis_1.CoinageApiSchemas,
    ...SidechainGovernanceApis_1.SidechainGovernanceSchemas,
    ...TransactionApis_1.TransactionApiSchemas,
};
exports.default = MainchainApiSchema;
//# sourceMappingURL=index.js.map