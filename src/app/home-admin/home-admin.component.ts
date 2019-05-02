
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

export interface Hadmin {
  empresa: string;
  fecha: Date;
  menu1: string;
  menu2: string;
  menu3: string;
  menu4: string;
  cant1: number;
  cant2: number;
  cant3: number;
  cant4: number;
}
const restHadmin: Hadmin[] = [
  {
    empresa: 'CCU',
    fecha: new Date('9/9/19'),
    menu1: 'Porotos',
    menu2: 'Cazuela de ave',
    menu3: 'garbanzos',
    menu4: 'pollo con papas fritas',
    cant1: 31,
    cant2: 12,
    cant3: 2,
    cant4: 41,
  },
  {
    empresa: 'Cocacola',
    fecha: new Date('9/9/19'),
    menu1: 'Porotos',
    menu2: 'Cazuela de ave',
    menu3: 'garbanzos',
    menu4: 'pollo con papas fritas',
    cant1: 81,
    cant2: 72,
    cant3: 33,
    cant4: 11,
  },
  {
    empresa: 'P&G',
    fecha: new Date('9/9/19'),
    menu1: 'Porotos',
    menu2: 'Cazuela de ave',
    menu3: 'garbanzos',
    menu4: 'pollo con papas fritas',
    cant1: 33,
    cant2: 22,
    cant3: 21,
    cant4: 21,
  },
  {
    empresa: 'CCU',
    fecha: new Date('9/9/19'),
    menu1: 'Porotos',
    menu2: 'Cazuela de ave',
    menu3: 'garbanzos',
    menu4: 'pollo con papas fritas',
    cant1: 31,
    cant2: 12,
    cant3: 2,
    cant4: 41,
  },
  {
    empresa: 'Cocacola',
    fecha: new Date('9/9/19'),
    menu1: 'Porotos',
    menu2: 'Cazuela de ave',
    menu3: 'garbanzos',
    menu4: 'pollo con papas fritas',
    cant1: 81,
    cant2: 72,
    cant3: 33,
    cant4: 11,
  },
  {
    empresa: 'P&G',
    fecha: new Date('9/9/19'),
    menu1: 'Porotos',
    menu2: 'Cazuela de ave',
    menu3: 'garbanzos',
    menu4: 'pollo con papas fritas',
    cant1: 33,
    cant2: 22,
    cant3: 21,
    cant4: 21,
  },
  {
    empresa: 'CCU',
    fecha: new Date('9/9/19'),
    menu1: 'Porotos',
    menu2: 'Cazuela de ave',
    menu3: 'garbanzos',
    menu4: 'pollo con papas fritas',
    cant1: 31,
    cant2: 12,
    cant3: 2,
    cant4: 41,
  },
  {
    empresa: 'Cocacola',
    fecha: new Date('9/9/19'),
    menu1: 'Porotos',
    menu2: 'Cazuela de ave',
    menu3: 'garbanzos',
    menu4: 'pollo con papas fritas',
    cant1: 81,
    cant2: 72,
    cant3: 33,
    cant4: 11,
  },
  {
    empresa: 'P&G',
    fecha: new Date('9/9/19'),
    menu1: 'Porotos',
    menu2: 'Cazuela de ave',
    menu3: 'garbanzos',
    menu4: 'pollo con papas fritas',
    cant1: 13,
    cant2: 22,
    cant3: 21,
    cant4: 21,
  },
  
]
//0: {id: "1", name: "Olivia L.", progress: "52", color: "black"},
//1: {id: "2", name: "Levi V.", progress: "98", color: "purple"},...
@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  displayedColumns: string[] = ['empresa', 'fecha', 'menu1','cant1', 'menu2','cant2', 'menu3','cant3','menu4','cant4'];
  dataSource: MatTableDataSource<Hadmin>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _router: Router) {
    this.dataSource = new MatTableDataSource(restHadmin);
  }

  ngOnInit() {
    if (localStorage.getItem("currentUser") === null) {
      this._router.navigate(['']);
    }
    else {
      var user = JSON.parse(localStorage.getItem('currentUser'));
      if (user.role == 'admin') {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
      else {
        this._router.navigate(['']);
      }

    }

  }
  applyFilter(filterValue: string) {
    
    if(filterValue=='9/9/19')
    {
      var a=new Date('9/9/19')
      var b=a.toUTCString();
      console.log(b);
    }
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

