/// <reference types="node" />
export default interface IAddressSettings {
    signerTypes: ISignerType[];
    transferSignatureSettings?: number;
    transferSignatureSalt?: Buffer;
    claimSignatureSettings?: number;
    claimSignatureSalt?: Buffer;
}
declare const UniversalSigner = "U";
declare const ClaimsSigner = "C";
declare const TransferSigner = "T";
type ISignerType = typeof UniversalSigner | typeof ClaimsSigner | typeof TransferSigner;
export { UniversalSigner, ClaimsSigner, ISignerType, TransferSigner };
