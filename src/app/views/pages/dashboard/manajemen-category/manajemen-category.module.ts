import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManajemenCategoryComponent } from './manajemen-category.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from '../components/button/button.component';
import { TableComponent } from '../components/table/table.component';
import { EmptyStateComponent } from '../components/empty-state/empty-state.component';

const routes: Routes = [{
  path: '',
  component: ManajemenCategoryComponent
}]

@NgModule({
  declarations: [
    ManajemenCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonComponent,
    TableComponent,
    EmptyStateComponent
  ]
})
export class ManajemenCategoryModule { }
