import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { TeslaComponent } from './tesla/tesla.component';
import { CountryComponent } from './country/country.component';
import { SourceComponent } from './source/source.component';
import { DomainsComponent } from './domains/domains.component';
const routes: Routes = [
  {path:'' , component:TopheadingComponent},
  {path:'tesla', component:TeslaComponent},
  {path:'business' , component:CountryComponent},
  {path:'source' , component:SourceComponent},
  {path:'domain' , component:DomainsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
