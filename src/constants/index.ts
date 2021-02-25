import { POOMSC_ABI } from "./abi";

export const availableNetwork = 1;
export enum contractName {
  POOMSC = "POOMSC",
}

export const POOMSC_ADDRESS = "0x3be4AFd1BF8c0731CC61238b77873d8b13Bd002c"

type contractPropertyType = {
  [data: string]: string | any;
};
export const contract: { [name: string]: contractPropertyType } = {
  [contractName.POOMSC]: {
    ADDRESS: POOMSC_ADDRESS,
    ABI: POOMSC_ABI,
  },
};
