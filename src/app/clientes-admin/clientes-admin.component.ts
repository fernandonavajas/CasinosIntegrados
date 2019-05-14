import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { Cliente } from '../modelo/cliente';
import { ClienteAdminService } from './cliente-admin.service';


var restCliente: Cliente[];

export interface DialogData {
  rut: string;
  password: string;
}

@Component({
  selector: 'app-clientes-admin',
  templateUrl: './clientes-admin.component.html',
  styleUrls: ['./clientes-admin.component.css']
})
export class ClientesAdminComponent implements OnInit {
  displayedColumns: string[] = ['rut', 'nombre', 'empleados', 'correo', 'cambiarpassword', 'editar', 'eliminar'];
  dataSource: MatTableDataSource<Cliente>;
  rut: string;
  password: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _router: Router, private clienteAdminService: ClienteAdminService, public dialog: MatDialog) {

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
    this.dataSource = new MatTableDataSource(restCliente);
  }

  ngOnInit() {
    this.getclientes();

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

  selectedCliente: Cliente = new Cliente();

  public AbrirParaEditar(cliente: Cliente) {
    this.selectedCliente = cliente;
    //console.log(this.selectedCliente);

  }

  Eliminar(id: number) {
    //console.log("Eliminar ",id);
    this.clienteAdminService.EliminarCliente(id)
      .subscribe(
        res => {
          this.getclientes(); // actualizar la data
        },
        err => console.log(err)
      );

  }

  getclientes() {
    this.clienteAdminService.listarClientes()
      .subscribe(
        res => {
          //console.log(res)
          this.dataSource = new MatTableDataSource(res);
        },
        err => console.log(err)
      )
  }

  cambiarPassword(rut: number) {

    this.clienteAdminService.TraerPassword(rut)
      .subscribe(
        res => {
          //console.log(res);
          const dialogRef = this.dialog.open(classModal, {
            width: '350px',
            height: '350px',
            data: { rut: this.rut, password: this.password }
          });

          dialogRef.afterClosed().subscribe(result => {
            //console.log(result);
            //console.log(res.rut);
            if(result!=undefined){
              //console.log("LLamar ala funcion que actualiza el rut");
              this.clienteAdminService.CambiarPassword(res.rut,result).subscribe(
                res1=>{
                  console.log("actualizada")
                },
                err => console.log(err)

              );
            }
            else{
              console.log('no')
            }
          });
        },
        err => console.log(err)
      );
  }

}

@Component({
  selector: 'app-clientes-admin-2',
  templateUrl: 'modalPassword.html',
})
export class classModal {

  constructor(public dialogRef: MatDialogRef<classModal>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

