import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Platos } from '../modelo/platos'
import { PlatoService } from './plato.service';


var resPlatos: Platos[];


@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styleUrls: ['./plato.component.css']
})
export class PlatoComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'descripcion', 'foto', 'calorias', 'editar', 'eliminar'];
  dataSource: MatTableDataSource<Platos>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private _router: Router, private platoService: PlatoService ) { 
    if (localStorage.getItem("currentUser") === null) {
      this._router.navigate(['']);
    }
    else {
      var user = JSON.parse(localStorage.getItem('currentUser'));
      if (user.tokens[0].rol == 'admin') {
      }
      else {
        this._router.navigate(['']);
      }

    }
    this.dataSource = new MatTableDataSource(resPlatos);
  }

  ngOnInit(){
    this.getPlatos();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    //console.log(this.dataSource.filteredData);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  selectedPlato: Platos = new Platos();

  public AbrirParaEditar(plato: Platos) {
    this.selectedPlato = plato;
    //console.log(this.selectedPlato);

  }
  Eliminar(id: number){
    //console.log(this.selectedPlato.id);
    this.platoService.EliminarPlato(id)
    .subscribe(
      res => {
        this.getPlatos(); // actualizar la data
      },
      err => console.log(err)
    );
    
  }

  getPlatos(){
    this.platoService.listarPlatos()
      .subscribe(
        res => {
          //console.log(res)
          this.dataSource = new MatTableDataSource(res);
        },
        err => console.log(err)
      )
  }
}
