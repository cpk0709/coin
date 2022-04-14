const BASE_URL = "https://api.coinpaprika.com/v1";

export function fetchCoins(){
    return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinId:string|undefined){
    return fetch(`${BASE_URL}/coins/${coinId}`).then((response) => response.json());
}

export function fetchCoinTickers(coinId:string|undefined){
    return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) => response.json());
}

export function fetchCoinHistory(coinId:string){
    // 밀리세컨드를 초로. 소수점 버리는게 포인트!
    const endDate = Math.floor(Date.now() / 1000);
    // 시작시간은 endDate(현재)기준 1주일 전
    const startDate = endDate - 60 * 60 * 24 * 7 * 2;
    return fetch(`${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`).then((response) => response.json());
}