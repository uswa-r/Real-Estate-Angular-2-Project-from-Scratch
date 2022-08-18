import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateCardsComponent } from './real-estate-cards.component';

describe('RealEstateCardsComponent', () => {
  let component: RealEstateCardsComponent;
  let fixture: ComponentFixture<RealEstateCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealEstateCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealEstateCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
