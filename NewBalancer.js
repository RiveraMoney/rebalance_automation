import * as ethers from "ethers";
import {
    stratAbi,
    vaultAbi,
    erc20Abi,
    stakeAbi,
    stakeAlgebraAbi,
} from "./abis/abi.js";
//import { vaults } from "./vaults.js";

const apiUrl = 'https://api.rivera.money/vaults';

class Balancer {
    harvester_private_key;

    constructor(_harvester_private_key) {
        this.harvester_private_key = _harvester_private_key;
    }

    async rebalanceAllVaults() {
        let response = await fetch(apiUrl);
        let vaults = await response.json();
        // console.log("vaults",vaults);
        // vaults=await this.getVaultsForTesting(vaults);
        // console.log("vaultsTemp",vaults);
        
        for (let index = 0; index < vaults.length; index++) {
            const element = vaults[index];
            const vault = element.vaultAddress;
            console.log("=========vault=================");
            console.log(vault);
            if (element.rebalance == false) {
                // console.log("=========VAULT  SKIPPED=================");
                continue;
            }
            const provider = new ethers.JsonRpcProvider(element.chainRPC.trim());
            const signer = new ethers.Wallet(this.harvester_private_key, provider);
            const currentVaultContract = new ethers.Contract(
                vault,
                vaultAbi,
                provider
            ); //Vault contract is changed to the current one in thsi line in every loop and run
            const strategyContract = new ethers.Contract(
                await currentVaultContract.strategy(),
                stratAbi,
                signer
            );
            const stakeContract = new ethers.Contract(
                await strategyContract.stake(),
                element.dex == "Swapsicle" ? stakeAlgebraAbi : stakeAbi,
                signer
            );
            // const symbol = await currentVaultContract.symbol();
            // if (
            //   symbol[symbol.length - 1] == "Z" ||
            //   symbol[symbol.length - 1] == "z"
            // ) {
            //   continue;
            // }
            const tickLower = Number(await strategyContract.tickLower());
            const tickUpper = Number(await strategyContract.tickUpper());
            let tickSpacing;
            let currentTick;

            if (element.dex == "Swapsicle") {
                currentTick = Number((await stakeContract.globalState()).tick);
                tickSpacing = Number(await stakeContract.tickSpacing());
            } else {
                currentTick = Number((await stakeContract.slot0()).tick);
                tickSpacing = Number(await strategyContract.poolFee()) / 50;
            }

            const tickAverage = tickUpper - element.logR_u;
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
                let newTickLower = currentTick - element.logR_d;
                let newTickUpper = currentTick + element.logR_u;
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

    // async getVaultsForTesting(vaultsMain){
    //     let vaultsTemp;
    //     vaultsTemp= vaultsMain.filter((element)=>{
    //         if(element.rebalance==true){
    //             if(element.chainRPC.trim()=='https://mainnet.telos.net/evm'){
    //                 element.chainRPC="http://127.0.0.1:8000/";
    //             }
    //             if(element.chainRPC.trim()=='https://rpc.mantle.xyz/'){
    //                 element.chainRPC="http://127.0.0.1:8545/";
    //             }
    //             if(element.chainRPC.trim()=='https://pacific-rpc.manta.network/http'){
    //                 element.chainRPC="http://127.0.0.1:3000/";
    //             }
    //             return element;
    //         }
    //     })
    //     return vaultsTemp;
    // }
}

export { Balancer };
