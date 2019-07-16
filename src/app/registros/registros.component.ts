import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { RegistroService } from './registro.service';

export class Menu2 {
  fechacarta: Date;
  iddelacasa: number;
  idhipocalorico: number;
  idindustrial: number;
  idoficina: number;
  idvegetariano: number;
  idregimen: number;
  delacasa: string;
  hipocalorico: string;
  industrial: string;
  oficina: string;
  regimen: string;
  vegetariano: string;
  cantdelacasa: number ;
  canthipocalorico: number;
  cantindustrial: number;
  cantoficina: number;
  cantregimen: number;
  cantvegetariano: number;

}
export class resultadopedido {
  identifiers: [{ id: 0 }];
  generatedMaps: [{ id: 0, fecha: "0" }];
  raw: [{ id: 0, "fecha": "0" }]
}

var restMenu2: Menu2[] = [];

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {

  displayedColumns: string[] = ['fecha','menuIndustrial', 'cantIndustrial', 'menuDeLaCasa', 'cantDeLaCasa', 'menuOficina', 'cantOficina',
     'menuHipocalorico', 'cantHipocalorico', 'menuVegetariano', 'cantVegetariano', 'menuRegimen', 'cantRegimen', 'Total'];
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
          this.getCarta(user.rut);
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
      //console.log(b);
    }
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  selectedMenu: Menu2[];

  cambio(fecha: Date, cantidad: string, position: number) {
    this.selectedMenu = restMenu2;
    this.selectedMenu.forEach(element => {
      if (element.fechacarta == fecha) {
        if (position == 1) {//de la casa
          element.cantdelacasa = parseInt(cantidad);

        }
        if (position == 2) {//oficina
          element.cantoficina = parseInt(cantidad);
        }
        if (position == 3) {//industrial
          element.cantindustrial = parseInt(cantidad);
        }
        if (position == 4) {//hipo
          element.canthipocalorico = parseInt(cantidad);
        }
        if (position == 5) {//vegetariano
          element.cantvegetariano = parseInt(cantidad);
        }
        if (position == 6) {//regimen
          element.cantregimen = parseInt(cantidad);
        }

      }
    });

    this.dataSource = new MatTableDataSource(this.selectedMenu);
  }

  

  Modificar(menu2: any) { //funcion para agregar los pedidos con su correspondiente detalle
    var user = JSON.parse(localStorage.getItem('currentUser'));
    
    menu2.data.forEach(element => {//  guardar los que tengan algun numero mayor a 0
      if (element.cantdelacasa > 0 || element.canthipocalorico > 0 ||
        element.cantindustrial > 0 || element.cantvegetariano > 0 ||
        element.cantoficina > 0 || element.cantregimen > 0) {
        //console.log(element);
        this.registroService.submitPedido(user.rut, user.id) // generar un pedido con el rut del usuario
          .subscribe(
            res => {
              //console.log(res.identifiers[0].id);// este es el id del pedido generado
              if(element.cantdelacasa>=0){
                //console.log(element.cantdelacasa);// esta es la cantidad a guardar
                //console.log(element.iddelacasa);// estes es el id de la carta
                this.registroService.submitDetalle(element.cantdelacasa,element.iddelacasa,res.identifiers[0].id)
                .subscribe(res =>{},err=>console.log('Error en el guardado del detalle',err))
              }
              if(element.canthipocalorico>=0){
                this.registroService.submitDetalle(element.canthipocalorico,element.idhipocalorico,res.identifiers[0].id)
                .subscribe(res =>{},err=>console.log('Error en el guardado del detalle',err))

              }
              if(element.cantindustrial>=0){
                this.registroService.submitDetalle(element.cantindustrial,element.idindustrial,res.identifiers[0].id)
                .subscribe(res =>{},err=>console.log('Error en el guardado del detalle',err))
                
              }
              if(element.cantoficina>=0){
                this.registroService.submitDetalle(element.cantoficina,element.idoficina,res.identifiers[0].id)
                .subscribe(res =>{},err=>console.log('Error en el guardado del detalle',err))
                
              }
              if(element.cantvegetariano>=0){
                this.registroService.submitDetalle(element.cantvegetariano,element.idvegetariano,res.identifiers[0].id)
                .subscribe(res =>{},err=>console.log('Error en el guardado del detalle',err))
                
              }
              if(element.cantregimen>=0){
                this.registroService.submitDetalle(element.cantregimen,element.idregimen,res.identifiers[0].id)
                .subscribe(res =>{},err=>console.log('Error en el guardado del detalle',err))
                
              }

              //.............hacer mas ifs
              

              //obtener el numero de pedido creado y genera detalles por cada cantidad ingresada

            },
            err => console.log(err)
          )
      }
    });
    //console.log(menu2.data);//data con cantidades solicitadas



    //if (confirm('Datos guardados con exito')) {
    //}
  }

  getRegistro(rut) {
    this.registroService.listarRegistro(rut)
      .subscribe(
        res => {

          //console.log(res)
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

  getCarta(rut: number) {
    this.registroService.listarCarta(rut.toString())
      .subscribe(
        resCarta => {
          resCarta.forEach(element => {
          });
          //console.log(resCarta);
          this.dataSource.data = resCarta;
          restMenu2 = resCarta;
        },
        err => console.log(err)
      );
  }

}


