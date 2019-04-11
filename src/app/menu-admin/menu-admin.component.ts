import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Cliente } from '../modelo/cliente';

var restCliente: Cliente[] = [
  { id: 1, rut: '7.547.734-1', nombre: 'Baresi', cantidad: 41, },
  { id: 2, rut: '18.990.554-8', nombre: 'Unimarc', cantidad: 72, },
  { id: 3, rut: '19.658.990-2', nombre: 'Cencosud', cantidad: 222, },
  { id: 3, rut: '7.547.734-1', nombre: 'lotto', cantidad: 41, },
  { id: 4, rut: '18.990.554-8', nombre: 'ifood', cantidad: 72, },
  { id: 5, rut: '19.658.990-2', nombre: 'falabella', cantidad: 222, },
  { id: 6, rut: '7.547.734-1', nombre: 'soprole', cantidad: 41, },
  { id: 7, rut: '18.990.554-8', nombre: 'redField', cantidad: 72, },
  { id: 8, rut: '19.658.990-2', nombre: 'torre', cantidad: 222, },
  { id: 9, rut: '7.547.734-1', nombre: 'jbl', cantidad: 41, },
  { id: 10, rut: '18.990.554-8', nombre: 'confort', cantidad: 72, },
  { id: 11, rut: '19.658.990-2', nombre: 'needeed', cantidad: 222, },
];

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {
  displayedColumns: string[] = ['rut', 'nombre', 'cantidad'];
  dataSource: MatTableDataSource<Cliente>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _router: Router) {
    this.dataSource = new MatTableDataSource(restCliente);
  }

  ngOnInit() {
    if (localStorage.getItem("currentUser") == null) {
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
    //console.log(cliente);
    this.selectedCliente = cliente;
    //console.log(this.selectedCliente);

  }

  AgregarEditar() {
    if (this.selectedCliente.id == 0) {
      this.selectedCliente.id = restCliente.length + 1;
      restCliente.push(this.selectedCliente);
      this.dataSource = new MatTableDataSource(restCliente);
    }
    //console.log(restCliente);
    this.selectedCliente = new Cliente();
  }
  Eliminar(){
    if(confirm('¿Estas seguro de eliminar a este usuario?')){
      restCliente =restCliente.filter(x=> x != this.selectedCliente);
      this.selectedCliente =new Cliente();
      //console.log('eliminado');
      //console.log(restCliente);
      this.dataSource = new MatTableDataSource(restCliente);
    }
    
  }
}

