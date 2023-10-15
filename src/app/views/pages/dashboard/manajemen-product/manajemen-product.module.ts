import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManajemenProductComponent } from './manajemen-product.component';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from '../components/table/table.component';
import { EmptyStateComponent } from '../components/empty-state/empty-state.component';
import { ButtonComponent } from '../components/button/button.component';

const routes: Routes = [
  {
    path: '',
    component: ManajemenProductComponent
  }, {
    path: 'action',
    loadChildren: () => import('./action-product/action-product.module').then(m => m.ActionProductModule)
  }, {
    path: 'detail',
    loadChildren: () => import('./detail-product/detail-product.module').then(m => m.DetailProductModule)
  }
]
@NgModule({
  declarations: [
    ManajemenProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableComponent,
    EmptyStateComponent,
    ButtonComponent
  ]
})
export class ManajemenProductModule { }
