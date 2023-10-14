import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManajemenUserComponent } from './manajemen-user.component';
import { RouterModule, Routes } from '@angular/router';

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
    RouterModule.forChild(routes)
  ]
})
export class ManajemenUserModule { }
