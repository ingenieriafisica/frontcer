import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzondesugerenciasComponent } from './buzondesugerencias.component';

describe('BuzondesugerenciasComponent', () => {
  let component: BuzondesugerenciasComponent;
  let fixture: ComponentFixture<BuzondesugerenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuzondesugerenciasComponent]
    });
    fixture = TestBed.createComponent(BuzondesugerenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
