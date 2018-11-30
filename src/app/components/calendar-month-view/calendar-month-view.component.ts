import { Component, OnInit, OnChanges } from '@angular/core';
// import { colors } from '../demo-utils/colors';
import { CalendarEvent } from 'angular-calendar';
import { Subscription } from 'rxjs';
import { CalEvent } from 'src/app/classes/cal-event';
import { CommunicationService } from 'src/app/services/communication.service';
import { UserService } from 'src/app/services/user.service';
import { Food } from 'src/app/classes/food';


@Component({
  selector: 'app-calendar-month-view',
  templateUrl: './calendar-month-view.component.html',
  styleUrls: ['./calendar-month-view.component.css']
})
export class CalendarMonthViewComponent implements OnInit, OnChanges {

  eventSubscription: Subscription;
  eventArraySubscription: Subscription;
  // event = new CalEvent(
  //   '',
  //   new Date(),
  //   0
  // );
  importedFoodEvents: Food[];
  convertedEventsArray: CalEvent[] = new Array(0);
  view: 'month';
  i: number;

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
    private commService: CommunicationService) { }


  ngOnInit() {
    console.log('yes');
    // this.eventArraySubscription = this.commService.eventArraySubject
    //   .subscribe((events2) => {
    //     this.importedFoodEvents = events2;
    //     console.log(this.importedEvents);
    //     this.convertEventsArray();
    //   });
    this.convertEventsArray();
  }

  ngOnChanges() {
    console.log('hey');
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
