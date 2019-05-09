
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HomeAdminService } from './home-admin.service';

export interface Hadmin {
  empresa: string;
  fecha: Date;
  industrial: string;
  deLaCasa: string;
  oficina: string;
  hipocalorico: string;
  vegetariano: string;
  regimen: string;
  cantIndustrial: number;
  cantDelaCasa: number;
  cantOficina: number;
  cantHipocalorico: number;
  cantVegetariano: number;
  cantRegimen: number;
}
const restHadmin: Hadmin[] = []
//0: {id: "1", name: "Olivia L.", progress: "52", color: "black"},
//1: {id: "2", name: "Levi V.", progress: "98", color: "purple"},...
@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  displayedColumns: string[] = ['empresa', 'fecha', 'menu1', 'cant1', 'menu2',
   'cant2', 'menu3', 'cant3', 'menu4', 'cant4', 'menu5', 'cant5', 'menu6', 'cant6'];
  dataSource: MatTableDataSource<Hadmin>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _router: Router, private homeAdminService:HomeAdminService) {
    this.dataSource = new MatTableDataSource(restHadmin);
  }

  ngOnInit() {
    if (localStorage.getItem("currentUser") === null) {
      this._router.navigate(['']);
    }
    else {
      var user = JSON.parse(localStorage.getItem('currentUser'));
      if (user.role == 'admin') {
        this.gethistorialAdmin();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
      else {
        this._router.navigate(['']);
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
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  gethistorialAdmin() {
    var fecha: any[] = [];
    var empresa: any[] = [];
    var traspaso: Hadmin[] = [];
    this.homeAdminService.listarHistorialAdmin()
      .subscribe(
        res => {
          console.log(res);
          res.forEach(element => {
          });
            
          console.log(traspaso)
          this.dataSource = new MatTableDataSource(traspaso);
        },
        err => console.log(err)
      )
  }

}

