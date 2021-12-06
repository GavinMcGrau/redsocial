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

  @Input() showHidde: number=2 ;
  



}
