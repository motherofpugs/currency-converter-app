import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyConverterComponent } from './component/currency-converter/currency-converter.component';
import { CurrencySelectionComponent } from './component/currency-selection/currency-selection.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyConverterComponent,
    CurrencySelectionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
