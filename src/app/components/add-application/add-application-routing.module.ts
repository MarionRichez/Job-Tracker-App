import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddApplicationPage } from './add-application.page';

const routes: Routes = [
  {
    path: '',
    component: AddApplicationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddApplicationPageRoutingModule {}
