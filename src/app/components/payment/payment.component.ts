import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppActions } from 'src/app/store/actions/app.action';
import { PaymentActions } from 'src/app/store/actions/payment.actions';
import { PaymentSelector } from 'src/app/store/selectors/payment.selector';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['../layout/layout.component.css','./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentFormGroup!: FormGroup;
  constructor(private store$: Store) { }

  ngOnInit(): void {
    this.paymentFormGroup = new FormGroup({
      paymentName: new FormControl('',Validators.required),
      paymentNumber: new FormControl('',Validators.required),
      paymentExpire: new FormControl('',Validators.required),
      paymentCode: new FormControl('',Validators.required)
    })
  }

  nextStageBilling(){
    if(this.paymentFormGroup.valid){
      this.store$.dispatch(PaymentActions.setPaymentData(this.paymentFormGroup.value));
      this.store$.dispatch(AppActions.nextStage())
    }
  }
}
