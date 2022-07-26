import { z } from 'zod';
import {
  addressValidation,
  blockHeightValidation,
  hashValidation,
  identityValidation,
  micronoteBatchSlugValidation,
  micronoteIdValidation,
  micronoteTokenValidation,
  signatureValidation,
} from '../common';
import { IZodSchemaToApiTypes } from '../utils/IZodApi';
import { AddressSignatureSchema } from '../types/IAddressSignature';

export const MicronoteApiSchemas = {
  'Micronote.create': {
    args: z.object({
      batchSlug: micronoteBatchSlugValidation,
      address: addressValidation,
      microgons: micronoteTokenValidation.lte(1000e6), // $1000 max = 1000*1M microgon max
      fundsId: z.number().int().positive().optional(),
      signature: AddressSignatureSchema,
      isAuditable: z.boolean().optional(),
    }),
    result: z.object({
      id: micronoteIdValidation,
      micronoteSignature: signatureValidation,
      blockHeight: blockHeightValidation,
      fundsId: z.number().int().positive(),
      guaranteeBlockHeight: blockHeightValidation,
      fundMicrogonsRemaining: micronoteTokenValidation,
    }),
  },
  'Micronote.lock': {
    args: z.object({
      batchSlug: micronoteBatchSlugValidation,
      id: micronoteIdValidation,
      identity: identityValidation,
      signature: signatureValidation,
    }),
    result: z.object({
      accepted: z.boolean(),
      currentBlockHeight: blockHeightValidation,
      currentBlockHash: hashValidation,
    }),
  },
  'Micronote.claim': {
    args: z.object({
      batchSlug: micronoteBatchSlugValidation,
      id: micronoteIdValidation,
      identity: identityValidation,
      tokenAllocation: z.record(addressValidation, micronoteTokenValidation),
      signature: signatureValidation,
    }),
    result: z.object({
      finalCost: z.number().nonnegative().int(),
    }),
  },
};

type IMicronoteApis = IZodSchemaToApiTypes<typeof MicronoteApiSchemas>;
export default IMicronoteApis;
