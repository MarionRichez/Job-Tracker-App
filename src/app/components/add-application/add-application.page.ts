import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationService } from 'src/app/service/application-service.service';
import { CalendarService } from 'src/app/service/calendar-service.service';

@Component({
  selector: 'app-add-application',
  templateUrl: './add-application.page.html',
  styleUrls: ['./add-application.page.scss'],
})
export class AddApplicationPage implements OnInit {

  applicationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private applicationService: ApplicationService,
    public route: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.applicationForm = this.formBuilder.group({
      status: ['', Validators.required],
      company: ['', Validators.required],
      position: ['', Validators.required],
      url: ['', Validators.required],
      date: ['', Validators.required],
      notes: ['']
    })
  }

  addApplication() {
    if (!this.applicationForm.invalid) {
      this.applicationService.addApplication(this.applicationForm.value);
      this.route.navigate(["home"]);
    }
  }

  // createEvent() {
  //   this.calendar.createEvent(
  //     this.applicationForm.value.position,
  //     this.applicationForm.value.company,
  //     this.applicationForm.value.notes,
  //     this.applicationForm.value.date,
  //     this.applicationForm.value.date
  //   );
  // }
}
