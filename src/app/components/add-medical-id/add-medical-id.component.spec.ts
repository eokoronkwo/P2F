import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicalIdComponent } from './add-medical-id.component';

describe('AddMedicalIdComponent', () => {
  let component: AddMedicalIdComponent;
  let fixture: ComponentFixture<AddMedicalIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMedicalIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedicalIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
