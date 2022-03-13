import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppActions } from 'src/app/store/actions/app.action';
import { BillingActions } from 'src/app/store/actions/billing.actions';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['../layout/layout.component.css']
})
export class BillingComponent implements OnInit {

  constructor(private store$: Store) { }
  billingFormGroup!: FormGroup;
  ngOnInit(): void {
    this.billingFormGroup = new FormGroup({
      billingFullName: new FormControl(''),
      billingPhone: new FormControl(''),
      billingAddress: new FormControl(''),
      billingApt: new FormControl(''),
      billingCity: new FormControl(''),
      billingCountry: new FormControl(''),
      billingZip: new FormControl('')
    })
  }

  nextStageBilling(){
    this.store$.dispatch(BillingActions.setBillingData(this.billingFormGroup.value))
    this.store$.dispatch(AppActions.nextStage())
  }

  findGeo(){
    console.log('GEO');
  }
}
