import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../modelo/user'
import { NavbarService } from '../navbar/navbar.service';
import { LoginService } from './login.service';
import { Tokens } from '../modelo/userTokens';

const rutUsuario = '';
var restUser: User = 
  {
    rut: '1-8',
    nombre: 'CCU',
    tokens:{
      rol:'cliente',
      api_key:''
    }

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

    //console.log(rut);
    //console.log(password);
    this.loginService.loggin(rut,password)
    .subscribe(
      res =>{
        if(res!=null){
          //console.log(res);
          //console.log(res.nombre);
          if (res.tokens[0].rol=='admin') {
            //console.log("es admin");
            localStorage.setItem('currentUser', JSON.stringify(res));//ingresar como admin
            this.navBarService.updateNavAfterAuth('admin');
            this.navBarService.updateLoginStatus(true);
            this.role = 'admin';
          }
          else {
            //console.log("es cliente");
            localStorage.setItem('currentUser', JSON.stringify(res));// ingresar como cliente
            this.navBarService.updateNavAfterAuth('cliente');
            this.navBarService.updateLoginStatus(true);
            this.role = 'cliente';
          }
          this.navigate();
        }
        else{
          alert("Fallo de autentificacion.");
        }

        
    
        
      },
      err =>{
        console.log(err);
      }
    );

    

  }


  navigate() {
    var user = JSON.parse(localStorage.getItem('currentUser'));
    if (user.tokens[0].rol == 'admin') {
      this._router.navigate(['hadmin']);
    }
    else {
      this._router.navigate(['menu']);
    }
  }
}
