import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMedicalIdComponent } from './view-medical-id.component';

describe('ViewMedicalIdComponent', () => {
  let component: ViewMedicalIdComponent;
  let fixture: ComponentFixture<ViewMedicalIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMedicalIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMedicalIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
