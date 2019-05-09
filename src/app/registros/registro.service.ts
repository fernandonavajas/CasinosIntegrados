import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  listarRegistro(rut:string): Observable<any[]> {
    const headers = new HttpHeaders({
      "Content-Type": "*/*",
      "rut": rut
    })
    return this.http.get<any[]>(`${this.BASE_URL}/pedidos`, { headers });
  }
}
