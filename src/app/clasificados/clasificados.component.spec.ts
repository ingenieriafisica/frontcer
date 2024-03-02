import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificadosComponent } from './clasificados.component';

describe('ClasificadosComponent', () => {
  let component: ClasificadosComponent;
  let fixture: ComponentFixture<ClasificadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClasificadosComponent]
    });
    fixture = TestBed.createComponent(ClasificadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
