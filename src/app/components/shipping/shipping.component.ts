import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { GeoserviceService } from 'src/app/services/geoservice.service';
import { AppActions } from 'src/app/store/actions/app.action';
import { ShippingActions } from 'src/app/store/actions/shipping.actions';
import { countryList } from 'src/app/store/model/app.model';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['../layout/layout.component.css']
})
export class ShippingComponent implements OnInit {
  shippingForm!: FormGroup;
  countries = countryList;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private store$: Store, private geoService: GeoserviceService) {
    
   }

  ngOnInit(): void {
    this.shippingForm = new FormGroup({
      shippingFullName: new FormControl('',Validators.required),
      shippingPhone: new FormControl('',Validators.required),
      shippingAddress: new FormControl('',Validators.required),
      shippingApt: new FormControl(''),
      shippingCity: new FormControl('',Validators.required),
      shippingCountry: new FormControl('',Validators.required),
      shippingZip: new FormControl('',Validators.required)
    })
  }

  findGeo(){
    navigator.geolocation.getCurrentPosition(res => {
      this.geoService.getLocation(res.coords.latitude,res.coords.longitude)
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        console.log(result)
        this.shippingForm.patchValue({
          shippingCity: result.results[0].components.city,
          shippingCountry: result.results[0].components.country,
          shippingZip: result.results[0].components.postcode,
          shippingAddress: result.results[0].components.neighbourhood,
          shippingApt: result.results[0].components.road
        })
      })
    })
  }

  nextStageShipping(){
    if(this.shippingForm.valid){
      this.store$.dispatch(ShippingActions.setShippingData(this.shippingForm.value))
      this.store$.dispatch(AppActions.nextStage())
    }
  }
  
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
