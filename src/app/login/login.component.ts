import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../navbar/navbar.service';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  isLoggedIn = false;
  role = '';
  rutValidado:string;
  rutValidadoNumber:string='';
  rutValidadoBoolean:boolean=false;

  constructor(private _router: Router, private navBarService: NavbarService, private loginService: LoginService) {
    this.navBarService.getLoginStatus().subscribe(status => this.isLoggedIn = status);

  }

  ngOnInit() {

  }
  forgot(rut: string) {
    console.log('olvide rut')
  }


  limpiarInput(){
    document.getElementById("username").innerHTML = '';
    this.rutValidado='';
    this.rutValidadoNumber='';
    console.log("limpiado");
  }
  formatoRut(rut) {
    this.rutValidadoBoolean=this.validaRut(rut);
    //console.log(rut);
    for(var k=0;k<rut.length-1;k++){
      this.rutValidadoNumber+=rut.charAt(k);
      //console.log(k,rut.charAt(k));
    }
    var sRut1 = rut;      //contador de para saber cuando insertar el . o la -
    var nPos = 0;  //Guarda el rut invertido con los puntos y el guión agregado
    var sInvertido = ""; //Guarda el resultado final del rut como debe ser
    var sRut = "";
    //console.log(sRut1.length - 1);
    for (var i = sRut1.length - 1; i >= 0; i--) {
      sInvertido += sRut1.charAt(i);
      if (i == sRut1.length - 1)
        sInvertido += "-";
      else if (nPos == 3) {
        sInvertido += ".";
        nPos = 0;
      }
      nPos++;
    }
    for (var j = sInvertido.length - 1; j >= 0; j--) {
      if (sInvertido.charAt(sInvertido.length - 1) != ".")
        sRut += sInvertido.charAt(j);
      else if (j != sInvertido.length - 1)
        sRut += sInvertido.charAt(j);
    }
    rut = sRut.toUpperCase();
    console.log(rut);
    console.log("asi va:  ",sRut);
    this.rutValidado=sRut;
    console.log(this.rutValidadoNumber);
    
    
    
  }

  validaRut(rut)
{
  console.log(rut)//189905548
    //Valor acumulado para el calculo de la formula
    var nAcumula = 0;
    //Factor por el cual se debe multiplicar el valor de la posicion
    var nFactor = 2;
    //Dígito verificador
    var nDv = 0;
    var nDvReal = 0;
    //extraemos el ultimo numero o letra que corresponde al verificador
    //La K corresponde a 10
    if (rut.charAt(rut.length - 1).toUpperCase() == 'K' )
        nDvReal = 10;
    //el 0 corresponde a 11
    else if (rut.charAt(rut.length - 1)== 0 )
        nDvReal = 11;
    else
        nDvReal = rut.charAt(rut.length - 1);//8
        for (var nPos = rut.length -2; nPos >=0; nPos--)//7,6,5,4,3,2,1,0
    {
        nAcumula += rut.charAt(nPos).valueOf() * nFactor;
        nFactor++;
                if (nFactor> 7){ nFactor = 2};
    }
 
    nDv = 11-(nAcumula % 11)
    if (nDv == nDvReal)
        {return true;}
        return false;
}

  logIn(rut: string, password: string, event: Event) {

    //console.log(rut);
    //console.log(password);
    this.loginService.loggin(this.rutValidadoNumber, password)
      .subscribe(
        res => {
          if (res != null) {
            //console.log(res);
            //console.log(res.nombre);
            if (res.tokens[0].rol == 'admin') {
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
          else {
            alert("Fallo de autentificacion.");
          }
        },
        err => {
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
