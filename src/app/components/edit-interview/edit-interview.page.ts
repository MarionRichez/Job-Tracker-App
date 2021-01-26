import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Interview } from 'src/app/models/interview.model';
import { InterviewService } from 'src/app/service/interview-service.service';

@Component({
  selector: 'app-edit-interview',
  templateUrl: './edit-interview.page.html',
  styleUrls: ['./edit-interview.page.scss'],
})
export class EditInterviewPage implements OnInit {

  interview = {} as Interview;
  interviewForm: FormGroup;
  interviewId: any;
  applicationId: any;

  constructor(
    private actRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private interviewService: InterviewService
  ) {
    this.interviewId = this.actRoute.snapshot.paramMap.get("id1");
    this.applicationId = this.actRoute.snapshot.paramMap.get("id2");
  }

  ngOnInit() {
    this.initForm();
    this.getInterview();
  }

  getInterview() {
    this.interviewService
      .getInterviewsById(this.applicationId, this.interviewId)
      .subscribe(data => {
        this.interview.recruiter = data["recruiter"];
        this.interview.platform = data["platform"];
        this.interview.date = data["date"];
        this.interview.notes = data["notes"];
      })
  }

  initForm() {
    this.interviewForm = this.formBuilder.group({
      recruiter: ['', Validators.required],
      platform: ['', Validators.required],
      date: ['', Validators.required],
      notes: ['']
    })
  }

  submit() {
    if (!this.interviewForm.invalid) {
      this.interviewService.updateInterview(this.applicationId, this.interviewId, this.interviewForm.value);
    }
  }

}
