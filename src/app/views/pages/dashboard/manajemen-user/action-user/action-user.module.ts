import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionUserComponent } from './action-user.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ActionUserComponent
  }
]

@NgModule({
  declarations: [
    ActionUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ActionUserModule { }
