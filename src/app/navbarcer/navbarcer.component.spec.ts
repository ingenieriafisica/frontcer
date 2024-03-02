import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarcerComponent } from './navbarcer.component';

describe('NavbarcerComponent', () => {
  let component: NavbarcerComponent;
  let fixture: ComponentFixture<NavbarcerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarcerComponent]
    });
    fixture = TestBed.createComponent(NavbarcerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
