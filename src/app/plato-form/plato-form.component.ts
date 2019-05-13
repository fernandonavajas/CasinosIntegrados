import { Component, OnInit } from '@angular/core';
import { Platos } from '../modelo/platos';
import { PlatoService } from '../plato/plato.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-plato-form',
  templateUrl: './plato-form.component.html',
  styleUrls: ['./plato-form.component.css']
})
export class PlatoFormComponent implements OnInit {

  plato: Platos={
    id:0,
    nombre:'',
    descripcion:'',
    calorias:0,
    foto:''
  }

  edit: boolean = false;

  constructor(
    private router: Router,
    private platoService: PlatoService,
    private ActivateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.ActivateRoute.snapshot.params;
    console.log(params);
    if (params.id != 0) {
      this.platoService.seleccionarPlato(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.plato = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  sumbiPlato() {
    console.log(this.plato);
    this.platoService.crearPlato(this.plato)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/plato']);
        },
        err => {
          console.log(err)
        }
      );
  }

  actualizarPlato() {
    this.platoService.updatePlato(this.plato.id, this.plato)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/plato']);
        },
        err => {
          console.log(err)
        }
      );
  }

}
