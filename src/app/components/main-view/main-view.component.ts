import { Component, OnInit, OnChanges } from '@angular/core';
import { CalendarEvent } from 'calendar-utils';
import { CalEvent } from 'src/app/classes/cal-event';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { CommunicationService } from 'src/app/services/communication.service';
import { Food } from 'src/app/classes/food';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';

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
  foodArray: Food[];
  importedEvents: CalEvent[];
  convertedEventsArray: CalEvent[] = new Array(0);
  view: 'month';
  i: number;

  viewDate: Date = new Date();

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
    private foodService: FoodService) { }


  ngOnInit() {
    if (this.commService.getCurrentUser().get_id === null
      || this.commService.getCurrentUser().get_id === undefined) {
      this.router.navigate(['login']);
    } else {
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
          this.foodArray = foodArr;
          console.log(this.foodArray);
        });
    }
  }

  ngOnChanges() {
    if (this.commService.getCurrentUser().get_id === null
    || this.commService.getCurrentUser().get_id === undefined) {
      this.router.navigate(['login']);
    }
  }

  createEventsArray() {
    this.eventSubscription = this.commService
      .eventSubject.subscribe((event) => {
        this.event = event;
      });
      for (this.i = 0; this.i < this.importedEvents.length; this.i++) {
        this.event.title = (this.importedEvents[this.i].title);
        this.event.start = new Date(this.importedEvents[this.i].start);
        this.convertedEventsArray.push(this.event);
        console.log(this.convertedEventsArray);
        this.calendarEvents = this.convertedEventsArray;
      }
  }

}
