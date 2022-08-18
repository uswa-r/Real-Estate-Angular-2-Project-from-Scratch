import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealEstateCardsComponent } from './real-estate-cards/real-estate-cards.component';
import { RealEstateListingComponent } from './real-estate-listing/real-estate-listing.component';

const routes: Routes = [
  {path:'',component:RealEstateListingComponent},
  // {path:'',component:RealEstateCardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
