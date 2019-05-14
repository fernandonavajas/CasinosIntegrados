import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { DataSource, FooterRowOutlet } from '@angular/cdk/table';
import { RegistroService } from './registro.service';

export class Menu2 {
  fecha: any;
  idDeLaCasa: number;
  idHipocalorico: number;
  idIndustrial: number;
  idOficina: number;
  idVegetariano: number;
  idRegimen: number;
  deLaCasa: string;
  hipocalorico: string;
  industrial: string;
  oficina: string;
  regimen: string;
  vegetariano: string;
  cantDeLaCasa: number;
  cantHipocalorico: number;
  cantIndustrial: number;
  cantOficina: number;
  cantRegimen: number;
  cantVegetariano: number;
  fotoDeLaCasa: string;
  fotoHipocalorico: string;
  fotoIndustrial: string;
  fotoOficina: string;
  fotoRegimen: string;
  fotoVegetariano: string;

}
var restMenu2: Menu2[] = [
  {
    fecha: "", deLaCasa: "a343434", hipocalorico: "s43434", industrial: "3434d", oficina: "f3434", regimen: "g343434", vegetariano: "3434h",
    cantDeLaCasa: 0, cantHipocalorico: 0, cantIndustrial: 0, cantOficina: 0, cantRegimen: 0, cantVegetariano: 0,
    fotoDeLaCasa: "", fotoHipocalorico: "", fotoIndustrial: "", fotoOficina: "", fotoRegimen: "", fotoVegetariano: "",
    idDeLaCasa: 0, idHipocalorico: 0, idIndustrial: 0, idOficina: 0, idRegimen: 0, idVegetariano: 0
  }
];

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {

  displayedColumns: string[] = ['fecha', 'menuDeLaCasa', 'cantDeLaCasa', 'menuOficina', 'cantOficina',
    'menuIndustrial', 'cantIndustrial', 'menuHipocalorico', 'cantHipocalorico', 'menuVegetariano', 'cantVegetariano', 'menuRegimen', 'cantRegimen', 'Total'];
  dataSource: MatTableDataSource<Menu2>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private _router: Router, private registroService: RegistroService) {
    this.dataSource = new MatTableDataSource(restMenu2);
  }

  ngOnInit() {
    if (localStorage.getItem("currentUser") == null) {
      this._router.navigate(['']);
    }
    else {
      var user = JSON.parse(localStorage.getItem('currentUser'));
      if (user.tokens[0].rol == 'admin') {
        this.dataSource.sort = this.sort;
      }
      else {
        if (user.tokens[0].rol == 'cliente') {
          //this.getRegistro('18990554');//Esto me entrega el historial
          //console.log(user);
          this.getCarta();
        }
        else {
          this._router.navigate(['']);
        }

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
  }


  selectedMenu: Menu2[];

  cambio(fecha: Date, cantidad: number, position: number) {
    this.selectedMenu = restMenu2;

    var cant = +cantidad;
    this.selectedMenu.forEach(element => {
      if (element.fecha == fecha.toString()) {
        if (position == 1) {//de la casa
          element.cantDeLaCasa = cant;
        }
        if (position == 2) {//oficina
          element.cantOficina = cant;
        }
        if (position == 3) {//industrial
          element.cantIndustrial = cant;
        }
        if (position == 4) {//hipo
          element.cantHipocalorico = cant;
        }
        if (position == 5) {//vegetariano
          element.cantVegetariano = cant;
        }
        if (position == 6) {//regimen
          element.cantRegimen = cant;
        }

      }
    });

    this.dataSource = new MatTableDataSource(this.selectedMenu);
  }

  Modificar(menu2: any) { //funcion para agregar los pedidos con su correspondiente detalle
    var user = JSON.parse(localStorage.getItem('currentUser'));
    //console.log(user.rut);
    //console.log(user.id);
    var resultado = {
      identifiers: [{ id: 0 }],
      generatedMaps: [{ id: 0, fecha: "0" }],
      raw: [{ id: 0, "fecha": "0" }]
    }
    console.log(menu2.data);//data con cantidades solicitadas
    this.registroService.submitPedido(user.rut, user.id)
      .subscribe(
        res => {
          resultado = res;
          console.log(resultado)
          //console.log(resultado.identifiers[0].id); // el id del pedido, bajo este mismo id se hara el detalle del pedido
          menu2.data.forEach(pedido => {//cada pedido

            for (var i = 1; i < 7; i++) {//cada cantidad ingresada, falta saber cual es el id carta
              if (i == 1) {// de la casa
                console.log(pedido.cantDeLaCasa, pedido.idDeLaCasa, resultado.identifiers[0].id, "de la casa");
                this.registroService.submitDetalle(pedido.cantDeLaCasa, pedido.idDeLaCasa, resultado.identifiers[0].id)
                  .subscribe(
                    r => {
                      console.log("lo logro 1");
                    }
                  )
              }
              if (i == 2) {// oficina
                console.log(pedido.cantOficina, pedido.idOficina, resultado.identifiers[0].id, "oficina");
                this.registroService.submitDetalle(pedido.cantOficina, pedido.idOficina, resultado.identifiers[0].id)
                  .subscribe(
                    r => {
                      console.log("lo logro 2");
                    }
                  )
              }
              if (i == 3) {// industrial
                console.log(pedido.cantIndustrial, pedido.idIndustrial, resultado.identifiers[0].id, "industrial");
                this.registroService.submitDetalle(pedido.cantIndustrial, pedido.idIndustrial, resultado.identifiers[0].id)
                  .subscribe(
                    r => {
                      console.log("lo logro 3");
                    }
                  )
              }
              if (i == 4) {// hipocalorico
                console.log(pedido.cantHipocalorico, pedido.idHipocalorico, resultado.identifiers[0].id, "hipo");
                this.registroService.submitDetalle(pedido.cantHipocalorico, pedido.idHipocalorico, resultado.identifiers[0].id)
                  .subscribe(
                    r => {
                      console.log("lo logro 4");
                    }
                  )
              }
              if (i == 5) {// vegetariano
                console.log(pedido.cantVegetariano, pedido.idVegetariano, resultado.identifiers[0].id, "vegetariano");
                this.registroService.submitDetalle(pedido.cantVegetariano, pedido.idVegetariano, resultado.identifiers[0].id)
                  .subscribe(
                    r => {
                      console.log("lo logro 5");
                    }
                  )
              }
              if (i == 6) {// regimen
                console.log(pedido.cantRegimen, pedido.idRegimen, resultado.identifiers[0].id, "regimen");
                this.registroService.submitDetalle(pedido.cantRegimen, pedido.idRegimen, resultado.identifiers[0].id)
                  .subscribe(
                    r => {
                      console.log("lo logro 6");
                    }
                  )

              }

            }
          });

        },
        err => console.log(err)
      )
    //if (confirm('Datos guardados con exito')) {
    //}
  }

  getRegistro(rut) {
    this.registroService.listarRegistro(rut)
      .subscribe(
        res => {

          console.log(res)
        },
        err => console.log(err)
      )
  }
  convertirFecha(fecha: any): Date {
    var date_input = new Date(fecha);
    var day = date_input.getDate();
    var month = date_input.getMonth() + 1;
    var year = date_input.getFullYear();
    var yyyy_MM_dd = year + "-" + month + "-" + day;
    var f = new Date(yyyy_MM_dd);
    return f;
  }

  getCarta() {
    this.registroService.listarCarta()
      .subscribe(
        resCarta => {
          console.log(resCarta);
          var i: number = 0;
          var traspaso: Menu2[] = [];
          this.registroService.listarFechas()
            .subscribe(
              resFechas => {
                resCarta.forEach(element => {

                  for (i = 0; i < resFechas.length; i++) {
                    var a = this.convertirFecha(element.fecha);
                    var b = this.convertirFecha(resFechas[i].fecha);
                    //console.log(a.toDateString());
                    //console.log(b.toDateString());
                    if (a.toDateString() == b.toDateString()) {
                      if (traspaso[i] == null) {
                        traspaso[i] = {
                          fecha: "", deLaCasa: "", hipocalorico: "", industrial: "", oficina: "", regimen: "", vegetariano: "",
                          cantDeLaCasa: 0, cantHipocalorico: 0, cantIndustrial: 0, cantOficina: 0, cantRegimen: 0, cantVegetariano: 0,
                          fotoDeLaCasa: "", fotoHipocalorico: "", fotoIndustrial: "", fotoOficina: "", fotoRegimen: "", fotoVegetariano: "",
                          idDeLaCasa: 0, idHipocalorico: 0, idIndustrial: 0, idOficina: 0, idRegimen: 0, idVegetariano: 0
                        };
                      }

                      traspaso[i].fecha = element.fecha;
                      if (element.tipomenu.id == 1) {//de la casa
                        traspaso[i].deLaCasa = element.plato.nombre;
                        traspaso[i].idDeLaCasa = element.id;
                      }
                      if (element.tipomenu.id == 2) {//oficina
                        traspaso[i].oficina = element.plato.nombre;
                        traspaso[i].idOficina = element.id;
                      }
                      if (element.tipomenu.id == 3) {//industrial
                        traspaso[i].industrial = element.plato.nombre;
                        traspaso[i].idIndustrial = element.id;
                      }
                      if (element.tipomenu.id == 4) {//hipocalorico
                        traspaso[i].hipocalorico = element.plato.nombre;
                        traspaso[i].idHipocalorico = element.id;
                      }
                      if (element.tipomenu.id == 5) {//vegetariano
                        traspaso[i].vegetariano = element.plato.nombre;
                        traspaso[i].idVegetariano = element.id;
                      }
                      if (element.tipomenu.id == 6) {//regimen
                        traspaso[i].regimen = element.plato.nombre;
                        traspaso[i].idRegimen = element.id;
                      }

                    }
                  }
                });
                console.log(traspaso);
                restMenu2 = traspaso;
                this.dataSource = new MatTableDataSource(traspaso);

              },
              err => console.log(err)
            );

        },
        err => console.log(err)
      );
  }

}


