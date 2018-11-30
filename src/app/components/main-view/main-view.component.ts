import { Component, OnInit, OnChanges } from '@angular/core';
import { CalendarEvent } from 'calendar-utils';
import { CalEvent } from 'src/app/classes/cal-event';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { CommunicationService } from 'src/app/services/communication.service';
import { Food } from 'src/app/classes/food';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { CalendarComponent } from '../calendar/calendar.component';
import { Exercise } from 'src/app/classes/exercise';
import { ExerciseService } from 'src/app/services/exercise.service';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit, OnChanges {

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

  calendarEvents: CalendarEvent[] = [];


  constructor(private userService: UserService,
    private commService: CommunicationService,
    private router: Router,
    private foodService: FoodService,
    private exerciseService: ExerciseService) { }


  ngOnInit() {
    console.log('hey');
    // console.log(this.commService.getCurrentUser());
    // if (this.commService.getCurrentUser() === undefined) {
    //   this.router.navigate(['']);
    // } else {
    this.foodService.getFood(this.commService.getCurrentUser());
    this.exerciseService.getExercises(this.commService.getCurrentUser());

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
    if (this.commService.getCurrentUser().get_id === null
      || this.commService.getCurrentUser().get_id === undefined) {
      this.router.navigate(['login']);
    }
    this.foodService.getFood(this.commService.getCurrentUser());
    this.exerciseService.getExercises(this.commService.getCurrentUser());
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
}
