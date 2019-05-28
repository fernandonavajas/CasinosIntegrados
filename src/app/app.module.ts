import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { ClientesAdminComponent, classModal } from './clientes-admin/clientes-admin.component';
import { PlatoComponent } from './plato/plato.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
//Services
import { ClienteAdminService } from './clientes-admin/cliente-admin.service'
import { MenuAdminService } from './menu-admin/menu-admin.service';
import { HistorialService } from './historial/historial.service'
import { RegistroService } from './registros/registro.service';
import { PlatoFormComponent } from './plato-form/plato-form.component';
import { PlatoService } from './plato/plato.service';
import { NavbarService } from './navbar/navbar.service';
import { LoginService } from './login/login.service';



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
    ClientesAdminComponent,
    ClienteFormComponent,
    PlatoComponent,
    PlatoFormComponent,
    classModal
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
  ],
  entryComponents: [
    LoginComponent,
    HomeAdminComponent,
    ClientesAdminComponent,
    MenuAdminComponent,
    classModal

  ],
  providers: [ClienteAdminService,
    MenuAdminService,
    HistorialService,
    RegistroService,
    PlatoService,
    NavbarService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
