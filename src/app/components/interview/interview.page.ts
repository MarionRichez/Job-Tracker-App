import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Interview } from 'src/app/models/interview.model';
import { CalendarService } from 'src/app/service/calendar-service.service';
import { InterviewService } from 'src/app/service/interview-service.service';

@Component({
  selector: 'app-view-interview',
  templateUrl: './interview.page.html',
  styleUrls: ['./interview.page.scss'],
})
export class InterviewPage implements OnInit {

  interview = {} as Interview;
  interviewId: any;
  applicationId: any;

  constructor(
    private actRoute: ActivatedRoute,
    private interviewService: InterviewService,
    private calendar: CalendarService
  ) {
    this.interviewId = this.actRoute.snapshot.paramMap.get("id1");
    this.applicationId = this.actRoute.snapshot.paramMap.get("id2");
  }

  ngOnInit() {
    this.getInterviewById();
  }

  getInterviewById() {
    this.interviewService
      .getInterviewsById(this.applicationId, this.interviewId)
      .subscribe(
        (data) => {
          this.interview.recruiter = data["recruiter"];
          this.interview.platform = data["platform"];
          this.interview.date = data["date"];
          this.interview.notes = data["notes"];
        }
      )
  }

  addEvent() {
    this.calendar.createCalendar("Candidature");
    this.calendar.createEvent(
      `${this.interview.recruiter} interview`,
      "",
      this.interview.notes,
      new Date(this.interview.date),
      new Date(this.interview.date),
    );
  }
}
