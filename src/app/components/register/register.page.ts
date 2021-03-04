import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signUpForm = this.formBuilder.group({
      email: ['test@gmail.com', Validators.required],
      password: ['123test', Validators.required]
    })
  }

  submit() {
    if (!this.signUpForm.invalid) {
      this.authService
        .signUp(this.signUpForm.value.email, this.signUpForm.value.password)
    }
  }

  // async registerAction() {
  //   const value = this.registerForm.value;
  //   if (!this.registerForm.invalid) {
  //     let loader = await this.loadingCtrl.create({
  //       message: "Please wait..."
  //     });
  //     loader.present();

  //     try {
  //       await this.angularFireAuth
  //         .createUserWithEmailAndPassword(value.email, value.password)
  //         .then(data => {
  //           console.log(`Register - ${data}`);
  //           this.navCtrl.navigateRoot("home");
  //         });
  //     } catch (error) {
  //       console.log(`Register - ${error}`);
  //     }

  //     loader.dismiss();
  //   }
  // }

}
