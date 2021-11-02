import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../interfaces/interfaces';
import { FormsModule } from '@angular/forms';
import { PaginaUsuariComponent } from '../pagina-usuari/pagina-usuari.component';
import { PerfilsUsuariComponent } from '../perfils-usuari.component';
import {NgForm} from '@angular/forms';
import { NgModule } from '@angular/core';


@Component( {
  selector: 'app-registre-usuari',
  templateUrl: './registre-usuari.component.html',
  styleUrls: [ './registre-usuari.component.css' ]
} )
export class RegistreUsuariComponent implements OnInit
{

  nombre:string="";
  apellido:string="";
  edad:number=0;
  foto:string="";
  correo:string="";
  descripcion:string="";
  contrasenya:string="";
  contrasenya2:string="";

  @Input() usuario!: Usuario[];

  constructor ()
  {


  }



  creacionUsuario ( nombre: string, apellidos: string, edad: number,foto:string, correo: string, descripcion: string, contrasenya: string )
  {

    if(contrasenya===this.contrasenya2){
   let nuevoUsuario :Usuario = {nombre,apellidos,edad,foto,correo,descripcion,contrasenya};

    this.usuario.push(nuevoUsuario);
    
  }else{
    
  }
  }

  pola(){
    return "cacs";
  }





  ngOnInit (): void
  {
  }

}
