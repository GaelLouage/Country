import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Name, NativeName, RootObject } from 'src/app/models/rout-object';
import { CountryService } from 'src/app/service/country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
public country:RootObject = {} as RootObject;

  constructor(private route:ActivatedRoute, public countryService:CountryService, private router:Router) { }
s:any;
  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.countryService.getCountryList().subscribe(data => {
         this.country  = data.filter(x => x.name.common == param.name)[0];
        
      });
    })
//     this.countryService.getCountry(param.name).subscribe(data => {
//       this.country  = data
//       alert(this.country)
//    });
//  })
  }
 
  public goBack():void {
    this.router.navigate(["countryList"])
  }
}
