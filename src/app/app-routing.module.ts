import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { AddExerciseComponent } from './components/add-exercise/add-exercise.component';
import { AddFoodComponent } from './components/add-food/add-food.component';
import { AddMedicalIdComponent } from './components/add-medical-id/add-medical-id.component';
import { ExercisesComponent } from './components/exercises/exercises.component';

const routes: Routes = [
  {
  component: LoginComponent,
  path: 'login',
}, {
  component: MainViewComponent,
  path: 'main-view',
  }, {
  component: AddExerciseComponent,
  path: 'add-exercise'
}, {
  component: AddFoodComponent,
  path: 'add-food'
},
{
  component: AddMedicalIdComponent,
  path: 'add-medical'
},
 {
  component: ExercisesComponent,
  path: 'exercises',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
