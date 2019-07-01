
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { HomeAdminService } from './home-admin.service';

export interface Hadmin {
  empresa: string;
  fechacarta: Date;
  industrial: string;
  deLaCasa: string;
  oficina: string;
  hipocalorico: string;
  vegetariano: string;
  regimen: string;
  cantIndustrial: number;
  cantDelaCasa: number;
  cantOficina: number;
  cantHipocalorico: number;
  cantVegetariano: number;
  cantRegimen: number;
}
const restHadmin: Hadmin[] = [];

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  displayedColumns: string[] = ['empresa', 'fecha', 'menu1', 'cant1', 'menu2',
    'cant2', 'menu3', 'cant3', 'menu4', 'cant4', 'menu5', 'cant5', 'menu6', 'cant6'];
  dataSource: MatTableDataSource<Hadmin>;
  fechaInicio: Date=new Date();
  fechaTermino: Date=new Date();
  listaFiltrada : any[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _router: Router, private homeAdminService: HomeAdminService) {
    this.dataSource = new MatTableDataSource(restHadmin);
  }

  ngOnInit() {
    if (localStorage.getItem("currentUser") === null) {
      this._router.navigate(['']);
    }
    else {
      var user = JSON.parse(localStorage.getItem('currentUser'));
      if (user.tokens[0].rol == 'admin') {
        this.gethistorialAdmin();
        //this.dataSource.paginator = this.paginator;
        //this.dataSource.sort = this.sort;
      }
      else {
        this._router.navigate(['']);
      }
    }
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    //console.log(filterValue);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  eliminarFiltro(){
    this.applyFilter("");
    this.gethistorialAdmin();
  }
  filtroEmpresaFechaInicioFechaTermino(empresaFiltrada: string) {
    this.listaFiltrada=[];
    //console.log(empresaFiltrada);
    //console.log(this.fechaInicio);
    //console.log(this.fechaTermino);
    if (this.fechaTermino >= this.fechaInicio) {
      var contador=this.dataSource.data.length;
      this.dataSource.data.forEach(element => {
        //console.log(element.fechacarta,typeof(element.fechacarta));
        //console.log(element.fechacarta, this.fechaInicio, this.fechaTermino)
        var fechaCarta = new Date(element.fechacarta);
        if(fechaCarta>=this.fechaInicio && fechaCarta<=this.fechaTermino ){
          this.listaFiltrada.push(element);
          console.log(this.listaFiltrada); 
        }
        contador--;
        if(contador==0){// una vez que los recorre todos..
          this.dataSource.data=this.listaFiltrada;//.... lo guarda en el datasource
          this.applyFilter(empresaFiltrada);
        }
      });
    };
  }

  gethistorialAdmin() {

    this.homeAdminService.listarHistorialAdmin()
      .subscribe(
        res => {
          this.dataSource.data = res;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        err => console.log(err)
      )
  }

}

