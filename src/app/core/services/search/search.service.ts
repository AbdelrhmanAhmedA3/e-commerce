import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchTerm$ = new BehaviorSubject<string>('');



  // private readonly apiUrl = 'https://dummyjson.com/products/search?q=';
  // constructor(private http: HttpClient) { }

  // searchProducts(query: string): Observable<any>{
  //   return this.http.get(`${this.apiUrl}${query}`)
  // }


}
