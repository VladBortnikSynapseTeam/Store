import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { PaymentActions } from 'src/app/store/actions/payment.actions';
import { PaymentSelector } from 'src/app/store/selectors/payment.selector';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['../layout/layout.component.css']
})
export class PaymentComponent implements OnInit {
  paymentFormGroup!: FormGroup;
  constructor(private store$: Store) { }

  ngOnInit(): void {
    this.paymentFormGroup = new FormGroup({
      paymentName: new FormControl(''),
      paymentNumber: new FormControl(''),
      paymentExpire: new FormControl(''),
      paymentCode: new FormControl('')
    })
  }

  nextStageBilling(){
    this.store$.dispatch(PaymentActions.setPaymentData(this.paymentFormGroup.value))
  }
}
