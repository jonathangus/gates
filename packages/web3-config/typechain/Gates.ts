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

export interface GatesInterface extends utils.Interface {
  contractName: "Gates";
  functions: {
    "add(bytes)": FunctionFragment;
    "conditions(uint256)": FunctionFragment;
    "getMessageHash(uint256)": FunctionFragment;
    "verify(address,uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "add", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "conditions",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMessageHash",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "verify",
    values: [string, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "conditions", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getMessageHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;

  events: {
    "Created(uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Created"): EventFragment;
}

export type CreatedEvent = TypedEvent<
  [BigNumber, string],
  { gateId: BigNumber; creator: string }
>;

export type CreatedEventFilter = TypedEventFilter<CreatedEvent>;

export interface Gates extends BaseContract {
  contractName: "Gates";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GatesInterface;

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
    add(
      _conditions: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "add(bytes)"(
      _conditions: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    conditions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "conditions(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getMessageHash(
      gateId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getMessageHash(uint256)"(
      gateId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    verify(
      _signer: string,
      gateId: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "verify(address,uint256,bytes)"(
      _signer: string,
      gateId: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  add(
    _conditions: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "add(bytes)"(
    _conditions: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  conditions(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "conditions(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getMessageHash(
    gateId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "getMessageHash(uint256)"(
    gateId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  verify(
    _signer: string,
    gateId: BigNumberish,
    signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "verify(address,uint256,bytes)"(
    _signer: string,
    gateId: BigNumberish,
    signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    add(_conditions: BytesLike, overrides?: CallOverrides): Promise<void>;

    "add(bytes)"(
      _conditions: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    conditions(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "conditions(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getMessageHash(
      gateId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getMessageHash(uint256)"(
      gateId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    verify(
      _signer: string,
      gateId: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "verify(address,uint256,bytes)"(
      _signer: string,
      gateId: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "Created(uint256,address)"(
      gateId?: null,
      creator?: null
    ): CreatedEventFilter;
    Created(gateId?: null, creator?: null): CreatedEventFilter;
  };

  estimateGas: {
    add(
      _conditions: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "add(bytes)"(
      _conditions: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    conditions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "conditions(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMessageHash(
      gateId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getMessageHash(uint256)"(
      gateId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verify(
      _signer: string,
      gateId: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "verify(address,uint256,bytes)"(
      _signer: string,
      gateId: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    add(
      _conditions: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "add(bytes)"(
      _conditions: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    conditions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "conditions(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMessageHash(
      gateId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getMessageHash(uint256)"(
      gateId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verify(
      _signer: string,
      gateId: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "verify(address,uint256,bytes)"(
      _signer: string,
      gateId: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
