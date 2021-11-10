import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  verNoverRegistro = "none";
  verNoverLogin = "none";
  verNoverBoton = "";
  constructor() { }

  ngOnInit(): void {
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
