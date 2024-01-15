export interface ExchangeRatesResponse {
  rates: { [currencyCode: string]: number };
  base: string;
  timestamp: number;
}
