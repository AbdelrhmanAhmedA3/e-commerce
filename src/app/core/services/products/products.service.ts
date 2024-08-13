import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly baseUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }
  categories$ = new BehaviorSubject<string[]>([])
  fetchProducts(skip: number, limit: number): Observable<any> {
    return this.http.get(`${this.baseUrl}?skip=${skip}&limit=${limit}`).pipe(tap((res: any) => {
      this.categories$.next([...res.products.map((item: any) => {
        const { category } = item;
        return category;
      })])
    }));
  }
}
