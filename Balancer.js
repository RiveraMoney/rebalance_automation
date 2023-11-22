import * as ethers from "ethers";
import { stratAbi, vaultAbi, erc20Abi, stakeAbi } from "./abis/abi.js";
import { vaults } from "./vaults.js";

class Balancer {
  harvester_private_key;

  constructor(_harvester_private_key) {
    this.harvester_private_key = _harvester_private_key;
  }

  async rebalanceAllVaults() {
    for (let index = 0; index < vaults.length; index++) {
      const element = vaults[index];
      const vault = element.vault;
      console.log("=========vault=================");
      console.log(vault);
      const provider = new ethers.JsonRpcProvider(element.rpc.trim());
      const signer = new ethers.Wallet(this.harvester_private_key, provider);
      // console.log("signer", signer);
      const currentVaultContract = new ethers.Contract(
        vault,
        vaultAbi,
        provider
      ); //Vault contract is changed to the current one in thsi line in every loop and run
      // console.log("currentVaultContract", currentVaultContract);
      const strategyContract = new ethers.Contract(
        await currentVaultContract.strategy(),
        stratAbi,
        signer
      );
      // console.log("strategyContract", strategyContract);
      const stakeContract = new ethers.Contract(
        await strategyContract.stake(),
        stakeAbi,
        signer
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
      const tickAverage = tickUpper - element.logr_u;
      // const tickAverage = (tickLower + tickUpper) / 2;
      const safeTickLower = tickAverage - element.logt_d;
      const safeTickUpper = tickAverage + element.logt_u;
      // console.log("tickSpacing", tickSpacing);
      // console.log("tickLower", tickLower);
      // console.log("tickUpper", tickUpper);
      // console.log("currentTick", currentTick);
      // console.log("tickAverage", tickAverage);
      // console.log("safeTickLower", safeTickLower);
      // console.log("safeTickUpper", safeTickUpper);
      if (currentTick > safeTickLower && currentTick < safeTickUpper) {
        console.log("Ticks Are In Safe Range");
      } else {
        let newTickLower = currentTick - element.logr_d;
        let newTickUpper = currentTick + element.logr_u;
        if (newTickLower % tickSpacing != 0) {
          newTickLower = await this.roundToMultiple(newTickLower, tickSpacing);
        }
        if (newTickUpper % tickSpacing != 0) {
          newTickUpper = await this.roundToMultiple(newTickUpper, tickSpacing);
        }
        // console.log("newTickLower", newTickLower);
        // console.log("newTickUpper", newTickUpper);

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

  async getDecimals(token) {
    const tokenContract = new ethers.Contract(token, erc20Abi, this.signer);
    const decimals = await tokenContract.decimals();
    return decimals;
  }

  async roundToMultiple(number, multiple) {
    return Math.round(number / multiple) * multiple;
  }
}

export { Balancer };

/*
[
{
vault:"0xfa944c1996efBF9FbFF1a378903F4AD82C172D72"
rpc:"http://localhost:8545",
},
{
vault:"0x945438ef559EFf400429DFb101e57a6299B5ceE2"
rpc:"http://localhost:8545",
},
{
vault:"0xA25d1843eedE1E1D0631b979da605606412e64f7"
rpc:"http://localhost:8545",
},
]

*/
