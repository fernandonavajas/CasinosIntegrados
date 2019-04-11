import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
// [filas] [columnas] ==[0][0] == 1 de julio
// [filas] [columnas] ==[0][1] == 2 de julio

//    1 de julio   |  2 de julio   |
//    porotos      |  arroz        |
//    lentejas     |  carbonada    |
//    garbanzos    |  pollo papas  |


export interface EleccionMenu{
  dia: string;
  plato0: string;
  cantidad0: number;
  plato1: string;
  cantidad1: number;
  plato2: string;
  cantidad2: number;
  plato3: string;
  cantidad3: number;

}
const rest:EleccionMenu[] = [
  {
    dia: 'Lunes 13 de Julio',
    plato0: 'cazuela de ave',
    cantidad0: 3,
    plato1: 'pure con carne',
    cantidad1: 10,
    plato2: 'ajiaco',
    cantidad2: 4,
    plato3: 'arroz con pollo',
    cantidad3: 31,
  },
  {
    dia: 'Martes 14 de Julio',
    plato0: 'cazuela ',
    cantidad0: 3,
    plato1: 'pure',
    cantidad1: 11,
    plato2: 'ajiaco',
    cantidad2: 4,
    plato3: 'arroz ',
    cantidad3: 3,
  },
  {
    dia: 'Miercoles 15 de Julio',
    plato0: 'ave',
    cantidad0: 33,
    plato1: 'carne',
    cantidad1: 1,
    plato2: 'ajiaco',
    cantidad2: 44,
    plato3: 'pollo',
    cantidad3: 1,
  }
  ,
  {
    dia: 'jueves 16 de Julio',
    plato0: '',
    cantidad0: 0,
    plato1: '',
    cantidad1: 0,
    plato2: '',
    cantidad2: 0,
    plato3: '',
    cantidad3: 0,
  }
];

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})

export class MenusComponent implements OnInit {
  menu = new FormControl(rest);

  constructor() {
  }

  ngOnInit() {
    
    //console.log(this.menu.value[0].dia);
    //this.menu.valueChanges;
  }

  Si(id: string) {
    var s = 'Seleciona los menus';
    var r = s.fontcolor("blue");
    document.getElementById("d1").innerHTML = r;
    //console.log(id);
  }
  No(id: string) {
    var s = 'Seleciona los menus. Faltan 3';
    var r = s.fontcolor("red");
    document.getElementById("d1").innerHTML = r;

  }
  capturar(menu0: number, menu1: number, menu2: number, menu3: number) {
    console.log(menu0 + " " + menu1 + " " + menu2 + " " + menu3);
  }

  click(){
    //this.d0ph0.setValue('Nancy');



  }
  
}