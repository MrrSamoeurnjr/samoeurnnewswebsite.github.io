import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component'
import { HttpClientModule } from '@angular/common/http';
import { TeslaComponent } from './tesla/tesla.component';
import { CountryComponent } from './country/country.component';
import { SourceComponent } from './source/source.component';
import { DomainsComponent } from './domains/domains.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TeslaComponent,
    CountryComponent,
    SourceComponent,
    DomainsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // NewserviceService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
