import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RealEstateListingComponent } from './real-estate-listing/real-estate-listing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RealEstateCardsComponent } from './real-estate-cards/real-estate-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    RealEstateListingComponent,
    NavbarComponent,
    RealEstateCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
