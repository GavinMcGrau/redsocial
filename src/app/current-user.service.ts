import { Injectable } from '@angular/core';
import { Usuario } from './perfils-usuari/interfaces/interfaces';

@Injectable( {
  providedIn: 'root'
} )
export class CurrentUserService
{

  currentUser: Usuario = { nombre: 'Mohlotov', apellidos: 'Sacarias Sacarosa', edad: 73, foto: 'https://yt3.ggpht.com/ytc/AKedOLQmuX7Nmw8pyhrSMmNDba_Hj-xQ2l0euXv9Siztnw=s900-c-k-c0x00ffffff-no-rj', correo: 'sacarina@lolopo.com', descripcion: 'Me gusta el cafe', contrasenya: 'cafe', rol: false, id: 0, amigos: [ 2, 3 ] };

  constructor () { }

  getCurrent ()
  {
    return this.currentUser;
  }
  setCurrent ( current: Usuario )
  {
    this.currentUser = current;
  }
}
