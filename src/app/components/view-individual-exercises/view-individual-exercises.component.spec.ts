import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIndividualExercisesComponent } from './view-individual-exercises.component';

describe('ViewIndividualExercisesComponent', () => {
  let component: ViewIndividualExercisesComponent;
  let fixture: ComponentFixture<ViewIndividualExercisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIndividualExercisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIndividualExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
