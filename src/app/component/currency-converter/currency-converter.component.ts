import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrencyService } from 'src/app/service/currency.service';
import { CurrencySelectionComponent } from '../currency-selection/currency-selection.component';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
})
export class CurrencyConverterComponent implements OnInit, OnDestroy {
  convertedCurr: number = 0;
  constructor(private currencyService: CurrencyService) {}
  latestSub!: Subscription;
  amount: number = 0;
  @ViewChild('currencySelection')
  currencySelection!: CurrencySelectionComponent;

  ngOnInit(): void {
    this.latestSub = this.currencyService
      .getLatestExchangeRates()
      .subscribe((response) => {
        console.log(response);
      });
  }

  convertCurrency(): void {
    const selectedFromCurrency = this.currencySelection.selectedFromCurrency;
    const selectedToCurrency = this.currencySelection.selectedToCurrency;
    this.currencyService
      .convertCurrency(selectedFromCurrency, selectedToCurrency, this.amount)
      .subscribe((result) => {
        this.convertedCurr = result.result;
        console.log(this.convertedCurr);
        console.log(selectedFromCurrency);
        console.log(selectedToCurrency);
        console.log(this.amount);
      });
  }

  ngOnDestroy(): void {
    this.latestSub.unsubscribe();
  }
}
