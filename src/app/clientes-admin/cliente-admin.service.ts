import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Cliente } from '../modelo/cliente';


const headers = new HttpHeaders({
  "Content-Type": "*/*",
})

@Injectable({
  providedIn: 'root'
})
export class ClienteAdminService {

  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  public lista: any;

  listarClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.BASE_URL}/usuarios`, { headers });

  }

  seleccionarCliente(id): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.BASE_URL}/usuarios/${id}`, { headers })
  }
  crearCliente(cliente) {
    return this.http.post<Cliente>(`${this.BASE_URL}/usuarios`,cliente)
  }
  updateCliente(id: number, cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.BASE_URL}/usuarios/${id}`,cliente)
  
  }
  EliminarCliente(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.BASE_URL}/usuarios/${id}`, { headers })
  
  }

}
