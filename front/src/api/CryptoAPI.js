import axios from 'axios';

const BTC_TICKER_URL = 'https://api.coinmarketcap.com/v1/ticker/bitcoin/';

const CryptoAPI = {
  loadBtcTicker() {
    return axios.get(BTC_TICKER_URL).then(res => res.data);
  },
};

export default CryptoAPI;
