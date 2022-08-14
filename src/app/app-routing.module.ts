import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from './components/country-list/country-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/countryList', pathMatch: 'full' },
  {path: 'countryList', component:CountryListComponent},
  {path: 'country/:name', component:CountryDetailComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }



export class ApproutingModule { }
export const routingComponents = [CountryDetailComponent,CountryListComponent]
