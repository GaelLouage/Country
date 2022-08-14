import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject } from '../models/rout-object';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
 private readonly baseurl:string = "https://restcountries.com/v3.1/all";

 private urlOne:string  = "https://restcountries.com/v3.1/name/";

  constructor(public http:HttpClient) {
    http.get(this.baseurl);
  }
  public getCountryList():Observable<RootObject[]> {
    return this.http.get<RootObject[]>(this.baseurl);
  }

  public getCountry(name:string):Observable<RootObject> {
    return this.http.get<RootObject>(this.urlOne += name);
  }
}
