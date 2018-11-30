import { Component, OnInit } from '@angular/core';
// import { colors } from '../demo-utils/colors';
import { CalendarEvent } from 'angular-calendar';
import { Subscription } from 'rxjs';
import { CalEvent } from 'src/app/classes/cal-event';
import { CommunicationService } from 'src/app/services/communication.service';
import { UserService } from 'src/app/services/user.service';


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
  selector: 'app-calendar-month-view',
  templateUrl: './calendar-month-view.component.html',
  styleUrls: ['./calendar-month-view.component.css']
})
export class CalendarMonthViewComponent implements OnInit {

  eventSubscription: Subscription;
  eventArraySubscription: Subscription;
  event = new CalEvent(
    '',
    new Date(),
    0
  );
  importedEvents: CalEvent[];
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
    this.eventArraySubscription = this.commService.eventArraySubject
      .subscribe((events2) => {
        this.importedEvents = events2;
        console.log(this.importedEvents);
        this.convertEventsArray();
      });
  }

  convertEventsArray() {
    this.eventSubscription = this.commService
      .eventSubject.subscribe((event) => {
        this.event = event;
      });
      for (this.i = 0; this.i < this.importedEvents.length; this.i++) {
        this.event.title = this.importedEvents[this.i].title;
        this.event.start = new Date(this.importedEvents[this.i].start);
        this.convertedEventsArray.push(this.event);
        console.log(this.convertedEventsArray);
        this.calendarEvents = this.convertedEventsArray;
      }
  }

}
