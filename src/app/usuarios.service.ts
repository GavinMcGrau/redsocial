import { Injectable } from '@angular/core';
import { Usuario } from './perfils-usuari/interfaces/interfaces';

@Injectable( {
  providedIn: 'root'
} )
export class UsuariosService
{


  usuarios: Usuario[] = [
    { nombre: 'Matilda', apellidos: 'sdas Se', edad: 45, foto: 'https://liderexponencial.es/wp-content/uploads/2019/11/perfil-conductual-tipo-c.jpg', correo: 'majento@lokom.com', descripcion: 'Soy una persona extrovertida con ganas de...', contrasenya: 'malamente', rol: false, id: 15, amigos: [ 2, 3 ] },
    { nombre: 'Amanida', apellidos: 'Deser Polo', edad: 45, foto: 'https://competenciasdelsiglo21.com/wp-content/uploads/2019/04/disc-perfil-i-948x640.jpg', correo: 'majento@lokom.com', descripcion: 'Soy una persona extrovertida con ganas de...', contrasenya: 'malamente', rol: false, id: 14, amigos: [ 2, 3 ] },
    { nombre: 'Antonio', apellidos: 'Majento Solero', edad: 45, foto: 'https://4.bp.blogspot.com/-sCPfWrPHUVU/W9byODJcwGI/AAAAAAAAKG0/s7gYSrjZ2DQ9stl9HZNklm8PA6NeFKA0gCLcBGAs/s1600/como-hago-mi-foto-de-perfil.jpg', correo: 'majento@lokom.com', descripcion: 'Soy una persona extrovertida con ganas de...', contrasenya: 'malamente', rol: false, id: 13, amigos: [ 2, 3 ] },
    { nombre: 'Eleonor', apellidos: 'Lento Sol', edad: 45, foto: 'https://miracomosehace.com/wp-content/uploads/mch/tripode-camara-chica_12765.jpg', correo: 'majento@lokom.com', descripcion: 'Soy una persona extrovertida con ganas de...', contrasenya: 'malamente', rol: false, id: 12, amigos: [ 2, 3 ] },
    { nombre: 'Serafin', apellidos: 'Deser Polo', edad: 45, foto: 'https://www.dci.com.br/wp-content/uploads/2020/09/20490.jpg', correo: 'majento@lokom.com', descripcion: 'Soy una persona extrovertida con ganas de...', contrasenya: 'malamente', rol: false, id: 11, amigos: [ 2, 3 ] },
    { nombre: 'Ernaldo', apellidos: 'sdas Se', edad: 45, foto: 'https://dam.muyinteresante.com.mx/wp-content/uploads/2018/05/extranos-pueden-elegir-mejores-fotos-de-perfil.jpg', correo: 'majento@lokom.com', descripcion: 'Soy una persona extrovertida con ganas de...', contrasenya: 'malamente', rol: false, id: 10, amigos: [ 2, 3 ] },
    { nombre: 'Soraya', apellidos: 'Poh Annegr', edad: 45, foto: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Perfil-Berna.jpg', correo: 'majento@lokom.com', descripcion: 'Soy una persona extrovertida con ganas de...', contrasenya: 'malamente', rol: false, id: 9, amigos: [ 2, 3 ] },
    { nombre: 'Lopecia', apellidos: 'Tijuna Meu', edad: 45, foto: 'https://www.enterprise.com/content/dam/ent-brand/inspiration/icefields-parkway/PeytoLakex.jpg.wrend.640.360.jpeg', correo: 'majento@lokom.com', descripcion: 'Soy una persona extrovertida con ganas de...', contrasenya: 'malamente', rol: false, id: 8, amigos: [ 2, 3 ] },
    { nombre: 'rytew', apellidos: 'Conejo Palas', edad: 45, foto: 'https://i.insider.com/613252aea1e5e7001996c4e6?width=1136&format=jpeg', correo: 'majento@lokom.com', descripcion: 'Soy una persona extrovertida con ganas de...', contrasenya: 'malamente', rol: false, id: 7, amigos: [ 2, 3 ] },
    { nombre: 'Bsad', apellidos: 'Menta lopo', edad: 45, foto: 'https://static.remove.bg/remove-bg-web/54743c30904cc98f30bb79359718a5ffd69392cd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg', correo: 'majento@lokom.com', descripcion: 'Soy una persona extrovertida con ganas de...', contrasenya: 'malamente', rol: false, id: 6, amigos: [ 2, 3 ] },
    { nombre: 'Borniato', apellidos: 'Fols salo', edad: 45, foto: 'https://raulperez.tieneblog.net/wp-content/uploads/2015/09/tux.jpg', correo: 'majento@lokom.com', descripcion: 'Soy una persona extrovertida con ganas de...', contrasenya: 'malamente', rol: false, id: 4, amigos: [ 2, 3 ] },
    { nombre: 'Jordano', apellidos: 'Malano estaño', edad: 11, foto: 'https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg', correo: '1@1.com', descripcion: 'Hola, soy bort', contrasenya: '1', rol: false, id: 3, amigos: [ 2, 5 ] },
    { nombre: 'Dolores', apellidos: 'Fuertes Delano', edad: 69, foto: 'https://forums.darkgalaxy.com/uploads/default/original/1X/81173237ffa580ef710b0862fdddaac163274db1.jpeg', correo: 'dfd@delano.com', descripcion: 'Hola, que tal', contrasenya: 'quetal', rol: false, id: 2, amigos: [ 4, 3 ] },
    { nombre: 'Mohlotov', apellidos: 'Sacarias Sacar', edad: 73, foto: 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg', correo: 'sacarina@lolopo.com', descripcion: 'Me gusta el cafe', contrasenya: 'cafe', rol: false, id: 5, amigos: [ 2, 3 ] },
    { nombre: 'root', apellidos: 'root', edad: 73, foto: 'https://yt3.ggpht.com/ytc/AKedOLQmuX7Nmw8pyhrSMmNDba_Hj-xQ2l0euXv9Siztnw=s900-c-k-c0x00ffffff-no-rj', correo: 'root@r.com', descripcion: 'Me gusta el cafe', contrasenya: '1234', rol: true, id: 1, amigos: [ 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ] }

  ];

  constructor () { }


  getUsuarios ()
  {
    return this.usuarios;
  }


}
