export interface IStockData {
    code?: string;
    stockExchange?: string;
    topStocks?: ItopStock[];
}

export interface ItopStock {
    code?: string,
    stockName?: string,
    price?: number
}