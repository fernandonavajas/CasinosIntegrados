import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../modelo/user'
@Component({

  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private _router: Router) {
  }

  ngOnInit() {
    if (localStorage.getItem("currentUser") == null) {
      this._router.navigate(['']);
    }
    else {
      var user = JSON.parse(localStorage.getItem('currentUser'));
      if (user.role == 'admin') {
        this.CurrentUser = user;
      }
      else {
        this.CurrentUser = user;
      }
    }
  }

  CurrentUser: User = new User();

  Menus() {
    this._router.navigate(['menu']);
  }
  Historial() {
    this._router.navigate(['historial']);
  }
  Contacto() {
    this._router.navigate(['contacto']);
  }
  Hadmin() {
    this._router.navigate(['hadmin']);
  }
  Madmin() {
    this._router.navigate(['madmin']);
  }
  Cadmin() {
    this._router.navigate(['cadmin']);
  }

  LogOut() {
    localStorage.removeItem("currentUser");
    this._router.navigate(['']);
  }
}
