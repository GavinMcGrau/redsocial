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

@NgModule( {
  declarations: [


    RegistreUsuariComponent, PerfilsUsuariComponent, PaginaUsuariComponent, LoginUsuariComponent, PaginaPrincipalComponent, UserPageComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [ PaginaPrincipalComponent ]
} )
export class AppModule { }
