import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilsUsuariComponent } from './perfils-usuari/perfils-usuari.component';
import { LoginUsuariComponent } from './perfils-usuari/login-usuari/login-usuari.component';
import { RegistreUsuariComponent } from './perfils-usuari/registre-usuari/registre-usuari.component';
import { Usuario } from './perfils-usuari/interfaces/interfaces';
import { UserPageComponent } from './userPage/user-page/user-page.component';
import { PaginaPrincipalComponent } from './perfils-usuari/pagina-principal/pagina-principal.component';
import { AmigosComponent } from './user-options/amigos/amigos.component';
import { MasAmigosComponent } from './userPage/mas-amigos/mas-amigos.component';
import { ConfigUsuarioComponent } from './userPage/config-usuario/config-usuario.component';
import { FriendsComponent } from './userPage/friends/friends.component';
import { PaginaAdminComponent } from './adminPage/pagina-admin/pagina-admin.component';

const routes: Routes = [

  {
    path: '',
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
  },
  {
    path: 'amigos',
    component: FriendsComponent
  },
  {
    path: 'masAmigos',
    component: MasAmigosComponent
  },
  {
    path: 'configuracion',
    component: ConfigUsuarioComponent
  },
  {
    path: 'administracion',
    component: PaginaAdminComponent
  }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }

