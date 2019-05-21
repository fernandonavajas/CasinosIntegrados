import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MenuAdminService } from './menu-admin.service';
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

  platos = [];
  data = {
    industrial: 0,
    deLaCasa: 0,
    oficina: 0,
    hipocalorico: 0,
    vegetariano: 0,
    regimen: 0,

  };
  fecha: Date;


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
      if (user.tokens[0].rol == 'admin') {
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
    //console.log(this.dataSource.filteredData);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  selectedMenu: Menus = new Menus();
  public AbrirParaEditar(menu: Menus) {
    //console.log(menu);
    this.selectedMenu = menu;

  }

  Agregar() {
    if (this.data) {

      var carta = {
        fecha: this.convertirFecha(this.fecha),
        tipoMenuId: 0,
        platoId: 0
      }
      console.log(carta.fecha);
      if (this.data.deLaCasa) {
        carta.tipoMenuId = 1;
        carta.platoId = this.data.deLaCasa;
        this.menuAdminService.crearCarta(carta).subscribe(
          r => { this.getCarta(); }
        )

      }
      if (this.data.oficina) {
        carta.tipoMenuId = 2;
        carta.platoId = this.data.oficina;
        this.menuAdminService.crearCarta(carta).subscribe(
          r => { this.getCarta(); }
        )

      }
      if (this.data.industrial) {
        carta.tipoMenuId = 3;
        carta.platoId = this.data.industrial;
        this.menuAdminService.crearCarta(carta).subscribe(
          r => { this.getCarta(); }
        )

      }
      if (this.data.hipocalorico) {
        carta.tipoMenuId = 4;
        carta.platoId = this.data.hipocalorico;
        this.menuAdminService.crearCarta(carta).subscribe(
          r => { this.getCarta(); }
        )

      }
      if (this.data.vegetariano) {
        carta.tipoMenuId = 5;
        carta.platoId = this.data.vegetariano;
        this.menuAdminService.crearCarta(carta).subscribe(
          r => { this.getCarta(); }
        )
      }
      if (this.data.regimen) {
        carta.tipoMenuId = 6;
        carta.platoId = this.data.regimen;
        this.menuAdminService.crearCarta(carta).subscribe(
          r => { this.getCarta(); }
        )
      }

    }
  }
  Eliminar() {
    if (confirm('¿Estas seguro de eliminar a este usuario?')) {

    }

  }

  getPlatos() {
    this.menuAdminService.listarPlatos()
      .subscribe(
        resPlatos => {
          this.platos = resPlatos;
        },
        err => console.log(err)
      )
  }

  convertirFecha(fecha: any): Date {
    //console.log(fecha,"para cambiar");
    var date_input = new Date(fecha);
    var day = date_input.getDate() + 1;
    var month = date_input.getMonth() + 1;
    var year = date_input.getFullYear();
    var yyyy_MM_dd = year + "-" + month + "-" + day;
    var f = new Date(yyyy_MM_dd);
    //console.log(f,"fecha cambiada");
    return f;
  }

  getCarta() {
    this.menuAdminService.listarCarta()
      .subscribe(
        resCarta => {
          console.log(resCarta);
          this.dataSource.data=resCarta;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        err => console.log(err)
      );
  }
}
