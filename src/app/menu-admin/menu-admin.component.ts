import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Menus } from '../modelo/menus';

var restMenus: Menus[] = [
  { fecha: Date.now(), menu1: 'pollo', menu2: 'zapallo italiano', menu3: 'Sopa de verduras', menu4:'pollo al jugo' },
  { fecha: Date.now(), menu1: 'pollo', menu2: 'zapallo italiano', menu3: 'Sopa de verduras', menu4:'pollo al jugo' },
  { fecha: Date.now(), menu1: 'pollo', menu2: 'zapallo italiano', menu3: 'Sopa de verduras', menu4:'pollo al jugo' },
  { fecha: Date.now(), menu1: 'pollo', menu2: 'zapallo italiano', menu3: 'Sopa de verduras', menu4:'pollo al jugo' },

];

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {
  displayedColumns: string[] = ['fecha', 'menu1', 'menu2','menu3', 'menu4'];
  dataSource: MatTableDataSource<Menus>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _router: Router) {
    this.dataSource = new MatTableDataSource(restMenus);
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
  
  selectedMenu: Menus = new Menus();
  public AbrirParaEditar(menu: Menus) {
    console.log(menu);
    this.selectedMenu = menu;
    //console.log(this.selectedCliente);

  }

  AgregarEditar() {
    if (this.selectedMenu.fecha == 0) {
      restMenus.push(this.selectedMenu);
      this.dataSource = new MatTableDataSource(restMenus);
    }
    //console.log(restMenus);
    this.selectedMenu = new Menus();
  }
  Eliminar(){
    if(confirm('¿Estas seguro de eliminar a este usuario?')){
      restMenus =restMenus.filter(x=> x != this.selectedMenu);
      this.selectedMenu =new Menus();
      //console.log('eliminado');
      //console.log(restMenus);
      this.dataSource = new MatTableDataSource(restMenus);
    }
    
  }
}

