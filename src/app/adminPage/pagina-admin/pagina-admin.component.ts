import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from 'src/app/current-user.service';
import { UsuariosService } from 'src/app/usuarios.service';
import { Usuario } from 'src/app/perfils-usuari/interfaces/interfaces';
import Swal from 'sweetalert2';


@Component( {
  selector: 'app-pagina-admin',
  templateUrl: './pagina-admin.component.html',
  styleUrls: [ './pagina-admin.component.css' ]
} )
export class PaginaAdminComponent implements OnInit
{


  

  usuarios: Usuario[] = [];
  currentUserFriends: Usuario[] = [];
  usuariosNoAmigos: Usuario[] = [];
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
  sinAmistad: boolean = false;
  contrasenya: string = "";
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
    this.contrasenya = this.currentUser.contrasenya;
  }

  updateDatta ( nombre: string, apellidos: string, edad: number, foto: string, correo: string, descripcion: string, contrasenya: string )
  {

  }

  deleteUser(item:Usuario){
    for(let i =0;i<this.usuarios.length;i++){
      if(this.usuarios[i].id == item.id){
        this.usuarios.splice(i,1);
      }

    }

  }

eliminarUsuario(item:Usuario){
  Swal.fire({
    title: '¿Estas seguro de que quieres eliminarlo?',
    text: "No se podra deshacer!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si,eliminar!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Eliminado!',
        'El usuario ha sido eliminado.',
        'success'
      )
      this.deleteUser(item);
    }
  })
}

  
}





