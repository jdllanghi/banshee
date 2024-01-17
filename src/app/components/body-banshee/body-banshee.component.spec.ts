import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyBansheeComponent } from './body-banshee.component';

describe('BodyBansheeComponent', () => {
  let component: BodyBansheeComponent;
  let fixture: ComponentFixture<BodyBansheeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyBansheeComponent]
    });
    fixture = TestBed.createComponent(BodyBansheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
