const { ethers, Wallet, providers, } = require("ethers");
require('dotenv').config();
const abi = require("./Strat.json");
let { privateKeys } = process.env;

const dexApi = [
    "https://api.rivera.money/vaults/?dex=ApertureSwap",
    "https://api.rivera.money/vaults/?dex=FusionX",
    "https://api.rivera.money/vaults/?dex=Swapsicle",
    "https://api.rivera.money/vaults/?dex=Agni"
];

async function run(dexNum) {


    let pr = dexApi[dexNum];
    let response = await fetch(pr);
    let jsonResponse = await response.json();
    for (let i = 0; i < jsonResponse.length; i++) {
        let rpc = jsonResponse[i].chainRPC;
        let contractAddress = jsonResponse[i].strategy;
        let vaultAddress = jsonResponse[i].vaultAddress;
        console.log(rpc);
        console.log(contractAddress);
        console.log("Vault", vaultAddress)

        let provider = new providers.JsonRpcProvider(
            rpc
        );


        let signer = new ethers.Wallet(privateKeys, provider);

        let contract = new ethers.Contract(contractAddress, abi, signer);

        // let pauseIt = await contract.panic({
        //     gasLimit: 2000000,
        // });

        //await pauseIt.wait();
        let rq = await contract.paused();
        //await rq.wait();
        console.log(rq.toString());
    }
}

run(2);