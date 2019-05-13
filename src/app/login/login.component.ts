import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../modelo/user'
import { NavbarService } from '../navbar/navbar.service';
import { LoginService } from './login.service';

const rutUsuario = '';
const restUser: User = 
  {
    rut: '1-8',
    nombre: 'CCU',
    role: 'cliente',
    empleados: 22,
  };

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;
  role = '';

  constructor(private _router: Router, private navBarService: NavbarService, private loginService: LoginService) {
    this.navBarService.getLoginStatus().subscribe(status => this.isLoggedIn = status);

  }

  ngOnInit() {

  }
  forgot(rut: string) {
    console.log('olvide rut')
  }

  logIn(rut: string, password: string, event: Event) {

    console.log(rut);
    console.log(password);
    this.loginService.loggin(rut,password)
    .subscribe(
      res =>{
        console.log(res);
      },
      err =>{
        console.log(err);
      }
    );

    if (restUser.role=='admin') {
      localStorage.setItem('currentUser', JSON.stringify(restUser));//ingresar como admin
      this.navBarService.updateNavAfterAuth('admin');
      this.navBarService.updateLoginStatus(true);
      this.role = 'admin';
    }
    else {
      localStorage.setItem('currentUser', JSON.stringify(restUser));// ingresar como cliente
      this.navBarService.updateNavAfterAuth('cliente');
      this.navBarService.updateLoginStatus(true);
      this.role = 'cliente';
    }

    this.navigate();

  }


  navigate() {
    var user = JSON.parse(localStorage.getItem('currentUser'));
    if (user.role == 'admin') {
      this._router.navigate(['hadmin']);
    }
    else {
      this._router.navigate(['menu']);
    }
  }
}
