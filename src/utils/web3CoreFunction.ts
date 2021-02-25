import { Contract } from "@ethersproject/contracts";
import { AddressZero } from "@ethersproject/constants";
import { useWeb3React } from "@web3-react/core";
import { JsonRpcSigner, Web3Provider } from "@ethersproject/providers";
import { Signer } from "@ethersproject/abstract-signer";
import { Provider } from "@ethersproject/abstract-provider";
import { contract } from "constants/index";
import { ethers } from "ethers";

import { isAddress } from "utils/index";

// account is not optional
export function getSigner(
  library: Web3Provider,
  account: string
): JsonRpcSigner {
  return library.getSigner(account).connectUnchecked();
}

// account is optional
export function getProviderOrSigner(
  library: Web3Provider,
  account?: string
): Web3Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library;
}

// account is optional
export function getContract(
  address: string,
  // eslint-disable-next-line
  ABI: any,
  library: Web3Provider,
  account?: string
): Contract {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }

  return new Contract(
    address,
    ABI,
    getProviderOrSigner(library, account) as Signer | Provider
  );
}

// eslint-disable-next-line
export function useContract(contractName: string  ): Contract {
  const { account, library } = useWeb3React<Web3Provider>();
  const contractProp = contract[contractName.toLocaleUpperCase()];

  return getContract(
    contractProp.ADDRESS,
    contractProp.ABI,
    library as Web3Provider,
    account as string
  );
}

export async function getBalanceOf(
  contractName: string,
  account?: string | null
): Promise<number> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const contract = useContract(contractName);
  return +ethers.utils.formatUnits(await contract.balanceOf(account), 18);
}
