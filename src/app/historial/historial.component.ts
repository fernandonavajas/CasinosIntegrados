import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormControl } from '@angular/forms';

export interface Cliente {
  rut: string;
  nombre: string;
  cantidad: number;
}
const restCliente: Cliente[] = [
  {
    rut: '7.547.734-1',
    nombre: 'Baresi',
    cantidad: 41,
  },
  {
    rut: '18.990.554-8',
    nombre: 'Unimarc',
    cantidad: 72,
  },
  {
    rut: '19.658.990-2',
    nombre: 'Cencosud',
    cantidad: 222,
  },
];

var cambiar: Cliente =
{
  rut: '',
  nombre: '',
  cantidad: 0,
}

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  displayedColumns: string[] = ['rut', 'nombre', 'cantidad'];
  dataSource: MatTableDataSource<Cliente>;
  Cambiar = new FormControl(cambiar);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(restCliente);
  }

  ngOnInit() {

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

  public click(e: any) {
    console.log(e);
    this.Cambiar=e;
    console.log(this.Cambiar);

  }

}
