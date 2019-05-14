
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HomeAdminService } from './home-admin.service';

export interface Hadmin {
  empresa: string;
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
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  displayedColumns: string[] = ['empresa', 'fecha', 'menu1', 'cant1', 'menu2',
    'cant2', 'menu3', 'cant3', 'menu4', 'cant4', 'menu5', 'cant5', 'menu6', 'cant6'];
  dataSource: MatTableDataSource<Hadmin>;

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
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
      else {
        this._router.navigate(['']);
      }

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
  gethistorialAdmin() {
    var contador: number = 0;
    var traspaso: Hadmin[] = [];
    this.homeAdminService.listarHistorialAdmin()
      .subscribe(
        res => {
          //console.log(res);
          res.forEach(element => {// recorre cada elemento de la respuesta del servidor....c/u es una empresa distinta
            //console.log(res.length)
            var fecha: any[] = []; // guarda todas las fechas distintas para cada empresa
            for (var i = 0; i < element.length; i++) { // recorre cada registro de cada empresa
              //console.log(element[i].carta.fecha);
              if (!fecha.includes(element[i].carta.fecha)) {
                //console.log('no se encuentra');
                traspaso[contador] = {
                  empresa: '', fecha: new Date(), industrial: '',
                  deLaCasa: '', oficina: '', hipocalorico: '',
                  vegetariano: '', regimen: '',
                  cantDelaCasa: 0, cantHipocalorico: 0, cantIndustrial: 0,
                  cantOficina: 0, cantRegimen: 0, cantVegetariano: 0
                }
                traspaso[contador].empresa = element[i].pedido.usuario.nombre;
                traspaso[contador].fecha = element[i].carta.fecha;
                fecha.push(element[i].carta.fecha);
                contador++;
              }
              for (var j = 0; j < traspaso.length; j++) {
                if ((traspaso[j].empresa == element[i].pedido.usuario.nombre) &&
                  (traspaso[j].fecha == element[i].carta.fecha)) {
                    if (element[i].carta.tipomenu.id == 1) {
                      traspaso[j].deLaCasa = element[i].carta.plato.nombre;
                      traspaso[j].cantDelaCasa = element[i].cantidad;
                    }
                    if (element[i].carta.tipomenu.id == 2) {
                      traspaso[j].oficina = element[i].carta.plato.nombre;
                      traspaso[j].cantOficina = element[i].cantidad;
                    }
                    if (element[i].carta.tipomenu.id == 3) {
                      traspaso[j].industrial = element[i].carta.plato.nombre;
                      traspaso[j].cantIndustrial = element[i].cantidad;
                    }
                    if (element[i].carta.tipomenu.id == 4) {
                      traspaso[j].hipocalorico = element[i].carta.plato.nombre;
                      traspaso[j].cantHipocalorico = element[i].cantidad;
                    }
                    if (element[i].carta.tipomenu.id == 5) {
                      traspaso[j].vegetariano = element[i].carta.plato.nombre;
                      traspaso[j].cantVegetariano = element[i].cantidad;
                    }
                    if (element[i].carta.tipomenu.id == 6) {
                      //console.log(element[i].carta.tipomenu.id)
                      //console.log(element[i].carta.plato.nombre)
                      //console.log(element[i].cantidad)
                      traspaso[j].regimen = element[i].carta.plato.nombre;
                      traspaso[j].cantRegimen = element[i].cantidad;
                    }
                }
              }
              //console.log(traspaso);
            }
          });
          this.dataSource = new MatTableDataSource(traspaso);
        },
        
        err => console.log(err)
      )
  }

}

