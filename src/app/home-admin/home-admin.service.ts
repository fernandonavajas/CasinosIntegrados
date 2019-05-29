import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeAdminService {

  BASE_URL: string = 'http://204.48.16.194:3000';
  constructor(private http: HttpClient) { }

  listarHistorialAdmin(): Observable<any[]> {
    const headers = new HttpHeaders({
      "Content-Type": "*/*"
    })
    return this.http.get<any[]>(`${this.BASE_URL}/pedidos/historial`, { headers });
  }
}
