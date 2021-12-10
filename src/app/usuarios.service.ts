import { Injectable } from '@angular/core';
import { Usuario } from './perfils-usuari/interfaces/interfaces';

@Injectable( {
  providedIn: 'root'
} )
export class UsuariosService
{


  usuarios: Usuario[] = [
    { nombre: 'Borniato', apellidos: 'Majento Solero', edad: 45, foto: 'https://yt3.ggpht.com/ytc/AKedOLQmuX7Nmw8pyhrSMmNDba_Hj-xQ2l0euXv9Siztnw=s900-c-k-c0x00ffffff-no-rj', correo: 'majento@lokom.com', descripcion: 'Soy una persona extrovertida con ganas de...', contrasenya: 'malamente', rol: false, id: 4, amigos: [ 2, 3 ] },
    { nombre: 'Jordano', apellidos: 'Malano estaño', edad: 11, foto: 'https://yt3.ggpht.com/ytc/AKedOLQmuX7Nmw8pyhrSMmNDba_Hj-xQ2l0euXv9Siztnw=s900-c-k-c0x00ffffff-no-rj', correo: '1@1.com', descripcion: 'Hola, soy bort', contrasenya: '1', rol: false, id: 3, amigos: [ 2, 5 ] },
    { nombre: 'Dolores', apellidos: 'Fuertes Delano', edad: 69, foto: 'https://yt3.ggpht.com/ytc/AKedOLQmuX7Nmw8pyhrSMmNDba_Hj-xQ2l0euXv9Siztnw=s900-c-k-c0x00ffffff-no-rj', correo: 'dfd@delano.com', descripcion: 'Hola, que tal', contrasenya: 'quetal', rol: false, id: 2, amigos: [ 4, 3 ] },
    { nombre: 'Mohlotov', apellidos: 'Sacarias Sacarosa', edad: 73, foto: 'https://yt3.ggpht.com/ytc/AKedOLQmuX7Nmw8pyhrSMmNDba_Hj-xQ2l0euXv9Siztnw=s900-c-k-c0x00ffffff-no-rj', correo: 'sacarina@lolopo.com', descripcion: 'Me gusta el cafe', contrasenya: 'cafe', rol: false, id: 5, amigos: [ 2, 3 ] },
    { nombre: 'root', apellidos: 'root', edad: 73, foto: 'https://yt3.ggpht.com/ytc/AKedOLQmuX7Nmw8pyhrSMmNDba_Hj-xQ2l0euXv9Siztnw=s900-c-k-c0x00ffffff-no-rj', correo: 'root@r.com', descripcion: 'Me gusta el cafe', contrasenya: '1234', rol: true, id: 1, amigos: [ 2, 3 ] }

  ];

  constructor () { }


  getUsuarios ()
  {
    return this.usuarios;
  }


}
