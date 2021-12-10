import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from 'src/app/current-user.service';
import { Usuario } from '../../perfils-usuari/interfaces/interfaces';

@Component({
  selector: 'app-config-usuario',
  templateUrl: './config-usuario.component.html',
  styleUrls: ['./config-usuario.component.css']
})
export class ConfigUsuarioComponent implements OnInit
{
    currentUser: Usuario = { nombre: 'Mohlotov', apellidos: 'Sacarias Sacarosa', edad: 73, foto: 'https://yt3.ggpht.com/ytc/AKedOLQmuX7Nmw8pyhrSMmNDba_Hj-xQ2l0euXv9Siztnw=s900-c-k-c0x00ffffff-no-rj', correo: 'sacarina@lolopo.com', descripcion: 'Me gusta el cafe', contrasenya: 'cafe', rol: false, id: 0, amigos: [ 2, 3 ] };

nombre: string = "";
  apellidos: string = "";
  edad: number = 0;
  correo: string = "";
  foto: string = "";
  descripcion: string = "";
  contrasenya:string="";

  constructor(private CurrentUserService:CurrentUserService) { }

  ngOnInit (): void
  {
    this.currentUser = this.CurrentUserService.getCurrent();
    this.nombre = this.currentUser.nombre;
    this.edad = this.currentUser.edad;
    this.apellidos = this.currentUser.apellidos;
    this.contrasenya = this.currentUser.contrasenya;
    this.foto = this.currentUser.foto;
    this.correo = this.currentUser.correo;
    this.descripcion=this.currentUser.descripcion

  }

  updateChanges (nombre:string,apellidos:string,edad:number, foto:string,correo:string,descripcion:string,contrasenya:string)
  {
    
  }

}
