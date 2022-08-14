import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RootObject } from 'src/app/models/rout-object';
import { CountryService } from 'src/app/service/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  public countryLijst:RootObject[] = [] as RootObject[];
  public country:string = "";
  public region:string ="";
  public isRegion:boolean = false;
  public regions:string[] = [
    "Refresh",
    "Europe",
    "Oceania",
    "Asia",
    "Africa",
    "Americas"
  ]
  id:number = 4;
  constructor(public countryService:CountryService, private router:Router) { }


  ngOnInit(): void {
    if(this.country == "" || this.country == " " && this.region == "" ) {
      this.getCList();
    }
   
  }
 
  public getCountrys(event:any) {
    this.country = event.target.value;
    this.country == "" || this.country == " " ? this.getCList() : this.countryLijst =  this.countryLijst.filter(x => x.name.official.toLocaleLowerCase().includes(this.country.toLocaleLowerCase()));
  }
  public getCList() {
    this.countryService.getCountryList().subscribe(data => {
      //take 40 countrys
      this.countryLijst = data.filter((country ,index) => index < 40);
      })
  }
  public getRegion(region:any) {     
        this.region = region.target.value;
        this.region != "" ? this.countryService.getCountryList().subscribe(data => {
          this.countryLijst = data.filter(c => c.region == this.region );
          }) : this.getCList();
        if(this.region == "Refresh") {
          this.countryService.getCountryList().subscribe(data => {
            this.countryLijst = data.filter((country ,index) => index < 40);
            })
        }
  }
  public getCountryDetails(item:RootObject) {
    this.router.navigate(["country", item.name.common])
  }
}
