import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../modelo/user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  loggin(rut:string,pass: string): Observable<User> {
    const headers = new HttpHeaders({
      "Content-Type": "*/*",
      "rut": rut,
      "password": pass
    })
    return this.http.get<User>(`${this.BASE_URL}/usuarios/login/auth`, { headers });
  }
}
