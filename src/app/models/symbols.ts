export interface CurrencySymbolsResponse {
  symbols: { [currencyCode: string]: string };
}

export interface Currency {
  code: string;
  name: string;
}
