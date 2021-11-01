import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../interfaces/interfaces';
import { FormsModule } from '@angular/forms';
import { PaginaUsuariComponent } from '../pagina-usuari/pagina-usuari.component';
import { PerfilsUsuariComponent } from '../perfils-usuari.component';

@Component( {
  selector: 'app-registre-usuari',
  templateUrl: './registre-usuari.component.html',
  styleUrls: [ './registre-usuari.component.css' ]
} )
export class RegistreUsuariComponent implements OnInit
{

  @Input() usuario!: Usuario[];

  constructor ()
  {


  }


  creacionUsuario ( nombre: string, apellidos: string, edad: number, correo: string, descripcion: string, contrasenya: string )
  {



  }





  ngOnInit (): void
  {
  }

}
