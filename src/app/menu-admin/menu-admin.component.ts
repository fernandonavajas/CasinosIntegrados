import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MenuAdminService, data1 } from './menu-admin.service';
import { Menus } from '../modelo/menus';
var restCarta: Menus[];

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {
  displayedColumns: string[] = ['fecha',  'deLaCasa', 'oficina', 'industrial', 'hipocalorico', 'vegetariano', 'regimen', 'eliminar'];
  dataSource: MatTableDataSource<Menus>;
  minDate = new Date();
  platos = [];
  data: data1 = {
    fecha: new Date(),
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
    p5: 0,
    p6: 0,

  };
  fecha: Date;
///////////////////// variables del filtro input
  /*myControl = new FormControl();
  options = [];
  filteredOptions: Observable<string[]>;
////////////////////*/
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
        //funcion que guarde en la variables options la lista de platos con id y nombres
      }
      else {
        this._router.navigate(['']);
      }
    }
    ///////////////////////////////filtro del input buscador de platos
   /* this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(values => this._filter(values))
    );
  }
  
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
    */
   this.dataSource.paginator = this.paginator;
   this.dataSource.sort = this.sort;
  }
  /////////////////////////////
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
    //console.log(this.data)
    if (this.data) {

      //console.log(this.data);
      this.menuAdminService.crearCarta(this.data).subscribe(
        r => { this.getCarta(); }
      )
      /*
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
*/
    }
  }

  getPlatos() {
    this.menuAdminService.listarPlatos()
      .subscribe(
        resPlatos => {
          console.log(resPlatos);
          /*this.options = resPlatos;// esto es una locura, pero guarda JSONs
          console.log(this.options)*/
          this.platos=resPlatos;
        },
        err => console.log(err)
      )
  }

  convertirFecha(fecha: any): Date {
    //console.log(fecha,"para cambiar");
    var date_input = new Date(fecha);
    var day = date_input.getDate();
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
          //console.log(resCarta);
          this.dataSource.data = resCarta;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        err => console.log(err)
      );
  }
  Eliminar(fechaConsultada: string) {
    //console.log("Eliminar ", fechaConsultada, typeof (fechaConsultada));

    if (confirm('¿Estas seguro de eliminar a este usuario?')) {
      var user = JSON.parse(localStorage.getItem('currentUser'));
      this.menuAdminService.eliminarCartaPorFecha(fechaConsultada)
        .subscribe(
          res => {
            this.getCarta(); // actualizar la data
          },
          err => console.log(err)
        );
    }


  }
}
