import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootercerComponent } from './footercer.component';

describe('FootercerComponent', () => {
  let component: FootercerComponent;
  let fixture: ComponentFixture<FootercerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FootercerComponent]
    });
    fixture = TestBed.createComponent(FootercerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
