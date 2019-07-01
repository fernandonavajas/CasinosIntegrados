import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carta } from '../modelo/carta';
import { resultadopedido } from './registros.component';


@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  //BASE_URL: string = 'http://localhost:3000';
  BASE_URL: string = 'http://204.48.16.194:3000';
  constructor(private http: HttpClient) { }

  listarRegistro(rut: string): Observable<any[]> {
    const headers = new HttpHeaders({
      "Content-Type": "*/*",
      "rut": rut
    })
    return this.http.get<any[]>(`${this.BASE_URL}/pedidos`, { headers });
  }
  listarCarta(rut: string): Observable<any[]> {
    const headers = new HttpHeaders({
      "Content-Type": "*/*",
      "rut": rut
    })
    return this.http.get<Carta[]>(`${this.BASE_URL}/carta/usuario`, { headers });
  }
  listarFechas(): Observable<any[]> {
    const headers = new HttpHeaders({
      "Content-Type": "*/*",
    })
    return this.http.get<any[]>(`${this.BASE_URL}/carta/fechas`, { headers });
  }

  submitPedido(rut: number, idUsuario: number): Observable<resultadopedido> {
    var pedido = {
      rut: rut,
      fecha: new Date(),
      usuarioId: idUsuario
    }
    //console.log(pedido);
    const headers = new HttpHeaders({
      "Content-Type": "*/*"
    })
    return this.http.post<resultadopedido>(`${this.BASE_URL}/pedidos`, pedido);
  }
  submitDetalle(cantidad: number, cartaId: number, pedidoId: number): Observable<any> {
    var detalle = {
      cantidad: cantidad,
      idCarta: cartaId,
      idPedido: pedidoId
    }
    //console.log("Esto esta en la funcion submit detalle ",detalle);
    const headers = new HttpHeaders({
      "Content-Type": "*/*"
    })
    return this.http.post<any>(`${this.BASE_URL}/detalle`, detalle);
  }
  


}
