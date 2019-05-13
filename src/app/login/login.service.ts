import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  loggin(rut:string,pass: string): Observable<any[]> {
    const headers = new HttpHeaders({
      "Content-Type": "*/*",
      "rut": rut,
      "pass": pass
    })
    return this.http.get<any[]>(`${this.BASE_URL}/usuarios/login/auth`, { headers });
  }
}
