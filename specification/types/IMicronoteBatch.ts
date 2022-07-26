import { z } from 'zod';
import { addressValidation, identityValidation, isHex, signatureValidation } from '../common';

export const MicronoteBatchSchema = z.object({
  batchSlug: z.string().regex(isHex).length(10),
  micronoteBatchIdentity: identityValidation,
  micronoteBatchAddress: addressValidation,
  sidechainIdentity: identityValidation,
  sidechainValidationSignature: signatureValidation,
});

type IMicronoteBatch = z.infer<typeof MicronoteBatchSchema>;

export default IMicronoteBatch;
