import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddApplicationPageRoutingModule } from './add-application-routing.module';

import { AddApplicationPage } from './add-application.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddApplicationPageRoutingModule
  ],
  declarations: [AddApplicationPage]
})
export class AddApplicationPageModule { }
