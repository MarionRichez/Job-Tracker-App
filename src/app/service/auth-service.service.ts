import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = {} as User;

  constructor(
    private authFirebase: AngularFireAuth,
    private firestore: AngularFirestore,
    public route: Router
  ) { }

  signIn(email: string, password: string) {
    this.authFirebase
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.route.navigate(["home"]);
      })
      .catch(
        (err) => console.log(`SignIn : ${err.message}`)
      )
  }

  signUp(email: string, password: string) {
    this.authFirebase
      .createUserWithEmailAndPassword(email, password)
      .then(
        (res) => {
          this.user = {
            id: res.user.uid,
            email: res.user.email
          };
          this.firestore
            .collection("users")
            .doc(res.user.uid)
            .set(this.user);
          this.route.navigate([""])
        },
        () => { this.route.navigate(["register"]) }
      )
      .catch(
        (err) => console.log(`SignUp : ${err.message}`)
      )
  }

  logout() {
    this.authFirebase
      .signOut()
      .then(() => {
        this.route.navigate(["login"]);
      })
      .catch(
        (err) => console.log(`Logout : ${err.message}`)
      )
  }

  getUser() {
    return this.authFirebase.user;
  }

}
