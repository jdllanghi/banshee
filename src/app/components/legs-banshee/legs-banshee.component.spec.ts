import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegsBansheeComponent } from './legs-banshee.component';

describe('LegsBansheeComponent', () => {
  let component: LegsBansheeComponent;
  let fixture: ComponentFixture<LegsBansheeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegsBansheeComponent]
    });
    fixture = TestBed.createComponent(LegsBansheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
