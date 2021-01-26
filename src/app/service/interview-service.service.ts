import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  users: string = "users";
  interview: string = "interviews";
  application: string = "applications";
  uid: string;

  constructor(
    private authService: AuthService,
    private firestore: AngularFirestore,
    private navCtrl: NavController
  ) {
    this.authService
      .getUser()
      .subscribe(
        (data) => {
          this.uid = data.uid;
        });
  }

  getPath() {
    return this.firestore
      .collection(this.users)
      .doc(this.uid)
      .collection(this.application)
  }

  getAllInterviews(applicationId: string) {
    return this.getPath()
      .doc(applicationId)
      .collection(this.interview)
      .snapshotChanges();
  }

  getInterviewsById(applicationId: any, interviewId: any) {
    return this.getPath()
      .doc(applicationId)
      .collection(this.interview)
      .doc(interviewId)
      .valueChanges()
  }

  addInterview(applicationId: any, data: any) {
    this.getPath()
      .doc(applicationId)
      .collection(this.interview)
      .add(data)
      .then(
        () => { console.log("Interview has been created") },
        () => { console.log("Interview was wrongly created") }
      )
    this.navCtrl.navigateRoot(`application/${applicationId}`);
  }

  updateInterview(applicationId: any, interviewId: any, data: any) {
    this.getPath()
      .doc(applicationId)
      .collection(this.interview)
      .doc(interviewId)
      .set(data)
      .then(
        () => { console.log("Interview has been updated") },
        () => { console.log("Interview was wrongly updated") }
      )
    this.navCtrl.navigateRoot(`application/${applicationId}`);
  }

  deleteInterview(applicationId: any, interviewId: any) {
    this.getPath()
      .doc(applicationId)
      .collection(this.interview)
      .doc(interviewId)
      .delete()
  }
}
