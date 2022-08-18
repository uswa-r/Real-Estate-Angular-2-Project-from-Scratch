import { Component, OnInit } from '@angular/core';
import { db } from 'Database/database';

@Component({
  selector: 'app-real-estate-listing',
  templateUrl: './real-estate-listing.component.html',
  styleUrls: ['./real-estate-listing.component.css']
})
export class RealEstateListingComponent implements OnInit {

  db: Array<any> = db;
  
  constructor() { }

  ngOnInit(): void {
  }

}
