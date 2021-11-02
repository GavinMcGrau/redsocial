import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Usuario } from './interfaces/interfaces';
import { FormsModule } from '@angular/forms';

@Component( {
  selector: 'app-perfils-usuari',
  templateUrl: './perfils-usuari.component.html',
  styleUrls: [ './perfils-usuari.component.css' ]
} )
export class PerfilsUsuariComponent
{

  constructor ()
  {
    let usuariosPrueba: Usuario[];

  }



 usuario: Usuario[] = [
    { nombre: 'Borniato', apellidos: 'Majento Solero', edad: 45, foto: 'https://yt3.ggpht.com/ytc/AKedOLQmuX7Nmw8pyhrSMmNDba_Hj-xQ2l0euXv9Siztnw=s900-c-k-c0x00ffffff-no-rj', correo: 'majento@lokom.com', descripcion: 'Soy una persona extrovertida con ganas de...', contrasenya: 'malamente' },
    { nombre: 'Jordano', apellidos: 'Malano estaño', edad: 11, foto: 'https://yt3.ggpht.com/ytc/AKedOLQmuX7Nmw8pyhrSMmNDba_Hj-xQ2l0euXv9Siztnw=s900-c-k-c0x00ffffff-no-rj', correo: 'malano@dfs.com', descripcion: 'Hola, soy bort', contrasenya: 'bortero' },
    { nombre: 'Dolores', apellidos: 'Fuertes Delano', edad: 69, foto: 'https://yt3.ggpht.com/ytc/AKedOLQmuX7Nmw8pyhrSMmNDba_Hj-xQ2l0euXv9Siztnw=s900-c-k-c0x00ffffff-no-rj', correo: 'dfd@delano.com', descripcion: 'Hola, que tal', contrasenya: 'quetal' },
    { nombre: 'Mohlotov', apellidos: 'Sacarias Sacarosa', edad: 73, foto: 'https://yt3.ggpht.com/ytc/AKedOLQmuX7Nmw8pyhrSMmNDba_Hj-xQ2l0euXv9Siztnw=s900-c-k-c0x00ffffff-no-rj', correo: 'sacarina@lolopo.com', descripcion: 'Me gusta el cafe', contrasenya: 'cafe' }


  ];
  @Output() valueResponse: EventEmitter<Usuario> = new EventEmitter();
}
