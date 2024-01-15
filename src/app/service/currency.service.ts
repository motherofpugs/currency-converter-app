import { ConversionResponse } from './../models/conversion';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ExchangeRatesResponse } from '../models/exchangerate';

import { CurrencySymbolsResponse } from '../models/symbols';

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
    const httpUrl = url.replace('https://', 'http://');
    return this.httpClient.jsonp<ExchangeRatesResponse>(httpUrl, 'callback');
  }

  convertCurrency(
    from: string,
    to: string,
    amount: number
  ): Observable<ConversionResponse> {
    const endpoint = 'convert';
    const url = `${this.apiUrl}${endpoint}?access_key=${this.accessKey}&from=${from}&to=${to}&amount=${amount}`;
    const httpUrl = url.replace('https://', 'http://');
    return this.httpClient.jsonp<ConversionResponse>(httpUrl, 'callback').pipe(
      tap((result) => {
        console.log(result);
      })
    );
  }

  getCurrencySymbols(): Observable<CurrencySymbolsResponse> {
    const url = `${this.apiUrl}${this.symbolsEndpoint}?access_key=${this.accessKey}`;
    const httpUrl = url.replace('https://', 'http://');
    return this.httpClient.get<CurrencySymbolsResponse>(httpUrl);
  }
}
