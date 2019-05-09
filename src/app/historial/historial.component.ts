
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HistorialService } from './historial.service';
import { element } from '@angular/core/src/render3';

export interface Hadmin {
  fecha: Date;
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
const restHadmin: Hadmin[] = []
//0: {id: "1", name: "Olivia L.", progress: "52", color: "black"},
//1: {id: "2", name: "Levi V.", progress: "98", color: "purple"},...
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  displayedColumns: string[] = ['fecha', 'menu1', 'cant1', 'menu2', 'cant2',
    'menu3', 'cant3', 'menu4', 'cant4', 'menu5', 'cant5', 'menu6', 'cant6'];
  dataSource: MatTableDataSource<Hadmin>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _router: Router, private historailService: HistorialService) {
    this.dataSource = new MatTableDataSource(restHadmin);
  }

  ngOnInit() {
    if (localStorage.getItem("currentUser") === null) {
      this._router.navigate(['']);
    }
    else {
      var user = JSON.parse(localStorage.getItem('currentUser'));
      this.gethistorial('18990554');

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    }

  }
  applyFilter(filterValue: string) {

    if (filterValue == '9/9/19') {
      var a = new Date('9/9/19')
      var b = a.toUTCString();
      console.log(b);
    }
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  gethistorial(rut) {
    var fecha: any[] = [];
    var traspaso: Hadmin[] = [];
    this.historailService.listarHistorial(rut)
      .subscribe(
        res => {
          res.forEach(element => {
            if (!fecha.includes(element.carta.fecha)) {
              traspaso[fecha.length] = {

                fecha: new Date(), industrial: '',
                deLaCasa: '', oficina: '', hipocalorico: '',
                vegetariano: '', regimen: '',
                cantDelaCasa: 0, cantHipocalorico: 0, cantIndustrial: 0,
                cantOficina: 0, cantRegimen: 0, cantVegetariano: 0
              }

              traspaso[fecha.length].fecha = element.carta.fecha;
              fecha.push(element.carta.fecha);
            }
            for (var i = 0; i < traspaso.length; i++) {
              if (traspaso[i].fecha == element.carta.fecha) {
                if (element.carta.tipomenu.id == 1) {
                  traspaso[i].deLaCasa = element.carta.plato.nombre;
                  traspaso[i].cantDelaCasa = element.cantidad;
                }
                if (element.carta.tipomenu.id == 2) {
                  traspaso[i].oficina = element.carta.plato.nombre;
                  traspaso[i].cantOficina = element.cantidad;
                }
                if (element.carta.tipomenu.id == 3) {
                  traspaso[i].industrial = element.carta.plato.nombre;
                  traspaso[i].cantIndustrial = element.cantidad;
                }
                if (element.carta.tipomenu.id == 4) {
                  traspaso[i].hipocalorico = element.carta.plato.nombre;
                  traspaso[i].cantHipocalorico = element.cantidad;
                }
                if (element.carta.tipomenu.id == 5) {
                  traspaso[i].vegetariano = element.carta.plato.nombre;
                  traspaso[i].cantVegetariano = element.cantidad;
                }
                if (element.carta.tipomenu.id == 6) {
                  traspaso[i].regimen = element.carta.plato.nombre;
                  traspaso[i].cantRegimen = element.cantidad;
                }
              }
            }

          });
          console.log(traspaso)
          this.dataSource = new MatTableDataSource(traspaso);
        },
        err => console.log(err)
      )
  }

}


