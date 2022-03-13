import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppActions } from 'src/app/store/actions/app.action';
import { ShippingActions } from 'src/app/store/actions/shipping.actions';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['../layout/layout.component.css']
})
export class ShippingComponent implements OnInit {
  shippingForm!: FormGroup;
  constructor(private store$: Store) {
    
   }

  ngOnInit(): void {
    this.shippingForm = new FormGroup({
      shippingFullName: new FormControl(''),
      shippingPhone: new FormControl(''),
      shippingAddress: new FormControl(''),
      shippingApt: new FormControl(''),
      shippingCity: new FormControl(''),
      shippingCountry: new FormControl(''),
      shippingZip: new FormControl('')
    })
  }

  findGeo(){
    console.log('GEO');
  }

  nextStageShipping(){
    console.log(this.shippingForm.value)
    this.store$.dispatch(ShippingActions.setShippingData(this.shippingForm.value))
    this.store$.dispatch(AppActions.nextStage())
  }
}
