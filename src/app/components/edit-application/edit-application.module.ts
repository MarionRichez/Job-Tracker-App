import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditApplicationPageRoutingModule } from './edit-application-routing.module';

import { EditApplicationPage } from './edit-application.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditApplicationPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditApplicationPage]
})
export class EditApplicationPageModule { }
