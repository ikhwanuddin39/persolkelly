import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
  category_id: string;
  // category: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProductService extends ApiService<Product>{
  override endpoint = 'products';
}
