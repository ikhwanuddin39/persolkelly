import { Injectable } from '@angular/core';
export interface Category {
  id: string;
  name: string;
  description: string;
}
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
}
