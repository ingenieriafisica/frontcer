import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MntoComponent } from './mnto.component';

describe('MntoComponent', () => {
  let component: MntoComponent;
  let fixture: ComponentFixture<MntoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MntoComponent]
    });
    fixture = TestBed.createComponent(MntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
