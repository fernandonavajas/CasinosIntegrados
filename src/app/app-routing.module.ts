import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { RegistrosComponent } from './registros/registros.component';
import { LoginComponent } from './login/login.component';
import { MenusComponent } from './menus/menus.component';
import { HistorialComponent } from './historial/historial.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ClientesAdminComponent } from './clientes-admin/clientes-admin.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { PlatoComponent } from './plato/plato.component';
import { PlatoFormComponent } from './plato-form/plato-form.component';

const routes: Routes = [
  { path: 'cadmin/create', component: ClienteFormComponent },
  { path: 'cadmin/edit/:id', component: ClienteFormComponent },
  { path: 'menu', component: RegistrosComponent },
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'registro', component: MenusComponent },
  { path: 'historial', component: HistorialComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'hadmin', component: HomeAdminComponent },
  { path: 'madmin', component: MenuAdminComponent },
  { path: 'cadmin', component: ClientesAdminComponent },
  { path: 'plato', component: PlatoComponent },
  { path: 'plato/create', component: PlatoFormComponent },
  { path: 'plato/edit/:id', component: PlatoFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
