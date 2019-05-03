import { Component, OnInit } from '@angular/core';
import { Cliente } from '../modelo/cliente';
import { ClienteAdminService } from '../clientes-admin/cliente-admin.service'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  cliente: Cliente = {
    id: 0,
    nombre: '',
    rut: '',
    empleados: 0,
    correo: '',
  };

  edit: boolean = false;

  constructor(
    private router: Router,
    private clienteAdminService: ClienteAdminService,
    private ActivateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.ActivateRoute.snapshot.params;
    console.log(params);
    if (params.id != 0) {
      this.clienteAdminService.seleccionarCliente(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.cliente = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  sumbitCliente() {
    console.log(this.cliente);
    this.clienteAdminService.crearCliente(this.cliente)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/cadmin']);
        },
        err => {
          console.log(err)
        }
      );
  }

  actualizarCliente() {
    this.clienteAdminService.updateCliente(this.cliente.id, this.cliente)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/cadmin']);
        },
        err => {
          console.log(err)
        }
      );
  }
}
