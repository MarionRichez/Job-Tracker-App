import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./components/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'application/:id',
    loadChildren: () => import('./components/application/application.module').then(m => m.ApplicationPageModule)
  },
  {
    path: 'add-application',
    loadChildren: () => import('./components/add-application/add-application.module').then(m => m.AddApplicationPageModule)
  },
  {
    path: 'edit-application/:id',
    loadChildren: () => import('./components/edit-application/edit-application.module').then(m => m.EditApplicationPageModule)
  },
  {
    path: 'interview/:id1/:id2',
    loadChildren: () => import('./components/interview/interview.module').then(m => m.InterviewPageModule)
  },
  {
    path: 'add-interview/:id',
    loadChildren: () => import('./components/add-interview/add-interview.module').then(m => m.AddInterviewPageModule)
  },
  {
    path: 'edit-interview/:id1/:id2',
    loadChildren: () => import('./components/edit-interview/edit-interview.module').then(m => m.EditInterviewPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
