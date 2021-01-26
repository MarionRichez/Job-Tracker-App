import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Application } from 'src/app/models/application.model';
import { ApplicationService } from 'src/app/service/application-service.service';

@Component({
  selector: 'app-edit-application',
  templateUrl: './edit-application.page.html',
  styleUrls: ['./edit-application.page.scss'],
})
export class EditApplicationPage implements OnInit {

  application = {} as Application;
  id: any;
  applicationForm: FormGroup;

  constructor(
    private actRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private applicationService: ApplicationService
  ) {
    this.id = this.actRoute.snapshot.paramMap.get("id");

  }

  ngOnInit() {
    this.initForm();
    this.getApplication();
  }

  getApplication() {
    this.applicationService
      .getApplicationById(this.id)
      .subscribe(data => {
        this.application.status = data["status"];
        this.application.company = data["company"];
        this.application.position = data["position"];
        this.application.url = data["url"];
        this.application.date = data["date"];
        this.application.notes = data["notes"];
      })
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

  submit() {
    if (!this.applicationForm.invalid) {
      this.applicationService.updateApplication(this.id, this.applicationForm.value);
    }
  }
}
