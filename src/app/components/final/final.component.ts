import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { IBillingState, IPaymentState, IShippingState } from 'src/app/store/model/app.model';
import { BillingSelector } from 'src/app/store/selectors/billing.selector';
import { PaymentSelector } from 'src/app/store/selectors/payment.selector';
import { ShippingSelectors } from 'src/app/store/selectors/shipping.selector';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {
  email: string = '';
  shippingInfo!: IShippingState;
  billingInfo!: IBillingState;
  destroy$: Subject<boolean> = new Subject<boolean>();
  paymentInfo!: IPaymentState;
  constructor(private store$: Store) { 
    this.store$.select(ShippingSelectors.shippingState)
    .pipe(takeUntil(this.destroy$))
    .subscribe(shippingData => {
      this.shippingInfo = shippingData;
    })
    this.store$.select(BillingSelector.billingState)
    .pipe(takeUntil(this.destroy$))
    .subscribe(billingData => {
      this.billingInfo = billingData
    })
    this.store$.select(PaymentSelector.paymentState)
    .pipe(takeUntil(this.destroy$))
    .subscribe(paymentData => {
      this.paymentInfo = paymentData
    })
  }

  ngOnInit(): void {
    this.store$.select(BillingSelector.billingState)
    .pipe(takeUntil(this.destroy$))
    .subscribe( result => {
      this.email = result.billingPhone;
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
