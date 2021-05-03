import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  signInForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signInForm = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required, 
        Validators.pattern['^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$']])
      ],
      password: ['', Validators.compose([
        Validators.required, 
        Validators.maxLength(12), 
        Validators.minLength(8)])
      ]
    })
  }

  submit() {
    if (!this.signInForm.invalid) {
      this.authService
        .signIn(this.signInForm.value.email, this.signInForm.value.password);
    }
  }

  // async loginAction() {
  //   const value = this.loginForm.value;
  //   if (!this.loginForm.invalid) {
  //     let loader = await this.loadingCtrl.create({
  //       message: "Please wait..."
  //     });
  //     loader.present();

  //     try {
  //       await this.angularFireAuth
  //         .signInWithEmailAndPassword(value.email, value.password)
  //         .then(data => {
  //           console.log(`Login - ${data}`);
  //           this.navCtrl.navigateRoot("home");
  //         })

  //     } catch (error) {
  //       console.log(`Register - ${error}`);
  //     }

  //     loader.dismiss();
  //   }
  // }

}
