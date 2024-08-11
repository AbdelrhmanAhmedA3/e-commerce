import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://dummyjson.com/auth/login';

  constructor(private http: HttpClient) { }


  auth(username: string, password: string, expiresInMins: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    const body = {
      username,
      password,
      expiresInMins
    };


    return this.http.post<any>(this.apiUrl, body, { headers })
  }
}
