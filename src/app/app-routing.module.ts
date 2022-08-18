import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealEstateListingComponent } from './real-estate-listing/real-estate-listing.component';

const routes: Routes = [
  {path:'',component:RealEstateListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
