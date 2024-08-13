import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductCategory } from 'core/services/models/ProductCategory/product-category';
import { Product } from 'core/services/models/products/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly baseUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  fetchProducts(skip: number, limit: number, searchTerm: string): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/search?q=${searchTerm}&skip=${skip}&limit=${limit}`)

  }

  fetchProductByCategory(skip: number, limit: number, category: ProductCategory | string): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/category/${category}?skip=${skip}&limit=${limit}`)

  }



}
