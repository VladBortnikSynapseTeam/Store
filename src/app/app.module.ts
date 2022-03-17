import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppReducer } from './store/reducers/app.reducer';
import { BillingReducer } from './store/reducers/billing.reducer';
import { PaymentReducer } from './store/reducers/payment.reducer';
import { ShippingReducer } from './store/reducers/shipping.reducers';
import { FinalComponent } from './components/final/final.component';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({app: AppReducer, shipping: ShippingReducer, billing: BillingReducer, payment: PaymentReducer}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
