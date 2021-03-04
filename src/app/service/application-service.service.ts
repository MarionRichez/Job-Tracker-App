import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  application: string = "applications";
  users: string = "users";
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

  getAllApplication() {
    return this.firestore
      .collection(this.users, ref => ref.where("id", "==", this.uid))
      .doc(this.uid)
      .collection(this.application)
      .snapshotChanges()
  }

  getApplicationById(id: any) {
    return this.getPath()
      .doc(id)
      .valueChanges()
  }

  getApplicationByStatus(status: any) {
    return this.firestore
      .collection(this.users)
      .doc(this.uid)
      .collection(this.application, ref => ref.where('status', '==', status))
      .snapshotChanges()
  }

  addApplication(data: any) {
    this.getPath()
      .add(data)
      .then(
        () => { console.log("Application has been created") },
        () => { console.log("Application was wrongly created") })
    this.navCtrl.navigateRoot(`home`);
  }

  updateApplication(id: any, data: any) {
    this.getPath()
      .doc(id)
      .set(data)
      .then(
        () => { console.log("Application has been updated") },
        () => { console.log("Application was wrongly updated") }
      )
    this.navCtrl.navigateRoot(`application/${id}`);
  }

  deleteApplication(id: any) {
    this.getPath()
      .doc(id)
      .delete()
  }
}
