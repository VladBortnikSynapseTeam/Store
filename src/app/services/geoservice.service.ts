import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeoserviceService {

  constructor(private http: HttpClient) { }

  getLocation(lat: number, lon: number){
    return this.http.get<any>(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${environment.geoKey}&language=en`);
  }
}
