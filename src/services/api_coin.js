import axios from 'axios';

const api_coin = axios.create({
  baseURL: 'https://free.currencyconverterapi.com/api/v5/'
});

export { api_coin };