"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MicronoteBatchApis_1 = require("./MicronoteBatchApis");
const NoteApis_1 = require("./NoteApis");
const MicronoteApis_1 = require("./MicronoteApis");
const FundingTransferApis_1 = require("./FundingTransferApis");
const AddressApis_1 = require("./AddressApis");
const StakeApis_1 = require("./StakeApis");
const SidechainInfoApis_1 = require("./SidechainInfoApis");
const RampApis_1 = require("./RampApis");
const SidechainApiSchema = {
    ...SidechainInfoApis_1.SidechainInfoApiSchemas,
    ...AddressApis_1.AddressApiSchemas,
    ...FundingTransferApis_1.FundingTransferApiSchemas,
    ...MicronoteApis_1.MicronoteApiSchemas,
    ...MicronoteBatchApis_1.MicronoteBatchApiSchemas,
    ...NoteApis_1.NoteApiSchemas,
    ...StakeApis_1.StakeApiSchemas,
    ...RampApis_1.RampApiSchemas,
};
exports.default = SidechainApiSchema;
//# sourceMappingURL=index.js.map