import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDashboardComponent } from './main-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainDashboardComponent
  }
];

@NgModule({
  declarations: [
    MainDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainDashboardModule { }
