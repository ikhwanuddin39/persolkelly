import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionProductComponent } from './action-product.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ActionProductComponent
  }
]

@NgModule({
  declarations: [
    ActionProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ActionProductModule { }
