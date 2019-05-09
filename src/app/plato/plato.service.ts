import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Platos } from '../modelo/platos';

const headers = new HttpHeaders({
  "Content-Type": "*/*",
})


@Injectable({
  providedIn: 'root'
})
export class PlatoService {

  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  listarPlatos(): Observable<Platos[]> {
    return this.http.get<Platos[]>(`${this.BASE_URL}/plato`, { headers });

  }
  crearPlato(plato) {
    return this.http.post<Platos>(`${this.BASE_URL}/plato`,plato)
  }
  updatePlato(id: number, plato: Platos): Observable<Platos> {
    return this.http.put<Platos>(`${this.BASE_URL}/plato/${id}`,plato)
  
  }
  EliminarPlato(id: number): Observable<Platos> {
    return this.http.delete<Platos>(`${this.BASE_URL}/plato/${id}`, { headers })
  
  }

}
