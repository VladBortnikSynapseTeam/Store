import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from 'src/app/components/layout/layout.component';
import { ShippingComponent } from 'src/app/components/shipping/shipping.component';
import { BillingComponent } from 'src/app/components/billing/billing.component';
import { PaymentComponent } from 'src/app/components/payment/payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LayoutComponent,ShippingComponent,BillingComponent,PaymentComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ] 
})
export class LayoutModule { }
