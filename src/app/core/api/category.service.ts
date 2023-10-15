import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
export interface Category {
  id: string;
  name: string;
  description: string;
}
@Injectable({
  providedIn: 'root'
})
export class CategoryService extends ApiService<Category> {
  override endpoint = 'categories';
}
