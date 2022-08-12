import { z } from 'zod';
import { addressValidation, micronoteTokenValidation } from '../common';
import { databoxVersionHashValidation } from '../databox/DataboxApis';

const minDate = new Date('2022-01-01').getTime();

export const DataboxManifestSchema = z.object({
  versionHash: databoxVersionHashValidation,
  versionTimestamp: z.number().int().gt(minDate),
  linkedVersions: z
    .object({
      versionHash: databoxVersionHashValidation,
      versionTimestamp: z.number().int().gt(minDate),
    })
    .array()
    .describe('Older versions that should be redirected to this version'),
  scriptHash: z
    .string()
    .length(62)
    .regex(
      /^scr1[ac-hj-np-z02-9]{58}/,
      'This is not a Databox scripthash (Bech32 encoded hash starting with "scr").',
    ),
  scriptEntrypoint: z.string().describe('A relative path from a project root'),
  runtimeName: z.string(),
  runtimeVersion: z.string().describe('Version of the Databox Core Runtime'),
  pricePerQuery: micronoteTokenValidation
    .optional()
    .describe('Price per query if requiring payment'),
  paymentAddress: addressValidation.optional(),
  giftCardAddress: addressValidation
    .optional()
    .describe('An address this Databox is accepting gift cards'),
});

export type IVersionHistoryEntry = z.infer<
  typeof DataboxManifestSchema.shape.linkedVersions.element
>;
type IDataboxManifest = z.infer<typeof DataboxManifestSchema>;

export default IDataboxManifest;