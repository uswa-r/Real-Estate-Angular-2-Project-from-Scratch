import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateListingComponent } from './real-estate-listing.component';

describe('RealEstateListingComponent', () => {
  let component: RealEstateListingComponent;
  let fixture: ComponentFixture<RealEstateListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealEstateListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealEstateListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
