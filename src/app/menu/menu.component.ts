import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  public fecha;

  constructor(private login:LoginService) { }

  ngOnInit() {
    this.fecha = new Date();
  }

}
