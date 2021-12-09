import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilsUsuariComponent } from './perfils-usuari/perfils-usuari.component';
import { RegistreUsuariComponent } from './perfils-usuari/registre-usuari/registre-usuari.component';
import { PaginaUsuariComponent } from './perfils-usuari/pagina-usuari/pagina-usuari.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { LoginUsuariComponent } from './perfils-usuari/login-usuari/login-usuari.component';
import { PaginaPrincipalComponent } from './perfils-usuari/pagina-principal/pagina-principal.component';
import { UserPageComponent } from './userPage/user-page/user-page.component';
import { RouterLink } from '@angular/router';
import { RoutingPageComponent } from './routing-page/routing-page.component';
import { UserOptionsComponent } from './user-options/user-options.component';

import { AjustesComponent } from './user-options/ajustes/ajustes.component';
import { PersonasComponent } from './user-options/personas/personas.component';
import { SidebarComponent } from './userPage/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule( {
  declarations: [


    RegistreUsuariComponent, PerfilsUsuariComponent, PaginaUsuariComponent, LoginUsuariComponent, PaginaPrincipalComponent, UserPageComponent, RoutingPageComponent, UserOptionsComponent,  AjustesComponent, PersonasComponent, SidebarComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [ RoutingPageComponent ]
} )
export class AppModule { }
