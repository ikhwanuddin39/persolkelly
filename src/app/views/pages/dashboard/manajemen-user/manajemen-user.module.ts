import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManajemenUserComponent } from './manajemen-user.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from '../components/button/button.component';
import { TableComponent } from '../components/table/table.component';
import { EmptyStateComponent } from '../components/empty-state/empty-state.component';

const routes: Routes = [
  {
    path: '',
    component: ManajemenUserComponent
  }
]


@NgModule({
  declarations: [
    ManajemenUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonComponent,
    TableComponent,
    EmptyStateComponent
  ]
})
export class ManajemenUserModule { }
