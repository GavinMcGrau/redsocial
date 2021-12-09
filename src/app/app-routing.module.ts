import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilsUsuariComponent } from './perfils-usuari/perfils-usuari.component';
import { LoginUsuariComponent } from './perfils-usuari/login-usuari/login-usuari.component';
import { RegistreUsuariComponent } from './perfils-usuari/registre-usuari/registre-usuari.component';
import { Usuario } from './perfils-usuari/interfaces/interfaces';
import { UserPageComponent } from './userPage/user-page/user-page.component';
import { PaginaPrincipalComponent } from './perfils-usuari/pagina-principal/pagina-principal.component';

const routes: Routes = [

  {
    path: '#',
    component: PaginaPrincipalComponent
  },
  {
    path: 'login',
    component: LoginUsuariComponent
  },

  {
    path: 'registre',
    component: RegistreUsuariComponent
  },
  {
    path: 'userPage',
    component: UserPageComponent
  }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }

