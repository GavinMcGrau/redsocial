import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/usuarios.service';
import { CurrentUserService } from 'src/app/current-user.service';
import { Usuario } from 'src/app/perfils-usuari/interfaces/interfaces';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';


@Component( {
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: [ './friends.component.css' ]
} )
export class FriendsComponent implements OnInit
{

  usuarios: Usuario[] = [];
  currentUserFriends: Usuario[] = [];
  currentUser: Usuario = { nombre: 'Mohlotov', apellidos: 'Sacarias Sacarosa', edad: 73, foto: 'https://yt3.ggpht.com/ytc/AKedOLQmuX7Nmw8pyhrSMmNDba_Hj-xQ2l0euXv9Siztnw=s900-c-k-c0x00ffffff-no-rj', correo: 'sacarina@lolopo.com', descripcion: 'Me gusta el cafe', contrasenya: 'cafe', rol: false, id: 0, amigos: [ 2, 3 ] };
  admin = false;
  nombre: string = "";
  apellido: string = "";
  edad: number = 0;
  correo: string = "";
  foto: string = "";
  descripcion: string = "";
  rol: boolean = false;
  id: number = 0;
  amigos: number[] = [];

  constructor ( private CurrentUserService: CurrentUserService, private UsuariosService: UsuariosService ) { }

  ngOnInit (): void
  {
    this.usuarios = this.UsuariosService.getUsuarios();
    this.currentUser = this.CurrentUserService.getCurrent();
    this.nombre = this.currentUser.nombre;
    this.apellido = this.currentUser.apellidos;
    this.edad = this.currentUser.edad;
    this.correo = this.currentUser.correo;
    this.foto = this.currentUser.foto;
    this.descripcion = this.currentUser.descripcion;
    this.rol = this.currentUser.rol;
    this.id = this.currentUser.id;
    this.amigos = this.currentUser.amigos;


    for ( let i = 0; i < this.usuarios.length; i++ )
    {
      for ( let a = 0; a < this.currentUser.amigos.length; a++ )
      {
        if ( this.usuarios[ i ].id == this.currentUser.amigos[ a ] )
        {
          this.currentUserFriends.push( this.usuarios[ i ] );
        }
      }
    }



  }

  dropAmigo ( id: number )
  {
    for ( let i = 0; i < this.currentUserFriends.length; i++ )
    {
      
      if ( this.currentUserFriends[ i ].id === id )
      {
        this.currentUserFriends.splice( i, 1 );
        for(let a =0;a<this.currentUser.amigos.length;a++){
          if(this.currentUser.amigos[a]==id){
            this.currentUser.amigos.splice( a, 1 );
          }
        }       
      }
      
    }

  }

  pola ()
  {
    Swal.fire( {
      title: 'Proximamente!',
      text: 'Funcion no disponible!',
      icon: 'error',
      confirmButtonText: 'Volver'
    } )


  }


  sendAmigo ()
  {
    this.pola();
  }


}
