import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductCategory } from 'core/services/models/ProductCategory/product-category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryListService {

  private readonly apiUrl = 'https://dummyjson.com/products/category-list';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(this.apiUrl);
  }
}
