import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilsUsuariComponent } from './perfils-usuari/perfils-usuari.component';
import { RegistreUsuariComponent } from './perfils-usuari/registre-usuari/registre-usuari.component';
import { PaginaUsuariComponent } from './perfils-usuari/pagina-usuari/pagina-usuari.component';

@NgModule({
  declarations: [
 
    
    RegistreUsuariComponent,PerfilsUsuariComponent
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RegistreUsuariComponent,PerfilsUsuariComponent]
})
export class AppModule { }
