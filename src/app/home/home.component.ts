import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { PeticionesService } from '../services/peticiones.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [PeticionesService]
})
export class HomeComponent implements OnInit {
  public prendaGuardar:string;
  public posts: any;

  constructor(private login:LoginService, private _clientes: ClientesService, private _peticiones: PeticionesService) { }

  ngOnInit() {
    if(this.login.checktoken()){
      this._peticiones.getPosts()
      .subscribe(
        data => {
          this.posts = data;
        },
        error => {
          console.log(<any>error);
        }
      );

    }

  }



}
