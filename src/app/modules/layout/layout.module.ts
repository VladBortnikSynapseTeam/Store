import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from 'src/app/components/layout/layout.component';
import { ShippingComponent } from 'src/app/components/shipping/shipping.component';
import { BillingComponent } from 'src/app/components/billing/billing.component';
import { PaymentComponent } from 'src/app/components/payment/payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeoserviceService } from 'src/app/services/geoservice.service';
import {HttpClientModule} from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import { FinalComponent } from 'src/app/components/final/final.component';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [LayoutComponent,ShippingComponent,BillingComponent,PaymentComponent,FinalComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    NgxPrintModule
  ],
  providers: [GeoserviceService]
})
export class LayoutModule { }
