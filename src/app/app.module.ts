import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarMonthViewComponent } from './components/calendar-month-view/calendar-month-view.component';
import { CalendarWeekViewComponent } from './components/calendar-week-view/calendar-week-view.component';
import { CalendarDayViewComponent } from './components/calendar-day-view/calendar-day-view.component';
import { AddMedicalIdComponent } from './components/add-medical-id/add-medical-id.component';
import { ViewMedicalIdComponent } from './components/view-medical-id/view-medical-id.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { ViewIndividualExercisesComponent } from './components/view-individual-exercises/view-individual-exercises.component';
import { AddFoodComponent } from './components/add-food/add-food.component';
import { AddExerciseComponent } from './components/add-exercise/add-exercise.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ViewUserInfoComponent } from './components/view-user-info/view-user-info.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatSelectModule, MatDatepickerModule, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { FusionChartsModule } from 'angular-fusioncharts';
import { CalendarHeaderComponent } from './components/calendar-header/calendar-header.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { ChartModule } from 'angular-highcharts';

// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load fusion theme
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { JwtInterceptorModule } from './jwt-interceptor/jwt-interceptor.module';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';



// import * as CanvasJS from 'canvasjs';
// Use fcRoot function to inject FusionCharts library, and the modules you want to use
FusionChartsModule.fcRoot(FusionCharts, Charts);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalendarComponent,
    CalendarMonthViewComponent,
    CalendarWeekViewComponent,
    CalendarDayViewComponent,
    AddMedicalIdComponent,
    ViewMedicalIdComponent,
    ExercisesComponent,
    ViewIndividualExercisesComponent,
    AddFoodComponent,
    AddExerciseComponent,
    ViewUserInfoComponent,
    TopbarComponent,
    CalendarHeaderComponent,
    MainViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    CommonModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    SelectDropDownModule,
    FusionChartsModule,
    ChartModule,
    ButtonsModule,
    ChartsModule,
    ScrollDispatchModule,
    JwtInterceptorModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [AuthService,
  AuthGuard,
  {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class CalendarMonthModule { }
