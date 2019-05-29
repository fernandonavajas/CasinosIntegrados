import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Cliente } from '../modelo/cliente';
import { DialogData } from './clientes-admin.component';
import { Tokens } from '../modelo/userTokens';




@Injectable({
  providedIn: 'root'
})
export class ClienteAdminService {

  BASE_URL: string = 'http://204.48.16.194:3000';
  constructor(private http: HttpClient) { }
  public lista: any;

  listarClientes(): Observable<Cliente[]> {
    const headers = new HttpHeaders({
      "Content-Type": "*/*",
    })
    return this.http.get<Cliente[]>(`${this.BASE_URL}/usuarios`, { headers });

  }

  seleccionarCliente(id): Observable<Cliente> {
    const headers = new HttpHeaders({
      "Content-Type": "*/*",
    })
    return this.http.get<Cliente>(`${this.BASE_URL}/usuarios/${id}`, { headers })
  }
  crearCliente(cliente) {
    const headers = new HttpHeaders({
      "Content-Type": "*/*",
    })
    return this.http.post<Cliente>(`${this.BASE_URL}/usuarios`, cliente)
  }
  updateCliente(id: number, cliente: Cliente): Observable<Cliente> {
    const headers = new HttpHeaders({
      "Content-Type": "*/*",
    })
    return this.http.put<Cliente>(`${this.BASE_URL}/usuarios/${id}`, cliente)

  }
  EliminarCliente(id: number): Observable<Cliente> {
    const headers = new HttpHeaders({
      "Content-Type": "*/*",
    })
    return this.http.delete<Cliente>(`${this.BASE_URL}/usuarios/${id}`, { headers })

  }
  TraerPassword(rut: number): Observable<DialogData> {
    const headers = new HttpHeaders({
      "Content-Type": "*/*",
      "rut": rut.toString()
    })
    return this.http.get<DialogData>(`${this.BASE_URL}/tokens`, { headers })
  }
  CambiarPassword(rut: string, pass: string): Observable<Tokens> {
    const headers = new HttpHeaders({
      "Content-Type": "*/*",
      "rut": rut.toString(),
      "pass": pass
    })
    return this.http.put<Tokens>(`${this.BASE_URL}/tokens`,Tokens,{headers})
  }


}
