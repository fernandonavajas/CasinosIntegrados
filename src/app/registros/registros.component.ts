import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk/table';
import { RegistroService } from './registro.service';

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
  foto1: string;
  foto2: string;
  foto3: string;
  foto4: string;
  foto5: string;

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
    foto1: "http://milrecetas.net/wp-content/uploads/2015/05/Carne-al-Jugo-2.jpg",
    foto2: "https://www.gourmet.cl/wp-content/uploads/2014/12/Garbanzos.jpg",
    foto3: "http://turismogastronómico.com/wp-content/uploads/2018/05/casado.png",
    foto4: "",
    foto5: "",

  },
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
    foto1: "http://turismogastronómico.com/wp-content/uploads/2018/05/casado.png",
    foto2: "https://www.gourmet.cl/wp-content/uploads/2014/12/Garbanzos.jpg",
    foto3: "http://turismogastronómico.com/wp-content/uploads/2018/05/casado.png",
    foto4: "",
    foto5: "",

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

  constructor(private _router: Router, private registroService: RegistroService) {
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
        if (user.role == 'cliente') {
          this.getRegistro('18990554');
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



  /*selectedRow: Menu2 = new Menu2();

  public AbrirParaEditar(Menu2: Menu2, nFila: number) {
    this.selectedRow = Menu2;
    var link = '';
    console.log(this.selectedRow, nFila);

  }*/

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
    if (confirm('Datos guardados con exito')) {
    }
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

}


