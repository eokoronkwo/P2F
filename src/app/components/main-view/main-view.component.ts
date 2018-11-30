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
  event = new CalEvent(
    '',
    new Date(),
    0
  );
  importedFoodEvents: Food[];
  importedEvents: CalEvent[];
  convertedEventsArray: CalEvent[] = new Array(0);
  view: 'month';
  i: number;

  viewDate: Date = new Date();

  calendarEvents: CalendarEvent[] = [];


  constructor(private userService: UserService,
    private commService: CommunicationService,
    private router: Router,
    private foodService: FoodService) { }


  ngOnInit() {
    console.log('hey');
    // console.log(this.commService.getCurrentUser());
    // if (this.commService.getCurrentUser() === undefined) {
    //   this.router.navigate(['']);
    // } else {
      this.foodService.getFood(this.commService.getCurrentUser());
      this.loading = true;
      this.eventArraySubscription = this.commService.eventArraySubject
        .subscribe((events2) => {
          this.importedEvents = events2;
          console.log(this.importedEvents);
          this.createEventsArray();
        });
      this.foodArraySubscription = this.commService.currentFoodArraySubject
        .subscribe((foodArr) => {
          this.importedFoodEvents = foodArr;
          console.log(this.importedFoodEvents);
          this.createEventsArray();
        });
    // }
  }

  ngOnChanges() {
    if (this.commService.getCurrentUser().get_id === null
    || this.commService.getCurrentUser().get_id === undefined) {
      this.router.navigate(['login']);
    }
  }

  createEventsArray() {
    console.log('hi');
    this.eventSubscription = this.commService
      .eventSubject.subscribe((event) => {
        this.event = event;
      });
    for (this.i = 0; this.i < this.importedFoodEvents.length; this.i++) {
      const newEvent = new CalEvent(
        '',
        new Date(),
        0
      );
      newEvent.title = this.importedFoodEvents[this.i].name;
      newEvent.start = new Date(this.importedFoodEvents[this.i].date);
      this.convertedEventsArray.push(newEvent);
    }
    console.log(this.convertedEventsArray);
    this.calendarEvents = this.convertedEventsArray;
  }

}
