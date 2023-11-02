import * as ethers from "ethers";
import * as dotenv from "dotenv";
dotenv.config();

import {
  riveraFactoryAbi,
  stratAbi,
  vaultAbi,
  erc20Abi,
  stakeAbi,
} from "./abis/abi.js";

import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

class Rebalancer {
  BLOCKCHAIN_JSON_RPC_URL;
  riveraFactory;
  harvester_private_key;
  provider;
  signer;

  constructor(_BLOCKCHAIN_JSON_RPC_URL, _riveraFactory) {
    // if (!process.env.HARVESTER_PRIVATE_KEY) {
    //   throw new Error(
    //     "Variables required for the Auto compounding service run is not set up in the .env file"
    //   );
    // }
    this.BLOCKCHAIN_JSON_RPC_URL = _BLOCKCHAIN_JSON_RPC_URL;
    // this.harvester_private_key = process.env.HARVESTER_PRIVATE_KEY;
    this.provider = new ethers.JsonRpcProvider(this.BLOCKCHAIN_JSON_RPC_URL);
    // this.signer = new ethers.Wallet(this.harvester_private_key, this.provider);
    this.riveraFactory = new ethers.Contract(
      _riveraFactory,
      riveraFactoryAbi,
      this.provider
    );
  }

  async rebalanceAllVaults() {
    if (!process.env.HARVESTER_PRIVATE_KEY) {
      // throw new Error(
      //   "Variables required for the Auto compounding service run is not set up in the .env file"
      // );
      await this.getHarvestorKey();
    } else {
      this.harvester_private_key = process.env.HARVESTER_PRIVATE_KEY;
      this.signer = new ethers.Wallet(
        this.harvester_private_key,
        this.provider
      );
    }

    console.log(`Starting query of Vault addresses from blockchian storage.`);
    const vaultAdresses = await this.riveraFactory.listAllVaults();
    if (vaultAdresses.length == 0) {
      console.log("No Vaults created from the factory yet! Doing Nothing.");
    } else {
      for (let index = 0; index < vaultAdresses.length; index++) {
        const vault = vaultAdresses[index];
        console.log("vault address", vault);
        const currentVaultContract = new ethers.Contract(
          vault,
          vaultAbi,
          this.provider
        ); //Vault contract is changed to the current one in thsi line in every loop and run
        const strategyContract = new ethers.Contract(
          await currentVaultContract.strategy(),
          stratAbi,
          this.signer
        );

        const stakeContract = new ethers.Contract(
          await strategyContract.stake(),
          stakeAbi,
          this.signer
        );
        const symbol = await currentVaultContract.symbol();
        if (
          symbol[symbol.length - 1] == "Z" ||
          symbol[symbol.length - 1] == "z"
        ) {
          continue;
        }
        const tickLower = Number(await strategyContract.tickLower());
        const tickUpper = Number(await strategyContract.tickUpper());
        const currentTick = Number((await stakeContract.slot0()).tick);
        const tickSpacing = Number(await strategyContract.poolFee()) / 50;
        const tickAverage = (tickLower + tickUpper) / 2;
        const safeTickLower = tickAverage - 953;
        const safeTickUpper = tickAverage + 953;

        if (currentTick > safeTickLower && currentTick < safeTickUpper) {
          console.log("Ticks Are In Safe Range");
        } else {
          let newTickLower = currentTick - 23027;
          let newTickUpper = currentTick + 23027;
          if (newTickLower % tickSpacing != 0) {
            newTickLower = await this.roundToMultiple(
              newTickLower,
              tickSpacing
            );
          }
          if (newTickUpper % tickSpacing != 0) {
            newTickUpper = await this.roundToMultiple(
              newTickUpper,
              tickSpacing
            );
          }
          const txResponse = await strategyContract.changeRange(
            newTickLower,
            newTickUpper
          );
          const txReceipt = await txResponse.wait();
          console.log(
            `Actual gas spent of the current transaction: ${Number(
              txReceipt.gasUsed
            )}`
          );
        }
        console.log("==============================================");
      }
    }
  }

  async getHarvestorKey() {
    const secret_name = "privatekey_testnet";

    const client = new SecretsManagerClient({
      region: "us-east-1",
    });

    let response;

    try {
      response = await client.send(
        new GetSecretValueCommand({
          SecretId: secret_name,
          VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
        })
      );
    } catch (error) {
      // For a list of exceptions thrown, see
      // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
      throw error;
    }

    const secret = response.SecretString;
    console.log("secret", secret);
    this.harvester_private_key = secret.privatekey_testnet;
    this.signer = new ethers.Wallet(this.harvester_private_key, this.provider);
  }

  async getDecimals(token) {
    const tokenContract = new ethers.Contract(token, erc20Abi, this.signer);
    const decimals = await tokenContract.decimals();
    return decimals;
  }

  async roundToMultiple(number, multiple) {
    return Math.round(number / multiple) * multiple;
  }
}

export { Rebalancer };
