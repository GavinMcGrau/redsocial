import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilsUsuariComponent } from './perfils-usuari/perfils-usuari.component';
import { RegistreUsuariComponent } from './perfils-usuari/registre-usuari/registre-usuari.component';
import { PaginaUsuariComponent } from './perfils-usuari/pagina-usuari/pagina-usuari.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule( {
  declarations: [


    RegistreUsuariComponent, PerfilsUsuariComponent, PaginaUsuariComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [ PerfilsUsuariComponent ]
} )
export class AppModule { }
