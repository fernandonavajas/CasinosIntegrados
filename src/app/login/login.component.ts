import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export interface Usuario {
  rut: string;
  nombre: string;
  role: string;
  empleados: number;


}
const restUser: Usuario[] = [
  {
    rut: '1-9',
    nombre: 'CCU',
    role: 'cliente',
    empleados: 22,
  },
  {
    rut: '1-7',
    nombre: 'coca-cola',
    role: 'cliente',
    empleados: 55,
  },
  {
    rut: '1-8',
    nombre: 'casino integrado',
    role: 'admin',
    empleados: 0,
  },
]


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router) {
  }

  ngOnInit() {

  }
  forgot(rut: string) {
    console.log('olvide rut')
  }

  logIn(rut: string, password: string, event: Event) {
    
    console.log(rut);
    console.log(password);

    if (rut == restUser[2].rut) {
      localStorage.setItem('currentUser', JSON.stringify(restUser[2]));//ingresar como admin
    }
    else {
      localStorage.setItem('currentUser', JSON.stringify(restUser[1]));// ingresar como cliente
    }
    
    this.navigate();

  }

  navigate() {
    var User = JSON.parse(localStorage.getItem('currentUser'));
    if (User.role == 'admin') {
      this._router.navigate(['Hadmin']);
    }
    else {
      this._router.navigate(['menu']);
    }
  }
}
