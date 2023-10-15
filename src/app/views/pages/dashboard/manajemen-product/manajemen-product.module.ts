import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManajemenProductComponent } from './manajemen-product.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonAddComponent } from '../components/button/button-add/button-add.component';
import { TableComponent } from '../components/table/table.component';
import { EmptyStateComponent } from '../components/empty-state/empty-state.component';

const routes: Routes = [
  {
    path: '',
    component: ManajemenProductComponent
  }
]
@NgModule({
  declarations: [
    ManajemenProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonAddComponent,
    TableComponent,
    EmptyStateComponent
  ]
})
export class ManajemenProductModule { }
