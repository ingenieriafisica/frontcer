import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonascomunesComponent } from './zonascomunes.component';

describe('ZonascomunesComponent', () => {
  let component: ZonascomunesComponent;
  let fixture: ComponentFixture<ZonascomunesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZonascomunesComponent]
    });
    fixture = TestBed.createComponent(ZonascomunesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
