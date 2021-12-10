import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../current-user.service';
import { Usuario } from 'src/app/perfils-usuari/interfaces/interfaces';


@Component( {
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [ './sidebar.component.css' ]
} )
export class SidebarComponent implements OnInit
{
  currentUser: Usuario = { nombre: 'Mohlotov', apellidos: 'Sacarias Sacarosa', edad: 73, foto: 'https://yt3.ggpht.com/ytc/AKedOLQmuX7Nmw8pyhrSMmNDba_Hj-xQ2l0euXv9Siztnw=s900-c-k-c0x00ffffff-no-rj', correo: 'sacarina@lolopo.com', descripcion: 'Me gusta el cafe', contrasenya: 'cafe', rol: false };

  constructor ( private CurrentUserService: CurrentUserService )
  {

  }

  ngOnInit (): void
  {
    this.currentUser = this.CurrentUserService.getCurrent();

  }

}
