/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ENSInterfaceInterface extends utils.Interface {
  contractName: "ENSInterface";
  functions: {
    "owner(bytes32)": FunctionFragment;
    "resolver(bytes32)": FunctionFragment;
    "setOwner(bytes32,address)": FunctionFragment;
    "setResolver(bytes32,address)": FunctionFragment;
    "setSubnodeOwner(bytes32,bytes32,address)": FunctionFragment;
    "setTTL(bytes32,uint64)": FunctionFragment;
    "ttl(bytes32)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "owner", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "resolver", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "setOwner",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setResolver",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setSubnodeOwner",
    values: [BytesLike, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTTL",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "ttl", values: [BytesLike]): string;

  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "resolver", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setResolver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSubnodeOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setTTL", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ttl", data: BytesLike): Result;

  events: {
    "NewOwner(bytes32,bytes32,address)": EventFragment;
    "NewResolver(bytes32,address)": EventFragment;
    "NewTTL(bytes32,uint64)": EventFragment;
    "Transfer(bytes32,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewOwner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewResolver"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewTTL"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export type NewOwnerEvent = TypedEvent<
  [string, string, string],
  { node: string; label: string; owner: string }
>;

export type NewOwnerEventFilter = TypedEventFilter<NewOwnerEvent>;

export type NewResolverEvent = TypedEvent<
  [string, string],
  { node: string; resolver: string }
>;

export type NewResolverEventFilter = TypedEventFilter<NewResolverEvent>;

export type NewTTLEvent = TypedEvent<
  [string, BigNumber],
  { node: string; ttl: BigNumber }
>;

export type NewTTLEventFilter = TypedEventFilter<NewTTLEvent>;

export type TransferEvent = TypedEvent<
  [string, string],
  { node: string; owner: string }
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface ENSInterface extends BaseContract {
  contractName: "ENSInterface";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ENSInterfaceInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    owner(node: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    "owner(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    resolver(node: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    "resolver(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setOwner(
      node: BytesLike,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setOwner(bytes32,address)"(
      node: BytesLike,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setResolver(
      node: BytesLike,
      resolver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setResolver(bytes32,address)"(
      node: BytesLike,
      resolver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSubnodeOwner(
      node: BytesLike,
      label: BytesLike,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setSubnodeOwner(bytes32,bytes32,address)"(
      node: BytesLike,
      label: BytesLike,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTTL(
      node: BytesLike,
      ttl: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setTTL(bytes32,uint64)"(
      node: BytesLike,
      ttl: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ttl(node: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;

    "ttl(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  owner(node: BytesLike, overrides?: CallOverrides): Promise<string>;

  "owner(bytes32)"(node: BytesLike, overrides?: CallOverrides): Promise<string>;

  resolver(node: BytesLike, overrides?: CallOverrides): Promise<string>;

  "resolver(bytes32)"(
    node: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  setOwner(
    node: BytesLike,
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setOwner(bytes32,address)"(
    node: BytesLike,
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setResolver(
    node: BytesLike,
    resolver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setResolver(bytes32,address)"(
    node: BytesLike,
    resolver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSubnodeOwner(
    node: BytesLike,
    label: BytesLike,
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setSubnodeOwner(bytes32,bytes32,address)"(
    node: BytesLike,
    label: BytesLike,
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTTL(
    node: BytesLike,
    ttl: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setTTL(bytes32,uint64)"(
    node: BytesLike,
    ttl: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ttl(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  "ttl(bytes32)"(
    node: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    owner(node: BytesLike, overrides?: CallOverrides): Promise<string>;

    "owner(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    resolver(node: BytesLike, overrides?: CallOverrides): Promise<string>;

    "resolver(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    setOwner(
      node: BytesLike,
      owner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setOwner(bytes32,address)"(
      node: BytesLike,
      owner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setResolver(
      node: BytesLike,
      resolver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setResolver(bytes32,address)"(
      node: BytesLike,
      resolver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setSubnodeOwner(
      node: BytesLike,
      label: BytesLike,
      owner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setSubnodeOwner(bytes32,bytes32,address)"(
      node: BytesLike,
      label: BytesLike,
      owner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setTTL(
      node: BytesLike,
      ttl: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setTTL(bytes32,uint64)"(
      node: BytesLike,
      ttl: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    ttl(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "ttl(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "NewOwner(bytes32,bytes32,address)"(
      node?: BytesLike | null,
      label?: BytesLike | null,
      owner?: null
    ): NewOwnerEventFilter;
    NewOwner(
      node?: BytesLike | null,
      label?: BytesLike | null,
      owner?: null
    ): NewOwnerEventFilter;

    "NewResolver(bytes32,address)"(
      node?: BytesLike | null,
      resolver?: null
    ): NewResolverEventFilter;
    NewResolver(
      node?: BytesLike | null,
      resolver?: null
    ): NewResolverEventFilter;

    "NewTTL(bytes32,uint64)"(
      node?: BytesLike | null,
      ttl?: null
    ): NewTTLEventFilter;
    NewTTL(node?: BytesLike | null, ttl?: null): NewTTLEventFilter;

    "Transfer(bytes32,address)"(
      node?: BytesLike | null,
      owner?: null
    ): TransferEventFilter;
    Transfer(node?: BytesLike | null, owner?: null): TransferEventFilter;
  };

  estimateGas: {
    owner(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "owner(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    resolver(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "resolver(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setOwner(
      node: BytesLike,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setOwner(bytes32,address)"(
      node: BytesLike,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setResolver(
      node: BytesLike,
      resolver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setResolver(bytes32,address)"(
      node: BytesLike,
      resolver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSubnodeOwner(
      node: BytesLike,
      label: BytesLike,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setSubnodeOwner(bytes32,bytes32,address)"(
      node: BytesLike,
      label: BytesLike,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTTL(
      node: BytesLike,
      ttl: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setTTL(bytes32,uint64)"(
      node: BytesLike,
      ttl: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ttl(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "ttl(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    owner(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "owner(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    resolver(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "resolver(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setOwner(
      node: BytesLike,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setOwner(bytes32,address)"(
      node: BytesLike,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setResolver(
      node: BytesLike,
      resolver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setResolver(bytes32,address)"(
      node: BytesLike,
      resolver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSubnodeOwner(
      node: BytesLike,
      label: BytesLike,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setSubnodeOwner(bytes32,bytes32,address)"(
      node: BytesLike,
      label: BytesLike,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTTL(
      node: BytesLike,
      ttl: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setTTL(bytes32,uint64)"(
      node: BytesLike,
      ttl: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ttl(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "ttl(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
