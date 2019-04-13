import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { FormsModule} from '@angular/forms';
//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { MenusComponent } from './menus/menus.component';
import { HistorialComponent } from './historial/historial.component'
import { RegistrosComponent } from './registros/registros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { ClientesAdminComponent } from './clientes-admin/clientes-admin.component';

//rutas
const routes: Routes = [
  { path: 'menu', component: RegistrosComponent },
  { path: '', component: LoginComponent },
  { path: 'registro', component: MenusComponent},
  { path: 'historial', component: HistorialComponent},
  { path: 'contacto', component:ContactoComponent},
  { path: 'Hadmin', component:HomeAdminComponent},
  { path: 'Madmin', component:MenuAdminComponent},
  { path: 'Cadmin', component:ClientesAdminComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    RegistrosComponent,
    LoginComponent,
    NavbarComponent,
    MenusComponent,
    ContactoComponent,
    HistorialComponent,
    HomeAdminComponent,
    MenuAdminComponent,
    ClientesAdminComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
  ],
  exports:[
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
