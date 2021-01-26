import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditInterviewPageRoutingModule } from './edit-interview-routing.module';

import { EditInterviewPage } from './edit-interview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditInterviewPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditInterviewPage]
})
export class EditInterviewPageModule { }
