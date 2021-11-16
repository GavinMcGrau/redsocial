import { Component, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { Usuario } from '../interfaces/interfaces';
import { PerfilsUsuariComponent } from '../perfils-usuari.component';


@Component({
  selector: 'app-login-usuari',
  templateUrl: './login-usuari.component.html',
  styleUrls: ['./login-usuari.component.css']
})
export class LoginUsuariComponent  {


  nombre: string = "";
  apellido: string = "";
  edad: any = null;
  foto: string = "";
  correo: string = "";
  descripcion: string = "";
  contrasenya: string = "";
  contrasenya2: string = "";
  next: boolean = false;


  
  
  constructor ()
  {
    let usuario: Usuario[];
  }
  
  @Input() usuario: Usuario[] = [];

  
 
  

    pola ()
  {
    Swal.fire( {
      title: 'Error!',
      text: 'Las contraseñas no coinciden',
      icon: 'error',
      confirmButtonText: 'Volver'
    } )
  
      
  }


  loginUsuario ( correo: string, contrasenya: string )
{

    for ( let i = 0; i = this.usuario.length; i++ )
    {
      if ( this.usuario[ i ].correo == correo && this.usuario[ i ].contrasenya == contrasenya )
      {
        this.next = true;
      } else
      {
        this.pola();
      }

      if ( this.next = true )
      {
        
      }
    }
  
  }



}


