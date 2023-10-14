import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { FooterComponent } from './layout/footer/footer.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'main',
        loadChildren: () => import('./main-dashboard/main-dashboard.module').then(m => m.MainDashboardModule)
      },
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    TopbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule
  ]
})
export class DashboardModule { }
