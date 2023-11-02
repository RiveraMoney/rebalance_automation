import { Rebalancer } from "./Rebalancer.js";
(function () {
  return moment().tz("Asia/Kolkata").format() + " ";
});
import moment from "moment";
async function autoCompound() {
  const riveraFactory = "0x30ef8344B72A2e75E03d4aC6D934C92A29177a7f"; //fusionx vault factory
  const rpcURL = "http://localhost:8545";
  // const rpcURL = "https://rpc.mantle.xyz/";
  // const timeOut = 28800000;
  const timeOut = 15000;
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
