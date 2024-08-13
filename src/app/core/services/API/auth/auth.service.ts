import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: BehaviorSubject<any> = new BehaviorSubject(null);

  private apiUrl = 'https://dummyjson.com/auth/login';

  constructor(private http: HttpClient) { }


  auth(username: string, password: string, expiresInMins: number): Observable<any> {
    const body = {
      username,
      password,
      expiresInMins
    };


    return this.http.post<any>(this.apiUrl, body)
  }
}
