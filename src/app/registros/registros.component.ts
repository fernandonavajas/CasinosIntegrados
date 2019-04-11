import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
    console.log('funciono')
  }

  Hmenu() {
    this._router.navigate(['Madmin']);
  }

}
