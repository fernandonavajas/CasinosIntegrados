import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({

  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private _router: Router) {
  }

  ngOnInit() {
  }

  Menus() {
    this._router.navigate(['menu']);
  }
  Historial() {
    this._router.navigate(['historial']);
  }
  Contacto() {
    this._router.navigate(['contacto']);
  }
  Hadmin(){
    this._router.navigate(['Hadmin']);
  }
  Madmin(){
    this._router.navigate(['Madmin']);
  }
  Cadmin(){
    this._router.navigate(['Cadmin']);
  }

  LogOut() {
    localStorage.removeItem("currentUser");
    this._router.navigate(['']);
  }
}
