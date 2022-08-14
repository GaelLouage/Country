import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';
import {Routes, RouterModule} from "@angular/router";
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { CountryListComponent } from './components/country-list/country-list.component';
import { NavComponent } from './components/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CountryDetailComponent,
    CountryListComponent,
    routingComponents,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
