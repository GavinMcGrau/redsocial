import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../interfaces/interfaces';
import { Form, FormsModule } from '@angular/forms';
import { PaginaUsuariComponent } from '../pagina-usuari/pagina-usuari.component';
import { PerfilsUsuariComponent } from '../perfils-usuari.component';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { UsuariosService } from 'src/app/usuarios.service';
import { RouterModule } from '@angular/router';




@NgModule( {
  //=> Basic usage (forRoot can also take options, see the wiki)
  imports: [ SweetAlert2Module.forRoot() ],
} )
export class AppModule
{
}


@Component( {
  selector: 'app-registre-usuari',
  templateUrl: './registre-usuari.component.html',
  styleUrls: [ './registre-usuari.component.css' ]
} )
export class RegistreUsuariComponent implements OnInit  
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


  constructor ( private UsuariosService: UsuariosService )
  {
    console.log( "sass" )
    for ( let item of this.usuario )
    {
      console.log( item );

    }

  }
  ngOnInit (): void
  {
    this.usuario = this.UsuariosService.getUsuarios();

  }



  creacionUsuario ( nombre: string, apellidos: string, edad: number, foto: string, correo: string, descripcion: string, contrasenya: string )
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
        title: 'Descripcion corta',
        text: 'Introduce una mas completa',
        icon: 'error',
        confirmButtonText: 'volver'
      } )
    }
    else if ( contrasenya === this.contrasenya2 && contrasenya !== "" )
    {
      let nuevoUsuario: Usuario = {
        nombre, apellidos, edad, foto: " https://cdn.pixabay.com/photo/2013/10/09/02/26/cattle-192976_1280.jpg", correo, descripcion, contrasenya, rol: false, id: this.usuario.length + 1, amigos: []
      };

      this.usuario.push( nuevoUsuario );



      Swal.fire( {
        title: 'Registrado',
        text: 'Ya puedes entrar en BreakEnds',
        icon: 'success',
        confirmButtonText: 'Entrar'
      } )
      this.clearForm();

    } else
    {
      this.pola();
    }
  }

  pola ()
  {
    Swal.fire( {
      title: 'Error!',
      text: 'Las contrase??as no coinciden',
      icon: 'error',
      confirmButtonText: 'Volver'
    } )
  }

  clearForm ()
  {
    ( <HTMLFormElement> document.getElementById( "formRegistre" ) ).reset();
  }



}
