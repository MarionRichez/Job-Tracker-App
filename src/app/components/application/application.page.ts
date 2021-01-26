import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Application } from 'src/app/models/application.model';
import { ApplicationService } from 'src/app/service/application-service.service';
import { CalendarService } from 'src/app/service/calendar-service.service';
import { InterviewService } from 'src/app/service/interview-service.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.page.html',
  styleUrls: ['./application.page.scss'],
})
export class ApplicationPage implements OnInit {

  application = {} as Application;
  id: any;
  interviews: any;
  show_list: boolean = false;
  btn_name: string = "Show";

  constructor(
    private actRoute: ActivatedRoute,
    private applicationService: ApplicationService,
    private interviewService: InterviewService,
    private calendar: CalendarService
  ) { }

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get("id");
    this.getApplicationById();
  }

  ionViewWillEnter() {
    this.interviewService
      .getAllInterviews(this.id)
      .subscribe(
        (data) => {
          this.interviews = data;
        }
      )
  }

  getApplicationById() {
    this.applicationService
      .getApplicationById(this.id)
      .subscribe(data => {
        this.application.status = data["status"];
        this.application.company = data["company"];
        this.application.position = data["position"];
        this.application.url = data["url"];
        this.application.date = data["date"];
        this.application.notes = data["notes"]
      })
  }

  deleteInterview(id: any) {
    this.interviewService.deleteInterview(this.id, id);
  }

  toggle() {
    this.show_list = !this.show_list;
    if (this.show_list) {
      this.btn_name = "Hide";
    } else {
      this.btn_name = "Show";
    }
  }

  addEvent() {
    this.calendar.createCalendar("Candidature");
    this.calendar.createEvent(
      this.application.position,
      this.application.company,
      this.application.notes,
      new Date(this.application.date),
      new Date(this.application.date),
    );
  }

}
