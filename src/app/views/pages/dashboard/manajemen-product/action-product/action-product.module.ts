import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionProductComponent } from './action-product.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../components/button/button.component';
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
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ButtonComponent
  ]
})
export class ActionProductModule { }
