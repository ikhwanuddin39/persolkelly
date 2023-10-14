import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManajemenCategoryComponent } from './manajemen-category.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: ManajemenCategoryComponent
}]

@NgModule({
  declarations: [
    ManajemenCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ManajemenCategoryModule { }
