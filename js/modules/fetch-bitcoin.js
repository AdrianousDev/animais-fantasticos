import { chamarAPI } from "./chamarAPI.js";

export default async function fetchBitcoin(url, target) {
  const dataBitcoin = await chamarAPI(url);
  const btcPreco = document.querySelector(target);
  btcPreco.innerText = (1000 / dataBitcoin.BRL.sell).toFixed(4);
}
