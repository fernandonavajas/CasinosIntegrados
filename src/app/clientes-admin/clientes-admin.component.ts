import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Cliente } from '../modelo/cliente';
import { ClienteAdminService } from './cliente-admin.service';

var restCliente: Cliente[];

@Component({
  selector: 'app-clientes-admin',
  templateUrl: './clientes-admin.component.html',
  styleUrls: ['./clientes-admin.component.css']
})
export class ClientesAdminComponent implements OnInit {
  displayedColumns: string[] = ['rut', 'nombre', 'empleados','correo','editar','eliminar'];
  dataSource: MatTableDataSource<Cliente>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _router: Router, private clienteAdminService: ClienteAdminService) {
    
    if (localStorage.getItem("currentUser") === null) {
      this._router.navigate(['']);
    }
    else {
      var user = JSON.parse(localStorage.getItem('currentUser'));
      if (user.role == 'admin') {
        console.log(user.role);
      }
      else {
        this._router.navigate(['']);
      }

    }
    this.dataSource = new MatTableDataSource(restCliente);
  }

  ngOnInit() {
    this.getclientes();
    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filteredData);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  selectedCliente: Cliente = new Cliente();

  public AbrirParaEditar(cliente: Cliente) {
    this.selectedCliente = cliente;
    console.log(this.selectedCliente);

  }

  Eliminar(id: number){
    console.log(this.selectedCliente.id);
    this.clienteAdminService.EliminarCliente(id)
    .subscribe(
      res => {
        this.getclientes(); // actualizar la data
      },
      err => console.log(err)
    );
    
  }

  getclientes(){
    this.clienteAdminService.listarClientes()
      .subscribe(
        res => {
          console.log(res)
          this.dataSource = new MatTableDataSource(res);
        },
        err => console.log(err)
      )
  }

}