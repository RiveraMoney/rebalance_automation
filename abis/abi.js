const riveraFactoryAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_chef",
        type: "address",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "address",
        name: "_NonfungiblePositionManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stratFactory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "stake",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "vault",
        type: "address",
      },
    ],
    name: "VaultCreated",
    type: "event",
  },
  {
    inputs: [],
    name: "NonfungiblePositionManager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allVaults",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "chef",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "totalTvlCap",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "approvalDelay",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "tokenName",
            type: "string",
          },
          {
            internalType: "string",
            name: "tokenSymbol",
            type: "string",
          },
          {
            internalType: "int24",
            name: "tickLower",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "tickUpper",
            type: "int24",
          },
          {
            internalType: "address",
            name: "stake",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "rewardToLp0AddressPath",
            type: "address[]",
          },
          {
            internalType: "uint24[]",
            name: "rewardToLp0FeePath",
            type: "uint24[]",
          },
          {
            internalType: "address[]",
            name: "rewardToLp1AddressPath",
            type: "address[]",
          },
          {
            internalType: "uint24[]",
            name: "rewardToLp1FeePath",
            type: "uint24[]",
          },
          {
            internalType: "address",
            name: "rewardtoNativeFeed",
            type: "address",
          },
          {
            internalType: "address",
            name: "assettoNativeFeed",
            type: "address",
          },
          {
            internalType: "address",
            name: "tickMathLib",
            type: "address",
          },
          {
            internalType: "address",
            name: "sqrtPriceMathLib",
            type: "address",
          },
          {
            internalType: "address",
            name: "liquidityMathLib",
            type: "address",
          },
          {
            internalType: "address",
            name: "safeCastLib",
            type: "address",
          },
          {
            internalType: "address",
            name: "liquidityAmountsLib",
            type: "address",
          },
          {
            internalType: "address",
            name: "fullMathLib",
            type: "address",
          },
          {
            internalType: "string",
            name: "pendingReward",
            type: "string",
          },
        ],
        internalType: "struct RiveraVaultParams",
        name: "createVaultParams",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "withdrawFeeDecimals",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "withdrawFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "feeDecimals",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "protocolFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "fundManagerFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "partnerFee",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "partner",
            type: "address",
          },
        ],
        internalType: "struct FeeParams",
        name: "feeParams",
        type: "tuple",
      },
    ],
    name: "createVault",
    outputs: [
      {
        internalType: "address",
        name: "vaultAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "listAllVaults",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "manager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stratFactory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vaultType",
    outputs: [
      {
        internalType: "enum VaultType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
const stratAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tvl",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int24",
        name: "tickLower",
        type: "int24",
      },
      {
        indexed: false,
        internalType: "int24",
        name: "tickUpper",
        type: "int24",
      },
    ],
    name: "RangeChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "newRewardToLp0AddressPath",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint24[]",
        name: "newRewardToLp0FeePath",
        type: "uint24[]",
      },
    ],
    name: "RewardToLp0PathChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "newRewardToLp1AddressPath",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint24[]",
        name: "newRewardToLp1FeePath",
        type: "uint24[]",
      },
    ],
    name: "RewardToLp1PathChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "manager",
        type: "address",
      },
    ],
    name: "SetManager",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "harvester",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stakeHarvested",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tvl",
        type: "uint256",
      },
    ],
    name: "StratHarvest",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tvl",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "NonfungiblePositionManager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "assettoNativeFeed",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "_tickLower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "_tickUpper",
        type: "int24",
      },
    ],
    name: "changeRange",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "chef",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "depositToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeDecimals",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fullMathLib",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fundManagerFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "harvest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "inCaseTokensGetStuck",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "int24",
            name: "tickLower",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "tickUpper",
            type: "int24",
          },
          {
            internalType: "address",
            name: "stake",
            type: "address",
          },
          {
            internalType: "address",
            name: "chef",
            type: "address",
          },
          {
            internalType: "address",
            name: "reward",
            type: "address",
          },
          {
            internalType: "address",
            name: "tickMathLib",
            type: "address",
          },
          {
            internalType: "address",
            name: "sqrtPriceMathLib",
            type: "address",
          },
          {
            internalType: "address",
            name: "liquidityMathLib",
            type: "address",
          },
          {
            internalType: "address",
            name: "safeCastLib",
            type: "address",
          },
          {
            internalType: "address",
            name: "liquidityAmountsLib",
            type: "address",
          },
          {
            internalType: "address",
            name: "fullMathLib",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "rewardToLp0AddressPath",
            type: "address[]",
          },
          {
            internalType: "uint24[]",
            name: "rewardToLp0FeePath",
            type: "uint24[]",
          },
          {
            internalType: "address[]",
            name: "rewardToLp1AddressPath",
            type: "address[]",
          },
          {
            internalType: "uint24[]",
            name: "rewardToLp1FeePath",
            type: "uint24[]",
          },
          {
            internalType: "address",
            name: "rewardtoNativeFeed",
            type: "address",
          },
          {
            internalType: "address",
            name: "assettoNativeFeed",
            type: "address",
          },
          {
            internalType: "string",
            name: "pendingRewardsFunctionName",
            type: "string",
          },
        ],
        internalType: "struct RiveraLpStakingParams",
        name: "_riveraLpStakingParams",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "vault",
            type: "address",
          },
          {
            internalType: "address",
            name: "router",
            type: "address",
          },
          {
            internalType: "address",
            name: "NonfungiblePositionManager",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "withdrawFeeDecimals",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "withdrawFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "feeDecimals",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "protocolFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "fundManagerFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "partnerFee",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "partner",
            type: "address",
          },
        ],
        internalType: "struct CommonAddresses",
        name: "_commonAddresses",
        type: "tuple",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastHarvest",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidityAmountsLib",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidityBalance",
    outputs: [
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidityMathLib",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lpRewardsAvailable",
    outputs: [
      {
        internalType: "uint256",
        name: "lpFeesDepositToken",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lpToken0",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lpToken1",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "manager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "onlyManager",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "onlyVault",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "panic",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "partner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "partnerFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingRewardsFunctionName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolFee",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "protocolFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "retireStrat",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "reward",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewardToLp0AddressPath",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewardToLp0FeePath",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewardToLp1AddressPath",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewardToLp1FeePath",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardsAvailable",
    outputs: [
      {
        internalType: "uint256",
        name: "rewardsAvbl",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardtoNativeFeed",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "safeCastLib",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_manager",
        type: "address",
      },
    ],
    name: "setManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "rewardToLp0AddressPath_",
        type: "address[]",
      },
      {
        internalType: "uint24[]",
        name: "rewardToLp0FeePath_",
        type: "uint24[]",
      },
    ],
    name: "setRewardToLp0Path",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "rewardToLp1AddressPath_",
        type: "address[]",
      },
      {
        internalType: "uint24[]",
        name: "rewardToLp1FeePath_",
        type: "uint24[]",
      },
    ],
    name: "setRewardToLp1Path",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sqrtPriceMathLib",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stake",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tickLower",
    outputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tickMathLib",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tickUpper",
    outputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenID",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vault",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawFeeDecimals",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
const vaultAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "asset_",
        type: "address",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_approvalDelay",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_totalTvlCap",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "NewStratCandidate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "sharePriceX96",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "unutilizedAssetBal",
        type: "uint256",
      },
    ],
    name: "SharePriceChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "onwer_",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldTvlCap",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newTvlCap",
        type: "uint256",
      },
    ],
    name: "TvlCapChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "UpgradeStrat",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "onwer_",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldTvlCap",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newTvlCap",
        type: "uint256",
      },
    ],
    name: "UserTvlCapChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "approvalDelay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "asset",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "convertToAssets",
    outputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
    ],
    name: "convertToShares",
    outputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getStratProposal",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "implementation",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "proposedTime",
            type: "uint256",
          },
        ],
        internalType: "struct StratCandidate",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "inCaseTokensGetStuck",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IStrategy",
        name: "_strategy",
        type: "address",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "maxDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "maxMint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "maxRedeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "maxWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
    ],
    name: "previewDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "previewMint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "previewRedeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
    ],
    name: "previewWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_implementation",
        type: "address",
      },
    ],
    name: "proposeStrat",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "redeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "totalTvlCap_",
        type: "uint256",
      },
    ],
    name: "setTotalTvlCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "userTvlCap_",
        type: "uint256",
      },
    ],
    name: "setUserTvlCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stratCandidate",
    outputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "proposedTime",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "strategy",
    outputs: [
      {
        internalType: "contract IStrategy",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAssets",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalTvlCap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "upgradeStrat",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userTvlCap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const erc20Abi = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_spender",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_from",
        type: "address",
      },
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
      {
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
];
const stakeAbi = [
  { type: "constructor", inputs: [] },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [
      { type: "uint256", name: "amount0", internalType: "uint256" },
      { type: "uint256", name: "amount1", internalType: "uint256" },
    ],
    name: "burn",
    inputs: [
      { type: "int24", name: "tickLower", internalType: "int24" },
      { type: "int24", name: "tickUpper", internalType: "int24" },
      { type: "uint128", name: "amount", internalType: "uint128" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [
      { type: "uint128", name: "amount0", internalType: "uint128" },
      { type: "uint128", name: "amount1", internalType: "uint128" },
    ],
    name: "collect",
    inputs: [
      { type: "address", name: "recipient", internalType: "address" },
      { type: "int24", name: "tickLower", internalType: "int24" },
      { type: "int24", name: "tickUpper", internalType: "int24" },
      { type: "uint128", name: "amount0Requested", internalType: "uint128" },
      { type: "uint128", name: "amount1Requested", internalType: "uint128" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [
      { type: "uint128", name: "amount0", internalType: "uint128" },
      { type: "uint128", name: "amount1", internalType: "uint128" },
    ],
    name: "collectProtocol",
    inputs: [
      { type: "address", name: "recipient", internalType: "address" },
      { type: "uint128", name: "amount0Requested", internalType: "uint128" },
      { type: "uint128", name: "amount1Requested", internalType: "uint128" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "factory",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint24", name: "", internalType: "uint24" }],
    name: "fee",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "feeGrowthGlobal0X128",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "feeGrowthGlobal1X128",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "flash",
    inputs: [
      { type: "address", name: "recipient", internalType: "address" },
      { type: "uint256", name: "amount0", internalType: "uint256" },
      { type: "uint256", name: "amount1", internalType: "uint256" },
      { type: "bytes", name: "data", internalType: "bytes" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "increaseObservationCardinalityNext",
    inputs: [
      {
        type: "uint16",
        name: "observationCardinalityNext",
        internalType: "uint16",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "initialize",
    inputs: [
      { type: "uint160", name: "sqrtPriceX96", internalType: "uint160" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint128", name: "", internalType: "uint128" }],
    name: "liquidity",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "address", name: "", internalType: "contract IFusionXV3LmPool" },
    ],
    name: "lmPool",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint128", name: "", internalType: "uint128" }],
    name: "maxLiquidityPerTick",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [
      { type: "uint256", name: "amount0", internalType: "uint256" },
      { type: "uint256", name: "amount1", internalType: "uint256" },
    ],
    name: "mint",
    inputs: [
      { type: "address", name: "recipient", internalType: "address" },
      { type: "int24", name: "tickLower", internalType: "int24" },
      { type: "int24", name: "tickUpper", internalType: "int24" },
      { type: "uint128", name: "amount", internalType: "uint128" },
      { type: "bytes", name: "data", internalType: "bytes" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "uint32", name: "blockTimestamp", internalType: "uint32" },
      { type: "int56", name: "tickCumulative", internalType: "int56" },
      {
        type: "uint160",
        name: "secondsPerLiquidityCumulativeX128",
        internalType: "uint160",
      },
      { type: "bool", name: "initialized", internalType: "bool" },
    ],
    name: "observations",
    inputs: [{ type: "uint256", name: "", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "int56[]", name: "tickCumulatives", internalType: "int56[]" },
      {
        type: "uint160[]",
        name: "secondsPerLiquidityCumulativeX128s",
        internalType: "uint160[]",
      },
    ],
    name: "observe",
    inputs: [
      { type: "uint32[]", name: "secondsAgos", internalType: "uint32[]" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "uint128", name: "liquidity", internalType: "uint128" },
      {
        type: "uint256",
        name: "feeGrowthInside0LastX128",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "feeGrowthInside1LastX128",
        internalType: "uint256",
      },
      { type: "uint128", name: "tokensOwed0", internalType: "uint128" },
      { type: "uint128", name: "tokensOwed1", internalType: "uint128" },
    ],
    name: "positions",
    inputs: [{ type: "bytes32", name: "", internalType: "bytes32" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "uint128", name: "token0", internalType: "uint128" },
      { type: "uint128", name: "token1", internalType: "uint128" },
    ],
    name: "protocolFees",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setFeeProtocol",
    inputs: [
      { type: "uint32", name: "feeProtocol0", internalType: "uint32" },
      { type: "uint32", name: "feeProtocol1", internalType: "uint32" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setLmPool",
    inputs: [{ type: "address", name: "_lmPool", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "uint160", name: "sqrtPriceX96", internalType: "uint160" },
      { type: "int24", name: "tick", internalType: "int24" },
      { type: "uint16", name: "observationIndex", internalType: "uint16" },
      {
        type: "uint16",
        name: "observationCardinality",
        internalType: "uint16",
      },
      {
        type: "uint16",
        name: "observationCardinalityNext",
        internalType: "uint16",
      },
      { type: "uint32", name: "feeProtocol", internalType: "uint32" },
      { type: "bool", name: "unlocked", internalType: "bool" },
    ],
    name: "slot0",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "int56", name: "tickCumulativeInside", internalType: "int56" },
      {
        type: "uint160",
        name: "secondsPerLiquidityInsideX128",
        internalType: "uint160",
      },
      { type: "uint32", name: "secondsInside", internalType: "uint32" },
    ],
    name: "snapshotCumulativesInside",
    inputs: [
      { type: "int24", name: "tickLower", internalType: "int24" },
      { type: "int24", name: "tickUpper", internalType: "int24" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [
      { type: "int256", name: "amount0", internalType: "int256" },
      { type: "int256", name: "amount1", internalType: "int256" },
    ],
    name: "swap",
    inputs: [
      { type: "address", name: "recipient", internalType: "address" },
      { type: "bool", name: "zeroForOne", internalType: "bool" },
      { type: "int256", name: "amountSpecified", internalType: "int256" },
      { type: "uint160", name: "sqrtPriceLimitX96", internalType: "uint160" },
      { type: "bytes", name: "data", internalType: "bytes" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "tickBitmap",
    inputs: [{ type: "int16", name: "", internalType: "int16" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "int24", name: "", internalType: "int24" }],
    name: "tickSpacing",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "uint128", name: "liquidityGross", internalType: "uint128" },
      { type: "int128", name: "liquidityNet", internalType: "int128" },
      {
        type: "uint256",
        name: "feeGrowthOutside0X128",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "feeGrowthOutside1X128",
        internalType: "uint256",
      },
      { type: "int56", name: "tickCumulativeOutside", internalType: "int56" },
      {
        type: "uint160",
        name: "secondsPerLiquidityOutsideX128",
        internalType: "uint160",
      },
      { type: "uint32", name: "secondsOutside", internalType: "uint32" },
      { type: "bool", name: "initialized", internalType: "bool" },
    ],
    name: "ticks",
    inputs: [{ type: "int24", name: "", internalType: "int24" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "token0",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "token1",
    inputs: [],
  },
  {
    type: "event",
    name: "Burn",
    inputs: [
      { type: "address", name: "owner", indexed: true },
      { type: "int24", name: "tickLower", indexed: true },
      { type: "int24", name: "tickUpper", indexed: true },
      { type: "uint128", name: "amount", indexed: false },
      { type: "uint256", name: "amount0", indexed: false },
      { type: "uint256", name: "amount1", indexed: false },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Collect",
    inputs: [
      { type: "address", name: "owner", indexed: true },
      { type: "address", name: "recipient", indexed: false },
      { type: "int24", name: "tickLower", indexed: true },
      { type: "int24", name: "tickUpper", indexed: true },
      { type: "uint128", name: "amount0", indexed: false },
      { type: "uint128", name: "amount1", indexed: false },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "CollectProtocol",
    inputs: [
      { type: "address", name: "sender", indexed: true },
      { type: "address", name: "recipient", indexed: true },
      { type: "uint128", name: "amount0", indexed: false },
      { type: "uint128", name: "amount1", indexed: false },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Flash",
    inputs: [
      { type: "address", name: "sender", indexed: true },
      { type: "address", name: "recipient", indexed: true },
      { type: "uint256", name: "amount0", indexed: false },
      { type: "uint256", name: "amount1", indexed: false },
      { type: "uint256", name: "paid0", indexed: false },
      { type: "uint256", name: "paid1", indexed: false },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "IncreaseObservationCardinalityNext",
    inputs: [
      { type: "uint16", name: "observationCardinalityNextOld", indexed: false },
      { type: "uint16", name: "observationCardinalityNextNew", indexed: false },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Initialize",
    inputs: [
      { type: "uint160", name: "sqrtPriceX96", indexed: false },
      { type: "int24", name: "tick", indexed: false },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Mint",
    inputs: [
      { type: "address", name: "sender", indexed: false },
      { type: "address", name: "owner", indexed: true },
      { type: "int24", name: "tickLower", indexed: true },
      { type: "int24", name: "tickUpper", indexed: true },
      { type: "uint128", name: "amount", indexed: false },
      { type: "uint256", name: "amount0", indexed: false },
      { type: "uint256", name: "amount1", indexed: false },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SetFeeProtocol",
    inputs: [
      { type: "uint32", name: "feeProtocol0Old", indexed: false },
      { type: "uint32", name: "feeProtocol1Old", indexed: false },
      { type: "uint32", name: "feeProtocol0New", indexed: false },
      { type: "uint32", name: "feeProtocol1New", indexed: false },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SetLmPoolEvent",
    inputs: [{ type: "address", name: "addr", indexed: false }],
    anonymous: false,
  },
  {
    type: "event",
    name: "Swap",
    inputs: [
      { type: "address", name: "sender", indexed: true },
      { type: "address", name: "recipient", indexed: true },
      { type: "int256", name: "amount0", indexed: false },
      { type: "int256", name: "amount1", indexed: false },
      { type: "uint160", name: "sqrtPriceX96", indexed: false },
      { type: "uint128", name: "liquidity", indexed: false },
      { type: "int24", name: "tick", indexed: false },
      { type: "uint128", name: "protocolFeesToken0", indexed: false },
      { type: "uint128", name: "protocolFeesToken1", indexed: false },
    ],
    anonymous: false,
  },
];
export { riveraFactoryAbi, stratAbi, vaultAbi, erc20Abi, stakeAbi };
