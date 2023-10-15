import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionCategoryComponent } from './action-category.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../components/button/button.component';

const routes: Routes = [
  {
    path: '',
    component: ActionCategoryComponent
  }
];

@NgModule({
  declarations: [
    ActionCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ButtonComponent
  ]
})
export class ActionCategoryModule { }
