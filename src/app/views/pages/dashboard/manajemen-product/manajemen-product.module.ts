import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManajemenProductComponent } from './manajemen-product.component';
import { RouterModule, Routes } from '@angular/router';

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
    RouterModule.forChild(routes)
  ]
})
export class ManajemenProductModule { }
