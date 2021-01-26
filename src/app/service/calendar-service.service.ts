import { Injectable } from '@angular/core';
import { Calendar } from '@ionic-native/calendar/ngx';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  options: any;

  constructor(private calendar: Calendar) { }

  createCalendar(name: string) {
    this.calendar
      .createCalendar(name)
      .then(
        (msg) => { console.log(msg); },
        (err) => { console.error(err); }
      );
  }

  getOptions() {
    return this.calendar.getCalendarOptions();
  }

  createEvent(title: string, location: string, notes: string, startDate: Date, endDate: Date) {
    var calOptions = this.getOptions();
    calOptions.firstReminderMinutes = 120;
    calOptions.secondReminderMinutes = 60;
    this.calendar
      .createEventInteractivelyWithOptions(title, location, notes, startDate, endDate, calOptions)
      .then(
        (msg) => { console.log(msg) },
        (err) => { console.error(err) }
      )
  }
}
