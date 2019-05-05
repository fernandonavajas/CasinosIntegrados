import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormControl } from '@angular/forms';
import { MenuAdminService } from './menu-admin.service';
import { Carta } from '../modelo/carta';
import { Menus } from '../modelo/menus';

var restCarta: Menus[];

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {
  displayedColumns: string[] = ['fecha', 'industrial', 'deLaCasa', 'oficina', 'hipocalorico', 'vegetariano', 'regimen'];
  dataSource: MatTableDataSource<Menus>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _router: Router, private menuAdminService: MenuAdminService) {
    this.dataSource = new MatTableDataSource(restCarta);
  }

  ngOnInit() {
    if (localStorage.getItem("currentUser") == null) {
      this._router.navigate(['']);
    }
    else {
      var user = JSON.parse(localStorage.getItem('currentUser'));
      if (user.role == 'admin') {
        this.getPlatos();
        this.getCarta();
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

  selectedMenu: Menus = new Menus();
  public AbrirParaEditar(menu: Menus) {
    console.log(menu);
    this.selectedMenu = menu;

  }

  AgregarEditar() {

  }
  Eliminar() {
    if (confirm('¿Estas seguro de eliminar a este usuario?')) {

    }

  }

  getPlatos() {
    this.menuAdminService.listarPlatos()
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
    this.menuAdminService.listarCarta()
      .subscribe(
        resCarta => {
          var i: number = 0;
          var traspaso: Menus[] = [];
          this.menuAdminService.listarFechas()
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
                        traspaso[i] = { fecha: "", deLaCasa: "", hipocalorico: "", industrial: "", oficina: "", regimen: "", vegetariano: "" };
                      }

                      traspaso[i].fecha = element.fecha;
                      if (element.tipomenu.id == 1) {
                        traspaso[i].deLaCasa = element.plato.nombre;
                      }
                      if (element.tipomenu.id == 2) {
                        traspaso[i].oficina = element.plato.nombre;
                      }
                      if (element.tipomenu.id == 3) {
                        traspaso[i].industrial = element.plato.nombre;
                      }
                      if (element.tipomenu.id == 4) {
                        traspaso[i].hipocalorico = element.plato.nombre;
                      }
                      if (element.tipomenu.id == 5) {
                        traspaso[i].vegetariano = element.plato.nombre;
                      }
                      if (element.tipomenu.id == 6) {
                        traspaso[i].regimen = element.plato.nombre;
                      }

                    }
                  }
                });
                console.log(traspaso);
                this.dataSource = new MatTableDataSource(traspaso);

              },
              err => console.log(err)
            );

        },
        err => console.log(err)
      );
  }
}
