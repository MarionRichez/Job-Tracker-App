import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddInterviewPageRoutingModule } from './add-interview-routing.module';

import { AddInterviewPage } from './add-interview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddInterviewPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddInterviewPage]
})
export class AddInterviewPageModule { }
