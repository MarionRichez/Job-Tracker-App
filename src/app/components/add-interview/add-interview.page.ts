import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CalendarService } from 'src/app/service/calendar-service.service';
import { InterviewService } from 'src/app/service/interview-service.service';

@Component({
  selector: 'app-add-interview',
  templateUrl: './add-interview.page.html',
  styleUrls: ['./add-interview.page.scss'],
})
export class AddInterviewPage implements OnInit {

  interviewForm: FormGroup;
  id: any;

  constructor(
    private actRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private interviewService: InterviewService,
    private calendar: CalendarService
  ) { }

  ngOnInit() {
    this.initForm();
    this.calendar.createCalendar("Entretien");
  }

  initForm() {
    this.id = this.actRoute.snapshot.paramMap.get("id");
    this.interviewForm = this.formBuilder.group({
      recruiter: ['', Validators.required],
      platform: ['', Validators.required],
      date: ['', Validators.required],
      notes: ['']
    })
  }

  submit() {
    if (!this.interviewForm.invalid) {
      this.interviewService.addInterview(this.id, this.interviewForm.value);
    }
  }

  createEvent() {
    this.calendar.createEvent(
      `${this.interviewForm.value.platform} interview`,
      "",
      this.interviewForm.value.notes,
      this.interviewForm.value.date,
      this.interviewForm.value.date,
    );
  }
}