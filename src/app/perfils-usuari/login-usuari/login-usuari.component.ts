import { Component, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { Usuario } from '../interfaces/interfaces';
import { PerfilsUsuariComponent } from '../perfils-usuari.component';
import { UsuariosService } from 'src/app/usuarios.service';
import { RouterModule } from '@angular/router';


@Component( {
  selector: 'app-login-usuari',
  templateUrl: './login-usuari.component.html',
  styleUrls: [ './login-usuari.component.css' ]
} )
export class LoginUsuariComponent
{

  usuario: Usuario[] = [];
  nombre: string = "";
  apellido: string = "";
  edad: any = null;
  foto: string = "";
  correo: string = "";
  descripcion: string = "";
  contrasenya: string = "";
  contrasenya2: string = "";
  next: boolean = false;




  constructor ( private UsuariosService: UsuariosService )
  {
    let usuario: Usuario[];
  }

  ngOnInit (): void
  {
    this.usuario = this.UsuariosService.getUsuarios();
  }




  pola ()
  {
    Swal.fire( {
      title: 'Error!',
      text: 'Credenciales incorrectas',
      icon: 'error',
      confirmButtonText: 'Volver'
    } )


  }


  loginUsuario ( correo: string, contrasenya: string )
  {
    window.location.href = 'WWW.google.com';

    for ( let i = 0; i = this.usuario.length; i++ )
    {
      if ( this.usuario[ i ].correo == correo && this.usuario[ i ].contrasenya == contrasenya )
      {
        this.next = true;
      } else
      {
        this.pola();
      }


    }

  }



}


