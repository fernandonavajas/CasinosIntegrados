import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk/table';

export class Menu2 {
  fecha: Date;
  menu1: string;
  menu2: string;
  menu3: string;
  menu4: string;
  menu5: string;
  cant1: number;
  cant2: number;
  cant3: number;
  cant4: number;
  cant5: number;
}
var restMenu2: Menu2[] = [
  {
    fecha: new Date('1/4/19'),
    menu1: 'Ajiaco',
    menu2: 'Pollo a la provenzal con papas asadas',
    menu3: 'Lomo de cerdo con arroz',
    menu4: 'Tortilla de acelga con ensaladas',
    menu5: 'Hamburguesa de soya con verduras asadas',
    cant1: 61,
    cant2: 12,
    cant3: 32,
    cant4: 41,
    cant5: 12,
  },
  {
    fecha: new Date('2/4/19'),
    menu1: 'Lentejas a la parmesana con longaniza',
    menu2: 'Goulash de vacuno con arroz exótico',
    menu3: 'Pavo al romero con corbatas atomatadas',
    menu4: 'Omelette a la jardinera con ensaladas',
    menu5: 'Budin tricolor con verduras salteadas',
    cant1: 11,
    cant2: 2,
    cant3: 42,
    cant4: 4,
    cant5: 2,
  },
  {
    fecha: new Date('3/4/19'),
    menu1: 'Pantrucas',
    menu2: 'Hamburguesa atomatada con espirales',
    menu3: 'Carne al jugo con puré',
    menu4: 'Salpicón de pollo',
    menu5: 'Carbonada de verduras con huevo',
    cant1: 31,
    cant2: 12,
    cant3: 16,
    cant4: 41,
    cant5: 23,
  },
  {
    fecha: new Date('4/4/19'),
    menu1: 'Ajiaco',
    menu2: 'Pollo a la provenzal con papas asadas',
    menu3: 'Lomo de cerdo con arroz',
    menu4: 'Tortilla de acelga con ensaladas',
    menu5: 'Hamburguesa de soya con verduras asadas',
    cant1: 65,
    cant2: 34,
    cant3: 38,
    cant4: 81,
    cant5: 2,
  },
  {
    fecha: new Date('5/4/19'),
    menu1: 'Lentejas a la parmesana con longaniza',
    menu2: 'Goulash de vacuno con arroz exótico',
    menu3: 'Pavo al romero con corbatas atomatadas',
    menu4: 'Omelette a la jardinera con ensaladas',
    menu5: 'Budin tricolor con verduras salteadas',
    cant1: 19,
    cant2: 22,
    cant3: 49,
    cant4: 14,
    cant5: 19,
  },
  {
    fecha: new Date('6/4/19'),
    menu1: 'Pantrucas',
    menu2: 'Hamburguesa atomatada con espirales',
    menu3: 'Carne al jugo con puré',
    menu4: 'Salpicón de pollo',
    menu5: 'Carbonada de verduras con huevo',
    cant1: 54,
    cant2: 17,
    cant3: 22,
    cant4: 14,
    cant5: 37,
  },

]

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {

  displayedColumns: string[] = ['fecha', 'menu1', 'cant1', 'menu2', 'cant2',
    'menu3', 'cant3', 'menu4', 'cant4', 'menu5', 'cant5', 'Total'];
  dataSource: MatTableDataSource<Menu2>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private _router: Router) {
    this.dataSource = new MatTableDataSource(restMenu2);
  }

  ngOnInit() {
    if (localStorage.getItem("currentUser") == null) {
      this._router.navigate(['']);
    }
    else {
      var user = JSON.parse(localStorage.getItem('currentUser'));
      if (user.role == 'admin') {
        console.log(user.role);
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
  }

  selectedMenu: Menu2[];

  cambio(fecha: Date, cantidad: number, position: number) {
    this.selectedMenu = restMenu2;
    //convierte la fecha a unix en milisegundos like this->1567998000000
    // se llama epoch a fecha normal
    //var f= Date.parse('9/9/19'); // lo transforma a numero  
    //console.log(f);
    //var f1=new Date(f); // lo trasforma a fecha
    //console.log(f1);
    var cant = +cantidad; // transformarla en number
    this.selectedMenu.forEach(element => {
      if (element.fecha == fecha) {
        if (position == 1) {
          element.cant1 = cant;
        }
        if (position == 2) {
          element.cant2 = cant;
        }
        if (position == 3) {
          element.cant3 = cant;
        }
        if (position == 4) {
          element.cant4 = cant;
        }
        if (position == 5) {
          element.cant5 = cant;
        }
      }
    });
    //console.log(fecha);
    //console.log(cantidad);
    //console.log(typeof (cantidad));
    //console.log(position);
    //console.log(this.selectedMenu)

    this.dataSource = new MatTableDataSource(this.selectedMenu);
  }

  Modificar(menu2: any) {
    console.log(menu2.data);
    if(confirm('Datos guardados con exito')){
    }
  }

}


