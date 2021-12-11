import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from 'src/app/current-user.service';
import { Usuario } from '../../perfils-usuari/interfaces/interfaces';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { UsuariosService } from 'src/app/usuarios.service';

@Component( {
  selector: 'app-config-usuario',
  templateUrl: './config-usuario.component.html',
  styleUrls: [ './config-usuario.component.css' ]
} )
export class ConfigUsuarioComponent implements OnInit
{

  currentUser: Usuario = { nombre: 'Mohlotov', apellidos: 'Sacarias Sacarosa', edad: 73, foto: 'https://yt3.ggpht.com/ytc/AKedOLQmuX7Nmw8pyhrSMmNDba_Hj-xQ2l0euXv9Siztnw=s900-c-k-c0x00ffffff-no-rj', correo: 'sacarina@lolopo.com', descripcion: 'Me gusta el cafe', contrasenya: 'cafe', rol: false, id: 0, amigos: [ 2, 3 ] };
  usuarios: Usuario[] = [];
  nombre: string = "";
  apellidos: string = "";
  edad: number = 0;
  correo: string = "";
  foto: string = "";
  descripcion: string = "";
  contrasenya: string = "";
  id: number = 0;

  constructor ( private CurrentUserService: CurrentUserService, private UsuariosService: UsuariosService ) { }

  ngOnInit (): void
  {
    this.usuarios = this.UsuariosService.getUsuarios();
    this.currentUser = this.CurrentUserService.getCurrent();
    this.nombre = this.currentUser.nombre;
    this.edad = this.currentUser.edad;
    this.apellidos = this.currentUser.apellidos;
    this.contrasenya = this.currentUser.contrasenya;
    this.foto = this.currentUser.foto;
    this.correo = this.currentUser.correo;
    this.descripcion = this.currentUser.descripcion
    this.id = this.currentUser.id;

  }

  updateChanges ( nombre: string, apellidos: string, edad: number, foto: string, correo: string, descripcion: string, contrasenya: string )
  {
    if ( ( !correo.includes( "." ) ) || ( !correo.includes( "@" ) ) || correo == "" )
    {

      Swal.fire( {
        title: 'Correo incorrecto',
        text: 'Introduce un correo valido',
        icon: 'error',
        confirmButtonText: 'volver'
      } )


    } else if ( nombre == "" )
    {
      Swal.fire( {
        title: 'Nombre incorrecto',
        text: 'Introduce un nombre valido',
        icon: 'error',
        confirmButtonText: 'volver'
      } )

    } else if ( apellidos == "" )
    {
      Swal.fire( {
        title: 'Apellidos incorrecto',
        text: 'Introduce un apellido valido',
        icon: 'error',
        confirmButtonText: 'volver'
      } )
    }
    else if ( descripcion == "" || descripcion.length < 4 )
    {
      Swal.fire( {
        title: 'Nombre incorrecto',
        text: 'Introduce un nombre valido',
        icon: 'error',
        confirmButtonText: 'volver'
      } )
    } else
    {

      this.currentUser.apellidos = apellidos;
      this.currentUser.contrasenya = contrasenya;
      this.currentUser.nombre = nombre;
      this.currentUser.correo = correo;
      this.currentUser.descripcion = descripcion;
      this.currentUser.edad = edad;
      this.currentUser.foto = foto;
      /*
            for ( let i = 0; i < this.usuarios.length; i++ )
            {
               if ( this.usuarios[ i ].id = this.id )
              {
                this.usuarios[ i ].apellidos = apellidos;
                this.usuarios[ i ].contrasenya = contrasenya;
                this.usuarios[ i ].nombre = nombre;
                this.usuarios[ i ].correo = correo;
                this.usuarios[ i ].descripcion = descripcion;
                this.usuarios[ i ].edad = edad;
                this.usuarios[ i ].foto = foto;
      
      
              } */

    }
  }
}




