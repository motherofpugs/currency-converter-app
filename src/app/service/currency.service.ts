import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExchangeRatesResponse } from '../models/exchangerate';
import { ConversionResponse } from '../models/conversion';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private endpoint = 'latest';
  private symbolsEndpoint = 'symbols';
  private accessKey = '6471fd274ba3462bd7bac5afa40e1b68';
  private apiUrl = 'https://data.fixer.io/api/';

  constructor(private httpClient: HttpClient) {}

  getLatestExchangeRates(): Observable<ExchangeRatesResponse> {
    const url = `${this.apiUrl}${this.endpoint}?access_key=${this.accessKey}`;
    return this.httpClient.jsonp<ExchangeRatesResponse>(url, 'callback');
  }

  convertCurrency(
    from: string,
    to: string,
    amount: number
  ): Observable<ConversionResponse> {
    const endpoint = 'convert';
    const url = `${this.apiUrl}${endpoint}?access_key=${this.accessKey}&from=${from}&to=${to}&amount=${amount}`;
    return this.httpClient.jsonp<ConversionResponse>(url, 'callback');
  }
}
