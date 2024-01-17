import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeetBansheeComponent } from './feet-banshee.component';

describe('FeetBansheeComponent', () => {
  let component: FeetBansheeComponent;
  let fixture: ComponentFixture<FeetBansheeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeetBansheeComponent]
    });
    fixture = TestBed.createComponent(FeetBansheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
