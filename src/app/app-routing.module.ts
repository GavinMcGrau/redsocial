import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilsUsuariComponent } from './perfils-usuari/perfils-usuari.component';
import { LoginUsuariComponent } from './perfils-usuari/login-usuari/login-usuari.component';
import { RegistreUsuariComponent } from './perfils-usuari/registre-usuari/registre-usuari.component';

const routes: Routes = [

  {
    path: 'login',
    component:LoginUsuariComponent
  },
  
  {
    path: 'registre',
    component:RegistreUsuariComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
