import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Plato } from '../modelo/plato';
import { Carta } from '../modelo/carta';
import { Data } from '@angular/router';

export interface data1 {
  fecha: Date,
  p1: number,
  p2: number,
  p3: number ,
  p4: number,
  p5: number,
  p6: number,

};

@Injectable({
  providedIn: 'root'
})
export class MenuAdminService {
  

  BASE_URL: string = 'http://204.48.16.194:3000';
  constructor(private http: HttpClient) { }

  listarPlatos(): Observable<Plato[]> {
    const headers = new HttpHeaders({
      "Content-Type": "*/*",
    })
    return this.http.get<Plato[]>(`${this.BASE_URL}/plato`, { headers });
  }

  listarCarta(): Observable<any[]> {
    const headers = new HttpHeaders({
      "Content-Type": "*/*",
    })
    return this.http.get<any[]>(`${this.BASE_URL}/carta`, { headers });
  }
  

  crearCarta(carta : data1):Observable<Data> {
    console.log(carta);
    //pasar la carta a body
    const headers = new HttpHeaders({
      "Content-Type": "*/*",
    })
    return this.http.post<Data>(`${this.BASE_URL}/carta`, carta);
  }
  eliminarCartaPorFecha(fechaConsultada: string){
    //var stringfecha=fechaConsultada.toUTCString();
    console.log(fechaConsultada,typeof(fechaConsultada));
    const headers = new HttpHeaders({
      "Content-Type": "*/*",
      "fechaconsulta": fechaConsultada
    })
    console.log(headers);
    return this.http.delete<Carta>(`${this.BASE_URL}/carta`, { headers });
  }

}
