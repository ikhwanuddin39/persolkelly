import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionCategoryComponent } from './action-category.component';
import { RouterModule, Routes } from '@angular/router';

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
    RouterModule.forChild(routes)
  ]
})
export class ActionCategoryModule { }
