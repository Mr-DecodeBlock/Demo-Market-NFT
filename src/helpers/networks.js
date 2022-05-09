export const networkConfigs = {
  "0xa86a": {
    chainId: 97,
    chainName: "Binance Smart Chain - Testnet",
    currencyName: "Tesnet",
    currencySymbol: "T-BSC",
    rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    blockExplorerUrl: "https://testnet.bscscan.com",
  },
  "0xa869": {
    chainId: 97,
    chainName: "Binance Smart Chain - Testnet",
    currencyName: "Tesnet",
    currencySymbol: "T-BSC",
    rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    blockExplorerUrl: "https://testnet.bscscan.com",
  },
};

export const getNativeByChain = (chain) =>
  networkConfigs[chain]?.currencySymbol || "NATIVE";

export const getChainById = (chain) => networkConfigs[chain]?.chainId || null;

export const getExplorer = (chain) => networkConfigs[chain]?.blockExplorerUrl;

export const getWrappedNative = (chain) =>
  networkConfigs[chain]?.wrapped || null;
