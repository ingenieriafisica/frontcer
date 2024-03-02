import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvivenciaComponent } from './convivencia.component';

describe('ConvivenciaComponent', () => {
  let component: ConvivenciaComponent;
  let fixture: ComponentFixture<ConvivenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvivenciaComponent]
    });
    fixture = TestBed.createComponent(ConvivenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
