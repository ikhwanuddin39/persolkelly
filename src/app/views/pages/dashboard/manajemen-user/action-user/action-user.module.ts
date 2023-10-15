import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionUserComponent } from './action-user.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../components/button/button.component';

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
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ButtonComponent
  ]
})
export class ActionUserModule { }
