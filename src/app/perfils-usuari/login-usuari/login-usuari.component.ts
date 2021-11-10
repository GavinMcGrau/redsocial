import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/interfaces';

@Component({
  selector: 'app-login-usuari',
  templateUrl: './login-usuari.component.html',
  styleUrls: ['./login-usuari.component.css']
})
export class LoginUsuariComponent implements OnInit {


  nombre: string = "";
  apellido: string = "";
  edad: any = null;
  foto: string = "";
  correo: string = "";
  descripcion: string = "";
  contrasenya: string = "";
  contrasenya2: string = "";
  next: boolean = false;

  @Input() usuario!: Usuario[];
  
  constructor ()
  {
    
   }

  ngOnInit(): void {
  }

  loginUsuario ( correo: string, contrasenya: string )
{

    for ( let i = 0; i = this.usuario.length; i++ )
    {
      if ( this.usuario[ i ].correo == correo && this.usuario[ i ].contrasenya == contrasenya )
      {
        this.next = true;
      }

      if ( this.next = true )
      {
        
      }
    }
  
  }



}
