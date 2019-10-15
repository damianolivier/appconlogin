import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.sass']
})
export class ContactoComponent implements OnInit {
  public contactos:Array<Contacto> = new Array();
  public contacto:Contacto;

  constructor(private login:LoginService,) {
    this.contacto = new Contacto('','','','','');
   }

  ngOnInit() {
    this.login.checktoken();
  }

  onSubmit() {
    this.contactos.push(this.contacto);
    this.contacto = new Contacto('','','','','');
  }

}


export class Contacto {
  constructor(
    public _nombre:string,
    public _email:string,
    public _telefono:string,
    public _ciudad:string,
    public _mensaje:string
    ) { }
}