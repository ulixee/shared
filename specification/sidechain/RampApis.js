"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RampApiSchemas = void 0;
const zod_1 = require("zod");
const common_1 = require("../common");
exports.RampApiSchemas = {
    'Ramp.audit': {
        args: zod_1.z.undefined().nullish(),
        result: zod_1.z.object({
            auditDate: zod_1.z.date(),
            usdcToArgonConversionRate: zod_1.z.number(),
            argonsInCirculation_e6: zod_1.z
                .bigint()
                .describe('Argons converted to 6 decimals to match USDC reserves. Amount should NOT exceed USDC reserves adjusted by conversion rate.'),
            usdcReserves_e6: zod_1.z.bigint().describe('Total reserves balance in USDC raw value.'),
            usdcReserveAddresses: zod_1.z
                .object({
                blockchain: zod_1.z.string().describe('Blockchain where USDC is held (eg, ethereum, polygon, etc).'),
                blockchainNetwork: zod_1.z.string().describe('Blockchain network for the given chain (eg, homestead, ropsten, etc).'),
                address: zod_1.z.string().describe('USDC address of reserves.'),
                ownershipProof: zod_1.z
                    .string()
                    .describe('Signature proving ownership of holdings as of Audit Date.'),
            })
                .array(),
        }),
    },
    'Ramp.createTransferInAddress': {
        args: zod_1.z.object({
            blockchain: zod_1.z.enum(['ethereum', 'polygon']),
            address: common_1.addressValidation,
        }),
        result: zod_1.z.object({
            blockchainNetwork: zod_1.z.string(),
            address: zod_1.z.string().describe('Address on the given network.'),
            expirationDate: zod_1.z
                .date()
                .describe('Valid through date. Funds sent after this date will be lost.'),
        }),
    },
};
//# sourceMappingURL=RampApis.js.map