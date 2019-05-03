import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { FormsModule } from '@angular/forms';
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

//Services
import { ClienteAdminService } from './clientes-admin/cliente-admin.service'
import { HttpClientModule } from '@angular/common/http';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { MenuAdminService } from './menu-admin/menu-admin.service';


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
    ClienteFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [

  ],
  providers: [ClienteAdminService, MenuAdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
