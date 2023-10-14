import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDashboardComponent } from './main-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';

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
    RouterModule.forChild(routes),
    NgApexchartsModule
  ]
})
export class MainDashboardModule { }
