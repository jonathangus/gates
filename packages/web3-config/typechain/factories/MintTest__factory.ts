/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MintTest, MintTestInterface } from "../MintTest";

const _abi = [
  {
    inputs: [],
    name: "yourFunction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061029b806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80635998abcc14610030575b600080fd5b61003861003a565b005b6000735241fec04a8f10b5f2993b32a2b5b3b55e27ef2073ffffffffffffffffffffffffffffffffffffffff16630dd5ee1b336040518263ffffffff1660e01b81526004016100899190610157565b602060405180830381865afa1580156100a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100ca91906101bb565b90508061010c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161010390610245565b60405180910390fd5b50565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061013a8261010f565b9050919050565b61014a8161012f565b82525050565b6000815250565b600060408201905061016c6000830184610141565b61017860208301610150565b92915050565b600080fd5b60008115159050919050565b61019881610183565b81146101a357600080fd5b50565b6000815190506101b58161018f565b92915050565b6000602082840312156101d1576101d061017e565b5b60006101df848285016101a6565b91505092915050565b600082825260208201905092915050565b7f55736572206e6f7420616c6c6f77656420746f2070726f636365640000000000600082015250565b600061022f601b836101e8565b915061023a826101f9565b602082019050919050565b6000602082019050818103600083015261025e81610222565b905091905056fea26469706673582212209b8b69d2d4950da4b2e64ac6f9683818fe7e0a91935c1e875bd1372f5cd0a84564736f6c634300080e0033";

type MintTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MintTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MintTest__factory extends ContractFactory {
  constructor(...args: MintTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MintTest";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MintTest> {
    return super.deploy(overrides || {}) as Promise<MintTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MintTest {
    return super.attach(address) as MintTest;
  }
  connect(signer: Signer): MintTest__factory {
    return super.connect(signer) as MintTest__factory;
  }
  static readonly contractName: "MintTest";
  public readonly contractName: "MintTest";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MintTestInterface {
    return new utils.Interface(_abi) as MintTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MintTest {
    return new Contract(address, _abi, signerOrProvider) as MintTest;
  }
}
