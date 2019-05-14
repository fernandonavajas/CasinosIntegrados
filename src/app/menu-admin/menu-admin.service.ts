import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Plato } from '../modelo/plato';
import { Carta } from '../modelo/carta';


@Injectable({
  providedIn: 'root'
})
export class MenuAdminService {

  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  listarPlatos(): Observable<Plato[]> {
    const headers = new HttpHeaders({
      "Content-Type": "*/*",
    })
    return this.http.get<Plato[]>(`${this.BASE_URL}/plato`, { headers });
  }

  listarCarta(): Observable<Carta[]> {
    const headers = new HttpHeaders({
      "Content-Type": "*/*",
    })
    return this.http.get<Carta[]>(`${this.BASE_URL}/carta`, { headers });
  }
  listarFechas(): Observable<any[]> {
    const headers = new HttpHeaders({
      "Content-Type": "*/*",
    })
    return this.http.get<any[]>(`${this.BASE_URL}/carta/fechas`, { headers });
  }

  crearCarta(carta):Observable<Carta> {
    console.log(carta);
    carta.platoId=parseInt(carta.platoId);
    console.log(carta);
    const headers = new HttpHeaders({
      "Content-Type": "*/*",
    })
    return this.http.post<Carta>(`${this.BASE_URL}/carta`, carta);
  }

}
