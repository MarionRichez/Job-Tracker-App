import { Component } from '@angular/core';
import { ApplicationService } from 'src/app/service/application-service.service';
import { AuthService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  applications: any;
  status: string;
  visibility: boolean;

  constructor(
    private applicationService: ApplicationService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getApplications();
  }

  getApplications() {
    this.applicationService
      .getAllApplication()
      .subscribe(
        (data) => {
          this.applications = data;
        }
      )
    this.visibility = true;
  }

  deleteApplication(id: any) {
    this.applicationService.deleteApplication(id);
  }

  logout() {
    this.authService.logout();
  }

  getByStatus(selectValue: any) {
    if (selectValue == "all") {
      this.getApplications();
    } else {
      this.applicationService
      .getApplicationByStatus(selectValue)
      .subscribe(
        (data) => {
          this.applications = data;
        }
      )
    }
    this.visibility = true;
  }
}
