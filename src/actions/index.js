import axios from 'axios';

export const FETCH_CURRENCY = 'FETCH_CURRENCY';

export function fetchCurrency(crypto) {
  const url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${crypto}&tsyms=USD,EUR,AED,INR`;
  const request = axios.get(url);

  return {
    type: FETCH_CURRENCY,
    payload: request
  };
}