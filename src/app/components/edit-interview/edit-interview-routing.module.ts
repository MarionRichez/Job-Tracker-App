import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditInterviewPage } from './edit-interview.page';

const routes: Routes = [
  {
    path: '',
    component: EditInterviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditInterviewPageRoutingModule { }
