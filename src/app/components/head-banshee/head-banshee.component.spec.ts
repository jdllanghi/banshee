import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadBansheeComponent } from './head-banshee.component';

describe('HeadBansheeComponent', () => {
  let component: HeadBansheeComponent;
  let fixture: ComponentFixture<HeadBansheeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadBansheeComponent]
    });
    fixture = TestBed.createComponent(HeadBansheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
