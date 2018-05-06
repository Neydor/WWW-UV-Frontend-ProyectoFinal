import { Component, OnInit } from '@angular/core';
import {usuario} from '../models/usuario';
import {AuthService} from './../auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  usuario:usuario;
  constructor(private auth:AuthService){
    auth.usuario$.subscribe(usuario => this.usuario = usuario);
  }

  salir(){
    this.auth.salir();
  }

}
