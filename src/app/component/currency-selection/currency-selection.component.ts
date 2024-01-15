import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Currency, CurrencySymbolsResponse } from 'src/app/models/symbols';
import { CurrencyService } from 'src/app/service/currency.service';

@Component({
  selector: 'app-currency-selection',
  templateUrl: './currency-selection.component.html',
  styleUrls: ['./currency-selection.component.css'],
})
export class CurrencySelectionComponent implements OnInit {
  currencies$!: Observable<Currency[]>;
  selectedFromCurrency: string = 'USD';
  selectedToCurrency: string = 'EUR';
  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencies$ = this.currencyService.getCurrencySymbols().pipe(
      map((response) => {
        if (response && response.symbols) {
          return Object.keys(response.symbols).map((key) => ({
            code: key,
            name: response.symbols[key],
          }));
        } else {
          console.error(response);
          return [];
        }
      })
    );
  }
}
