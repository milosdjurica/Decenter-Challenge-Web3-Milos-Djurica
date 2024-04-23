import { Address, Bytes } from "web3";

export type TokenType = "ETH" | "WBTC" | "WSTETH";

export type CdpResponse = {
  urn: Address;
  owner: Address;
  userAddr: Address;
  ilk: Bytes;
  collateral: BigInt;
  debt: BigInt;
};