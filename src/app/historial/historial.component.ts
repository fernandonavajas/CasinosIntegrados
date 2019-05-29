
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { HistorialService } from './historial.service';
import { HistorialCliente } from '../modelo/historialCliente';


const restHistorial: HistorialCliente[] = []

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  displayedColumns: string[] = ['fecha', 'menu1', 'cant1', 'menu2', 'cant2',
    'menu3', 'cant3', 'menu4', 'cant4', 'menu5', 'cant5', 'menu6', 'cant6'];
  dataSource: MatTableDataSource<HistorialCliente>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _router: Router, private historailService: HistorialService) {
    this.dataSource = new MatTableDataSource(restHistorial);
  }

  ngOnInit() {
    if (localStorage.getItem("currentUser") === null) {
      this._router.navigate(['']);
    }
    else {
      var user = JSON.parse(localStorage.getItem('currentUser'));
      //console.log(user.rut,typeof(user.rut));
      this.gethistorial(user.rut);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    }

  }
  applyFilter(filterValue: string) {

    if (filterValue == '9/9/19') {
      var a = new Date('9/9/19')
      var b = a.toUTCString();
      //console.log(b);
    }
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  gethistorial(rut:number) {
    this.historailService.listarHistorial(rut)
      .subscribe(
        res => {
          this.dataSource.data = res;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          //console.log(res);
        },
        err => console.log(err)
      )
  }

}


