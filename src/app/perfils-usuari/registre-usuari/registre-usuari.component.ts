import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/interfaces';
import { PaginaUsuariComponent } from '../pagina-usuari/pagina-usuari.component';
import { PerfilsUsuariComponent } from '../perfils-usuari.component';

@Component({
  selector: 'app-registre-usuari',
  templateUrl: './registre-usuari.component.html',
  styleUrls: ['./registre-usuari.component.css']
})
export class RegistreUsuariComponent implements OnInit {




  constructor() { 
    let usuariosPrueba:Usuario [];
   let usuario ;
  }

creacionUsuario(nombre:string,apellidos:string,edad:number,correo:string,descripcion:string,contrasenya:string){
  
 usuariosPrueba ="ssd";

}


  
  

  ngOnInit(): void {
  }

}
