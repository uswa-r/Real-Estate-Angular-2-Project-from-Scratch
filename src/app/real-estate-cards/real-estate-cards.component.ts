import { Component, Input, OnInit } from '@angular/core';
import { db } from 'Database/database';
@Component({
  selector: 'app-real-estate-cards',
  templateUrl: './real-estate-cards.component.html',
  styleUrls: ['./real-estate-cards.component.css']
})
export class RealEstateCardsComponent implements OnInit {

  db: Array<any> = db;
  @Input('dbOfREForLoopingCards') dbOfREForLoopingCards:any;

  constructor() { }

  ngOnInit(): void {
  }

}
