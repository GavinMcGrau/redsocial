import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { UsuariosService } from 'src/app/usuarios.service';
import { Usuario } from '../interfaces/interfaces';


@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {
  usuario: Usuario[] = [];
  verNoverRegistro = "none";
  verNoverLogin = "none";
  verNoverBoton = "";
  constructor (private UsuariosService:UsuariosService)
  {
    
    let showHidde: number = 0;
  }
  ngOnInit (): void
  {
        this.usuario = this.UsuariosService.getUsuarios();
  }

  showHidde: number = 0;
  
  showHiddeF (a:string)
  {
    if ( a == "login" )
    {
      this.showHidde = 1;

  
    } else if (a=="singup")
    {
      this.showHidde=2
}
    
  }


  displayYes ()
  {
    

    this.verNoverLogin= "";
    this.verNoverBoton = "none";
  }

  displayYess ()
  {
    this.verNoverRegistro = "";
    this.verNoverBoton = "none";
  }

}
