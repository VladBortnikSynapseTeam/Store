import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { GeoserviceService } from 'src/app/services/geoservice.service';
import { AppActions } from 'src/app/store/actions/app.action';
import { BillingActions } from 'src/app/store/actions/billing.actions';
import { countryList } from 'src/app/store/model/app.model';
import { ShippingSelectors } from 'src/app/store/selectors/shipping.selector';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['../layout/layout.component.css']
})
export class BillingComponent implements OnInit {
  billingFormGroup!: FormGroup;
  countries = countryList;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private store$: Store, private geoService: GeoserviceService) { }
  
  ngOnInit(): void {
    this.billingFormGroup = new FormGroup({
      billingFullName: new FormControl('',Validators.required),
      billingPhone: new FormControl('',[Validators.required, Validators.email]),
      billingAddress: new FormControl('',Validators.required),
      billingApt: new FormControl(''),
      billingCity: new FormControl('',Validators.required),
      billingCountry: new FormControl('',Validators.required),
      billingZip: new FormControl('',Validators.required)
    })
  }

  nextStageBilling(){
    if(this.billingFormGroup.valid){
      this.store$.dispatch(BillingActions.setBillingData(this.billingFormGroup.value))
      this.store$.dispatch(AppActions.nextStage())
    }else{
      alert("Form is not valid")
    }
 
  }

  findGeo(){
    navigator.geolocation.getCurrentPosition(res => {
      this.geoService.getLocation(res.coords.latitude,res.coords.longitude)
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        console.log(result)
        this.billingFormGroup.patchValue({
          billingCity: result.results[0].components.city,
          billingCountry: result.results[0].components.country,
          billingZip: result.results[0].components.postcode,
          billingAddress: result.results[0].components.neighbourhood,
          billingApt: result.results[0].components.road
        })
      })
    })
  }

  sameAsShipping(){
      this.store$.select(ShippingSelectors.shippingState)
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.billingFormGroup.patchValue({
          billingFullName: data.shippingFullName,
          billingAddress: data.shippingAddress,
          billingApt: data.shippingApt,
          billingCity: data.shippingCity,
          billingCountry: data.shippingCountry,
          billingZip: data.shippingZip
        })
      })
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
