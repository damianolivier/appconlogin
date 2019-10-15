import { Component } from '@angular/core';
import { ClientesService, Sucursal } from '../services/clientes.service';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.sass']
})

export class ListadoClientesComponent {
  public sucursalnueva: Sucursal; 

  constructor(private login:LoginService, private _clientes: ClientesService){
    this.sucursalnueva = new Sucursal("","","",[]);
  }

  ngOnInit() {
    this.login.checktoken();
  }

  onSubmit() {
    this.sucursalnueva.ventas2019 = new Array(100,200,300,400,500,600,700,800,900,1000,1100,1200);
    this._clientes.agregarSucursal(this.sucursalnueva);
    this.sucursalnueva = new Sucursal("","","",[]);
  }

}