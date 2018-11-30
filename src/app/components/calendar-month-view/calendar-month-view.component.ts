import { Component, OnInit, OnChanges } from '@angular/core';
// import { colors } from '../demo-utils/colors';
import { CalendarEvent } from 'angular-calendar';
import { Subscription } from 'rxjs';
import { CalEvent } from 'src/app/classes/cal-event';
import { CommunicationService } from 'src/app/services/communication.service';
import { UserService } from 'src/app/services/user.service';
import { Food } from 'src/app/classes/food';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { ExerciseService } from 'src/app/services/exercise.service';
import { Exercise } from 'src/app/classes/exercise';


@Component({
  selector: 'app-calendar-month-view',
  templateUrl: './calendar-month-view.component.html',
  styleUrls: ['./calendar-month-view.component.css']
})
export class CalendarMonthViewComponent implements OnInit, OnChanges {

  loading = true;
  eventSubscription: Subscription;
  eventArraySubscription: Subscription;
  foodArraySubscription: Subscription;
  exerciseArraySubscription: Subscription;
  importedFoodEvents: Food[];
  importedExerciseEvents: Exercise[];
  importedEvents: CalEvent[];
  convertedEventsArray: CalEvent[] = new Array(0);
  view: 'month';
  i: number;
  j: number;

  viewDate: Date = new Date();

  chart = [20, 10];

  calendarEvents: CalendarEvent[] = [
    // {
    //   title: 'Increments badge total on the day cell',
    //   start: new Date('2018-11-12'),
    // },
    // {
    //   title: 'fhddghfg',
    //   start: new Date('2018-11-12'),
    // }
  ];


  constructor(private userService: UserService,
    private commService: CommunicationService,
    private router: Router,
    private foodService: FoodService,
    private exerciseService: ExerciseService) { }


    ngOnInit() {
      this.foodService.getFood(this.commService.getCurrentUser());
      this.exerciseService.getExercises(this.commService.getCurrentUser());
      this.commService.setShow(true);
      console.log('hey');
      // console.log(this.commService.getCurrentUser());
      // if (this.commService.getCurrentUser() === undefined) {
      //   this.router.navigate(['']);
      // } else {

      this.foodArraySubscription = this.commService.currentFoodArraySubject
      .subscribe((foodArr) => {
        this.importedFoodEvents = foodArr;
        console.log(this.importedFoodEvents);
      });
      this.exerciseArraySubscription = this.commService.currentExerciseArraySubject
      .subscribe((exerciseArr) => {
        this.importedExerciseEvents = exerciseArr;
        console.log(this.importedExerciseEvents);
        this.createEventsArray();
      });
      // }
    }

    ngOnChanges() {
      this.foodService.getFood(this.commService.getCurrentUser());
      this.exerciseService.getExercises(this.commService.getCurrentUser());
      if (this.commService.getCurrentUser().get_id === null
        || this.commService.getCurrentUser().get_id === undefined) {
        this.router.navigate(['']);
      }
      this.foodArraySubscription = this.commService.currentFoodArraySubject
      .subscribe((foodArr) => {
        this.importedFoodEvents = foodArr;
        console.log(this.importedFoodEvents);
      });
      this.exerciseArraySubscription = this.commService.currentExerciseArraySubject
      .subscribe((exerciseArr) => {
        this.importedExerciseEvents = exerciseArr;
        console.log(this.importedExerciseEvents);
        this.createEventsArray();
      });
    }



  createEventsArray() {
    console.log(this.importedExerciseEvents);
    console.log(this.importedFoodEvents);
    for (this.j = 0; this.j < this.importedExerciseEvents.length; this.j++) {
      const newEvent = new CalEvent(
        '',
        new Date(),
        0,
        '#e3bc08'
      );
      newEvent.title = this.importedExerciseEvents[this.j].name;
      newEvent.start = new Date(this.importedExerciseEvents[this.j].date);
      this.convertedEventsArray.push(newEvent);
    }
    for (this.i = 0; this.i < this.importedFoodEvents.length; this.i++) {
      const newEvent = new CalEvent(
        '',
        new Date(),
        0,
        '#e3bc08'
      );
      newEvent.title = this.importedFoodEvents[this.i].name;
      newEvent.start = new Date(this.importedFoodEvents[this.i].date);
      this.convertedEventsArray.push(newEvent);
    }
    console.log(this.convertedEventsArray);
    this.calendarEvents = this.convertedEventsArray;
  }
  convertEventsArray() {
    // this.eventSubscription = this.commService
    //   .eventSubject.subscribe((event) => {
    //     this.event = event;
    //   });
    this.importedFoodEvents = this.commService.getCurrentFoodArray();
    // for (this.i = 0; this.i < this.importedFoodEvents.length; this.i++) {
    //   this.event.title = this.importedFoodEvents[this.i].name;
    //   this.event.start = new Date(this.importedFoodEvents[this.i].date);
    //   this.convertedEventsArray.push(this.event);
    // }
    // console.log(this.convertedEventsArray);
    // this.calendarEvents = this.convertedEventsArray;
  }

}
