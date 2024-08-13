import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly baseUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  fetchProducts(skip: number, limit: number, searchTerm: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search?q=${searchTerm}&skip=${skip}&limit=${limit}`)

  }

  fetchProductByCategory(skip: number, limit: number, category: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/category/${category}?skip=${skip}&limit=${limit}`)

  }



}
