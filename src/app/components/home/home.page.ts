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
  // status: string;

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
  }

  deleteApplication(id: any) {
    this.applicationService.deleteApplication(id);
  }

  logout() {
    this.authService.logout();
  }

  // getApplicationByStatus() {
  //   this.applicationService
  //     .getApplicationById(status)
  //     .subscribe(
  //       (data) => {
  //         this.applications = data;
  //       }
  //     )
  //   console.log(this.applications);
  // }
}
