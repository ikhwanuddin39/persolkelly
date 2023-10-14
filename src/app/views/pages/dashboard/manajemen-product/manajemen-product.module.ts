import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManajemenProductComponent } from './manajemen-product.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonAddComponent } from '../components/button/button-add/button-add.component';

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
    ButtonAddComponent
  ]
})
export class ManajemenProductModule { }
