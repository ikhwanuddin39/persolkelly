import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
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
        path: 'user',
        loadChildren: () => import('./manajemen-user/manajemen-user.module').then(m => m.ManajemenUserModule)
      },
      {
        path: 'product',
        loadChildren: () => import('./manajemen-product/manajemen-product.module').then(m => m.ManajemenProductModule)
      },
      {
        path: 'category',
        loadChildren: () => import('./manajemen-category/manajemen-category.module').then(m => m.ManajemenCategoryModule)
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
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class DashboardModule { }
