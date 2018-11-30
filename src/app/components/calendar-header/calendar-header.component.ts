import { Component, Input, Output, EventEmitter, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarHeaderComponent implements OnInit, OnChanges {

  dateSubscription: Subscription;
  @Input()
  view: string;

  @Input()
  viewDate: Date;

  @Input()
  locale = 'en';

  @Output()
  viewChange: EventEmitter<string> = new EventEmitter();

  @Output()
  viewDateChange: EventEmitter<Date> = new EventEmitter();

  constructor(private commService: CommunicationService,
    private cdRef: ChangeDetectorRef) {
    this.dateSubscription =
    this.commService.currentDateSubject.subscribe( (date) => {
      this.viewDate = date;
    });
   }

  ngOnInit() {
    this.viewDateChange.emit(this.viewDate);
    this.view = 'month';
  }

  ngOnChanges() {
    this.viewDateChange.emit(this.viewDate);
    this.commService.setCurrentDate(this.viewDate);
    console.log(this.viewDate);
    this.cdRef.detectChanges();
  }

}
