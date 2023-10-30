import { Rebalancer } from "./Rebalancer.js";
(function () {
  return moment().tz("Asia/Kolkata").format() + " ";
});
import moment from "moment";
async function autoCompound() {
  const riveraFactory = "0xCE36C4e1703106e9cAB6258A6dcB6FeB52D25E87"; //fusionx vault factory
  const rpcURL = "https://rpc.testnet.mantle.xyz";
  // const timeOut = 28800000;
  const timeOut = 5000;
  const rebalancer = new Rebalancer(rpcURL, riveraFactory);
  let locked = false;
  while (true) {
    await new Promise((resolve) => setTimeout(resolve, timeOut));
    if (!locked) {
      locked = true;
      console.log(`Entering if block, locked: ${locked}`);
      rebalancer.rebalanceAllVaults().then((nothing) => {
        locked = false;
        console.log(`Unlocking harvest, locked: ${locked}`);
        console.log("Done One Harvesting Cycle.");
      });
    }
  }
}

autoCompound();
